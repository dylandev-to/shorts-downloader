module.exports={platformIdentifier}

function platformIdentifier(url) {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;
    switch (hostname.replace('www.', '').replace(".com", "")) {
        case "youtube": {
            return "youtube";
            break;
        }
        case "instagram": {
            return "instagram";
            break;
        }
        case "x" || "twitter": {
            return "twitter";
            break;
        }
        case "tiktok": {
            return "tiktok";
            break;
        }
        case "facebook": {
            return "facebook";
            break;
        }
        default: {
            return "err";
        }
    }
}
