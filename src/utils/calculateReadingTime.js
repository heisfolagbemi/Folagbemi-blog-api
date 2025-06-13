module.exports = function calculateReadingTime(text) {
    const wordsPerMinute = 200; // Average reading speed
    const wordCount = text.split(/\s+/).length; // Split by whitespace to count words
    const minutes = Math.ceil(wordCount / wordsPerMinute); // Calculate reading time in minutes
    return `${minutes} min read`; // Return formatted string
}