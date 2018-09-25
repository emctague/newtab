class ReminderDisplay extends Display {
	constructor () {
		super ("ReminderDisplay", { remList: "#reminders", addRem: "#add_reminder" })
	}

	setup () {
		if (!this.data.reminders) this.data.reminders = []

		this.redraw ()

		this.addRem.onkeyup = (e) => {
			if (e.keyCode == 13) {
				this.data.reminders.push (this.addRem.value)
				this.save ()
				this.addRem.value = ""
				this.redraw ()
			}
		}
	}

	redraw () {
		this.remList.innerHTML = ""
		for (let i = 0; i < this.data.reminders.length; i++) {
			const obj = document.createElement ("div")
			obj.innerText = this.data.reminders[i]
			obj.style.cursor = "pointer"
			obj.onclick = () => {
				this.data.reminders.splice (i, 1)
				this.save ()
				this.redraw ()
			}
			this.remList.appendChild (obj)
		}
	}
}

new ReminderDisplay ()