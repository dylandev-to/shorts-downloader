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
            let downPromise;
            switch (plt.platform) {
                case "tiktok":
                    downPromise = videoProcessor.tiktok(url)
                    break;
                case "instagram":
                    downPromise = videoProcessor.instagram(url)
                    break;
                case "facebook":
                    downPromise = videoProcessor.facebook(url);
                    break;
                case "twitter":
                    downPromise = videoProcessor.twitter(url);
                    break;
                case "youtube":
                    downPromise = videoProcessor.youtube(url);
                    break;
                default:
                    return res.status(202).send('Not supported platform');
            }
            downPromise
                .then(down => {
                    down.info = {
                        platform: plt.platform,
                        url
                    }
                    return res.status(200).json(down);
                })
                .catch(y => {
                    return res.status(200).send("Error procecssing your video");
                })
        }
        else res.status(202).send('Not supported platform');
    }
    else res.status(204).send('Not a valid platform');
})

module.exports = router;