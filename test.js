import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 100,
  duration: "30s",
  cloud: {
    // Project: Default project
    projectID: 3719045,
    // Test runs with the same name groups test runs together.
    name: "Testee",
  },
  thresholds: {
    // http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(95)<200"],
  },
};

export default function () {
  //   http.get("http://localhost:4000/api/v1/get");
  http.post(
    "http://localhost:4000/api/v1/create",
    JSON.stringify({
      userName: "Test POST ",
      email: "pk@mail.com ",
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  sleep(1);
}
