import http from "./http";

export function getListTasks() {
  return http.get(`/tasks?direction=desc`).then((data) => data);
}
