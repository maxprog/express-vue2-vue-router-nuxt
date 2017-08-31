var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 console.log('PATH / : ',path.join(__dirname + '/public/index.html'));
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

module.exports = router;
