import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
// import Forms from '../views/Forms.vue'
// import Form from '../views/Form.vue'
// 品牌
import brands from '../views/Brand.vue';
import brand_create from '../views/Brand_create.vue';
// 品牌 - 推廣
import brand_promote from '../views/Brand_promote.vue'
// 推廣人 全部
import promotes from '../views/Promotes.vue'
// 商品
import brand_prods from '../views/Brand_prods.vue'
import products from '../views/Products.vue'
import product_create from '../views/Product_create.vue'
// 商品的代理商
// import prod_agents from '../views/Products_agent.vue'
// 代理商清單
// import agents from '../views/Agents.vue'
// 代理商的商品
// import agent_prods from '../views/Agent_prods.vue'

const routes = [
	// {
	// 	path: '/',
	// 	name: 'Home',
	// 	component: Home
	// },
	// 品牌
	{
		path: '/',
		name: 'brands',
		component: brands
	},
	{
		path: '/brand/create',
		name: 'brand_create',
		component: brand_create
	},
	{
		path: '/brand/:id/edit',
		name: 'brand_edit',
		component: brand_create
	},
	// 品牌的商品
	{
		path: '/brand/:id/prods',
		name: 'brand_prods',
		component: brand_prods
	},
	// 品牌的授權
	{
		path: '/brand/:id/promote',
		name: 'brand_promote',
		component: brand_promote
	},
	{
		path: '/promotes',
		name: 'promotes',
		component: promotes
	},
	// 品牌(我)的商品
	// {
	// 	path: '/mgr/prods',
	// 	name: 'prods',
	// 	component: prods
	// },
	// {
	// 	path: '/prods',
	// 	name: 'products',
	// 	component: products
	// },
	{
		path: '/prod/create',
		// brand=?
		name: 'product_create',
		component: product_create
	},
	{
		path: '/prod/:id/edit',
		// brand=?
		name: 'product_edit',
		component: product_create
	},
	// {
	// 	path: '/prod/:id/agents', // 商品的代理商 list
	// 	name: 'prod_agents',
	// 	component: prod_agents
	// },
	// 推廣商店
	// {
	// 	path: '/shop', // 代理商
	// 	name: 'shop',
	// 	component: shop
	// },
	// 推廣商店的商品
	{
		path: '/shop/:id/prods', // 代理商的商品 list
		name: 'shop_prods',
		// component: shop_prods
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
