import axios from 'axios';
import { Toast } from 'mint-ui';

export function FetchGet(url,params = {}){
    // console.log(params);
    
    return new Promise((resolve,reject) =>{
    axios.get(url, {params})
        .then(function(response){
            if(response.data.status){
                Toast({
                    message: '请求错误',
                    duration: 1000
                });
            }else{
                resolve(response.data.data);
            }
        })
        .catch(function(error){
            Toast({
                message: '请求错误',
                duration: 1000
            });
        })
    })
}


export function FetchPost(url, params = {}){
    axios.post(url, params)
    .then(response=>{
        if(response.data.status){
            Toast({
                message: '请求错误',
                duration: 1000
            });
        }
        else{
            //请求数据成功
        }
    })
    .catch(error=>{
        Toast({
            message: '请求错误',
            duration: 1000
        });
    })
}