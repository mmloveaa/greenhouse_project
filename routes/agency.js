var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/companies', function(req,res,next){
  res.send("get all companies");
});

module.exports = router;
