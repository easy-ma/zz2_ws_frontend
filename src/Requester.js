class Response {
  constructor(success, data, err = null) {
    this.success = success;
    this.data = data;
    this.err = err;
  }
}
class Requester {
  constructor(url) {
    this.version = 1;
    this.url = url;
  }

  async _req(method, path, data = {}, auth = false) {
    let token = null;
    if (auth) {
      // localstorage
      token = localStorage.getItem("token");
    }

    const req = {
      method: method,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const url = new URL(`/v${this.version}${path}`, this.url);
    if (method === "GET") {
      const param = new URLSearchParams(data);
      for (const e of param) {
        url.searchParams.set(e[0], e[1]);
      }
    } else if (
      method === "POST" ||
      method === "DELETE" ||
      method === "PUT" ||
      method === "PATCH"
    ) {
      req.body = JSON.stringify(data);
    }

    try {
      const res = await fetch(url.href, req);
      const resJson = await res.json();

      if (res.status === 200) {
        if (resJson.success === true) {
          return new Response(true, resJson.data);
        } else {
          return new Response(false, resJson.data);
        }
      } else {
        return new Response(false, resJson);
      }
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

  /**
   *
   *
   * @param {String} path
   * @param {Object} data
   * @param {Boolean} auth
   * @returns {Promise<Response>}
   * @memberof Requester
   */
  delete(path, data, auth) {
    return this._req("DELETE", path, data, auth);
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
  put(path, data, auth) {
    return this._req("PUT", path, data, auth);
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
  patch(path, data, auth) {
    return this._req("PATCH", path, data, auth);
  }
}

export default new Requester("http://localhost:5001");
