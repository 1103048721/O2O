<template>
	<div id="xfpl">
		<div class="head">
			<img src="../../public/img/u174.png" />
			消费评论
		</div>
		<div class="bod">
			<div class="nan">
				<div class="ding">
					<div class="left">
						<el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="-"
						 start-placeholder="评论起始日期" end-placeholder="评论截止日期" :picker-options="pickerOptions">
						</el-date-picker>
						<el-select v-model="value1" placeholder="请选择">
							<el-option v-for="item in options1" :key="item.value1" :label="item.label1" :value="item.value1">
							</el-option>
						</el-select>
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
						<el-table-column label="评论星级" width="155">
							<template slot-scope="scope">
								<el-rate v-model="scope.row.plxj" disabled></el-rate>
							</template>
						</el-table-column>
						<el-table-column label="评论内容" prop="plnr" width="350">
						</el-table-column>
						<el-table-column label="评论人" prop="plr" width="200">
						</el-table-column>
						<el-table-column label="被评论来源" prop="bplly" width="250">
						</el-table-column>
						<el-table-column label="操作" prop="cz" width="150">
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
		name: 'xfpl',
		data() {
			return {
				swiper: [],
				userList: [{
					plxj: 5,
					plnr: ['文字评价内容','【2018-12-12 00:12:28】'],
					plr: '十月大神',
					bplly: '被评论商品名称',
					cz:'回复'
				}, {
					plxj: 5,
					plnr: ['文字评价内容','【2018-12-12 00:12:28】'],
					plr: '十月大神',
					bplly: '被评论商品名称',
					cz:'回复'
				}, {
					plxj: 5,
					plnr: ['文字评价内容','【2018-12-12 00:12:28】'],
					plr: '十月大神',
					bplly: '被评论商品名称',
					cz:'回复'
				}, {
					plxj: 5,
					plnr: ['文字评价内容','【2018-12-12 00:12:28】'],
					plr: '十月大神',
					bplly: '被评论商品名称',
					cz:'回复'
				}, {
					plxj: 5,
					plnr: ['文字评价内容','【2018-12-12 00:12:28】'],
					plr: '十月大神',
					bplly: '被评论商品名称',
					cz:'回复'
				}, {
					plxj: 5,
					plnr: ['文字评价内容','【2018-12-12 00:12:28】'],
					plr: '十月大神',
					bplly: '被评论商品名称',
					cz:'回复'
				}, {
					plxj: 5,
					plnr: ['文字评价内容','【2018-12-12 00:12:28】'],
					plr: '十月大神',
					bplly: '被评论商品名称',
					cz:'回复'
				}, {
					plxj: 5,
					plnr: ['文字评价内容','【2018-12-12 00:12:28】'],
					plr: '十月大神',
					bplly: '被评论商品名称',
					cz:'回复'
				}, {
					plxj: 5,
					plnr: ['文字评价内容','【2018-12-12 00:12:28】'],
					plr: '十月大神',
					bplly: '被评论商品名称',
					cz:'回复'
				}, {
					plxj: 5,
					plnr: ['文字评价内容','【2018-12-12 00:12:28】'],
					plr: '十月大神',
					bplly: '被评论商品名称',
					cz:'回复'
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
					label: '全部内容'
				}, {
					value: '选项2',
					label: '有图'
				}, {
					value: '选项3',
					label: '无图'
				}],
				value: '选项1',
				options1: [{
						value1: '选项1',
						label1: '全部评论'
					}, {
						value1: '选项2',
						label1: '5星评价'
					}, {
						value1: '选项3',
						label1: '4星评价'
					},
					{
						value1: '选项4',
						label1: '3星评价'
					},
					{
						value1: '选项5',
						label1: '2星评价'
					},
					{
						value1: '选项6',
						label1: '1星评价'
					}
				],
				value1: '选项1'
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
	#xfpl .head {
		display: flex;
		align-items: center;
		background: #FFFFFF;
		padding: 15px;
		color: #898989;
	}

	#xfpl .bod {
		padding: 10px 25px 15px 25px;
	}

	#xfpl .nan {
		background: #FFFFFF;
		padding: 50px 40px 30px 40px;
		color: #333333;
	}

	#xfpl .ding {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	#xfpl .di {
		margin-top: 20px;
	}

	#xfpl .left {
		display: flex;
	}

	#xfpl .el-input__inner {
		border: none;
	}

	#xfpl .el-range-input:hover {
		border: 1px solid #FF8800 !important;
	}

	#xfpl .shang input {
		height: 36px;
		border: 1px solid #DCDFE6 !important;
	}

	#xfpl .shang {
		width: 200px;
	}

	#xfpl .shang:hover input {
		border: 1px solid #FF8800 !important;
	}

	#xfpl .el-input--suffix {
		width: 100px !important;
		margin-left: 20px;
	}

	#xfpl .el-input__inner i {
		display: none;
	}

	#xfpl .el-range-input {
		border: 1px solid #DCDFE6 !important;
		width: 150px !important;
		text-align: left !important;
	}

	#xfpl .el-button--primary {
		color: #FFFFFF;
		background: #FF8800;
		border-color: #FF8800;
	}

	#xfpl .el-button--primary.is-active,
	.el-button--primary:active {
		background: #FF8800 !important;
		border-color: #FF8800 !important;
	}

	#xfpl .el-button--primary:focus,
	.el-button--primary:hover {
		background: #FF8800 !important;
		border-color: #FF8800 !important;
	}

	#xfpl .el-pagination {
		text-align: center;
	}

	#xfpl .cell {
		text-align: center;
	}

	#xfpl th {
		background: #F2F2F2 !important;
		font-family: '微软雅黑';
		font-weight: 400;
		color: #333333;
	}

	#xfpl td {
		font-size: 12px;
		font-family: '微软雅黑';
		font-weight: 400;
		color: #333333;
	}

	#xfpl td:nth-of-type(4) {
		color: #FF8800;
	}

	#xfpl td:nth-of-type(5) {
		color: #FF8800;
	}

	#xfpl td:nth-of-type(6) {
		color: #FF8800;
	}

	#xfpl td:nth-of-type(3) {
		color: #FF8800;
	}

	#xfpl .el-table--fit {
		border: 1.5px solid #E8E8E8 !important;
	}

	#xfpl .xq {
		text-align: left;
	}

	#xfpl .zt span {
		color: #FF8800;
	}
</style>
