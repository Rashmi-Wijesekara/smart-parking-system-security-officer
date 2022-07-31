import * as main from "./main-url";

class Login__connection {
	async getLoginData(soid) {
		const thisUrl = main.url + "/security-officer/" + soid;
		const res = await fetch(thisUrl, {
			method: "GET",
			headers: { "Content-Type": "application/json"}
		})
		const data = await res.json();
		return data.data[0];
	}

	async createShiftLog(soid) {
		const date = this.getDate()
		const time = this.getTime()

		const thisUrl = main.url + "/security-officer/shift-log/" + soid
		const res = await fetch(thisUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json"},
			body: JSON.stringify({
				date: date,
				startTime: time
			})
		})
		const data = await res.json()
		return data.data;
	}

	// return today date
	// format - 2022-07-27
	getDate(){
		const defaultDate = new Date();
		const date = defaultDate
			.toLocaleDateString("en-GB")
			.split("/")
			.reverse()
			.join("-");
		return date;
	};

	// return time now
	// format - 06:54 pm
	getTime(){
		const defaultTime = new Date();
		const time = defaultTime.toLocaleString("en-GB", {
			hour: "2-digit",
			minute: "2-digit",
			hour12: true,
		});
		return time;
	};
}

export default new Login__connection();
