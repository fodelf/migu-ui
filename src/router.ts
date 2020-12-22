import {createRouter,createWebHashHistory} from 'vue-router'
import Doc from './view/Doc.vue'
import Home from './view/Home.vue'
import SwitchDemo from './components/SwitchDemo/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo/DialogDemo.vue'
import TabsDemo from './components/TabsDemo/TabsDemo.vue'
import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import install from './markdown/install.md'
import getstarted from './markdown/get-started.md'
import { h } from 'vue' 
const history=createWebHashHistory()
const md=string=>h(Markdown,{content:string,key:string})
export const router=createRouter({
    history:history,
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/doc',
            component:Doc,
            children:[
                {
                    path:"",
                    redirect:'/doc/intro'
                },
                {
                    path:"intro",
                    component:md(intro)
                },
                {
                    path:"install",
                    component:md(install)
                },
                {
                    path:"get-started",
                    component:md(getstarted)
                },
                {
                    path:'switch',
                    component:SwitchDemo
                },
                {
                    path:'button',
                    component:ButtonDemo
                },
                {
                    path:'dialog',
                    component:DialogDemo
                },
                {
                    path:'tabs',
                    component:TabsDemo
                }
            ]
        }
    ]
})