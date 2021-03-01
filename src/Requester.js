class Response {
  constructor(success, data, err = null) {
    this.success = success;
    this.data = data;
    this.err = err;
  }
}
class Requester {
  constructor(url) {
    this.url = url;
  }

  async _req(method, path, data, auth = false) {
    let token = null;
    if (auth) {
      token = localStorage["token"];
    }

    const req = {
      method: method,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };

    const url = new URL(path, this.url);
    if (method === "GET") {
      const param = new URLSearchParams(data);
      for (const e of param) {
        url.searchParams.set(e[0], e[1]);
      }
    } else if (method === "POST") {
      req.body = JSON.stringify(data);
    }

    try {
      const res = await fetch(url.href, req);
      const resJson = await res.json();

      return new Response(true, resJson);
    } catch (err) {
      return new Response(false, null, err);
    }
  }

  /**
   *
   *
   * @param {String} path
   * @param {Object} data
   * @param {Boolean} auth
   * @returns {Promise<Response>}
   * @memberof Requester
   */
  get(path, data, auth) {
    return this._req("GET", path, data, auth);
  }

  /**
   *
   *
   * @param {String} path
   * @param {Object} data
   * @param {Boolean} auth
   * @returns {Promise<Response>}
   * @memberof Requester
   */
  post(path, data, auth) {
    return this._req("POST", path, data, auth);
  }
}

export default new Requester("https://localhost:44345");
