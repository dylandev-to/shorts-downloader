const { ttdl } = require('btch-downloader')

/**
 * TikTok Video Processor
 *
 * @param {string} url - The URL of the video
 */
function download(url) {
    return new Promise((resolve, reject) => {
        ttdl(url)
            .then(result => {
                resolve({
                    info: {},
                    video: result
                });
            })
            .catch(error => {
                console.error(error);
                reject(null);
            });
    });
}

module.exports = download;