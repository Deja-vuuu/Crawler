

const superagent  = require("superagent");
const cheerio  = require('cheerio');
const reptileUrl = 'http://www.jianshu.com/';

superagent.get(reptileUrl).end(function(err,res){
    if(err){
        // throw 500
        console.log("出错啦~！")
    }

    let $ = cheerio.load(res.text);
    console.log($.html())
})