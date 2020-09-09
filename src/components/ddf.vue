<template>
	<div id="ddf">
		<div class="head">
			<img src="../../public/img/u174.png" />
			到店付
		</div>
		<div class="bod">
			<div class="nan">
				<div class="ding">
					<div class="left">
						<el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="-"
						 start-placeholder="下单起始日期" end-placeholder="下单截止日期" :picker-options="pickerOptions">
						</el-date-picker>
						<el-input class="shang" v-model="searchValue" placeholder="请输入订单编号"></el-input>
						<div class="qing">
							<div>清空</div>
							<div>今天</div>
							<div>昨天</div>
							<div>最近7天</div>
							<div>最近30天</div>
						</div>
					</div>
					<div class="right">
						<el-button type="primary" @click="doFilter">查询</el-button>
					</div>
				</div>
				<div class="di">
					<el-table style="width: 100%;" :data="tableData" border>
						<el-table-column label="订单编号" prop="ddbh" width="140">
						</el-table-column>
						<el-table-column label="消费时间" prop="xfsj" width="150">
						</el-table-column>
						<el-table-column label="消费金额" prop="xfje" width="100">
						</el-table-column>
						<el-table-column label="不可优惠金额" prop="bkyhje" width="120">
						</el-table-column>
						<el-table-column label="已优惠金额" prop="yyhje" width="100">
						</el-table-column>
						<el-table-column label="实付金额" prop="sfje" width="100">
						</el-table-column>
						<el-table-column label="消费门店" prop="xfmd" width="180">
						</el-table-column>
						<el-table-column label="支付状态" prop="zfzt" width="100">
						</el-table-column>
						<el-table-column label="详情" width="100">
							<template slot-scope="scope">
								<div class="xq">
									{{scope.row.xq}}
								</div>
							</template>
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
		name: 'ddf',
		data() {
			return {
				userList: [{
					ddbh: '2018122800300557',
					xfsj: '2018-12-12 10:00:00',
					xfje: '￥800',
					bkyhje: '￥600',
					yyhje: '￥20',
					sfje: '￥780',
					xfmd: '花生米科技公司（越秀店）',
					zfzt: '已付款',
					xq: '详情',
				}, {
					ddbh: '2018122800300557',
					xfsj: '2018-12-12 10:00:00',
					xfje: '￥68',
					bkyhje: '￥0',
					yyhje: '￥0',
					sfje: '￥68',
					xfmd: '花生米科技公司（越秀店）',
					zfzt: '已付款',
					xq: '详情',
				}, {
					ddbh: '2018122800300557',
					xfsj: '2018-12-12 10:00:00',
					xfje: '￥160',
					bkyhje: '￥0',
					yyhje: '￥20',
					sfje: '￥140',
					xfmd: '花生米科技公司（天河店）',
					zfzt: '已付款',
					xq: '详情',
				}, {
					ddbh: '2018122800300557',
					xfsj: '2018-12-12 10:00:00',
					xfje: '￥100',
					bkyhje: '￥0',
					yyhje: '￥20',
					sfje: '￥80',
					xfmd: '花生米科技公司（越秀店）',
					zfzt: '已付款',
					xq: '详情',
				}, {
					ddbh: '2018122800300557',
					xfsj: '2018-12-12 10:00:00',
					xfje: '￥0.01',
					bkyhje: '￥0',
					yyhje: '￥0',
					sfje: '￥0.01',
					xfmd: '花生米科技公司（越秀店）',
					zfzt: '已付款',
					xq: '详情',
				}, {
					ddbh: '2018122800300557',
					xfsj: '2018-12-12 10:00:00',
					xfje: '￥800',
					bkyhje: '￥600',
					yyhje: '￥20',
					sfje: '￥780',
					xfmd: '花生米科技公司（越秀店）',
					zfzt: '已付款',
					xq: '详情',
				}, {
					ddbh: '2018122800300557',
					xfsj: '2018-12-12 10:00:00',
					xfje: '￥68',
					bkyhje: '￥0',
					yyhje: '￥0',
					sfje: '￥68',
					xfmd: '花生米科技公司（越秀店）',
					zfzt: '已付款',
					xq: '详情',
				}, {
					ddbh: '2018122800300557',
					xfsj: '2018-12-12 10:00:00',
					xfje: '￥160',
					bkyhje: '￥0',
					yyhje: '￥20',
					sfje: '￥140',
					xfmd: '花生米科技公司（天河店）',
					zfzt: '已付款',
					xq: '详情',
				}, {
					ddbh: '2018122800300557',
					xfsj: '2018-12-12 10:00:00',
					xfje: '￥100',
					bkyhje: '￥0',
					yyhje: '￥20',
					sfje: '￥80',
					xfmd: '花生米科技公司（越秀店）',
					zfzt: '已付款',
					xq: '详情',
				}, {
					ddbh: '2018122800300557',
					xfsj: '2018-12-12 10:00:00',
					xfje: '￥0.01',
					bkyhje: '￥0',
					yyhje: '￥0',
					sfje: '￥0.01',
					xfmd: '花生米科技公司（越秀店）',
					zfzt: '已付款',
					xq: '详情',
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
					if ('ddbh' in item || 'xfsj' in item || 'xfje' in item || 'bkyhje' in item || 'yyhje' in item ||
						'sfje' in item || 'xfmd' in item || 'zfzt' in item || 'xq' in item) {
						if (item.ddbh.indexOf(this.searchValue) > -1 ||
							item.xfsj.indexOf(this.searchValue) > -1 ||
							item.xfje.indexOf(this.searchValue) > -1 ||
							item.bkyhje.indexOf(this.searchValue) > -1 ||
							item.yyhje.indexOf(this.searchValue) > -1 ||
							item.sfje.indexOf(this.searchValue) > -1 ||
							item.xfmd.indexOf(this.searchValue) > -1 ||
							item.zfzt.indexOf(this.searchValue) > -1 ||
							item.xq.indexOf(this.searchValue) > -1) {
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
	#ddf .head {
		display: flex;
		align-items: center;
		background: #FFFFFF;
		padding: 15px;
		color: #898989;
	}

	#ddf .bod {
		padding: 10px 25px 15px 25px;
	}

	#ddf .nan {
		background: #FFFFFF;
		padding: 50px 40px 30px 40px;
		color: #333333;
	}

	#ddf .ding {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	#ddf .left {
		display: flex;
		align-items: center;
	}

	#ddf .el-input__inner {
		border: none;
	}

	#ddf .el-range-input:hover {
		border: 1px solid #FF8800 !important;
	}

	#ddf .shang input {
		height: 36px;
		border: 1px solid #DCDFE6 !important;
	}

	#ddf .shang {
		width: 200px;
	}
	
	#ddf .di{
		margin-top: 20px;
	}
	#ddf .shang:hover input {
		border: 1px solid #FF8800 !important;
	}

	#ddf .el-input--suffix {
		width: 100px !important;
		margin-left: 20px;
	}

	#ddf .el-input__inner i {
		display: none;
	}

	#ddf .el-range-input {
		border: 1px solid #DCDFE6 !important;
		width: 150px !important;
		text-align: left !important;
	}

	#ddf .el-button--primary {
		color: #FFFFFF;
		background: #FF8800;
		border-color: #FF8800;
	}

	#ddf .el-button--primary.is-active,
	.el-button--primary:active {
		background: #FF8800 !important;
		border-color: #FF8800 !important;
	}

	#ddf .el-button--primary:focus,
	.el-button--primary:hover {
		background: #FF8800 !important;
		border-color: #FF8800 !important;
	}

	#ddf .el-pagination {
		text-align: center;
	}
	#ddf th{
		background: #F2F2F2!important;
		font-family: '微软雅黑';
		font-weight: 400;
		color: #333333;
	}
	#ddf td{
		font-size: 12px;
		font-family: '微软雅黑';
		font-weight: 400;
		color: #333333;
	}
	#ddf .el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed{
		border: 1px solid #EBEEF5;
	}
	#ddf .cell {
		text-align: center;
	}
	#ddf .xq{
		color: #FF8800;
	}
	#ddf .qing{
		display: flex;
		margin-left: 15px;
		color: #FF8800;
		font-size: 12px;
	}
	#ddf .qing>div{
		margin-right: 15px;
	}
	#ddf .qing>div:nth-of-type(1){
		color: #999999;
	}
</style>
