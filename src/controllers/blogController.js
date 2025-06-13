const Blog = require("../models/blog");
const readingTime = require("../utils/calculateReadingTime"); // Assuming you have a utility function for calculating reading time

exports.createBlog = async (req, res) => {
  const blog = await Blog.create({
    ...req.body,
    author: req.user._id,
    reading_time: readingTime(req.body.body),
  });
  res.status(201).json({
    status: "success",
    data: {
      blog,
    },
  });
};
exports.getAllPublishedBlogs = async (req, res) => {
  const {
    page = 1,
    limit = 20,
    author,
    title,
    tags,
    orderBy = "timestamp",
  } = req.query;
  const filter = { state: "published" };

  if (author) filter["author"] = author;
  if (title) filter["title"] = new RegExp(title, "i");
  if (tags) filter["tags"] = { $in: tags.split(",") };

  const blogs = await Blog.find(filter)
    .sort({ [orderBy]: -1 })
    .skip((page - 1) * limit)
    .limit(parseInt(limit));

  res.status(200).json({
    status: "success",
    data: {
      blogs,
    },
  });
};

exports.getSingleBlog = async (req, res) => {
  const blog = await Blog.findOne({
    _id: req.params.id,
    state: "published",
  }).populate("author", "-password");

  if (!blog) return res.status(404).json({ message: "Blog not found" });

  blog.read_count += 1;
  await blog.save();

  res.json(blog);
};


exports.getMyBlogs = async (req, res) => {
  const blogs = await Blog.find({ author: req.user._id });
  if (!blogs || blogs.length === 0) {
    return res.status(404).json({
      status: "fail",
      message: "No blogs found for this user",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      blogs,
    },
  });
};
exports.updateBlog = async (req, res) => {
  const blog = await Blog.findOne({ _id: req.params.id, author: req.user._id });
  if (!blog) return res.status(404).json({ message: "Blog not found" });

  Object.assign(blog, req.body);
  if (req.body.body) {
    blog.reading_time = readingTime(req.body.body);
  }

  await blog.save();
  res.json({
    status: "success",
    data: {
      blog,
    },
  });
};

exports.deleteBlog = async (req, res) => {
  const blog = await Blog.findOneAndDelete({ _id: req.params.id, author: req.user._id });
  if (!blog) return res.status(404).json({ message: "blog not found" });
  res.json({ message: `blog with id ${req.params.id} deleted successfully` });
};

exports.publishBlog = async (req, res) => {
  const blog = await Blog.findOne({ _id: req.params.id, author: req.user._id });
  if (!blog) {
    return res.status(404).json({
      status: "fail",
      message: "Blog not found",
    });
  }
  if (blog.state === "published") {
    return res.status(400).json({
      status: "fail",
      message: "Blog is already published",
    });
  }
  blog.state = "published";
  await blog.save();

  res.status(200).json({
    status: "success",
    data: {
      blog,
    },
  });
};
