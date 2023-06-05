const express = require("express");
const router = require("./routes");
const request = require("supertest");

const app = express();
app.use("/", router);

describe("GET /", () => {
  it("should return a welcome string", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello welcome from Express Server");
  });
});
// explore test cases and folder structure for node app
