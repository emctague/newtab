class BatteryDisplay extends Display {
	constructor () {
		super (null, { batLevel: "#batlevel", batStat: "#batstat" })
	}

	async update () {
		const bat = await navigator.getBattery ()

		this.batLevel.innerHTML = Math.round(bat.level * 100) + "%"
		this.batStat.innerHTML = bat.charging ? "charging" : "discharging"
	}
}

new BatteryDisplay ()
