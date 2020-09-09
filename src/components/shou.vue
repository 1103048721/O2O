<template>
	<div id="shou">
		<div class="head">
			<img src="../../public/img/u174.png" />
			首页
		</div>
		<div class="bod">
			<div class="nan">
				<h2>O2O城市系统商户管理平台部分交互指南</h2>
				<div>
					<h3>验证管理</h3>
					<p>
						验证消费单页面<br />
						单张消费券验证：门店选择、“不输入、输入123456、输入其他”分别提交验证<br />
						消费券批量验证：门店选择、提交验证<br />
						超级验证：门店选择、“不输入、输入123456、输入其他”分别提交验证
					</p>
					<p>
						验证优惠券页面<br />
						门店选择、“不输入、输入123456、输入其他”分别提交验证
					</p>
					<p>
						验证活动报名页面<br />
						门店选择、“不输入、输入123456、输入其他”分别提交验证
					</p>
				</div>
				<div>
					<h3>订单管理</h3>
					<p>
						商品订单列表页面<br />
						查看发票、待验证详情、待收货详情、待发货详情、待收货详情、已退款详情、待评价详情、已评价详情、退款处理、发货处理
					</p>
					<p>
						到店付页面<br />
						订单详情
					</p>
					<p>
						预售订单<br />
						查看发票、待付订金详情、待付尾款详情、待发货详情、待退款详情、待评价详情、发货处理、退款处理
					</p>
				</div>
				<div>
					<h3>评论管理</h3>
					<p>
						消费评论页面/优惠券评论页面/活动评论页面/门店评论页面<br />
						回复、修改回复
					</p>
				</div>
				<div>
					<h3>项目管理</h3>
					<p>
						团购页面/新增团购子页面<br />
						编辑、下架、上架、删除、状态切换<br />
						商品分类、支持门店、基本信息、团购配置、库存价格、手机端描述
					</p>
					<p>
						商品页面/新增商品子页面<br />
						编辑、下架、上架、删除、状态切换<br />
						商品分类、支持门店、基本信息、价格设置、物流配置、手机端描述
					</p>
					<p>
						优惠券页面/新增电子券子页面/新增实体券子页面<br />
						编辑、删除、状态切换<br />
						基本信息、使用规则、手机端描述
					</p>
					<p>
						活动页面/新增活动子页面<br />
						编辑、下架、上架、删除、状态切换<br />
						支持门店、基本信息、手机端描述
					</p>
				</div>
				<div>
					<h3>财务管理</h3>
					<p>
						财务报表页面<br />
						财务概况、销售走势、财务明细切换
					</p>
					<p>
						商户提现页面/银行账户页面/开票设置页面<br />
						提现金额、图形校验码、短信验证码、是否开票设置
					</p>
				</div>
				<div>
					<h3>门店管理</h3>
					<p>
						门店列表页面/新增门店子页面<br />
						审核修改、资料更新、上架、下架、修改、状态切换<br />
						分类、子分类、城市筛选、商圈、地图定位
					</p>
					<p>
						外卖预定页面/外卖设置子页面/预约项目设置子页面/外卖分类子页面/外卖商品子页面<br />
						新增、修改、删除、查询、状态切换、排序
					</p>
					<p>
						上门服务设置页面/服务管理子页面/上门设置子页面<br />
						新增、修改、删除、查询、状态切换、排序
					</p>
					<p>
						剩余的页面交互大家自己点击体验吧！
					</p>
				</div>
				<div class="img1">
					<img src="../../public/img/u370.png" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'shou',
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped="scoped">
	#shou .head{
		display: flex;
		align-items: center;
		background: #FFFFFF;
		padding: 15px;
		color: #898989;
	}
	#shou .bod{
		padding: 10px 25px 15px 25px;
	}
	#shou .nan{
		background: #FFFFFF;
		padding: 50px 40px 30px 40px;
		color: #333333;
	}
	#shou h2{
		text-align: center;
		margin-top: 0;
		font-size: 20px;
		font-weight: 700;
		font-family:'微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
	}
	#shou h3{
		font-size: 18px;
		font-weight: 700;
		font-family:'微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
		margin: 0;
		margin-bottom: -25px;
	}
	#shou p{
		line-height: 30px;
		margin: 30px 0 30px 0;
	}
	#shou .img1{
		width: 100%;
	}
	#shou .img1 img{
		width: 100%;
	}
</style>
