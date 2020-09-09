<template>
	<div id="yzxfq">
		<div class="head">
			<img src="../../public/img/u174.png" />
			验证消费券
		</div>
		<div class="bod">
			<div class="nan">
				<el-tabs type="card">
					<el-tab-pane label="消费券验证">
						<div>选择门店</div>
						<el-select v-model="value" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
						<div>请先验证消费券，在接待</div>
						<div class="input1">
							<el-input v-model="input" placeholder="请输入消费券[123456]"></el-input>
							<el-button type="primary">验证消费券</el-button>
						</div>
					</el-tab-pane>
					<el-tab-pane label="消费券批量验证">
						<div>选择门店</div>
						<el-select v-model="value" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
						<div>请先验证消费券，在接待</div>
						<div class="input1">
							<el-input v-model="input" placeholder="请输入消费券[123456]"></el-input>
							<div class="text1">
								消费券输入正确
							</div>
						</div>
						<div class="input1">
							<el-input v-model="input1" placeholder="请输入消费券[123456]"></el-input>
							<div class="text1">
								没有消费券数据
							</div>
						</div>
						<div class="input1">
							<el-input v-model="input2" placeholder="请输入消费券[123456]"></el-input>
							<div class="text1">
								该券已于2018-12-12-12 12:12:12:12过期
							</div>
						</div>
						<div class="input1">
							<el-input v-model="input3" placeholder="请输入消费券[123456]"></el-input>
							<div class="text1">
								该券已于2018-12-12-12 12:12:12:12使用过
							</div>
						</div>
						<div class="input1">
							<el-input v-model="input4" placeholder="请输入消费券[123456]"></el-input>
							<div class="text1">
								验证码格式错误
							</div>
						</div>
						<el-button type="primary">验证消费券</el-button>
					</el-tab-pane>
					<el-tab-pane label="超级验证">
						<div>选择门店</div>
						<el-select v-model="value" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
						<div>请先验证消费券，在接待</div>
						<div class="input1">
							<el-input v-model="input" placeholder="请输入消费券[123456]"></el-input>
							<el-button type="primary">验证消费券</el-button>
						</div>
						<div class="img1">
							<img src="../../public/img/tishi.png" />
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'yzxfq',
		data() {
			return {
				options: [{
					value: '选项1',
					label: '花生米科技公司总部'
				}, {
					value: '选项2',
					label: '花生米科技公司（越秀店）'
				}, {
					value: '选项3',
					label: '花生米科技公司（天河店）'
				}, {
					value: '选项4',
					label: '花生米科技公司（黄埔店）'
				}],
				value: '选项1',
				input: '',
				input1: '111111',
				input2: '222222',
				input3: '333333',
				input4: '1'
			}
		}
	}
</script>

<style>
	#yzxfq .head {
		display: flex;
		align-items: center;
		background: #FFFFFF;
		padding: 15px;
		color: #898989;
	}

	#yzxfq .bod {
		padding: 10px 25px 15px 25px;
	}

	#yzxfq .nan {
		background: #FFFFFF;
		padding: 50px 40px 30px 40px;
		color: #333333;
	}

	#yzxfq .el-tabs--card>.el-tabs__header {
		border-bottom: 2px solid #FF8800;
	}

	#yzxfq .el-tabs__nav-wrap::after {
		background: #FF8800;
	}

	#yzxfq .el-tabs--card>.el-tabs__header .el-tabs__nav {
		border: #FF8800;
	}

	#yzxfq .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
		border-bottom: #FF8800;
	}

	#yzxfq .el-tabs__item.is-active {
		color: #FFFFFF;
		background: #FF8800;
	}

	#yzxfq .input1 {
		display: flex;
	}

	#yzxfq .input1 .el-input {
		width: 221px;
		margin-right: 15px;
	}

	#yzxfq .el-button--primary {
		color: #FFFFFF;
		background: #FF8800;
		border-color: #FF8800;
	}

	#yzxfq .el-tab-pane>div {
		margin-bottom: 15px;
		font-size: 14px;
	}

	#yzxfq .el-tab-pane>div input:hover {
		border-color: #FF8800!important;
	}

	#yzxfq .el-select .el-input.is-focus .el-input__inner {
		border-color: #FF8800!important;
	}
	#yzxfq .img1{
		width: 100%;
		margin-top: 50px;
	}
	#yzxfq .img1 img{
		width: 100%;
	}
	#yzxfq .text1{
		width: 320px;
		height: 40px;
		font-weight: 400;
		background: #F2F2F2;
		font-size: 12px;
		padding-left: 10px;
		color: #666666;
		line-height: 40px;
	}
	#yzxfq .el-button--primary.is-active, .el-button--primary:active{
		background: #FF8800 !important;
		border-color: #FF8800 !important;
	}
	#yzxfq .el-button--primary:focus, .el-button--primary:hover{
		background: #FF8800 !important;
		border-color: #FF8800 !important;
	}
</style>
