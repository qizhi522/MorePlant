import API from '../API/index'
import {FetchGet, FetchPost} from '../common/fetch/index'

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