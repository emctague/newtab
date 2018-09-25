class NameDisplay extends Display {
	constructor () {
		super ("NameDisplay", { name: "#name" })
	}

	setup () {
		if (!this.data.name) this.data.name = "Click to Add a Name"
		this.name.innerText = this.data.name

		this.name.onclick = () => {
			this.data.name = prompt ("Enter a new name: ", this.data.name)
			this.name.innerText = this.data.name
			this.save ()
		}
	}
}

new NameDisplay ()