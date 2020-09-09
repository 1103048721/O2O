<template>
	<div id="yzhdbm">
		<div class="head">
			<img src="../../public/img/u174.png" />
			验证活动报名
		</div>
		<div class="bod">
			<div class="nan">
				<div>选择门店</div>
				<el-select v-model="value" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
				<div>请输入活动序列号进行验证消费</div>
				<div class="input1">
					<el-input v-model="input" placeholder="请输入活动序列号[123456]"></el-input>
					<el-button type="primary">验证活动报名</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'yzhdbm',
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
			}
		}
	}
</script>

<style>
	#yzhdbm .head {
		display: flex;
		align-items: center;
		background: #FFFFFF;
		padding: 15px;
		color: #898989;
	}
	
	#yzhdbm .bod {
		padding: 10px 25px 15px 25px;
	}
	
	#yzhdbm .nan {
		background: #FFFFFF;
		padding: 50px 40px 30px 40px;
		color: #333333;
	}
	#yzhdbm .input1 {
		display: flex;
	}
	
	#yzhdbm .input1 .el-input {
		width: 221px;
		margin-right: 15px;
	}
	
	#yzhdbm .el-button--primary {
		color: #FFFFFF;
		background: #FF8800;
		border-color: #FF8800;
	}
	#yzhdbm .el-select .el-input.is-focus .el-input__inner {
		border-color: #FF8800 !important;
	}
	#yzhdbm .nan>div {
		margin-bottom: 15px;
		font-size: 14px;
	}
	
	#yzhdbm .nan>div input:hover {
		border-color: #FF8800 !important;
	}
	#yzhdbm .el-button--primary.is-active, .el-button--primary:active{
		background: #FF8800 !important;
		border-color: #FF8800 !important;
	}
	#yzhdbm .el-button--primary:focus, .el-button--primary:hover{
		background: #FF8800 !important;
		border-color: #FF8800 !important;
	}
</style>
