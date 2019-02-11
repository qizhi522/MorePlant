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