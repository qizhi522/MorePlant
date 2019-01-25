<template>
    <div class="page" id="plants">
        <h1>植物圈</h1>
        <button @click="cc">获取</button>
        <img :src="list" alt="">
    </div>
</template>

<script>
import {getplantList} from '../../service/plantsService.js'

export default {
    data(){
        return{
            list:'',
        }
    },
    created(){

    },
    methods:{
        cc(){
            getplantList().then(data => {
                console.log(data[0].url);
                
                this.list=data[0].url;
            })
        }
    }
}
</script>

<style>

</style>
