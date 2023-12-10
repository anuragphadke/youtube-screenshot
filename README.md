# YouTube Screenshot

Capture high-quality, precise-frame screenshots from YouTube videos with this Node.js library. Perfect for content creators, researchers, and developers looking to integrate YouTube video snapshots into their projects.

## Installation

Install via NPM:

```bash
npm install youtube-screenshot
```

#### Usage


Quickly integrate YouTube Screenshot into your Node.js applications:

```javascript
const takeScreenshot = require('youtube-screenshot');

const videoUrl = 'https://www.youtube.com/watch?v=example';
const timestamp = '00:01:00'; // Timestamp for the screenshot
const outputPath = './'; // Output directory
const filename = 'screenshot.png'; // Output filename

takeScreenshot(videoUrl, timestamp, outputPath, filename)
    .then(() => console.log('Screenshot taken successfully'))
    .catch(err => console.error(err));

```

#### API Reference

### `takeScreenshot(videoUrl, timestamp, outputPath, filename)`

- `videoUrl`: URL of the YouTube video.
- `timestamp`: Time at which to take the screenshot (format: HH:MM:SS).
- `outputPath`: Directory where the screenshot will be saved.
- `filename`: Name of the output file.

Returns a Promise that resolves when the screenshot is successfully taken.

### example.js
Sample code that showcases how to use `youtube-screenshot` in your code as async/await

```
const takeScreenshot = require('youtube-screenshot');

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
```

