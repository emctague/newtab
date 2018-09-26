class ReminderDisplay extends Display {
	constructor () {
		super ("ReminderDisplay", { reminders: "#reminders" })
	}

	setup () {
		if (!this.data.reminders) this.data.reminders = ""

		this.reminders.innerHTML = this.data.reminders

		const saveCallback = () => {
			this.data.reminders = this.reminders.innerHTML
			this.save ()
		}

		this.reminders.onchange = saveCallback
		this.reminders.onkeyup = saveCallback

		this.reminders.focus()
	}
}

new ReminderDisplay ()