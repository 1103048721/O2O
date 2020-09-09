<template>
	<div id="tgddlb">
		<div class="head">
			<img src="../../public/img/u174.png" />
			团购订单列表
		</div>
		<div class="bod">
			<div class="nan">
				<div class="ding">
					<div class="left">
						<el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="-"
						 start-placeholder="下单起始日期" end-placeholder="下单截止日期" :picker-options="pickerOptions">
						</el-date-picker>
						<el-input class="shang" v-model="searchValue" placeholder="请输入商品名称"></el-input>
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
					<el-table style="width: 100%;" :data="tableData">
						<el-table-column label="" width="120">
							<template slot-scope="scope">
								<img :src="scope.row.img" width="80" height="60" class="head_pic" />
							</template>
						</el-table-column>
						<el-table-column label="详情" width="205">
							<template slot-scope="scope">
								<div class="xq">{{scope.row.xq[0]}}</div>
								<div class="xq">{{scope.row.xq[1]}}</div>
								<div class="xq">{{scope.row.xq[2]}}</div>
							</template>
						</el-table-column>
						<el-table-column label="发票信息" prop="fpxx" width="130">
						</el-table-column>
						<el-table-column label="红包" prop="hb" width="130">
						</el-table-column>
						<el-table-column label="优惠券" prop="yhq" width="130">
						</el-table-column>
						<el-table-column label="结算金额" prop="jsje" width="125">
						</el-table-column>
						<el-table-column label="数量" prop="sl" width="125">
						</el-table-column>
						<el-table-column label="状态" width="125">
							<template slot-scope="scope">
								<div class="zt">{{scope.row.zt[0]}}<br />
								<span>{{scope.row.zt[1]}}</span></div>
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
		name: 'tgddlb',
		data() {
			return {
				swiper:[],
				userList: [{
					img: require('../../public/img/tu.png'),
					xq: [
						'团购商品名称',
						'下单会员：shiyue',
						'手机号：18800000000'
					],
					fpxx: '不开发票',
					hb: '0',
					yhq: '0',
					jsje: '140',
					sl: '1',
					zt: ['未消费']
				}, {
					img: require('../../public/img/tu.png'),
					xq: ['团购商品名称', '下单会员：shiyue', '手机号：18800000000'],
					fpxx: '不开发票',
					hb: '0',
					yhq: '0',
					jsje: '140',
					sl: '2',
					zt: ['未消费']
				}, {
					img: require('../../public/img/tu.png'),
					xq: ['团购商品名称', '下单会员：shiyue', '手机号：18800000000'],
					fpxx: '不开发票',
					hb: '0',
					yhq: '0',
					jsje: '140',
					sl: '2',
					zt: ['订单已完结', '已点评']
				}, {
					img: require('../../public/img/tu.png'),
					xq: ['团购商品名称', '下单会员：shiyue', '手机号：18800000000'],
					fpxx: '不开发票',
					hb: '0',
					yhq: '0',
					jsje: '140',
					sl: '2',
					zt: ['订单已完结']
				}, {
					img: require('../../public/img/tu.png'),
					xq: ['团购商品名称', '下单会员：shiyue', '手机号：18800000000'],
					fpxx: '不开发票',
					hb: '0',
					yhq: '0',
					jsje: '109',
					sl: '1',
					zt: ['订单已完结', '已点评']
				}, {
					xq: ['团购商品名称', '下单会员：shiyue', '手机号：18800000000'],
					fpxx: '不开发票',
					hb: '0',
					yhq: '0',
					jsje: '140',
					sl: '1',
					zt: '未消费'
				}, {
					xq: ['团购商品名称', '下单会员：shiyue', '手机号：18800000000'],
					fpxx: '不开发票',
					hb: '0',
					yhq: '0',
					jsje: '140',
					sl: '2',
					zt: '未消费'
				}, {
					xq: ['团购商品名称', '下单会员：shiyue', '手机号：18800000000'],
					fpxx: '不开发票',
					hb: '0',
					yhq: '0',
					jsje: '140',
					sl: '2',
					zt: '未消费'
				}, {
					xq: ['团购商品名称', '下单会员：shiyue', '手机号：18800000000'],
					fpxx: '不开发票',
					hb: '0',
					yhq: '0',
					jsje: '140',
					sl: '2',
					zt: '未消费'
				}, {
					xq: ['团购商品名称', '下单会员：shiyue', '手机号：18800000000'],
					fpxx: '不开发票',
					hb: '0',
					yhq: '0',
					jsje: '109',
					sl: '1',
					zt: '未消费'
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
				options: [{
					value: '选项1',
					label: '全部'
				}, {
					value: '选项2',
					label: '已消费'
				}, {
					value: '选项3',
					label: '未消费'
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
					if ('xq' in item || 'fpxx' in item || 'hb' in item || 'yhq' in item || 'jsje' in item || 'sl' in item || 'zt' in
						item) {
						if (item.xq.indexOf(this.searchValue) > -1 ||
							item.fpxx.indexOf(this.searchValue) > -1 ||
							item.hb.indexOf(this.searchValue) > -1 ||
							item.yhq.indexOf(this.searchValue) > -1 ||
							item.jsje.indexOf(this.searchValue) > -1 ||
							item.sl.indexOf(this.searchValue) > -1 ||
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
	#tgddlb .head {
		display: flex;
		align-items: center;
		background: #FFFFFF;
		padding: 15px;
		color: #898989;
	}

	#tgddlb .bod {
		padding: 10px 25px 15px 25px;
	}

	#tgddlb .nan {
		background: #FFFFFF;
		padding: 50px 40px 30px 40px;
		color: #333333;
	}

	#tgddlb .ding {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	#tgddlb .di{
		margin-top: 20px;
	}
	#tgddlb .left {
		display: flex;
	}

	#tgddlb .el-input__inner {
		border: none;
	}

	#tgddlb .el-range-input:hover {
		border: 1px solid #FF8800 !important;
	}

	#tgddlb .shang input {
		height: 36px;
		border: 1px solid #DCDFE6 !important;
	}

	#tgddlb .shang {
		width: 200px;
	}

	#tgddlb .shang:hover input {
		border: 1px solid #FF8800 !important;
	}

	#tgddlb .el-input--suffix {
		width: 100px !important;
		margin-left: 20px;
	}

	#tgddlb .el-input__inner i {
		display: none;
	}

	#tgddlb .el-range-input {
		border: 1px solid #DCDFE6 !important;
		width: 150px !important;
		text-align: left !important;
	}

	#tgddlb .el-button--primary {
		color: #FFFFFF;
		background: #FF8800;
		border-color: #FF8800;
	}

	#tgddlb .el-button--primary.is-active,
	.el-button--primary:active {
		background: #FF8800 !important;
		border-color: #FF8800 !important;
	}

	#tgddlb .el-button--primary:focus,
	.el-button--primary:hover {
		background: #FF8800 !important;
		border-color: #FF8800 !important;
	}

	#tgddlb .el-pagination {
		text-align: center;
	}

	#tgddlb .cell {
		text-align: center;
	}
	#tgddlb th{
		background: #F2F2F2!important;
		font-family: '微软雅黑';
		font-weight: 400;
		color: #333333;
	}
	#tgddlb td{
		font-size: 12px;
		font-family: '微软雅黑';
		font-weight: 400;
		color: #333333;
	}
	
	#tgddlb td:nth-of-type(4){
		color: #FF8800;
	}
	#tgddlb td:nth-of-type(5){
		color: #FF8800;
	}
	#tgddlb td:nth-of-type(6){
		color: #FF8800;
	}
	#tgddlb td:nth-of-type(3){
		color: #FF8800;
	}
	#tgddlb .el-table--fit{
		border: 1.5px solid #E8E8E8!important;
	}
	#tgddlb .xq{
		text-align: left;
	}
	#tgddlb .zt span{
		color: #FF8800;
	}
</style>
