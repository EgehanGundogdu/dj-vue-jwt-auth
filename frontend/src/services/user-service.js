import client from "../client";

class UserService {
  login(payload) {
    return client.post("auth/obtain/token/", {
      username: payload.username,
      password: payload.password,
    });
  }
  register(payload) {
    return client.post("auth/register/", payload);
  }
  userDetail() {
    return client.get("auth/me/");
  }
}

export default new UserService();
