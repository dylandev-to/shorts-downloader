const router = require("express").Router();

// Video Download Route
router.use("/video-download", require("./video/video-download.route"))

router.get("/", (req, res) => {
    res.status(200).send("Successful")
})

module.exports = router;