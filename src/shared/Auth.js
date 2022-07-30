class Auth {
	constructor() {
		this.authenticated = this.getSession();
	}

	// store login data in the session storage
	saveSession(status) {
		sessionStorage.setItem(
			"loginStatus",
			JSON.stringify(status)
		);
	}

	saveOfficerFullData(officer) {
		sessionStorage.setItem(
			"officerFullData",
			JSON.stringify(officer)
		)
	}

	getOfficerFullData() {
		const tokenString = sessionStorage.getItem("officerFullData")
		const officer = JSON.parse(tokenString)
		return officer;
	}

	// get the login status from the session
	// true -> logged in
	// false -> not logged in
	getSession() {
		const tokenString =
			sessionStorage.getItem("loginStatus");
		const loginStatus = JSON.parse(tokenString);
		return loginStatus ? loginStatus : false;
	}

	// login session is deleted when the password is changed
	deleteSession() {
		sessionStorage.removeItem("loginStatus");
	}

	// save the id and password of the user
	saveLoginData(id, pswd) {
		const data = {id:id, pswd:pswd};
		sessionStorage.setItem(
			"loginData",
			JSON.stringify(data)
		);
	}

	// parse the id and password to check authentication
	getLoginData(){
		const tokenString =
			sessionStorage.getItem("loginData");
		const loginData = JSON.parse(tokenString);

		const demoData = {id:"123", pswd:"zzz"}
		
		// if loginData is undefined, send the demo data
		return loginData ? loginData : demoData;
	}

	login(cb, id, pswd, officer) {
		this.authenticated = true;
		this.saveSession(true);
		this.saveLoginData(id, pswd);

		this.saveOfficerFullData(officer);
		cb();
		// callback function
	}

	logout(cb) {
		this.authenticated = false;
		this.deleteSession();
		cb();
	}

	isAuthenticated() {
		return this.authenticated;
	}
}

export default new Auth();
