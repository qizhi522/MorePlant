<template>
<router-link :exact="info.path == '/' ? true : false" class="tab" :to="info.path">
    <div><img :src="info.url"></div>
    <span>{{info.title}}</span>
</router-link>
</template>

<script>
export default {
    name: 'tab-item',
    props: ['info'],
}
</script>

<style lang="scss" scoped>
.tab{
    text-align: center;
    flex: 1;
    list-style: none;
    background-color: #fff;
    div{
        width: 40px;
        height: 40px;
        overflow: hidden;
        margin: 0 auto;
        padding: 12px 0;
        img{
            width: 100%;
        }
    }
    span{
    display: block;
    font-size: 24px;
}
}
.router-link-active{
    color: #69cf7a;
} 

</style>

