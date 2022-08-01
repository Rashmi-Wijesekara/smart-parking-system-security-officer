import * as main from "./main-url";

class ParkingLog__connection {

	async getAllParkingLogs() {
		const thisUrl = main.url + "/parking-log"
		const res = await fetch(thisUrl, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		});
		const data = await res.json();

		return data.data
	}

	async logByDateTime(date, from, to) {
		const thisUrl = main.url + "/parking-log/" + date + "/" + from + "/" + to;
		const res = await fetch(thisUrl, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		});
		const data = await res.json();

		console.log(data)
		return data.data
	}
}

export default new ParkingLog__connection();
