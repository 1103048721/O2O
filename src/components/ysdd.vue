<template>
	<div id="ysdd">
		<div class="head">
			<img src="../../public/img/u174.png" />
			预售订单
		</div>
		<div class="bod">
			<div class="nan">
				<div class="ding">
					<div class="left">
						<el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="-"
						 start-placeholder="下单起始日期" end-placeholder="下单截止日期" :picker-options="pickerOptions">
						</el-date-picker>
						<el-input class="shang" v-model="searchValue" placeholder="请输入商品名称"></el-input>
					</div>
					<div class="right">
						<el-button type="primary" @click="doFilter">查询</el-button>
					</div>
				</div>
				<div class="di">
					<el-table style="width: 100%;" :data="tableData">
						<el-table-column label="详情" width="330">
							<template slot-scope="scope">
								<div class="xq">
									{{scope.row.xq}}
								</div>
							</template>
						</el-table-column>
						<el-table-column label="发票信息" prop="fpxx" width="135">
						</el-table-column>
						<el-table-column label="单价" prop="dj" width="130">
						</el-table-column>
						<el-table-column label="数量" prop="sl" width="130">
						</el-table-column>
						<el-table-column label="状态" prop="zt" width="150">
						</el-table-column>
						<el-table-column label="操作" width="230">
							<template slot-scope="scope">
								<el-button type="primary" class="cz">
									{{scope.row.cz}}
								</el-button>
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
		name: 'ysdd',
		data() {
			return {
				userList: [{
					xq: '预定商品名称',
					fpxx: '不开发票',
					dj: '¥19',
					sl: '1',
					zt: '待付定金',
					cz: '详情',
				}, {
					xq: '预定商品名称',
					fpxx: '不开发票',
					dj: '¥19',
					sl: '1',
					zt: '待付尾款',
					cz: '详情',
				}, {
					xq: '预定商品名称',
					fpxx: '查看',
					dj: '¥19',
					sl: '1',
					zt: '待发货',
					cz: '详情',
				}, {
					xq: '预定商品名称',
					fpxx: '查看',
					dj: '¥19',
					sl: '1',
					zt: '待退款',
					cz: '发货',
				}, {
					xq: '预定商品名称',
					fpxx: '查看',
					dj: '¥19',
					sl: '1',
					zt: '待评价',
					cz: '发货',
				}, {
					xq: '预定商品名称',
					fpxx: '不开发票',
					dj: '¥19',
					sl: '1',
					zt: '待付定金',
					cz: '详情',
				}, {
					xq: '预定商品名称',
					fpxx: '不开发票',
					dj: '¥19',
					sl: '1',
					zt: '待付尾款',
					cz: '已完结',
				}, {
					xq: '预定商品名称',
					fpxx: '不开发票',
					dj: '¥19',
					sl: '1',
					zt: '待发货',
					cz: '已完结',
				}, {
					xq: '预定商品名称',
					fpxx: '查看',
					dj: '¥19',
					sl: '1',
					zt: '待退款',
					cz: '已完结',
				}, {
					xq: '预定商品名称',
					fpxx: '不开发票',
					dj: '¥19',
					sl: '1',
					zt: '待评价',
					cz: '已完结',
				}],
				currentPage: 1, //初始页
				pagesize: 5, //    每页的数据
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
					if ('xq' in item || 'fpxx' in item || 'dj' in item || 'sl' in item || 'zt' in item || 'cz' in item) {
						if (item.xq.indexOf(this.searchValue) > -1 ||
							item.fpxx.indexOf(this.searchValue) > -1 ||
							item.dj.indexOf(this.searchValue) > -1 ||
							item.sl.indexOf(this.searchValue) > -1 ||
							item.zt.indexOf(this.searchValue) > -1 ||
							item.cz.indexOf(this.searchValue) > -1) {
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
	#ysdd .head {
		display: flex;
		align-items: center;
		background: #FFFFFF;
		padding: 15px;
		color: #898989;
	}
	
	#ysdd .bod {
		padding: 10px 25px 15px 25px;
	}
	
	#ysdd .nan {
		background: #FFFFFF;
		padding: 50px 40px 30px 40px;
		color: #333333;
	}
	
	#ysdd .ding {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	#ysdd .left {
		display: flex;
	}
	
	#ysdd .el-input__inner {
		border: none;
	}
	
	#ysdd .el-range-input:hover {
		border: 1px solid #FF8800 !important;
	}
	
	#ysdd .shang input {
		height: 36px;
		border: 1px solid #DCDFE6 !important;
	}
	
	#ysdd .shang {
		width: 200px;
	}
	#ysdd .di{
		margin-top: 20px;
	}
	#ysdd .shang:hover input {
		border: 1px solid #FF8800 !important;
	}
	
	#ysdd .el-input--suffix {
		width: 100px !important;
		margin-left: 20px;
	}
	
	#ysdd .el-input__inner i {
		display: none;
	}
	
	#ysdd .el-range-input {
		border: 1px solid #DCDFE6 !important;
		width: 150px !important;
		text-align: left !important;
	}
	
	#ysdd .el-button--primary {
		color: #FFFFFF;
		background: #FF8800;
		border-color: #FF8800;
	}
	
	#ysdd .el-button--primary.is-active,
	.el-button--primary:active {
		background: #FF8800 !important;
		border-color: #FF8800 !important;
	}
	
	#ysdd .el-button--primary:focus,
	.el-button--primary:hover {
		background: #FF8800 !important;
		border-color: #FF8800 !important;
	}
	
	#ysdd .el-pagination {
		text-align: center;
	}
	
	#ysdd .cell {
		text-align: center;
	}
	#ysdd th{
		background: #F2F2F2!important;
		font-family: '微软雅黑';
		font-weight: 400;
		color: #333333;
	}
	#ysdd td{
		font-size: 12px;
		font-family: '微软雅黑';
		font-weight: 400;
		color: #333333;
	}
	#ysdd td:nth-of-type(5){
		color: #FF8800;
	}
	#ysdd td:nth-of-type(3){
		color: #FF8800;
	}
	#ysdd td:nth-of-type(2){
		color: #FF8800;
	}
	#ysdd .el-table--fit{
		border: 1.5px solid #E8E8E8!important;
	}
	#ysdd .xq{
		text-align: left;
	}
	#ysdd .cz{
		background: #00BE7F;
		border: #00BE7F;
	}
	
	#ysdd .cz:active {
		background: #00BE7F !important;
		border-color: #00BE7F !important;
	}
	
	#ysdd .cz:focus,
	.cz:hover {
		background: #00BE7F !important;
		border-color: #00BE7F !important;
	}
</style>
