const route =  {
    path: '/mall',
    component: ()=>import('../pages/mall'),
    children:[
        {
            path:'/',
            
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