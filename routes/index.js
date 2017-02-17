var express = require('express');
var passport=require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home',{message:req.flash('loginMessage')});
});


 module.exports = router;

// function isLoggedIn(req,res,next){
//   if(req.isAuthenticated()){
//     login=true;
//     return next();
//   }
//
//   res.redirect('/');
// }
