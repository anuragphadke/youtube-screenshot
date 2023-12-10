// const takeScreenshot = require('youtube-screenshot');
const takeScreenshot = require('./index');

async function captureYouTubeVideoScreenshot(videoUrl, timestamp, outputDir, filename) {
    try {
        await takeScreenshot(videoUrl, timestamp, outputDir, filename);
        console.log(`Screenshot saved as ${filename} in ${outputDir}`);
    } catch (error) {
        console.error('Error taking screenshot:', error.message);
    }
}

// Example usage
const videoUrl = 'https://www.youtube.com/watch?v=xQI3SDaRasM&t=4s&ab_channel=AnuragPhadke'; // Replace with actual YouTube video URL
const timestamp = 54; // The time point for the screenshot (in seconds)
const outputDir = './screenshots'; // The directory where the screenshot will be saved
const filename = 'sample.png'; // The name of the screenshot file

captureYouTubeVideoScreenshot(videoUrl, timestamp, outputDir, filename);
