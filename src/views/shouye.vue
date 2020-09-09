<template>
	<div id="shouye">
		<div class="top">
			<div class="zuo">
				<img src="../../public/img/ut_u19.png" />
				<div>O2O城市系统商户管理平台</div>
			</div>
			<div class="you">
				<router-link tag="div" to="/ziliao">商户资料管理</router-link>
				<div>十月大神</div>
				<div class="el-icon-message-solid"></div>
				<router-link tag="div" to="/shou" class="el-icon-s-home"></router-link>
				<router-link tag="div" to="/" class="el-icon-switch-button"></router-link>
			</div>
		</div>
		<div class="bottom">
			<div class="container">
				<el-container style="height: 100%; border: none">
					<el-aside width="300px" style="background-color:#FAFAFA">
						<el-menu>
							<el-submenu index="1">
								<template slot="title"><i class="el-icon-mouse"></i>验证管理</template>
								<el-menu-item-group>
									<router-link tag="el-menu-item" index="1-1" to="/yzxfq">·&nbsp;验证消费券</router-link>
									<router-link tag="el-menu-item" index="1-2" to="/yzyhq">·&nbsp;验证优惠券</router-link>
									<router-link tag="el-menu-item" index="1-3" to="/yzhdbm">·&nbsp;验证活动报名</router-link>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="2">
								<template slot="title"><i class="el-icon-mouse"></i>订单管理</template>
								<el-menu-item-group>
									<router-link tag="el-menu-item" index="2-1" to="/tgddlb">·&nbsp;团购订单列表</router-link>
									<router-link tag="el-menu-item" index="2-2" to="/spddlb">·&nbsp;商品订单列表</router-link>
									<router-link tag="el-menu-item" index="2-3" to="/yhqlqjl">·&nbsp;优惠券领取记录</router-link>
									<router-link tag="el-menu-item" index="2-4" to="/hdbm">·&nbsp;活动报名</router-link>
									<router-link tag="el-menu-item" index="2-5" to="/ddf">·&nbsp;到店付</router-link>
									<router-link tag="el-menu-item" index="2-6" to="/ysdd">·&nbsp;预售订单</router-link>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="3">
								<template slot="title"><i class="el-icon-mouse"></i>评论管理</template>
								<el-menu-item-group>
									<router-link tag="el-menu-item" index="3-1" to="/xfpl">·&nbsp;消费评论</router-link>
									<router-link tag="el-menu-item" index="3-2" to="/yhqpl">·&nbsp;优惠券评论</router-link>
									<router-link tag="el-menu-item" index="3-3" to="/hdpl">·&nbsp;活动评论</router-link>
									<router-link tag="el-menu-item" index="3-4" to="/mdpl">·&nbsp;门店评论</router-link>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="4">
								<template slot="title"><i class="el-icon-mouse"></i>项目管理</template>
								<el-menu-item-group>
									<router-link tag="el-menu-item" index="3-1" to="/zsgc">·&nbsp;增删改查</router-link>
									<router-link tag="el-menu-item" index="3-2" to="/tg">·&nbsp;团购</router-link>
									<router-link tag="el-menu-item" index="3-3" to="/sp">·&nbsp;商品</router-link>
									<router-link tag="el-menu-item" index="3-4" to="/yhq">·&nbsp;优惠券</router-link>
									<router-link tag="el-menu-item" index="3-5" to="/hd">·&nbsp;活动</router-link>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="5">
								<template slot="title"><i class="el-icon-mouse"></i>财务管理</template>
								<el-menu-item-group>
									<el-menu-item index="1-1">·&nbsp;财务报表</el-menu-item>
									<el-menu-item index="1-2">·&nbsp;商户提现</el-menu-item>
									<el-menu-item index="1-3">·&nbsp;银行账户</el-menu-item>
									<el-menu-item index="1-4">·&nbsp;开票设置</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="6">
								<template slot="title"><i class="el-icon-mouse"></i>门店管理</template>
								<el-menu-item-group>
									<el-menu-item index="1-1">·&nbsp;门店列表</el-menu-item>
									<el-menu-item index="1-2">·&nbsp;外卖预定设置</el-menu-item>
									<el-menu-item index="1-3">·&nbsp;上门服务设置</el-menu-item>
									<el-menu-item index="1-4">·&nbsp;配送设置</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="7">
								<template slot="title"><i class="el-icon-mouse"></i>账户管理</template>
								<el-menu-item-group>
									<el-menu-item index="1-1">·&nbsp;配送模板</el-menu-item>
									<el-menu-item index="1-2">·&nbsp;子账户管理</el-menu-item>
									<el-menu-item index="1-3">·&nbsp;快递列表</el-menu-item>
									<el-menu-item index="1-4">·&nbsp;微店设置</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="8">
								<template slot="title"><i class="el-icon-mouse"></i>营销管理</template>
								<el-menu-item-group>
									<el-menu-item index="1-1">·&nbsp;满免运费</el-menu-item>
									<el-menu-item index="1-2">·&nbsp;商品预售</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="9">
								<template slot="title"><i class="el-icon-mouse"></i>外卖预定管理</template>
								<el-menu-item-group>
									<el-menu-item index="1-1">·&nbsp;外卖订单</el-menu-item>
									<el-menu-item index="1-2">·&nbsp;预定订单</el-menu-item>
									<el-menu-item index="1-3">·&nbsp;异常外卖订单</el-menu-item>
									<el-menu-item index="1-4">·&nbsp;对账单</el-menu-item>
									<el-menu-item index="1-5">·&nbsp;催单记录</el-menu-item>
									<el-menu-item index="1-6">·&nbsp;预定电子券验证</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="10">
								<template slot="title"><i class="el-icon-mouse"></i>上门服务管理</template>
								<el-menu-item-group>
									<el-menu-item index="1-1">·&nbsp;服务管理</el-menu-item>
									<el-menu-item index="1-2">·&nbsp;服务订单</el-menu-item>
									<el-menu-item index="1-3">·&nbsp;异常服务订单</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
						</el-menu>
					</el-aside>
				</el-container>
			</div>
			<el-main class="body">
				
					<router-view></router-view>
				
			</el-main>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'shouye',
		data() {
			return {
				activeIndex: '1',
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				
			}
		}
	}
