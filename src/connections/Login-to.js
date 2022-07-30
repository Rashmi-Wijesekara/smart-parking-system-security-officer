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
}

export default new Login__connection();
