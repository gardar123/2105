const express=require('express');
let app=express();
app.listen(8080);

/*app.use('/list',(req,res,next)=>{
if(req.query.uname!=='root'){
    res.send('对不起');
    console.log('已拦截');
}else{
    next();
}
});
app.get('/list',(req,res)=>{
    res.send('这是后台');
});

app.use('/shopping',(req,res,next)=>{
    req.query.price*=0.8;
    next();
});
app.get('/shopping',(req,res)=>{
    res.send('商品价格:'+req.query.price)
});*/