<template>
    <div class="page" id="communit">
        <Header/>
        <scroller :top="44" :bottom="1" ref="scroller">
            <ul class="commul">
                <li class="commitem border-bottom" v-for="item in list" :key="item.id" >
                    <div class="wrapper">
                        <div class="commheader">
                            <img :src="item.Headportrait">
                            <span class="username">{{item.name}}</span>
                        </div>
                        <div class="commimg">
                            <img v-for="imgitem in item.url" :key="imgitem" :src="imgitem">
                        </div>
                        <p class="info">{{item.info}}</p>
                        <div class="iconwrapper">
                            <div class="icon">
                                <van-icon name="like-o" />
                                <van-icon name="chat-o" @click="comAction"/>
                                <van-icon name="share" @click="shareAction"/>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </scroller>
        <Comment :comshow='commentshow'/>
        <van-popup class="botkuang" v-model="show" position="bottom" :overlay="false">
            <ul>
                <li class="shareicon">
                    <i><img src="img/shareicon_08.jpg" alt=""></i>
                    <span>微信好友</span>
                </li>
                <li class="shareicon">
                    <i><img src="img/shareicon_03.jpg" alt=""></i>
                    <span>朋友圈</span>
                </li>
                <li class="shareicon">
                    <i><img src="img/shareicon_05.jpg" alt=""></i>
                    <span>QQ好友</span>
                </li>
                <li class="shareicon">
                    <i><img src="img/shareicon_14.jpg" alt=""></i>
                    <span>QQ空间</span>
                </li>
                <li class="shareicon">
                    <i><img src="img/shareicon_17.jpg" alt=""></i>
                    <span>复制链接</span>
                </li>
            </ul>
        </van-popup>
    </div>
</template>

<script>
import Vue from 'vue'
import {getcommunitList} from '../../service/plantsService.js'
import Header from '../../common/components/header';
import Comment from './comment';
import { Popup } from 'vant';

Vue.use(Popup);
export default {
    data(){
        return {
            list: [],
            show: false,
            shadow: false,
            commentshow:false,
        }
    },
    components:{
        Header,
        Comment
    },
    created(){
        getcommunitList().then(data => {
            this.list = data;
        })
    },
    methods:{
        shareAction(){
            this.show = !this.show;
        },
        comAction(){
            this.commentshow = !this.commentshow;
        }
    }
}
</script>

<style lang="scss" scoped>
#communit{
    background: #f4f4f4;
    .commul{
        box-sizing: border-box;
        background: #fff;
        margin-top: 10px;
        .commitem{
            .wrapper{
                padding: 5px 12px;  
                .commheader{
                    display: flex;
                    align-items: center;
                    margin-bottom: 5px;
                    img{
                        width: 10%;
                        margin-right: 10px;
                    }
                    .username{
                        font-size: 14px;
                        color: #666666;
                    }
                }
                .commimg{
                    display: flex;
                    justify-content: space-between;
                    img{
                        height: 150px;
                        display: inline-block;
                    }
                }
                .info{
                    display: block;
                    margin: 5px 0;
                    line-height: 24px;
                }
                .iconwrapper{
                    overflow: hidden;
                    .icon{
                        float: right;
                        .van-icon{
                            font-size: 18px;
                        }
                        .van-icon:nth-of-type(2){
                            margin: 0 10px;
                        }
                    }
                }
            }
        }
    }
    .botkuang{
        box-shadow: 0 -2px 3px -1px lightgray;
        border-radius: 10px 10px 0 0;
        ul{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            li{
                width: 33.33%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 10px 0;
                img{
                    height: 25px;
                    display: block;
                    margin: 8px 0;
                }
            }
        }
    }
}
</style>

