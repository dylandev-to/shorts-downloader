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
            switch(plt.platform) {
                case "tiktok":
                    const downTiktok = await videoProcessor.tiktok(url)
                    if (downTiktok) return res.status(200).json(downTiktok);
                    break;
                default:
                    return res.status(202).send('Not supported platform');
            }
        }
    }
    res.status(204).send('Unknown platform');
})

module.exports = router;