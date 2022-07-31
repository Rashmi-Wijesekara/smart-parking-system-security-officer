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
	
	async latestParkingLog() {
		const thisUrl = main.url + "/parking-log/"
		const res = await fetch(thisUrl, {
			method: 'GET',
			headers: {"Content-Type": "application/json"}
		})

		const data = await res.json()
		
		// get latest 10 entries
		console.log(data.data)
		let latest =  data.data.slice(0, 10)
		
		if(latest.length === 0)
			return false
			
		return latest
	}

}

export default new Dashboard__connection();