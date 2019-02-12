<template>
    <div class="page" id="mall">
        <div class="header">
            <van-icon name="search" />
            <input type="text" placeholder="多肉 绿色植物"/>
        </div>
        <ul class="nav">
            <router-link to='/mall/freshFlowers'><li @click="btnAction1" ref="fresh" :class="{active:true}">新鲜花卉</li></router-link>
            <router-link to='/mall/outsidePlant'><li @click="btnAction2" ref="outside" :class="{active:false}">户外植物</li></router-link>
            <router-link to='/mall/flowerPot'><li @click="btnAction3" ref="pot" :class="{active:false}">花卉盆栽</li></router-link>
        </ul>
        <router-view/>
    </div>
</template>

<script>

export default {
    methods:{
        btnAction1(){
            this.$refs.fresh.className='active',
            this.$refs.outside.className='',
            this.$refs.pot.className=''
        },
        btnAction2(){
            this.$refs.fresh.className='',
            this.$refs.outside.className='active',
            this.$refs.pot.className=''
        },
        btnAction3(){
            this.$refs.fresh.className='',
            this.$refs.outside.className='',
            this.$refs.pot.className='active'
        }
    }
}
</script>

<style lang="scss" scoped>
#mall{
    
    .header{
        text-align: center;
        padding: 15px 24px;
        box-sizing: border-box;
        .van-icon{
            position: absolute;
            left: 100px;
            top:23px;
            color: #bab9b9;
            font-size: 45px;
            z-index: 1;
        }
        input{
            position: relative;
            width: 520px;
            height: 60px;
            border-radius: 25px;
            border: none;
            background: #f4f4f4;
            font-size: 24px;
            color: #cbcbcb;
            padding-left: 80px;
        }
        ::-webkit-input-placeholder { /* WebKit browsers */
            color: #cbcbcb;
            font-size: 24px;
        }
    }
    .nav{
        width: 100%;
        height: 60px;
        display: flex;
        justify-content:space-between;
        align-items: center;
        box-sizing: border-box;
        a{
            display: block;
            height: 100%;
            width: 33.33%;
            li{
                height: 100%;
                width: 100%;
                font-size: 36px;
                text-align: center;
                line-height: 60px;
                color: #000;
                &.active{
                    color: #5ecb70;
                    border-bottom: solid 4px #5ecd71;
                }
            }
        }
    }
}
</style>

