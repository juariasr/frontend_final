import http from "./http";

export function registerApi(user) {
  return http.post(`/users/signup`, user).then(({ data: json }) => json.data);
}
