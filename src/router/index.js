import Vue from 'vue'
import Router from 'vue-router'
import showContent from '@/pages/showContent'
import animation from '@/pages/animation'
import configuration from '@/pages/configuration'
import communication from '@/pages/communication'
import baseLayout from '@/pages/baseLayout'
import gridLayout from '@/pages/gridLayout'
import borderAnimation from '@/pages/borderAnimation'
import demo from '@/pages/demo'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/', //路由默认跳转
      redirect: 'baseLayout'
    },
    {
      name: 'baseLayout',
      path: '/baseLayout',
      component: baseLayout,
      menuIcon: 'icon-huifumorenbuju',
      isMenu: true,
      meta: {
        title: '基础布局'
      }
    },
    {
        name: 'gridLayout',
        path: '/gridLayout',
        component: gridLayout,
        menuIcon: 'icon-huifumorenbuju',
        isMenu: true,
        meta: {
          title: '栅格布局'
        }
      },
    {
      name: 'showContent',
      path: '/showContent',
      component: showContent,
      menuIcon: 'icon-neironggengxin',
      isMenu: true,
      meta: {
        title: '内容呈现'
      }
    },
    {
      name: 'animation',
      path: '/animation',
      component: animation,
      menuIcon: 'icon-jiaohuyanshidonghua',
      isMenu: true,
      meta: {
        title: '动画'
      }
    },
    {
      name: 'communication',
      path: '/communication',
      component: communication,
      menuIcon: 'icon-tongxin',
      isMenu: true,
      meta: {
        title: '通信'
      }
    },
    {
      name: 'configuration',
      path: '/configuration',
      component: configuration,
      menuIcon: 'icon-peizhi',
      isMenu: true,
      meta: {
        title: '配置'
      }
    },
    {
      name: 'borderAnimation',
      path: '/borderAnimation',
      component: borderAnimation,
      menuIcon: 'icon-peizhi',
      isMenu: true,
      meta: {
        title: '边框动画'
      }
    },
    {
      name: 'demo',
      path: '/demo',
      component: demo,
      menuIcon: 'icon-peizhi',
      isMenu: true,
      meta: {
        title: 'demo比列'
      }
    }
  ]
  // linkActiveClass: 'router-active'
})
