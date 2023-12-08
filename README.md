# YouTube Screenshot

Capture high-quality, precise-frame screenshots from YouTube videos with this Node.js library. Perfect for content creators, researchers, and developers looking to integrate YouTube video snapshots into their projects.

## Installation

Install via NPM:

```bash
npm install youtube-screenshot


#### Usage

```markdown
## Usage

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


#### API Reference

```markdown
## API Reference

### `takeScreenshot(videoUrl, timestamp, outputPath, filename)`

- `videoUrl`: URL of the YouTube video.
- `timestamp`: Time at which to take the screenshot (format: HH:MM:SS).
- `outputPath`: Directory where the screenshot will be saved.
- `filename`: Name of the output file.

Returns a Promise that resolves when the screenshot is successfully taken.
