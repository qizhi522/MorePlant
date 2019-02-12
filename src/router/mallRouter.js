const route =  {
    path: '/mall',
    component: ()=>import('../pages/mall'),
    redirect:'/mall/freshFlowers',
    children:[
        {
            path:'freshFlowers',
            component:()=>import('../pages/mall/components/freshFlowers.vue')
        },
        {
            path:'outsidePlant',
            component:()=>import('../pages/mall/components/outsidePlant.vue')
        },
        {
            path:'flowerPot',
            component:()=>import('../pages/mall/components/flowerPot.vue')
        }
    ]
}

export default route;