var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/update/:_id', User.authMiddleware, function(req, res, next) {
  console.log("req params: ",req.params);
  User.findByIdAndUpdate(req.params._id, {$set:{ image: req.body.image }}, {new:true},function(err, user) {
    res.status(err ? 400 : 200).send(err || user);
  });
});


router.delete('/logout', function(req, res) {
  res.clearCookie('mandycookie').send();
});

router.get('/profile', User.authMiddleware, function(req, res) {
  res.send(req.user);
});

router.post('/authenticate', function(req, res) {
  User.authenticate(req.body, function(err, user) {
    if(err) {
      res.status(400).send(err);
    } else {
      var token = user.generateToken();
      res.cookie('mandycookie', token).send(user);
    }
  });
});

router.post('/register', function(req, res) {
  User.register(req.body, function(err, user) {
    if(err) {
      res.status(400).send(err);
    } else {
      var token = user.generateToken();
      res.cookie('mandycookie', token).send(user);
    }
  });
});

module.exports = router;
