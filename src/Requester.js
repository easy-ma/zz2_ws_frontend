class Response {
  constructor(success, data, err = null) {
    this.success = success;
    this.data = data;
    this.err = err;
  }
}

const HTTP_OK = 200;
const HTTP_UNAUTHORIZED = 401;
class Requester {
  constructor(url) {
    this.version = 1;
    this.url = url;
  }

  defaultBody(method, token) {
    return {
      method: method,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
  }

  _createURL(path) {
    return new URL(`/v${this.version}${path}`, this.url);
  }

  async _fetch(url, req) {
    const res = await fetch(url.href, req);
    if (res.status === HTTP_OK) {
      const json = await res.json();
      return {
        res,
        json,
      };
    } else {
      return {
        res,
        json: null,
      };
    }
  }

  async _req(method, path, data = {}, auth = false) {
    let token = "";
    if (auth) {
      token = localStorage.getItem("token");
      if (!token || token.length < 1) {
        // reresh token
        const success = await this.refreshToken();
        if (success) {
          token = localStorage.getItem("token");
        } else {
          // can't performe an auth request with invalid request token
          return new Response(false, {
            success: false,
            message: "Not authenticated",
          });
        }
      }
    }

    const req = this.defaultBody(method, token);
    const url = this._createURL(path);

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
      const d = await this._fetch(url, req);

      if (d.res.status === HTTP_OK) {
        return new Response(d.json.success, d.json.data);
      } else {
        if (d.res.status === HTTP_UNAUTHORIZED) {
          // REFRESH TOKEN
          const success = await this.refreshToken();
          if (success) {
            // RETRY REQUEST
            return this._req(method, path, data, auth);
          }
        }
        return new Response(false, d.json);
      }
    } catch (err) {
      return new Response(false, null, err);
    }
  }

  async refreshToken() {
    const refreshToken = localStorage.getItem("refreshToken");

    if (refreshToken && refreshToken.length > 1) {
      const d = await this._fetch(this._createURL("/auth/refresh-token"), {
        ...this.defaultBody("POST"),
        body: { refreshToken },
      });

      // SUCCESSFULLY REFRESHED
      if (d.res.status === HTTP_OK) {
        localStorage.setItem("token", d.json.data.token);
        localStorage.setItem("refreshToken", d.json.data.refreshToken);
        return true;
      }
    }
    localStorage.removeItem("refreshToken");
    return false;
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

export default new Requester("https://localhost:44345");
