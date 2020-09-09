import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [

	  {
	  	path: '/',
	  	redirect: '/login'
	  },
	  {
	  	path:'/login',
	  	component:()=>import('../views/login.vue'),
	  },
	  {
	  	path: '/shouye',
	  	component: () => import('../views/shouye.vue'),
		children: [{
				path: '/shou',
				component: () => import('../components/shou.vue')
			},
			{
				path: '/shouye',
				redirect: '/shou'
			},
			{
					path: '/ziliao',
					component: () => import('../components/ziliao.vue')
			},
			{
					path: '/yzxfq',
					component: () => import('../components/yzxfq.vue')
			},
			{
					path: '/yzyhq',
					component: () => import('../components/yzyhq.vue')
			},
			{
					path: '/yzhdbm',
					component: () => import('../components/yzhdbm.vue')
			},
			{
					path: '/tgddlb',
					component: () => import('../components/tgddlb.vue')
			},
			{
					path: '/spddlb',
					component: () => import('../components/spddlb.vue')
			},
			{
					path: '/yhqlqjl',
					component: () => import('../components/yhqlqjl.vue')
			},
			{
					path: '/hdbm',
					component: () => import('../components/hdbm.vue')
			},
			{
					path: '/ddf',
					component: () => import('../components/ddf.vue')
			},
			{
					path: '/ysdd',
					component: () => import('../components/ysdd.vue')
			},
			{
					path: '/yhq',
					component: () => import('../components/yhq.vue')
			},
			{
					path: '/zsgc',
					component: () => import('../components/zsgc.vue')
			},
			{
					path: '/xfpl',
					component: () => import('../components/xfpl.vue')
			},
			{
					path: '/yhqpl',
					component: () => import('../components/yhqpl.vue')
			},
			{
					path: '/hdpl',
					component: () => import('../components/hdpl.vue')
			},
			{
					path: '/mdpl',
					component: () => import('../components/mdpl.vue')
			},
			{
					path: '/tg',
					component: () => import('../components/tg.vue')
			},
			{
					path: '/sp',
					component: () => import('../components/sp.vue')
			},
			{
					path: '/hd',
					component: () => import('../components/hd.vue')
			}
		]
	  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    // 1.如果访问的是登录页面（无需权限），直接放行
    if (to.path === '/login') return next()
        // 2.如果访问的是有登录权限的页面，先要获取token
    const tokenStr = window.sessionStorage.getItem("token")
        // 2.1如果token为空，强制跳转到登录页面；否则，直接放行
    if (!tokenStr) return next('/login')
    next()
})

export default router
