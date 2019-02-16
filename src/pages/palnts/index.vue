<template>
    <div class="page" id="plants">
        <header>植物多</header>
        <scroller :top='0' :bottom='49' ref='scroller'>
            <div class="content">
                <ul class="banners">
                    <van-swipe :autoplay="3000" indicator-color="white">
                        <li v-for="item in imgList" :key="item.id">
                            <van-swipe-item><img :src="item.bannerurl" alt=""></van-swipe-item>
                        </li>
                    </van-swipe>
                </ul>
                <ul class="recommend">
                    <li v-for="item in recommendList" :key="item.id">
                        <div class="left">
                            <p>{{item.connent}}</p>
                            <strong>
                                <span>{{item.name}}</span>
                                <i class="share"><van-icon name="like-o"/>{{item.share}}</i>
                                <i class="comment"><van-icon name="chat-o"/>{{item.comment}}</i>
                            </strong>
                        </div>
                        <img :src="item.recommendimg" alt=""/>
                    </li>
                </ul>
                <ul class="homeUser">
                    <li v-for="item in homeUserList" v-if="item.type==1" :key="item.id">
                        <p>{{item.title}}</p>
                        <img :src="item.imgurl" alt=""/>
                        <strong>
                            <span>{{item.name}}</span>
                            <i class="share"><van-icon name="like-o"/>{{item.share}}</i>
                            <i class="comment"><van-icon name="chat-o"/>{{item.comment}}</i>
                        </strong>
                    </li>
                    <li v-for="item in homeUserList" v-if="item.type==2" :key="item.id">
                        <img :src="item.imgurl" alt=""/>
                        <p>{{item.title}}</p>
                        <strong>
                            <i class="share"><van-icon name="like-o"/>{{item.share}}</i>
                            <i class="comment"><van-icon name="chat-o"/>{{item.comment}}</i>
                        </strong>
                    </li>
                </ul>
            </div>
        </scroller>
    </div>
</template>

<script>
import Vue from 'vue'
import {getHomeBannerList,getRecommendList,getHomeUser} from '../../service/plantsService.js'
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
import { Icon } from 'vant';
Vue.use(Icon);
export default {
    data(){
        return{
            list:'',
            imgList:[],
            recommendList:[],
            homeUserList:[]
        }
    },
    created(){
        getHomeBannerList().then(data=>{
            this.imgList=data;
            console.log(data);
        });
        getRecommendList().then(data=>{
            this.recommendList=data;
        });
        getHomeUser().then(data=>{
            this.homeUserList=data;
        })
    }
}
</script>

<style lang="scss" scoped>
#plants{
    height: 93.5%;
    header{
        height: 88px;
        width: 100%;
        text-align: center;
        font-size: 36px;
        line-height: 88px;
    }
    .scroller-wrap{
        position: absolute;
        top:88px;
        bottom: 4px;
    }
    .content{
        .banners{
            width: 100%;
            height: 424px;
            overflow: hidden;
            .van-swipe{
                li{
                    float: left;
                    div{
        
                    
                        img{
                            height: 424px;
                    }
                    }
                }
                .van-swipe__indicators{
                    .van-swipe__indicator--active{
                        background: #5dcc70;
                    }
                }
            }
        }
        .recommend{
            background: #f4f4f4;
            padding: 20px 24px 0;
            box-sizing: border-box;
            li{
                height: 196px;
                margin-bottom: 20px;
                background: #fff;
                border-radius:8px;
                .left{
                    width: 350px;
                    float: left;
                    padding: 15px 26px 12px;
                    box-sizing: border-box;
                    p{
                         font-size:30px;
                         line-height: 40px;
                         padding-bottom: 20px;
                    }
                    strong{
                        display: block;
                        width: 100%;
                        height: 38px;
                        span{
                            float: left;
                            font-size: 20px;
                            color: #c7c5c5;
                            line-height: 38px;
                        }
                        .comment{
                            float: right;
                            text-align: right;
                            margin-right: 10px;
                            color: #c7c5c5;
                            line-height: 38px;
                            .van-icon-chat-o{
                                font-size: 30px;
                                vertical-align: middle;
                                padding-right: 5px;
                            }
                        }
                        .share{
                            float: right;
                            text-align: right;
                            color: #c7c5c5;
                            line-height: 38px;
                            .van-icon-like-o{
                                font-size: 30px;
                                vertical-align: middle;
                                padding-right: 5px;
                            }
                        }
                    }
                }
                img{
                    float: right;
                    width: 350px;
                }
            }
        }
        .homeUser{
            background: #f4f4f4;
            padding: 20px 24px 0;
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li:first-child{
                margin-bottom: 20px;
                background: #fff;
                border-radius:8px;
                p{
                    font-size: 30px;
                    line-height: 87px;
                    padding: 0 10px;
                }
                img{
                    width: 100%;
                }
                strong{
                    display: block;
                    width: 100%;
                    height: 65px;
                    padding:0 20px;
                    box-sizing: border-box;
                    span{
                        float: left;
                        font-size: 30px;
                        color: #c7c5c5;
                        line-height:65px;
                    }
                    .comment{
                        float: right;
                        text-align: right;
                        margin-right: 10px;
                        color: #c7c5c5;
                        line-height: 65px;
                        .van-icon-chat-o{
                            font-size: 30px;
                            vertical-align: middle;
                            padding-right: 5px;
                        }
                    }
                    .share{
                        float: right;
                        text-align: right;
                        color: #c7c5c5;
                        line-height: 65px;
                        .van-icon-like-o{
                            font-size: 30px;
                            vertical-align: middle;
                            padding-right: 5px;
                        }
                    }
                }
            }
            li{
                margin-bottom: 20px;
                background: #fff;
                border-radius:8px;
                p{
                    font-size: 30px;
                    line-height: 87px;
                    padding: 0 10px;
                }
                img{
                    width: 340px;
                }
                strong{
                    display: block;
                    width: 100%;
                    height: 35px;
                    padding:0 20px;
                    box-sizing: border-box;
                    span{
                        float: left;
                        font-size: 30px;
                        color: #c7c5c5;
                        line-height:35px;
                    }
                    .comment{
                        float: right;
                        text-align: right;
                        margin-right: 10px;
                        color: #c7c5c5;
                        line-height: 35px;
                        .van-icon-chat-o{
                            font-size: 30px;
                            vertical-align: middle;
                            padding-right: 5px;
                        }
                    }
                    .share{
                        float: right;
                        text-align: right;
                        color: #c7c5c5;
                        line-height: 35px;
                        .van-icon-like-o{
                            font-size: 30px;
                            vertical-align: middle;
                            padding-right: 5px;
                        }
                    }
                }
            }
        }
    }
}
</style>
<style>
.van-swipe__indicator{
    width:15px !important;
    height: 15px !important; 
    margin-right:20px !important; 
}
.van-swipe__indicator:last-child{
    margin-right:0 !important;
}
.van-swipe__indicator--active{
    background: #5dcc70 !important;
}
</style>

