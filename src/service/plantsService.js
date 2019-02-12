import API from '../API/index'
import {FetchGet, FetchPost} from '../common/fetch/index'

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