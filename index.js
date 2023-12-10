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

function secondsToTimeFormat(seconds) {
    const pad = (num, size) => ('000' + num).slice(size * -1);
    const time = parseFloat(seconds).toFixed(3);
    const hours = Math.floor(time / 60 / 60);
    const minutes = Math.floor(time / 60) % 60;
    const secs = Math.floor(time - minutes * 60);

    return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(secs, 2);
}

async function getVideoDuration(url) {
    const info = await ytdl.getInfo(url);
    const duration = info.videoDetails.lengthSeconds;
    return duration;
}

async function takeScreenshot(videoUrl, timestampInSeconds, outputPath, filename) {
    try {
        const durationInSeconds = await getVideoDuration(videoUrl);
        if (timestampInSeconds > durationInSeconds) {
            throw new Error('Requested timestamp is beyond the video duration.');
        }
        const timeFormat = secondsToTimeFormat(timestampInSeconds)
        const videoStream = ytdl(videoUrl, { quality: 'highest' });
        await screenshot(videoStream, timeFormat, outputPath, filename);
    } catch (error) {
        throw error;
    }
}

module.exports = takeScreenshot;
