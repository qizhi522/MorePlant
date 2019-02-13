<template>
  <div id="app">

    <router-view/>

    <tab-bar>
        <tab-item v-for="tabItem in tabList" :key="tabItem.title" :info="tabItem">
        </tab-item>
    </tab-bar>

  </div>

</template>

<script>



export default {
  data(){
    return{
      tabList:[
        {title: '植物圈', path: '/',url: '/img/plants.png'},
        {title: '社区', path: '/communit',url: '/img/communit.png'},
        {title: '商城', path: '/mall',url: '/img/mall.png'},
        {title: '我的', path: '/mine',url: '/img/mine.png'},
      ]
    }
  }
}
</script>

<style>
.page{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 49px;
}

</style>
