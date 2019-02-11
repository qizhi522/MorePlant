<template>
    <header class="sub-header border-bottom">
        <div class="search">
            <p class="searchbtn" @click="seabtnAction">搜索圈友、植物</p>  
            <van-icon name="search" class="sea" />
        </div>
        <div class="info">
            <van-icon name="chat-o"/>
            <span>消息</span>
        </div>
        <van-popup v-model="show" position="right" :overlay="false">
            <div class="seawrapper">
                <div class="seaheader">
                    <div class="seainp">
                        <input type="search" placeholder="输入关键字">
                        <van-icon name="search" />
                    </div>
                    <span class="txt" @click="closeAction">取消</span>
                </div>
                <div class="seamain">
                    <i><img src="img/searchimg.jpg" alt=""></i>
                    <span>暂无搜索结果</span>
                </div>
            </div>
        </van-popup>
    </header>
</template>

<script>
export default {
    name: 'app-header',
    props: {
        title: String
    },
    data(){
        return{
            show: false,
        }
    },
    methods: {
        seabtnAction(){
            this.show = !this.show
        },
        closeAction(){
            this.show = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.sub-header{
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    box-sizing: border-box;
    background: #fff;
    color: #666666;
    .search{
        float: left;
        width: 87%;
        position: relative;
        padding-left: 7px;
        box-sizing: border-box; 
        .searchbtn{
            padding-left: 24px;
            background: #f4f4f4;
            border:0;
            width: 94%;
            line-height: 30px;
            border-radius: 5px;
            font-size: 14px;
        }
        .sea{
            position: absolute;
            top: 6px;
            left: 10px;
            font-size: 20px;
        }
    }
    .info{
        float: right;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        align-items: center;
        .van-icon{
            font-size: 20px;
        }
    }
    .van-popup{
        width: 100%;
        .seaheader{
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            height: 44px;
            padding: 5px 15px;
            background: #fff;
            .seainp{
                width: 88%;
                input{
                    width: 100%;
                    position: relative;
                    padding-left: 24px;
                    background: #f4f4f4;
                    border:0;
                    line-height: 30px;
                    border-radius: 5px;
                    font-size: 14px;
                }
                .van-icon{
                    position: absolute;
                    top: 12px;
                    left: 20px;
                    font-size: 20px;
                }
            }
        }
        .seamain{
            height: 623px;
            background: #f4f4f4;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            i{
                margin-bottom: 20px;
                img{
                    width: 98px;
                }
            }
        }
    }
}
</style>

