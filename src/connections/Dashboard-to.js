import * as main from "./main-url";

class Dashboard__connection {
	async officerInCharge(soid) {
		const thisUrl =
			main.url +
			`/security-officer/shift-log/${soid}/today`;
		const res = await fetch(thisUrl, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		});

		const data = await res.json();
		return data.data[0];
	}

	async latestParkingLog() {
		const thisUrl = main.url + "/parking-log/";
		const res = await fetch(thisUrl, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		});

		const data = await res.json();

		// get latest 10 entries
		let latest = data.data.slice(0, 10);

		if (latest.length === 0) return false;

		return latest;
	}

	async getEmployeeDataRFID(id) {
		const thisUrl = main.url + "/employee/" + id;
		const res = await fetch(thisUrl, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		});

		const data = await res.json();
		return data.data[0];
	}

	async parkingLogSubmit(id, name, vehicleId) {
		const date = this.getDate();
		const time = this.getTime();

		const url1 = main.url + "/parking-log/"+ id + "/status"
		const res = await fetch(url1, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		});

		const data1 = await res.json();
		const status = data1.data

		const url2 = main.url + "/parking-log"
		const result = await fetch(url2, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				employeeId: id,
				name: name,
				vehicleId: vehicleId,
				status: status,
				date: date,
				time: time,
			}),
		});

		const data = await result.json();
		return data.data.status
	}

	// return today date
	// format - 2022-07-27
	getDate() {
		const defaultDate = new Date();
		const date = defaultDate
			.toLocaleDateString("en-GB")
			.split("/")
			.reverse()
			.join("-");
		return date;
	}

	// return time now
	// format - 06:54 pm
	getTime() {
		const defaultTime = new Date();
		const time = defaultTime.toLocaleString("en-GB", {
			hour: "2-digit",
			minute: "2-digit",
			hour12: true,
		});
		return time;
	}
}

export default new Dashboard__connection();