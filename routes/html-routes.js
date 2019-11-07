const express = require("./node_modules/express");
const router = express.Router();

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
