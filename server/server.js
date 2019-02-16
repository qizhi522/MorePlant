const express =require('express');

const api = require('./api');

const url = require('url');

const { JSDOM } = require("jsdom");

const http = require('http');

const server = express();

//测试
server.get(api.PLANTS_URL,(req,res)=>{
    let data = require('./data/test.json');
    res.json({
        message: 'ok',
        status: 0,
        data: data
    })
})
//首页banner数据
server.get(api.HOMEBANBER_URL,(req,res)=>{
    let data = require('./data/homedata.json');
    res.json({
        message: 'ok',
        status: 0,
        data: data.homebannerlist
    })
})

//首页推荐数据
server.get(api.HOMECOMMENG_URL,(req,res)=>{
    let data = require('./data/homedata.json');
    res.json({
        message: 'ok',
        status: 0,
        data: data.recommendlist
    })
})

//首页推荐数据
server.get(api.HOMEUSER_URL,(req,res)=>{
    let data = require('./data/homedata.json');
    res.json({
        message: 'ok',
        status: 0,
        data: data.userlist
    })
})


//社区主页数据
server.get(api.COMMUNIT_URL,(req,res)=>{
    let data = require('./data/communit.json');
    res.json({
        message: 'ok',
        status: 0,
        data: data
    })
})


//商城数据
server.get(api.MALL_URL,(req,res)=>{
    let data=require('./data/mall.json');
    res.json({
        message:'ok',
        status:0,
        data:data
    })
})






server.listen(9090, 'localhost', (error)=>{
    if(error){
        console.log('启动失败');
        console.log(error);
    }else{
        console.log('启动成功');
    }
})
