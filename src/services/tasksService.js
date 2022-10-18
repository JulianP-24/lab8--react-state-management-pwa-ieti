let url = "http://localhost:8080";

class tasksServices {
  async getTasks() {
    const response = await fetch(url + "/v1/tasks", {
      mode: "cors",
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }
}

export default new tasksServices();
