const router = require("express").Router();

// Utils
const { getDomainName, videoProcessor } = require("../../utils/utils")
const { getVideoType } = require("../../utils/video-type")

// Post request that receives a URL
router.post("/", async (req, res) => {
    const { url } = req.body;

    // tiktok, instagram, youtube, facebook, twitter.
    const domainName = getDomainName(url);
    if (domainName) {
        const plt = getVideoType(domainName);
        if (plt) {
            let down;
            switch (plt.platform) {
                case "tiktok":
                    down = await videoProcessor.tiktok(url)
                    break;
                case "instagram":
                    down = await videoProcessor.instagram(url)
                    break;
                case "facebook":
                    down = await videoProcessor.facebook(url);
                    break;
                case "twitter":
                    down = await videoProcessor.twitter(url);
                    break;
                case "youtube":
                    down = await videoProcessor.youtube(url);
                    break;
                default:
                    return res.status(202).send('Not supported platform');
            }
            if (down) {
                down.info = {
                    platform: plt.platform,
                    url
                }
                return res.status(200).json(down);
            }
        }
    }
    res.status(204).send('Unknown platform');
})

module.exports = router;