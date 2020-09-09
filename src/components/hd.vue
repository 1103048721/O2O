<template>
	<div id="hd">
		<div class="head">
			<img src="../../public/img/u174.png" />
			活动
		</div>
		<div class="bod">
			<div class="nan">
				<div class="ding">
					<div class="left"></div>
					<div class="right">
						<el-button type="primary" @click="add">新增活动</el-button>
					</div>
				</div>
				<div class="di">
					<el-table style="width: 100%;" :data="tableData">
						<el-table-column label="编号" prop="bh" width="100">
						</el-table-column>
						<el-table-column label="详情" width="350">
							<template slot-scope="scope">
								<div class="xq">
									<img :src="scope.row.xq[0]" width="80" height="60" class="head_pic" />
									<div>
										{{scope.row.xq[1]}}
									</div>
								</div>
							</template>
						</el-table-column>
						<el-table-column label="团购价/结算价" prop="hdj" width="150">
						</el-table-column>
						<el-table-column label="销量/库存" prop="xl" width="120">
						</el-table-column>
						<el-table-column label="商品分类" prop="hdfl" width="120">
						</el-table-column>
						<el-table-column label="操作" prop="cz" width="250">
							<template slot-scope="scope">
								<div class="button">
									<el-button type="primary" @click="handleEdit(scope.$index, scope.row)">{{scope.row.cz[0]}}</el-button>
									<el-button type="primary" @click="remove(scope.$index, scope.row)">{{scope.row.cz[1]}}</el-button>
									<el-button type="primary">{{scope.row.cz[2]}}</el-button>
								</div>
							</template>
						</el-table-column>
					</el-table>
					<el-dialog :title="dialogTitle" width="50%" :visible.sync="iconFormVisible">
						<el-form :inline="true" :model="userInfo" class="demo-form-inline">
							<el-form-item label="编号">
								<el-input v-model="userInfo.bh" placeholder="编号"></el-input>
							</el-form-item>
							<el-form-item label="详情">
								<el-input v-model="userInfo.xq" placeholder="详情"></el-input>
							</el-form-item>
							<el-form-item label="团购价/结算价">
								<el-input v-model="userInfo.hdj" placeholder="团购价/结算价"></el-input>
							</el-form-item>
							<el-form-item label="销量/库存">
								<el-input v-model="userInfo.xl" placeholder="销量/库存"></el-input>
							</el-form-item>
							<el-form-item label="商品分类">
								<el-input v-model="userInfo.hdfl" placeholder="商品分类"></el-input>
							</el-form-item>
						</el-form>
						<div slot="footer" class="dialog-footer">
							<el-button @click="iconFormVisible = false">取 消</el-button>
							<el-button type="primary" @click="submitUser()">确 定</el-button>
						</div>
					</el-dialog>
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
		name: 'hd',
		data() {
			return {
				iconFormVisible: false,
				userInfo: {},
				dialogTitle: '增加',
				value: '',
				rowIndex: null,
				userList: [{
					bh: '1001',
					xq: [require('../../public/img/tu.png'), '团购商品名称'],
					hdj: '98/68.6',
					xl: '12/100',
					hdfl: '暂无分类',
					cz: ['编辑', '下架', '预览']
				}, {
					bh: '1001',
					xq: [require('../../public/img/tu.png'), '团购商品名称'],
					hdj: '98/68.6',
					xl: '12/100',
					hdfl: '暂无分类',
					cz: ['编辑', '下架', '预览']
				}, {
					bh: '1001',
					xq: [require('../../public/img/tu.png'), '团购商品名称'],
					hdj: '98/68.6',
					xl: '12/100',
					hdfl: '暂无分类',
					cz: ['编辑', '下架', '预览']
				}, {
					bh: '1001',
					xq: [require('../../public/img/tu.png'), '团购商品名称'],
					hdj: '98/68.6',
					xl: '12/100',
					hdfl: '暂无分类',
					cz: ['编辑', '下架', '预览']
				}, {
					bh: '1001',
					xq: [require('../../public/img/tu.png'), '团购商品名称'],
					hdj: '98/68.6',
					xl: '12/100',
					hdfl: '暂无分类',
					cz: ['编辑', '下架', '预览']
				}, {
					bh: '1001',
					xq: [require('../../public/img/tu.png'), '团购商品名称'],
					hdj: '98/68.6',
					xl: '12/100',
					hdfl: '暂无分类',
					cz: ['编辑', '下架', '预览']
				}, {
					bh: '1001',
					xq: [require('../../public/img/tu.png'), '团购商品名称'],
					hdj: '98/68.6',
					xl: '12/100',
					hdfl: '暂无分类',
					cz: ['编辑', '下架', '预览']
				}, {
					bh: '1001',
					xq: [require('../../public/img/tu.png'), '团购商品名称'],
					hdj: '98/68.6',
					xl: '12/100',
					hdfl: '暂无分类',
					cz: ['编辑', '下架', '预览']
				}, {
					bh: '1001',
					xq: [require('../../public/img/tu.png'), '团购商品名称'],
					hdj: '98/68.6',
					xl: '12/100',
					hdfl: '暂无分类',
					cz: ['编辑', '下架', '预览']
				}, {
					bh: '1001',
					xq: [require('../../public/img/tu.png'), '团购商品名称'],
					hdj: '98/68.6',
					xl: '12/100',
					hdfl: '暂无分类',
					cz: ['编辑', '下架', '预览']
				}],
				currentPage: 1, //初始页
				pagesize: 5, //    每页的数据
				totalItems: 0,
				tableData: [],
				filterTableData: [],
				flag: false,
				value2: '',
				searchValue: '',
			}

		},
		methods: {
			add() {
				this.dialogTitle = '增加';
				this.userInfo = {};
				this.iconFormVisible = true;
			},
			handleEdit(index, row) {
				this.dialogTitle = '编辑';
				this.userInfo = row;
				this.iconFormVisible = true;
				this.rowIndex = index;
			},
			submitUser() {
				if (this.dialogTitle === '编辑') {
					this.tableData.hdlice(this.rowIndex, 1, this.userInfo);
					this.iconFormVisible = false;
					return;
				}
				this.tableData.hdlice(0, 0, this.userInfo);
				this.iconFormVisible = false;
			},
			remove(index, row) {
				this.$confirm(`确定下架${row.bh}吗?`, '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'error',
				}).then(() => {
					this.tableData.hdlice(index, 1);
				});
			},
			mockRequset() {
				console.log(this.tableData)
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
	#hd .head {
		display: flex;
		align-items: center;
		background: #FFFFFF;
		padding: 15px;
		color: #898989;
	}

	#hd .bod {
		padding: 10px 25px 15px 25px;
	}

	#hd .nan {
		background: #FFFFFF;
		padding: 50px 40px 30px 40px;
		color: #333333;
	}

	#hd .ding {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	#hd .left {
		display: flex;
	}

	#hd .el-input__inner {
		border: none;
	}

	#hd .el-range-input:hover {
		border: 1px solid #FF8800 !important;
	}

	#hd #hd .shang input {
		height: 36px;
		border: 1px solid #DCDFE6 !important;
	}

	#hd .shang {
		width: 200px;
	}

	#hd .di {
		margin-top: 5px;
		padding-top: 10px;
		border-top: 3px solid #FF8800;
	}

	#hd .shang:hover input {
		border: 1px solid #FF8800 !important;
	}

	#hd .el-input--suffix {
		width: 100px !important;
		margin-left: 20px;
	}

	#hd .el-input__inner i {
		display: none;
	}

	#hd .el-range-input {
		border: 1px solid #DCDFE6 !important;
		width: 150px !important;
		text-align: left !important;
	}

	#hd .el-button--primary {
		color: #FFFFFF;
		background: #FF8800;
		border-color: #FF8800;
		padding: 5px 10px;
		font-size: 12px;
	}

	#hd .el-button--primary.is-active,
	.el-button--primary:active {
		background: #FF8800 !important;
		border-color: #FF8800 !important;
	}

	#hd .el-button--primary:focus,
	.el-button--primary:hover {
		background: #FF8800 !important;
		border-color: #FF8800 !important;
	}

	#hd .el-pagination {
		text-align: center;
	}

	#hd .cell {
		text-align: center;
	}

	#hd th {
		background: #F2F2F2 !important;
		font-family: '微软雅黑';
		font-weight: 400;
		color: #333333;
	}

	#hd td {
		font-size: 12px;
		font-family: '微软雅黑';
		font-weight: 400;
		color: #333333;
	}

	#hd .el-table--fit {
		border: 1.5px solid #E8E8E8 !important;
	}

	#hd .cz {
		background: #00BE7F;
		border: #00BE7F;
	}

	#hd .cz:active {
		background: #00BE7F !important;
		border-color: #00BE7F !important;
	}

	#hd .cz:focus,
	.cz:hover {
		background: #00BE7F !important;
		border-color: #00BE7F !important;
	}

	#hd .button {
		dihdlay: flex;
		justify-content: center;
	}

	#hd .button .el-button--primary:nth-of-type(1) {
		background: #0A82F8;
		border: #0A82F8;
	}

	#hd .button .el-button--primary:nth-of-type(1):active {
		background: #0A82F8 !important;
		border-color: #0A82F8 !important;
	}

	#hd .button .el-button--primary:nth-of-type(1):focus,
	.button .el-button--primary:nth-of-type(1):hover {
		background: #0A82F8 !important;
		border-color: #0A82F8 !important;
	}

	#hd .button .el-button--primary:nth-of-type(2) {
		background: #00BE7F;
		border: #00BE7F;
	}

	#hd .button .el-button--primary:nth-of-type(2):active {
		background: #00BE7F !important;
		border-color: #00BE7F !important;
	}

	#hd .button .el-button--primary:nth-of-type(2):focus,
	.button .el-button--primary:nth-of-type(2):hover {
		background: #00BE7F !important;
		border-color: #00BE7F !important;
	}

	#hd .xq {
		dihdlay: flex;
	}
</style>
