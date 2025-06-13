// const request = require("supertest");
// const app = require("../app");
// const Blog = require("../models/blog");

// let token;
// let blogId;

// beforeAll(async () => {
//   // Login user and get token
//   const loginRes = await request(app).post("/api/auth/login").send({
//     email: "john@example.com",
//     password: "password123",
//   });
//   token = loginRes.body.token;
// });

// describe("Blog Endpoints", () => {
//   test("should create a new blog", async () => {
//     const res = await request(app)
//       .post("/api/blogs")
//       .set("Authorization", `Bearer ${token}`)
//       .send({
//         title: "Test Blog",
//         description: "This is a test blog.",
//         tags: ["test", "jest"],
//         body: "This is the body of the test blog.",
//       });
//     expect(res.statusCode).toEqual(201);
//     expect(res.body.data.blog).toHaveProperty("_id");
//     blogId = res.body.data.blog._id;
//   });

//   test("should get all published blogs", async () => {
//     const res = await request(app).get("/api/blogs");
//     expect(res.statusCode).toEqual(200);
//     expect(Array.isArray(res.body.data.blogs)).toBe(true);
//   });

//   test("should get a single published blog by ID", async () => {
//     await request(app)
//       .patch(`/api/blogs/${blogId}/publish`)
//       .set("Authorization", `Bearer ${token}`);
//     const res = await request(app).get(`/api/blogs/${blogId}`);
//     expect(res.statusCode).toEqual(200);
//     expect(res.body.data.blog._id).toEqual(blogId);
//   });

//   test("should get my blogs", async () => {
//     const res = await request(app)
//       .get("/api/my-blogs")
//       .set("Authorization", `Bearer ${token}`);
//     expect(res.statusCode).toEqual(200);
//     expect(Array.isArray(res.body.data.blogs)).toBe(true);
//   });

//   test("should update a blog", async () => {
//     const res = await request(app)
//       .put(`/api/blogs/${blogId}`)
//       .set("Authorization", `Bearer ${token}`)
//       .send({ title: "Updated Blog Title" });
//     expect(res.statusCode).toEqual(200);
//     expect(res.body.data.blog.title).toBe("Updated Blog Title");
//   });

//   test("should delete a blog", async () => {
//     const res = await request(app)
//       .delete(`/api/blogs/${blogId}`)
//       .set("Authorization", `Bearer ${token}`);
//     expect(res.statusCode).toEqual(200);
//     expect(res.body.message).toMatch(/deleted successfully/);
//   });
// });
