import * as main from "./main-url";

class EmployeeData__connection {

	async getAllEmployees() {
		let allData = []

		const thisUrl = main.url + "/employee/"
		const res = await fetch(thisUrl, {
			method: "GET",
			headers: { "Content-Type": "application/json" }
		})

		const data = await res.json();

		data.data.forEach((employee)=> {
			const vehicleString = employee.vehicleList.join(", ").toString()
			
			const item = {
				employeeId: employee.id,
				name: employee.name,
				vehicleList: vehicleString,
				phoneNo: employee.phoneNo
			}

			allData.push(item)
		})
		return allData
	}

	async getEmployeeByVehicleId(veid) {

	}

	async addVehicle() {

	}

	async removeVehicle() {
		
	}
}

export default new EmployeeData__connection()