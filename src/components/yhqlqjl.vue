<template>
	<div id="yhqlqjl">
		<div class="head">
			<img src="../../public/img/u174.png" />
			优惠券领取记录
		</div>
		<div class="bod">
			<div class="nan">
				<div class="ding">
					<div class="left">
						<el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="-"
						 start-placeholder="领取起始日期" end-placeholder="领取截止日期" :picker-options="pickerOptions">
						</el-date-picker>
						<el-input class="shang" v-model="searchValue" placeholder="请输入优惠券名称"></el-input>
						<el-select v-model="value" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
					<div class="right">
						<el-button type="primary" @click="doFilter">查询</el-button>
					</div>
				</div>
				<div class="di">
					<el-table style="width: 100%;" :data="tableData" border>
						<el-table-column label="优惠券名称" prop="yhqmc" width="160">
						</el-table-column>
						<el-table-column label="会员" prop="hy" width="130">
						</el-table-column>
						<el-table-column label="领取时间" prop="lqsj" width="160">
						</el-table-column>
						<el-table-column label="过期时间" prop="gqsj" width="170">
						</el-table-column>
						<el-table-column label="消费时间" prop="xfsj" width="170">
						</el-table-column>
						<el-table-column label="消费门店" prop="xfmd" width="195">
						</el-table-column>
						<el-table-column label="状态" prop="zt" width="120">
						</el-table-column>
					</el-table>
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
					 :page-sizes="[5, 10, 15, 20]" :page-size='pagesize' layout="total, sizes, prev, pager, next, jumper" :total="totalItems">
					</el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'yhqlqjl',
		data() {
			return {
				userList: [{
					yhqmc: '测试优惠券',
					hy: '十月大神',
					lqsj: '2018-12-12 10:00:00',
					gqsj: '2019-01-12 10:00:00',
					xfsj: '---',
					xfmd: '---',
					zt: '未使用',
				}, {
					yhqmc: '测试优惠券',
					hy: '十月大神',
					lqsj: '2018-12-12 10:00:00',
					gqsj: '2019-01-12 10:00:00',
					xfsj: '',
					xfmd: '花生米科技公司（越秀店）',
					zt: '使用中',
				}, {
					yhqmc: '测试优惠券',
					hy: '十月大神',
					lqsj: '2018-12-12 10:00:00',
					gqsj: '永久有效',
					xfsj: '',
					xfmd: '花生米科技公司（越秀店）',
					zt: '使用中',
				}, {
					yhqmc: '测试优惠券',
					hy: '十月大神',
					lqsj: '2018-12-12 10:00:00',
					gqsj: '永久有效',
					xfsj: '2018-12-31 08:08:08',
					xfmd: '花生米科技公司（天河店）',
					zt: '已使用',
				}, {
					yhqmc: '测试优惠券',
					hy: '十月大神',
					lqsj: '2018-12-12 10:00:00',
					gqsj: '2019-01-12 10:00:00',
					xfsj: '---',
					xfmd: '---',
					zt: '已过期',
				}, {
					yhqmc: '测试优惠券',
					hy: '十月大神',
					lqsj: '2018-12-12 10:00:00',
					gqsj: '永久有效',
					xfsj: '2018-12-31 08:08:08',
					xfmd: '花生米科技公司（黄埔店）',
					zt: '已使用',
				}, {
					yhqmc: '测试优惠券',
					hy: '十月大神',
					lqsj: '2018-12-12 10:00:00',
					gqsj: '永久有效',
					xfsj: '2018-12-31 08:08:08',
					xfmd: '花生米科技公司（天河店）',
					zt: '已使用',
				}, {
					yhqmc: '测试优惠券',
					hy: '十月大神',
					lqsj: '2018-12-12 10:00:00',
					gqsj: '2019-01-12 10:00:00',
					xfsj: '---',
					xfmd: '---',
					zt: '已过期',
				}, {
					yhqmc: '测试优惠券',
					hy: '十月大神',
					lqsj: '2018-12-12 10:00:00',
					gqsj: '2019-01-12 10:00:00',
					xfsj: '---',
					xfmd: '---',
					zt: '已过期',
				}, {
					yhqmc: '测试优惠券',
					hy: '十月大神',
					lqsj: '2018-12-12 10:00:00',
					gqsj: '2019-01-12 10:00:00',
					xfsj: '---',
					xfmd: '---',
					zt: '已过期',
				}],
				currentPage: 1, //初始页
				pagesize: 10, //    每页的数据
				totalItems: 0,
				tableData: [],
				filterTableData: [],
				flag: false,
				pickerOptions: {
					shortcuts: [{
						text: '最近一周',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近一个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近三个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
							picker.$emit('pick', [start, end]);
						}
					}]
				},
				value2: '',
				searchValue: '',
				options: [{
						value: '选项1',
						label: '全部'
					}, {
						value: '选项2',
						label: '未使用'
					}, {
						value: '选项3',
						label: '使用中'
					},
					{
						value: '选项4',
						label: '已使用'
					},
					{
						value: '选项5',
						label: '已过期'
					}
				],
				value: '选项1'
			}

		},
		methods: {
			mockRequset() {
				this.totalItems = this.userList.length;
				if (this.totalItems > this.pagesize) {
					for (let index = 0; index < this.pagesize; index++) {
						this.tableData.push(this.userList[index]);
					}
				} else {
					this.tableData = this.userList;
				}
			},
			doFilter() {
				this.tableData = [];
				this.filterTableData = [];
				this.userList.filter((item) => {
					if ('yhqmc' in item || 'hy' in item || 'lqsj' in item || 'gqsj' in item || 'xfsj' in item || 'xfmd' in item ||
						'zt' in
						item) {
						if (item.yhqmc.indexOf(this.searchValue) > -1 ||
							item.hy.indexOf(this.searchValue) > -1 ||
							item.lqsj.indexOf(this.searchValue) > -1 ||
							item.gqsj.indexOf(this.searchValue) > -1 ||
							item.xfsj.indexOf(this.searchValue) > -1 ||
							item.xfmd.indexOf(this.searchValue) > -1 ||
							item.zt.indexOf(this.searchValue) > -1) {
							this.filterTableData.push(item);
						}
					}
				})
				// 页面数据改变重新统计数据数量和当前页
				this.currentPage = 1;
				this.totalItems = this.filterTableData.length;
				// 渲染表格,根据值
				this.currentChangePage(this.filterTableData);
				// 页面初始化数据需要判断是否检索过
				this.flag = true;
			},
			handleSizeChange: function(val) {
				this.pagesize = val;
				this.handleCurrentChange(1);
			},
			handleCurrentChange: function(val) {
				this.currentPage = val;
				// 判断是否为搜索的数据,传入对应值
				if (!this.flag) {
					this.currentChangePage(this.userList);
				} else {
					this.currentChangePage(this.filterTableData);
				}
			},
			currentChangePage(list) {
				let fromNum = (this.currentPage - 1) * this.pagesize;
				let toNum = this.currentPage * this.pagesize;
				this.tableData = [];
				for (; fromNum < toNum; fromNum++) {
					if (list[fromNum]) {
						this.tableData.push(list[fromNum]);
					}
				}
			},
		},
		beforeMount() {
			this.mockRequset()
		}
	}
