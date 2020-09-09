<template>
	<div id="zsgc">
		<div class="head">
			<img src="../../public/img/u174.png" />
			增删改查
		</div>
		<div class="bod">
			<div class="nan">
				<div>
					<div v-for="(item,index) in list" :key="index" class="zf">
						<div>id: {{item.id}}</div>
						<div>courseName: {{item.courseName}}</div>
						<div>courseDesc: {{item.courseDesc}}</div>
						<div>1id: {{item.professional.id}}</div>
						<div>professionalName: {{item.professional.professionalName}}</div>
						<div>professionalDesc: {{item.professional.professionalDesc}}</div>
						<button @click="sc(item.id)">删除</button>
						<button @click="xg(item.id)">修改</button>
					</div>
					<div>
						<div>courseName:<input type="text" v-model="input2"></div>
						<div>courseDesc:<input type="text" v-model="input3"></div>
						<div><button @click="tj()">添加</button></div>
						<div>
							<input placeholder="查询" v-model="search" /><button @click="cha">查询</button>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: '',
				input2: '',
				input3: '',
				search: ''
			}
		},
		created() {
			this.axios({
					url: "http://139.9.169.87:8081/examsystem/getAllCourse",
					method: "get",
				})
				.then(res => {
					this.list = res.data.data
					console.log(res)
				})
		},
		methods: {
			cha() {
				let chaxun = this.list.filter((data)=>{
					if(data.courseName == this.search){
						return true
					}
				})
				this.list = chaxun
			},
			tj() {
				this.axios.post('http://139.9.169.87:8081/examsystem/addCourse?professionalId=161&courseName=' + this.input2 +
						'&courseDesc=' + this.input3, {

						}, {
							headers: {
								'content-type': 'application/x-www-form-urlencoded',
							}
						})
					.then(res => {
						console.log(res)
					})
			},
			sc(index) {
				this.axios.get("http://139.9.169.87:8081/examsystem/deleteCourse", {
						params: {
							id: index
						}
					})
					.then(res => {
						console.log(res)
					})
			},
			xg(val) {
				this.axios.post("http://139.9.169.87:8081/examsystem/updateCourse?professionalId=161&id=" + val + "&courseDesc=" +
						this.input2 + "&courseName=" + this.input3, {}, {
							headers: {
								'content-type': 'application/x-www-form-urlencoded',
							}
						})
					.then(res => {
						console.log(res)
					})
			}
		}
	}
</script>

<style>
	#zsgc .head {
		display: flex;
		align-items: center;
		background: #FFFFFF;
		padding: 15px;
		color: #898989;
	}

	#zsgc .bod {
		padding: 10px 25px 15px 25px;
	}

	#zsgc .nan {
		background: #FFFFFF;
		padding: 50px 40px 30px 40px;
		color: #333333;
	}

	.zf {
		display: flex;
	}

	.zf>div {
		flex: 1;
	}
</style>
