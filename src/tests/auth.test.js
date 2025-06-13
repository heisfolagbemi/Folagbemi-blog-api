// const request = require("supertest");
// const app = require("../app"); // Make sure app.js exports your Express app
// const mongoose = require("mongoose");
// const User = require("../models/user");

// let token;

// beforeAll(async () => {
//   await mongoose.connect(process.env.MONGODB_URI);
//   await User.deleteMany({});
// });

// afterAll(async () => {
//   await mongoose.connection.close();
// });

// describe("Auth Endpoints", () => {
//   test("should signup a new user", async () => {
//     const res = await request(app).post("/api/auth/signup").send({
//       first_name: "John",
//       last_name: "Doe",
//       email: "john@example.com",
//       password: "password123",
//     });
//     expect(res.statusCode).toEqual(201);
//     expect(res.body).toHaveProperty("token");
//   });

//   test("should login the user", async () => {
//     const res = await request(app).post("/api/auth/login").send({
//       email: "john@example.com",
//       password: "password123",
//     });
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toHaveProperty("token");
//     token = res.body.token;
//   });
// });
