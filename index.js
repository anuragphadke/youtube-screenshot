// index.js

const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const { promisify } = require('util');

const screenshot = promisify((videoStream, time, outputPath, filename, callback) => {
    ffmpeg(videoStream)
        .on('error', (err) => callback(err))
        .on('end', () => callback(null, 'Screenshot taken'))
        .screenshots({
            timestamps: [time],
            filename: filename,
            folder: outputPath
        });
});

async function takeScreenshot(videoUrl, time, outputPath, filename) {
    try {
        const videoStream = ytdl(videoUrl, { quality: 'highest' });
        await screenshot(videoStream, time, outputPath, filename);
    } catch (error) {
        throw error;
    }
}

module.exports = takeScreenshot;
