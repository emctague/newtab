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
		let a = d.getHours() >= 12 ? "PM" : "AM"
		const mo = [
			"January", "February", "March", "April", "May",
			"June", "July", "August", "September", "October",
			"November", "December"
		][d.getMonth()]
		const dwk = [
			"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
		][d.getDay()]
		const da = d.getDate ()
	
		this.time.innerHTML = `${h}:${m} ${a}<br/>${dwk}, ${mo} ${da}`
	}
}

new TimeDisplay ()