import * as main from "./main-url";

class EmployeeData__connection {
	async getAllEmployees() {
		let allData = [];

		const thisUrl = main.url + "/employee/";
		const res = await fetch(thisUrl, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		});

		const data = await res.json();

		data.data.forEach((employee) => {
			const vehicleString = employee.vehicleList
				.join(", ")
				.toString();

			const item = {
				employeeId: employee.id,
				name: employee.name,
				vehicleList: vehicleString,
				phoneNo: employee.phoneNo,
			};

			allData.push(item);
		});
		return allData;
	}

	async getEmployeeByVehicleId(veid) {
		// console.log(veid + " veid got")
		const thisUrl = main.url + "/employee/vehicles/" + veid;
		const res = await fetch(thisUrl, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		});
		const data = await res.json();

		// console.log(data);
		const setData = data.data[0];
		const vehicleString = setData.vehicleList
				.join(", ")
				.toString();

		// console.log(vehicleString);

		const employee = {
			employeeId: setData.id,
			name: setData.name,
			vehicleList: vehicleString,
			phoneNo: setData.phoneNo
		}

		const set = [employee]
		return set
	}

	async addVehicle(emid, veid) {
		const thisUrl = main.url + `/employee/${emid}/vehicles/add`
		const res = await fetch(thisUrl, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				vehicleId: veid
			}),
		});
		const data = await res.json();
		console.log(thisUrl);
		console.log(data);
	}

	async removeVehicle(emid, veid) {
		const thisUrl =
			main.url + `/employee/${emid}/vehicles/remove`;
		const res = await fetch(thisUrl, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				vehicleId: veid,
			}),
		});
		const data = await res.json();

		console.log(data);
	}
}

export default new EmployeeData__connection();
