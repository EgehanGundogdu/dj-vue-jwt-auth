import client from "../client";

class UserService {
  login(payload) {
    return client.post("auth/obtain/token/", payload);
  }
  register(payload) {
    return client.post("auth/register/", payload);
  }
  userDetail() {
    return client.get("auth/me/");
  }
}

export default new UserService();
