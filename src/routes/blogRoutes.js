const express = require('express');
const {
    createBlog,
    getAllPublishedBlogs,
    getSingleBlog,
    getMyBlogs,
    updateBlog,
    deleteBlog,
    publishBlog
} = require('../controllers/blogController');

const auth = require('../middlewares/authMiddlrware');

const router = express.Router();

router.get('/blogs', getAllPublishedBlogs);
router.get('/blogs/:id', getSingleBlog);

router.use(auth);
router.post('/blogs', createBlog);
router.get('/my-blogs', getMyBlogs);
router.put('/blogs/:id', updateBlog);
router.delete('/blogs/:id', deleteBlog);
router.patch('/blogs/:id/publish', publishBlog);

module.exports = router;
