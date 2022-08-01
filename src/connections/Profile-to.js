import * as main from "./main-url";

class Profile__connection {

	async getAllShiftLogs(id) {
		const thisUrl = main.url + "/security-officer/shift-log/"+ id;
		const res = await fetch(thisUrl, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		});
		const data = await res.json();

		console.log(data.data)
		const gotData = data.data
		let logs = []

		gotData.forEach(log => {
			const item = {
				date: log.date,
				shiftType: log.shiftType,
				startTime: log.startTime,
				endTime: log.endTime,
			}
			logs.push(item);
		});
		return logs
	}
}

export default new Profile__connection();
