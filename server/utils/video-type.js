// Each supported platform, the include tests the domain name.
const platforms = {
    youtube: {
        include: ["youtube"],
        type: "buffer"
    },
    tiktok: {
        include: ["tiktok"],
        type: "direct"
    },
    instagram: {
        include: ["instagram"],
        type: "direct"
    },
    twitter: {
        include: ["twitter"],
        type: "direct"
    },
    facebook: {
        include: ["facebook"],
        type: "direct"
    }
}

/**
 * Determines the video platform based on the provided domain name.
 *
 * @param {string} domainName - The domain name (e.g., 'youtube.com') to identify the video platform.
 * @returns {string || { platform: string, type: string }} - The platform name and its type (e.g., { platform: 'YouTube', type: 'buffer' }) or 'Unknown'.
 */
function getVideoType(domainName) {
    const normalizedDomain = domainName.toLowerCase();
    for (let [platform, { include, type }] of Object.entries(platforms)) {
        if (include.some(domain => normalizedDomain.includes(domain))) {
            return { platform, type };
        }
    }
    return null;
}

module.exports = {
    getVideoType
}