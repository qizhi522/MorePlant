import Tabs from './components/tab-bar/Tabs.vue'
import Tab from './components/tab-bar/Tab.vue'
import Scroller from './components/scroller/scroller.vue'
import { Icon } from 'vant';

import {FetchGet,FetchPost} from './fetch'

export default {
    install( Vue ){
        Vue.component(Tabs.name,Tabs);
        Vue.component(Tab.name,Tab);
        Vue.component(Scroller.name,Scroller);
        Vue.use(Icon);
        Vue.prototype.FetchGet = FetchGet;
        Vue.prototype.FetchPost = FetchPost;
    }
}