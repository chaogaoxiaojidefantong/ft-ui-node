const fs=require('fs');
class FileUtil{
    /**
     * 获取某个文件的内容
     * @param {*} path 文件的路径
     */
    getFileData(path){
        const data= fs.readFileSync(path);      
        const dataStr=data.toString();
        return dataStr;
    }

    /**
     * 获取某个文件夹下所有文件的内容,返回一个集合
     * @param {*} dirPath 文件夹的路径
     */
    getDirData(dirPath){
        return new Promise((resolve,reject)=>{
            let dataArr=[]  
            fs.readdir(dirPath,(err,files)=>{               
              files.forEach((filename)=>{
               let path=dirPath+'/'+filename
               let data=fs.readFileSync(path).toString();
               dataArr.push(data);       
              })
              resolve(dataArr);
           })
         })     
    }
    /**
     * 获取文件夹下的json文件
     * @param {*} dirPath 
     */
    getJsonDirData(dirPath){
        return new Promise((resolve,reject)=>{
            let dataArr=[]  
            fs.readdir(dirPath,(err,files)=>{               
              files.forEach((filename)=>{
               let arr=[]
               let path=dirPath+'/'+filename
               let dataJson=fs.readFileSync(path).toString();
               let data=JSON.parse(dataJson) 
               for(let prop in data){
                   arr.push(data[prop]);
               }             
               dataArr.push(arr);       
              })
              resolve(dataArr);
           })
         })     
    }
}
const fileUtil=new FileUtil();
module.exports={
    fileUtil:fileUtil
}