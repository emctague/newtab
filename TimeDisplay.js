class TimeDisplay extends Display {
	constructor () {
		super (null, { time: "#time" })
	}
	update () {
		const d = new Date ()
		let h = d.getHours () % 12
		if (h == 0) h = 12
		let m = "0" + d.getMinutes()
		m = m.substr(m.length - 2)
		let a = h >= 12 ? "PM" : "AM"
	
		this.time.innerHTML = `${h}:${m} ${a}`
	}
}

new TimeDisplay ()