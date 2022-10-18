let url = "http://localhost:8080";

class authenticationService {
  login(email, password) {
    return fetch(url + "/v1/auth", {
      mode: "cors",
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        window.$token = json.token;
        window.$expiration = json.expirationDate;
      });
  }
}

export default new authenticationService();
