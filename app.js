

const superagent  = require("superagent");
const cheerio  = require('cheerio');
const fs = require('fs');
const reptileUrl = 'http://www.jianshu.com/';

superagent.get(reptileUrl).end(function(err,res){
    if(err){

        console.log("出错啦~！")
    }

    var  $ = cheerio.load(res.text);
    //console.log($.html())
  
 
    fs.writeFile('message.txt', $.html(), function (err) {
        if (err) throw err;
        
        console.log('写入完成');
      });
    
    

})

//console.log(html)
