const { twitter } = require('btch-downloader')

/**
 * Twitter/X Video Processor
 *
 * @param {string} url - The URL of the video
 */
function download(url) {
    return new Promise((resolve, reject) => {
        twitter(url)
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