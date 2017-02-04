var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req, res, next)=> {
  let currentDate = new Date();
  res.render('index', { 
    title: 'Home',
  date: currentDate.toTimeString()
});
});
/* GET about page. */
router.get('/about',(req, res, next)=> {
  res.render('about', { title: 'About' });
});
module.exports = router;
