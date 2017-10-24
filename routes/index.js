var express = require('express');
var router = express.Router();
var fs= require('fs')
var iNe=0;
var iNe2=0;
/* GET home page. */
router.get('/', function(req, res, next) {
    iNe++
  fs.readFile('jgr.txt','utf-8',function(err,data){
              fs.writeFile('jgr.txt','被访问的次数：'+iNe,function(err){
              })
              res.render('index', { title: data});
      })

});

router.get('/abc', function(req, res, next) {
    iNe2++
  fs.writeFile('jgr1.txt','被访问的次数：'+iNe2,'utf-8',function(err,data){

  })
    fs.readFile('jgr1.txt','utf-8',function(err,data){
        res.render('aaa', { ab: [1,2,3],bcd:['a','b','c'],ti2: data });

    })

});

module.exports = router;
