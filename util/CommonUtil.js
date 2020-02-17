class CommonUtil{
    setCorsAllow(res){
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    }
}
const commonUtil=new CommonUtil();
module.exports={
    commonUtil:commonUtil
}