</script>

<style>
	#yhqlqjl .head {
		display: flex;
		align-items: center;
		background: #FFFFFF;
		padding: 15px;
		color: #898989;
	}

	#yhqlqjl .bod {
		padding: 10px 25px 15px 25px;
	}

	#yhqlqjl .nan {
		background: #FFFFFF;
		padding: 50px 40px 30px 40px;
		color: #333333;
	}

	#yhqlqjl .ding {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	#yhqlqjl .di{
		margin-top: 20px;
	}
	#yhqlqjl .left {
		display: flex;
	}

	#yhqlqjl .el-input__inner {
		border: none;
	}

	#yhqlqjl .el-range-input:hover {
		border: 1px solid #FF8800 !important;
	}

	#yhqlqjl .shang input {
		height: 36px;
		border: 1px solid #DCDFE6 !important;
	}

	#yhqlqjl .shang {
		width: 200px;
	}

	#yhqlqjl .shang:hover input {
		border: 1px solid #FF8800 !important;
	}

	#yhqlqjl .el-input--suffix {
		width: 100px !important;
		margin-left: 20px;
	}

	#yhqlqjl .el-input__inner i {
		display: none;
	}

	#yhqlqjl .el-range-input {
		border: 1px solid #DCDFE6 !important;
		width: 150px !important;
		text-align: left !important;
	}

	#yhqlqjl .el-button--primary {
		color: #FFFFFF;
		background: #FF8800;
		border-color: #FF8800;
	}

	#yhqlqjl .el-button--primary.is-active,
	.el-button--primary:active {
		background: #FF8800 !important;
		border-color: #FF8800 !important;
	}

	#yhqlqjl .el-button--primary:focus,
	.el-button--primary:hover {
		background: #FF8800 !important;
		border-color: #FF8800 !important;
	}

	#yhqlqjl .el-pagination {
		text-align: center;
	}

	#yhqlqjl .cell {
		text-align: center;
	}
	#yhqlqjl th{
		background: #F2F2F2!important;
		font-family: '微软雅黑';
		font-weight: 400;
		color: #333333;
	}
	#yhqlqjl td{
		font-size: 12px;
		font-family: '微软雅黑';
		font-weight: 400;
		color: #333333;
	}
	
</style>
