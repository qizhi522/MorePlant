<template>
    <div class="comment">
        <van-popup v-model="$store.state.home.comshow" position="bottom" :overlay="true" >
            <ul>
                <p v-if="isShow">暂无评论，来抢沙发</p>
                <li v-for="item in comlist" :key="item.id">{{item.info}}</li>
            </ul>
            <div class="inp">
                <input type="text" placeholder="留下你的精彩评论吧~">
                <i><img class="smiling" src="img/smiling.png" alt=""></i>
            </div>
        </van-popup>
    </div>
</template>

<script>
import Vue from 'vue';
import {mapState} from 'vuex'
import { Popup } from 'vant';

Vue.use(Popup);
export default {
    // props: ['comshow'],
    data(){
        return {
            zshow: false,
            isShow: true,
            comlist:[],
        }
    },
     computed: {
        ...mapState({
            comshow: state=>state.home.comshow,
        })
    },
    methods:{
        // clickOverlay(){
        //     this.$parent.comAction();            
        // }
    }
}
</script>

<style lang="scss" scoped>
.van-popup{
    min-height: 600px;
    box-shadow: 0 -2px 3px -1px lightgray;
    border-radius: 10px 10px 0 0;
    p{
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .inp{
        position: relative;
        top:535px;
        input{
            width: 100%; 
            line-height: 60px;
            box-sizing: border-box;
            padding-left: 20px;
            border: 0;
            background-image: linear-gradient(to top, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.2) 98%, #FFFFFF 100%); 
        }
        .smiling{
            width: 8%;
            position: absolute;
            top: 2px;
            right: 16px;
        }
    }
}
</style>

