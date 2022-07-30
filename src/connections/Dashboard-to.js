import * as main from "./main-url";

class Dashboard__connection {
	async officerInCharge(soid) {
		const thisUrl =
			main.url + `/security-officer/shift-log/${soid}/today`;
		const res = await fetch(thisUrl, {
			method: "GET",
			headers: { "Content-Type": "application/json" }
		});

		const data = await res.json()
		return data.data[0]
	}
	
	async latestParkingLog() {}

}

export default new Dashboard__connection();