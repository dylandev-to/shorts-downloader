const ytdl = require('ytdl-core');

/**
 * YouTube Video Processor
 *
 * @param {string} url - The URL of the video
 */
async function download(url) {
    return new Promise(async (resolve, reject) => {
        if (ytdl.validateURL(url)) {
            try {
                let info = await ytdl.getInfo(url);
                const format = ytdl.chooseFormat(info.formats, { quality: 'highest' });
                const videoDetails = info.videoDetails;
                resolve({
                    video: {
                        url: format.url,
                        title: videoDetails.title,
                        channel: videoDetails.ownerChannelName,
                        description: videoDetails.description,
                    }
                });
            }
            catch {
                reject(null);
            }
        }
        else reject(null);
    });
}

module.exports = download;