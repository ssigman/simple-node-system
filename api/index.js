const router = require("express").Router();
const path = require("path");

router.get('/',(req,res) => {
    let file2Send = path.normalize(__dirname + "/../html/index.html");
    res.sendFile(file2Send);
});

module.exports = router;