</script>

<style>
	#shouye {
		height: 100%;
	}
	#shouye .el-main{
		padding: 0;
	}
	#shouye .el-aside {
		color: #333;
		background: #FAFAFA;
	}

	#shouye .el-menu {
		background-color: #FAFAFA !important;
		border: none;
	}

	#shouye .el-submenu__title:hover {
		background-color: #FAFAFA !important;
		color: #FF8800;
	}

	#shouye .el-submenu__title:focus,
	#shouye .el-submenu__title:hover {
		outline: 0;
		background-color: #FAFAFA;
		color: #FF8800;
	}

	#shouye .el-menu-item:focus,
	#shouye .el-menu-item:hover {
		color: #FF8800;
	}

	#shouye .el-menu-item.is-active {
		color: #FF8800;
	}

	#shouye .bottom {
		display: flex;
		height: 92%;
		box-sizing: border-box;
	}

	#shouye .body {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}

	#shouye .top {
		background: #FF8800;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #FFFFFF;
		height: 8%;
	}

	#shouye .zuo {
		display: flex;
		align-items: center;
		padding: 15px;
		font-size: 14px;
	}

	#shouye .zuo img {
		width: 150px;
		margin-right: 50px;
	}

	#shouye .you {
		display: flex;
		font-size: 24px;
		height: 60px;
		align-items: center;
		margin-right: 30px;
	}

	#shouye .you>div {
		height: 60px;
		box-sizing: border-box;
		padding: 20px 15px;
		cursor: pointer;
	}

	#shouye .you>div:hover {
		background: #FFA53F;
	}

	#shouye .you>div:nth-of-type(1) {
		font-size: 14px;
		cursor: auto;
	}

	#shouye .you>div:nth-of-type(2) {
		font-size: 14px;
		cursor: auto;
	}

	#shouye .you>div:last-child {
		border: none;
	}
	
	#shouye .body{
		background: #F2F2F2;
	}
</style>
