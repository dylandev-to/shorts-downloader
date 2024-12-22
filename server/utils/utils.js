/**
 * Gets the domain name
 *
 * @param {string} url - The URL of the videos the client sends.
 * @returns {string} - The domain name of the URL
 */
function getDomainName(url) {
    const regex = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/i;
    const match = url.match(regex);
    return match ? match[1].split('.')[0] : null;
}

module.exports = {
    getDomainName,
    videoProcessor: {
        tiktok: require("./video-processors/tikok-processor"),
        instagram: require("./video-processors/instagram-processor"),
        facebook: require("./video-processors/facebook-processor"),
        twitter: require("./video-processors/twitter-processor"),
        youtube: require("./video-processors/youtube-processor"),
    }
}