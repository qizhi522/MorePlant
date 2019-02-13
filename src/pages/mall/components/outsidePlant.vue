<template>
    <div class="freshFlowers">
        <scroller :top='90' :bottom='1' ref='scroller'>
            <ul>
                <li v-for='item in list' :key="item.id">
                    <img :src='item.url'/>
                    <div class="right">
                        <p class="info">{{item.info}}</p>
                        <p class="rebate">{{item.rebate}}</p>
                        <span><i>￥</i>{{item.price}}</span>
                    </div>
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
            width: 100%;
            border-radius: 10px;
            position: relative;
            img{
                width: 330px;
                height: 200px;
                border-radius: 10px;
                float: left;
            }
            .right{
                float: left;
                .info{
                    padding: 10px 0px 15px 20px;
                    line-height: 46px;
                    font-size: 30px;
                }
                .rebate{
                    padding-left: 20px;
                    line-height: 30px;
                    font-size: 25px;
                }
                span{
                    position: absolute;
                    right: 20px;
                    bottom: 20px;
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
}
</style>

