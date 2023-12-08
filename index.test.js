// index.test.js

const mockStream = {
    pipe: jest.fn().mockReturnThis(),
    on: jest.fn((event, callback) => {
        if (event === 'end') callback();
        return mockStream;
    }),
};

jest.mock('ytdl-core', () => jest.fn(() => mockStream));

jest.mock('fluent-ffmpeg', () => {
    const mockFfmpeg = {
        on: jest.fn((event, callback) => {
            if (event === 'end') callback();
            return mockFfmpeg;
        }),
        screenshots: jest.fn().mockReturnThis(),
    };
    return jest.fn(() => mockFfmpeg);
});

const takeScreenshot = require('./index');

test('should successfully take a screenshot', async () => {
    const videoUrl = 'https://www.youtube.com/watch?v=example';
    const time = '00:01:00';
    const outputPath = './';
    const filename = 'screenshot.png';

    await expect(takeScreenshot(videoUrl, time, outputPath, filename)).resolves.toBeUndefined();
});

test('should handle errors from fluent-ffmpeg', async () => {
    require('fluent-ffmpeg').mockImplementationOnce(() => {
        const errorMockFfmpeg = {
            on: jest.fn((event, callback) => {
                if (event === 'error') callback(new Error('fluent-ffmpeg error'));
                return errorMockFfmpeg;
            }),
            screenshots: jest.fn().mockReturnThis(),
        };
        return errorMockFfmpeg;
    });

    const videoUrl = 'https://www.youtube.com/watch?v=example';
    const time = '00:01:00';
    const outputPath = './';
    const filename = 'screenshot.png';

    await expect(takeScreenshot(videoUrl, time, outputPath, filename)).rejects.toThrow('fluent-ffmpeg error');
});
