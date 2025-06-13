
const mongoose = require(`mongoose`)

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    body: {
        type: String,
        required: true
    },
    state: {
        type: String,
        enum: [`draft`, `published`],
        default: `draft`
    },
    read_count: {
        type: Number,
        default: 0
    },
    reading_time: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: `User`,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model(`Blog`, blogSchema)
