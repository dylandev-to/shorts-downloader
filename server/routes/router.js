const router = require("express").Router();

// Video Download Route
router.use("/video-download", require("./video/video-download.route"))

module.exports = router;