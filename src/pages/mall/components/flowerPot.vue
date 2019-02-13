<template>
    <div class="freshFlowers">
        <scroller :top='90' :bottom='1' ref='scroller'>
            <ul>
                <li v-for='item in list' :key="item.id">
                    <img :src='item.url'/>
                    <p class="info">{{item.info}}</p>
                    <p class="rebate">{{item.rebate}}</p>
                    <span><i>￥</i>{{item.price}}</span>
                </li>
            </ul>
        </scroller>
    </div>
</template>

<script>
import {getMallFleshPlantList} from '../../../service/plantsService.js'
export default {
    data(){
        return{
            list:[],
        }
    },
    created(){
        getMallFleshPlantList().then(data=>{
            this.list=data;
        })
    }
}
</script>

<style lang="scss" scoped>
.freshFlowers{
        background: #f4f4f4;
        height: 85%;
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 26px 24px 0;
        box-sizing: border-box;
        li{
            background: #fff;
            margin-bottom: 26px;
            img{
                width: 338px;
                height: 338px;
                border-radius: 10px;
            }
            .info{
                padding-top: 10px;
                padding-left: 15px;
                line-height: 46px;
                font-size: 30px;
            }
            .rebate{
                padding-left: 15px;
                line-height: 30px;
                font-size: 25px;
            }
            span{
                display: block;
                width: 100%;
                text-align: right;
                line-height: 46px;
                color: #60ca70;
                font-size: 36px;
                padding-right: 15px;
                box-sizing: border-box;
                i{
                    color: #60ca70;
                    font-size: 24px;
                }

            }
        }
    }
}
</style>

