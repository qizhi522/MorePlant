<template>
<router-link class="tab" :to="info.path">
    <div><img src="img/headerNav.png" :style="style"></div>
    <span>{{info.title}}</span>
</router-link>
</template>

<script>
export default {
    name: 'tab-item',
    props: ['info'],
    computed:{
        style(){
            let offset = this.info.index*(-62);
            if(this.$route.path !== this.info.path){
                offset -= 30.5;
            }
            return {
                transform: `translateY(${offset}px)`
                }
        }
    }
}
</script>

<style lang="scss" scoped>
.tab{
    text-align: center;
    flex: 1;
    list-style: none;
    background-color: #fff;
    div{
        width: 26px;
        height: 26px;
        overflow: hidden;
        margin: 0 auto;
        padding: 4px 0;
        img{
            width: 100%
        }
    }
    span{
    display: block;
    font-size: 12px;
}
}
.router-link-exact-active{
    color: #B4282D;
} 

</style>

