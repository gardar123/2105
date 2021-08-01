/*function sum(){
    console.log(5+7);
}
sum();*/



/*var i=1;
while(i<=100){
    if(i%2===1){
        console.log(i);
    }
  
i++;
}*/



/*var i=1
var sum=0
while(i<=100){
    sum+=i;
    i++;

}
console.log(sum);*/




/*var i=1;
var sum=0;
while(i<=100){
if(i%2!=1){
    sum+=i;
}
i++;
}
console.log(sum);




var a=50;
while(true){
    var b=prompt('请猜一个数字');
    if(isNaN(b)){
        alert('请输入一个数字');
    }else if(b>a){
    alert('猜大了');
}else if(b<a){
    alert('猜小了');
}else{
    alert('猜对了');
    break;
}
}
console.log(Number(' '));*/



/*function maxx(n){
    switch(n){
        case 1:
            return '等待付款';

    }
}
var res=maxx(1);
console.log(res);*/





/*var add=function(a,b){
    for(var i=a,sum=0;i<=b;i++){
sun+=i;
    }
    return sum;
}
console.log(add(50,100));*/



/*var arr=[23,61,49,35,67,90];
arr.sort(function(a,b){
    return a-b;
}
);
console.log(arr);*/

/*var arr2=['a','b','c','d','e','f','g','h'];
console.log(arr2.splice(3,2));
arr2.splice(3,1,'x'); 
arr2.splice(2,0,'z');
console.log(arr2);*/



/*var book={
    kid:1,
    biaoti:'hello',
    zuozhe:'小懒',
    jiage:299,
    time:'2020-5-20'
}
book.jiage=998;
book.chubanshe='地球';
console.log(book);
console.log(book['zuozhe']);*/

/*var score={
    chinese:99,
    math:59.5
}
var sum=0;
for(var key in score){
    sum+=score[key];
 
}
console.log(sum);*/


/*function sum(a,b,c=5){
    return a+b+c;
}
console.log(sum(2,1));*/



/*const http=require('http');
http.get('http://www.weather.com.cn/data/sk/101010100.html',(res)=>{
console.log( res.statusCode );
res.on('data',(chunk)=>{
    console.log(chunk.toString());
})*/


/*const http=require('http');
let app=http.createServer();
app.listen(8080);
app.on('request',(req,res)=>{
    console.log(req.url,req.method);
    console.log(req.headers);
    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf-8'
    });
    res.write('<h2>我 爱 YingYing</h2>');
    /*res.writeHead(302,{
        Location:'http://www.baidu.com'
    });
    res.end();
    //console.log('有请求进来');
});

const express=require('express');
let app=express();
app.listen(8080);
app.get('/index',(req,res)=>{
   res.sendFile(__dirname+'/list.html');
});

app.get('product',(req,res)=>{
    res.redirect('http://www.taobao.com');
});

app.get('/reg',(req,res)=>{
    console.log(req.query);
    res.send('注册信息为：'+req.query.uname);
});

app.get('/page/:name',(req,res)=>{
console.log(req.params);
res.send(`这是${req.params.name}页面`);
});

app.get('/shopping/:lid/:count/:uid',(req,res)=>{
    console.log(req.params);
    res.send(`
        商品的编号:${req.params.lid}
        购买的数量:${req.params.count}
        用户的编号:${req.params.uid}
        `);
});

const express=require('express');
const express=require('express');
let app=express();
app.listen(8080);
app.get('/login',(req,res)=>{
   res.sendFile(__dirname+'/login.html');
});
app.post('/mylogin',(req,res)=>{
    req.on('data',(chunk))=>{
        let obj=
    }
}*/


const express=require('express');
let router=express.Router();

router.get('/login',(req,res)=>{
  res.send('用户登录')
});
module.exports=router;