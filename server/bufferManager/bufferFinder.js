module.exports = { videoBuffer }

const { alldl } = require('rahad-all-downloader');

async function youtubeBuffer(url) {
    try {
        const result = await alldl(url);
        return(result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function videoBuffer(url, platform) {

    const buffer = {
        bufferUrl: "",
        type: ""
    }
    var bufferURl;
    switch (platform) {
        
        case "twitter": {
             buffer.bufferUrl = youtubeBuffer(url).data;
        }
        case "youtube": {
            bufferURL = await youtubeBuffer(url)
            buffer.bufferUrl=(bufferURL.data.videoUrl);
        }
        case "instagram": {
            buffer.bufferUrl = youtubeBuffer(url);
        }
        case "tiktok": {
            buffer.bufferUrl = youtubeBuffer(url);
        }
        case "facebook": {
            buffer.bufferUrl = youtubeBuffer(url);
        }
    }
    return buffer
}
