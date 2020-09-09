<template>
	<div id="hdbm">
		<div class="head">
			<img src="../../public/img/u174.png" />
			活动报名
		</div>
		<div class="bod">
			<div class="nan">
				<div class="ding">
					<div class="left">
						<el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="-"
						 start-placeholder="活动创建日期" end-placeholder="活动结束日期" :picker-options="pickerOptions">
						</el-date-picker>
						<el-input class="shang" v-model="searchValue" placeholder="请输入活动名称"></el-input>
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
						<el-table-column label="活动名称" prop="hdmc" width="210">
						</el-table-column>
						<el-table-column label="会员" prop="hy" width="100">
						</el-table-column>
						<el-table-column label="活动详情" width="180">
							<template slot-scope="scope">
								<div class="hdxq">{{scope.row.hdxq[0]}}<br/>
								{{scope.row.hdxq[1]}}</div>
							</template>
						</el-table-column>
						<el-table-column label="报名详情" prop="bmxq" width="230">
							<template slot-scope="scope">
								<div class="bmxq">
									{{scope.row.bmxq[0]}}<br/>
									{{scope.row.bmxq[1]}}<br/>
									{{scope.row.bmxq[2]}}<br/>
									{{scope.row.bmxq[3]}}<br/>
									{{scope.row.bmxq[4]}}<br/>
									{{scope.row.bmxq[5]}}<br/>
								</div>
							</template>
						</el-table-column>
						<el-table-column label="验证门店" prop="yzmd" width="180">
						</el-table-column>
						<el-table-column label="状态" prop="zt" width="190">
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
		name: 'hdbm',
		data() {
			return {
				userList: [{
					hdmc: '花生米科技公司总部试吃活动',
					hy: '十月大神',
					hdxq: ['活动开始时间：2018-12-01 10:00:00','活动结束时间：2019-12-30 23:59:59'],
					bmxq: ['姓名：十月大神','手机：18888888888','性别：男','职业：产品总监','地区：天河区','报名时间：2018-12-12 12:00:02'],
					yzmd: '花生米科技公司总部',
					zt: '已审核',
				}, {
					hdmc: '花生米科技公司总部试吃活动',
					hy: '十月大神',
					hdxq: ['活动开始时间：2018-12-01 10:00:00','活动结束时间：2019-12-30 23:59:59'],
					bmxq: ['姓名：十月大神','手机：18888888888','性别：男','职业：产品总监','地区：天河区','报名时间：2018-12-12 12:00:02'],
					yzmd: '',
					zt: '已审核',
				}, {
					hdmc: '花生米科技公司总部试吃活动',
					hy: '十月大神',
					hdxq: ['活动开始时间：2018-12-01 10:00:00','活动结束时间：2019-12-30 23:59:59'],
					bmxq: ['姓名：十月大神','手机：18888888888','性别：男','职业：产品总监','地区：天河区','报名时间：2018-12-12 12:00:02'],
					yzmd: '',
					zt: '已审核',
				}, {
					hdmc: '花生米科技公司总部试吃活动',
					hy: '十月大神',
					hdxq: ['活动开始时间：2018-12-01 10:00:00','活动结束时间：2019-12-30 23:59:59'],
					bmxq: ['姓名：十月大神','手机：18888888888','性别：男','职业：产品总监','地区：天河区','报名时间：2018-12-12 12:00:02'],
					yzmd: '',
					zt: '已审核',
				}, {
					hdmc: '花生米科技公司总部试吃活动',
					hy: '十月大神',
					hdxq: ['活动开始时间：2018-12-01 10:00:00','活动结束时间：2019-12-30 23:59:59'],
					bmxq: ['姓名：十月大神','手机：18888888888','性别：男','职业：产品总监','地区：天河区','报名时间：2018-12-12 12:00:02'],
					yzmd: '',
					zt: '已审核',
				}, {
					hdmc: '花生米科技公司总部试吃活动',
					hy: '十月大神',
					hdxq: ['活动开始时间：2018-12-01 10:00:00','活动结束时间：2019-12-30 23:59:59'],
					bmxq: ['姓名：十月大神','手机：18888888888','性别：男','职业：产品总监','地区：天河区','报名时间：2018-12-12 12:00:02'],
					yzmd: '',
					zt: '已审核',
				}, {
					hdmc: '花生米科技公司总部试吃活动',
					hy: '十月大神',
					hdxq: ['活动开始时间：2018-12-01 10:00:00','活动结束时间：2019-12-30 23:59:59'],
					bmxq: ['姓名：十月大神','手机：18888888888','性别：男','职业：产品总监','地区：天河区','报名时间：2018-12-12 12:00:02'],
					yzmd: '',
					zt: '已审核',
				}, {
					hdmc: '花生米科技公司总部试吃活动',
					hy: '十月大神',
					hdxq: ['活动开始时间：2018-12-01 10:00:00','活动结束时间：2019-12-30 23:59:59'],
					bmxq: ['姓名：十月大神','手机：18888888888','性别：男','职业：产品总监','地区：天河区','报名时间：2018-12-12 12:00:02'],
					yzmd: '',
					zt: '已审核',
				}, {
					hdmc: '花生米科技公司总部试吃活动',
					hy: '十月大神',
					hdxq: ['活动开始时间：2018-12-01 10:00:00','活动结束时间：2019-12-30 23:59:59'],
					bmxq: ['姓名：十月大神','手机：18888888888','性别：男','职业：产品总监','地区：天河区','报名时间：2018-12-12 12:00:02'],
					yzmd: '',
					zt: '已审核',
				}, {
					hdmc: '花生米科技公司总部试吃活动',
					hy: '十月大神',
					hdxq: ['活动开始时间：2018-12-01 10:00:00','活动结束时间：2019-12-30 23:59:59'],
					bmxq: ['姓名：十月大神','手机：18888888888','性别：男','职业：产品总监','地区：天河区','报名时间：2018-12-12 12:00:02'],
					yzmd: '',
					zt: '未审核',
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
					label: '已审核'
				}, {
					value: '选项3',
					label: '待审核'
				}],
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
					if ('hdmc' in item || 'hy' in item || 'hdxq' in item || 'bmxq' in item || 'yzmd' in item ||
						'zt' in
						item) {
						if (item.hdmc.indexOf(this.searchValue) > -1 ||
							item.hy.indexOf(this.searchValue) > -1 ||
							item.hdxq.indexOf(this.searchValue) > -1 ||
							item.bmxq.indexOf(this.searchValue) > -1 ||
							item.yzmd.indexOf(this.searchValue) > -1 ||
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
	#hdbm .head {
		display: flex;
		align-items: center;
		background: #FFFFFF;
		padding: 15px;
		color: #898989;
	}

	#hdbm .bod {
		padding: 10px 25px 15px 25px;
	}

	#hdbm .nan {
		background: #FFFFFF;
		padding: 50px 40px 30px 40px;
		color: #333333;
	}

	#hdbm .ding {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	#hdbm .left {
		display: flex;
	}

	#hdbm .el-input__inner {
		border: none;
	}

	#hdbm .el-range-input:hover {
		border: 1px solid #FF8800 !important;
	}

	#hdbm .shang input {
		height: 36px;
		border: 1px solid #DCDFE6 !important;
	}

	#hdbm .shang {
		width: 200px;
	}
	
	#hdbm .di{
		margin-top: 20px;
	}
	#hdbm .shang:hover input {
		border: 1px solid #FF8800 !important;
	}

	#hdbm .el-input--suffix {
		width: 100px !important;
		margin-left: 20px;
	}

	#hdbm .el-input__inner i {
		display: none;
	}

	#hdbm .el-range-input {
		border: 1px solid #DCDFE6 !important;
		width: 150px !important;
		text-align: left !important;
	}

	#hdbm .el-button--primary {
		color: #FFFFFF;
		background: #FF8800;
		border-color: #FF8800;
	}

	#hdbm .el-button--primary.is-active,
	.el-button--primary:active {
		background: #FF8800 !important;
		border-color: #FF8800 !important;
	}

	#hdbm .el-button--primary:focus,
	.el-button--primary:hover {
		background: #FF8800 !important;
		border-color: #FF8800 !important;
	}

	#hdbm .el-pagination {
		text-align: center;
	}
	#hdbm th{
		background: #F2F2F2!important;
		font-family: '微软雅黑';
		font-weight: 400;
		color: #333333;
	}
	#hdbm td{
		font-size: 12px;
		font-family: '微软雅黑';
		font-weight: 400;
		color: #333333;
	}
	#hdbm .el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed{
		border: 1px solid #EBEEF5;
	}
	#hdbm .cell {
		text-align: center;
	}
</style>
