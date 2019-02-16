import API from '../API/index'
import {FetchGet, FetchPost} from '../common/fetch/index'
//获取首页banner数据
export function getHomeBannerList(){
    return new Promise((resolve,reject)=>{
        FetchGet(API.HOMEBANBER_URL)
        .then(
            (data)=>{
                let newData=data.map(item=>{
                    return{
                        id:item.id,
                        bannerurl:item.bannerurl
                    }
                })
                resolve(newData);
                console.log(newData)
            }
        )
    })
}
//获取首页推荐数据
export function getRecommendList(){
    return new Promise((resolve,reject)=>{
        FetchGet(API.HOMECOMMENG_URL)
        .then(
            (data)=>{
                let newData=data.map(item=>{
                    return{
                        id:item.id,
                        name:item.name,
                        comment:item.comment,
                        share:item.share,
                        connent:item.connent,
                        recommendimg:item.recommendimg
                    }
                })
                resolve(newData);
            }
        )
    })
}
//首页用户数据
export function getHomeUser(){
    return new Promise((resolve,reject)=>{
        FetchGet(API.HOMEUSER_URL)
        .then(
            (data)=>{
                let newData=data.map(item=>{
                    return{
                        id:item.id,
                        type:item.type,
                        title:item.title,
                        imgurl:item.imgurl,
                        name:item.name,
                        comment:item.comment,
                        share:item.share
                    }
                })
                resolve(newData);
            }
        )
    })
}
//获取社区主页数据
export function getcommunitList(){
    return new Promise((resolve,reject)=>{
        FetchGet(API.COMMUNIT_URL)
        .then(
            (data)=>{  
                resolve(data);
            }
        )
    })
}

export function getplantList(){
    return new Promise((resolve,reject)=>{
        FetchGet(API.PLANTS_URL)
        .then(
            (data)=>{   
                resolve(data);
            }
        )
    })
} 
// 获取商城数据
export function getMallFleshPlantList(){
    return new Promise((resolve,reject)=>{
        FetchGet(API.MALL_URL)
        .then(data=>{
            let newData=data.list.map(item=>{
                    return{
                        id:item.id,
                        url:item.url,
                        info:item.info,
                        rebate:item.rebate,
                        price:item.price
                    }
            })
            resolve(newData);
        })
    })
}