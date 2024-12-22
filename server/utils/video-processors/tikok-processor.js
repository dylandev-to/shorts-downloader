const downloader = require('rahad-media-downloader');

/**
 * TikTok Video Processor
 *
 * @param {string} url - The URL of the TikTok video
 */
function tiktokDownload(url) {
    return new Promise((resolve, reject) => {
        downloader.rahadtikdl(url)
            .then(result => {
                resolve({
                    author: result.data.title,
                    video: result.data.noWatermarkMp4,
                    cover: result.data.cover,
                    views: result.data.play_count,
                    likes: result.data.react_count,
                    comments: result.data.comment_count,
                    shares: result.data.share_count
                });
            })
            .catch(error => {
                console.error(error);
                reject(null);
            });
    });
}

module.exports = tiktokDownload;