class Auth {
  constructor() {
    if (JSON.parse(localStorage.getItem("bjwt"))) {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
  }
  login(cb) {
    this.authenticated = true;
    cb();
  }
  logout(cb) {
    this.authenticated = false;
    cb();
  }
  isAuthenticated() {
    return this.authenticated;
  }
}
export default new Auth();
