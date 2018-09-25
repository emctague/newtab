class Display {
	constructor (name, elems) {
		this._name = name

		for (let key of Object.keys(elems))
			this[key] = document.querySelector(elems[key])

		if (name) chrome.storage.sync.get (name, data => this._prepare (data))
		else this._prepare ()
	}

	_prepare (data) {
		this.data = JSON.parse ((data || {})[this._name] || "{}")
		this.setup ()
		this.update ()
		setInterval (() => this.update (), 10000)
	}

	save () {
		const dataSet = {}
		dataSet[this._name] = JSON.stringify(this.data)
		chrome.storage.sync.set(dataSet)
	}
	
	setup () {}

	update () {}
}
