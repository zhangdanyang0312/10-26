var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */

router.post('/', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    var temp='';
    if(req.body.abc==1){     
        temp="1"
        // router.get('/index', function(req, res, next) {
        //      fs.readFile('/index.txt', 'utf-8',function(err,data){
        //         console.log(data)
        //         fs.writeFile('/index.txt',req.body.name,function(err){

        //         })
        //         res.render('/index', { abc: t ,b: ["g","e","l"]});
        //     })
           
        // });
    }else{
        temp="2"
    }
    res.send({"name":temp})
});

module.exports = router;
