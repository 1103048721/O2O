<template>
	<div id="login">
		<div class="denglu">
			<div class="text1">O2O商城商家后台系统</div>
			<div class="input">
				<el-input placeholder="登录账号(pmgod)" @focus="focusPrice1($event)" @blur="blurPrice1($event)" v-model="input1">
					<i slot="prefix" class="el-input__icon el-icon-s-custom"></i>
				</el-input>
				<p class="gan">
					<span><i class="el-icon-warning"></i>&nbsp;登录账号不能为空！</span>
				</p>
			</div>
			<div class="input">
				<el-input placeholder="登录密码(pmgod.cn)" @focus="focusPrice2($event)" @blur="blurPrice2($event)" type="password"
				 v-model="input2">
					<i slot="prefix" class="el-input__icon el-icon-s-cooperation"></i>
				</el-input>
				<p class="gan">
					<span><i class="el-icon-warning"></i>&nbsp;登录密码不能为空！</span>
				</p>
			</div>
			<div class="input">
				<div class="yan">
					<el-input placeholder="区分大小写" @focus="focusPrice3($event)" @blur="blurPrice3($event)" v-model="input3">
						<i slot="prefix" class="el-input__icon el-icon-s-release"></i>
					</el-input>
					<div class="ma" @click="refreshCode">
						<s-identify :identifyCode="identifyCode"></s-identify>
					</div>
				</div>
				<p class="gan">
					<span><i class="el-icon-warning"></i>&nbsp;验证码不能为空！</span>
				</p>
			</div>
			<div>
				<el-button type="warning" @click="login">登录</el-button>
			</div>
			<div class="text2" @click="tiao">
				免校检直接登录
			</div>
		</div>
	</div>
</template>

<script>
	import SIdentify from '../components/RandomCode.vue'
	import axios from 'axios'
	export default {
		name: 'login',
		data() {
			return {
				O2O: '',
				input1: '',
				input2: '',
				input3: '',
				identifyCodes: '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
				identifyCode: '',

			}
		},
		components: {
			// 注册绘制随机验证码的组件
			SIdentify
		},
		mounted() {
			// 验证码初始化
			this.identifyCode = ''
			this.makeCode(this.identifyCodes, 4)
		},
		methods: {
			focusPrice1: function($even) {
				document.getElementsByClassName("gan")[0].style.opacity = 0
			},
			//文本失焦事件
			blurPrice1: function($even) {
				if ($even.target.value === '') {
					document.getElementsByClassName("gan")[0].style.opacity = 1
				}
			},
			focusPrice2: function($even) {
				document.getElementsByClassName("gan")[1].style.opacity = 0
			},
			//文本失焦事件
			blurPrice2: function($even) {
				if ($even.target.value === '') {
					document.getElementsByClassName("gan")[1].style.opacity = 1
				}
			},
			focusPrice3: function($even) {
				document.getElementsByClassName("gan")[2].style.opacity = 0
			},
			//文本失焦事件
			blurPrice3: function($even) {
				if ($even.target.value === '') {
					document.getElementsByClassName("gan")[2].style.opacity = 1
				}
			},
			// 生成随机数
			randomNum(min, max) {
				return Math.floor(Math.random() * (max - min) + min)
			},
			// 切换验证码
			refreshCode() {
				this.identifyCode = ''
				this.makeCode(this.identifyCodes, 4)
			},
			// 生成四位随机验证码
			makeCode(o, l) {
				for (let i = 0; i < l; i++) {
					this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
				}
			},
			tiao() {
				sessionStorage.setItem("token", "免校检直接登录")
				this.$router.push({
					path: '/shouye'
				})
			},
			login() {
				axios.post('http://139.9.169.87:8081/examsystem/login?username=' + this.input1 + '&password=' + this.input2)
					.then(res => {
						console.log(res)
						sessionStorage.setItem("token", res.data.data.token)
						this.$router.push('/shouye')
					})
					.catch(err => {
						console.log(err)
					})
				// if(this.input1 == this.O2O.zhanghao){
				// 	if(this.input2 == this.O2O.mima){
				// 		if(this.input3 == this.identifyCode){
				// 			sessionStorage.setItem('user',1s)
				// 			this.$router.push({
				// 				path: '/shouye'
				// 			})
				// 		}else{
				// 			this.$message({
				// 			    message: '图形校检码错误',
				// 			    center: true
				// 			});
				// 		}
				// 	}else{
				// 		this.$message({
				// 		    message: '登录密码错误',
				// 		    center: true
				// 		});
				// 	}
				// }else{
				// 	this.$message({
				// 	    message: '登录账号错误',
				// 	    center: true,
				// 		duration: 2000,
				// 		offset:350,
				// 	});
				// }
			}
		},
	}
</script>

<style scoped="scoped">
	#login {
		background: url(../../public/img/u0_state0.png) no-repeat;
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
		position: relative;
	}

	#login .denglu {
		background: #FDDCDF;
		position: absolute;
		top: 25%;
		right: 18%;
		border-radius: 5px;
		padding: 20px 35px 0px 35px;
	}

	#login .text1 {
		color: #FF8800;
		font-weight: bold;
		font-size: 28px;
		margin-bottom: 25px;
	}

	#login .el-button--warning {
		background: #FF8800;
		border-color: #FF8800;
		width: 100%;
	}

	#login .text2 {
		color: #FF8800;
		font-size: 12px;
		text-align: right;
		margin: 20px 0 5px 0;
		cursor: pointer;
	}

	#login .input p {
		margin: 5px;
		opacity: 0;
	}

	#login .input span {
		border-width: 0px;
		width: 125px;
		height: 12px;
		font-family: 'FontAwesome';
		font-weight: 400;
		font-style: normal;
		font-size: 12px;
		color: #FF0033;
		text-align: center;
	}

	#login .yan {
		display: flex;
	}

	#login .ma {
		cursor: pointer;
	}
</style>
