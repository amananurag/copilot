import express from "express";
import router from "./routes.js";
import request from "supertest";

const app = express();
app.use("/", router);

describe("GET /", () => {
  it("should return a welcome string", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello welcome from Express Server");
  });
});
// explore test cases and folder structure for node app
