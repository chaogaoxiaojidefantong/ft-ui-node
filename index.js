var express = require('express');
const fileUtil=require('./util/FileUtil').fileUtil;
const commonUtil=require('./util/CommonUtil').commonUtil;
var app = express();
 app.listen(8081,  ()=> {
})
app.all('/File/read', (req, res, next)=> {
  commonUtil.setCorsAllow(res);
  if (req.method == 'GET') {
    let session=req.query.session;
    let page=req.query.page;
    let path="./"+session+"/"+page
    fileUtil.getDirData(path).then(dataArr=>{
      res.send(dataArr)
    })
  }
  else {
    next();
  }
});

app.all('/File/json', (req, res, next)=> {
  commonUtil.setCorsAllow(res);
  if (req.method == 'GET') {
    let session=req.query.session;
    let page=req.query.page;
    let path="./json/"+session+"/"+page
    fileUtil.getJsonDirData(path).then(dataArr=>{      
    //  dataArr.forEach(item=>{
    //   let obj=JSON.parse(item);
    //   for(let prop in obj){
    //     arr.push(obj[prop]);
    //   }
    //  })
     res.send(dataArr);
    })
  }
  else {
    next();
  }
});

