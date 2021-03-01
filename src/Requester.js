class Requester {
  constructor(url) {
    this.url = url;
  }

  _req(method, path, data, auth = false) {
    let token = null;
    if (auth) {
      token = localStorage["token"];
    }
    fetch(this.url + path, {
      method: method,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(data),
    });
  }

  get(path, data, auth) {
    return this._req("GET", path, data, auth);
  }

  post(path, data, auth) {
    return this._req("POST", path, data, auth);
  }
}

export default new Requester("http://localhost:45056");
