var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req, res, next)=> {
  res.render('index', {   title: 'Home',
                          title2:'Who Am i ?',
                          title3: 'My Projects',
                          title4: 'Services',
                          title5: 'Contact Me'});
});



module.exports = router;
