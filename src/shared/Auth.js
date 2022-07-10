class Auth {
	// store login data in the session storage
	saveSession(status) {
		sessionStorage.setItem(
			"loginStatus",
			JSON.stringify(status)
		);
	}

	getSession() {
		const tokenString =
			sessionStorage.getItem("loginStatus");
		const loginStatus = JSON.parse(tokenString);
		return loginStatus ? loginStatus : false;
	}

	deleteSession() {
		sessionStorage.removeItem("loginStatus");
	}

	constructor() {
		this.authenticated = this.getSession();
	}

	login(cb) {
		this.authenticated = true;
		this.saveSession(true);
		cb();
		// callback
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
