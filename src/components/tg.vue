<template>
	<div id="tg">
		<div class="head">
			<img src="../../public/img/u174.png" />
			团购
		</div>
		<div class="bod">
			<div class="nan">
				<div class="ding">
					<div class="left"></div>
					<div class="right">
						<el-button type="primary" @click="add">新增团购</el-button>
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
						<el-table-column label="团购价/结算价" prop="tgj" width="150">
						</el-table-column>
						<el-table-column label="销量/库存" prop="xl" width="120">
						</el-table-column>
						<el-table-column label="商品分类" prop="spfl" width="120">
						</el-table-column>
						<el-table-column label="操作" prop="cz" width="250">
							<template slot-scope="scope">
								<div class="button">
									<el-button type="primary" @click="handleEdit(scope.$index, scope.row)">{{scope.row.cz[0]}}</el-button>
									<el-button type="primary" @click="remove(scope.$index, scope.row)">{{scope.row.cz[1]}}</el-button>
									<el-button type="primary" >{{scope.row.cz[2]}}</el-button>
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
								<el-input v-model="userInfo.tgj" placeholder="团购价/结算价"></el-input>
							</el-form-item>
							<el-form-item label="销量/库存">
								<el-input v-model="userInfo.xl" placeholder="销量/库存"></el-input>
							</el-form-item>
							<el-form-item label="商品分类">
								<el-input v-model="userInfo.spfl" placeholder="商品分类"></el-input>
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
		name: 'tg',
		data() {
			return {
				iconFormVisible: false,
				userInfo: {},
				dialogTitle: '增加',
				value:'',
				rowIndex: null,
				userList: [{
					bh: '1001',
					xq: [require('../../public/img/tu.png'),'团购商品名称'],
					tgj: '98/68.6',
					xl: '12/100',
					spfl: '暂无分类',
					cz: ['编辑', '下架', '预览']
				}, {
					bh: '1001',
					xq: [require('../../public/img/tu.png'),'团购商品名称'],
					tgj: '98/68.6',
					xl: '12/100',
					spfl: '暂无分类',
					cz: ['编辑', '下架', '预览']
				}, {
					bh: '1001',
					xq: [require('../../public/img/tu.png'),'团购商品名称'],
					tgj: '98/68.6',
					xl: '12/100',
					spfl: '暂无分类',
					cz: ['编辑', '下架', '预览']
				}, {
					bh: '1001',
					xq: [require('../../public/img/tu.png'),'团购商品名称'],
					tgj: '98/68.6',
					xl: '12/100',
					spfl: '暂无分类',
					cz: ['编辑', '下架', '预览']
				}, {
					bh: '1001',
					xq: [require('../../public/img/tu.png'),'团购商品名称'],
					tgj: '98/68.6',
					xl: '12/100',
					spfl: '暂无分类',
					cz: ['编辑', '下架', '预览']
				}, {
					bh: '1001',
					xq: [require('../../public/img/tu.png'),'团购商品名称'],
					tgj: '98/68.6',
					xl: '12/100',
					spfl: '暂无分类',
					cz: ['编辑', '下架', '预览']
				}, {
					bh: '1001',
					xq: [require('../../public/img/tu.png'),'团购商品名称'],
					tgj: '98/68.6',
					xl: '12/100',
					spfl: '暂无分类',
					cz: ['编辑', '下架', '预览']
				}, {
					bh: '1001',
					xq: [require('../../public/img/tu.png'),'团购商品名称'],
					tgj: '98/68.6',
					xl: '12/100',
					spfl: '暂无分类',
					cz: ['编辑', '下架', '预览']
				}, {
					bh: '1001',
					xq: [require('../../public/img/tu.png'),'团购商品名称'],
					tgj: '98/68.6',
					xl: '12/100',
					spfl: '暂无分类',
					cz: ['编辑', '下架', '预览']
				}, {
					bh: '1001',
					xq: [require('../../public/img/tu.png'),'团购商品名称'],
					tgj: '98/68.6',
					xl: '12/100',
					spfl: '暂无分类',
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
					this.tableData.splice(this.rowIndex, 1, this.userInfo);
					this.iconFormVisible = false;
					return;
				}
				this.tableData.splice(0, 0, this.userInfo);
				this.iconFormVisible = false;
			},
			remove(index, row) {
				this.$confirm(`确定下架${row.bh}吗?`, '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'error',
				}).then(() => {
					this.tableData.splice(index, 1);
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
	#tg .head {
		display: flex;
		align-items: center;
		background: #FFFFFF;
		padding: 15px;
		color: #898989;
	}

	#tg .bod {
		padding: 10px 25px 15px 25px;
	}

	#tg .nan {
		background: #FFFFFF;
		padding: 50px 40px 30px 40px;
		color: #333333;
	}

	#tg .ding {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	#tg .left {
		display: flex;
	}

	#tg .el-input__inner {
		border: none;
	}

	#tg .el-range-input:hover {
		border: 1px solid #FF8800 !important;
	}

	#tg #tg .shang input {
		height: 36px;
		border: 1px solid #DCDFE6 !important;
	}

	#tg .shang {
		width: 200px;
	}

	#tg .di {
		margin-top: 5px;
		padding-top: 10px;
		border-top: 3px solid #FF8800;
	}

	#tg .shang:hover input {
		border: 1px solid #FF8800 !important;
	}

	#tg .el-input--suffix {
		width: 100px !important;
		margin-left: 20px;
	}

	#tg .el-input__inner i {
		display: none;
	}

	#tg .el-range-input {
		border: 1px solid #DCDFE6 !important;
		width: 150px !important;
		text-align: left !important;
	}

	#tg .el-button--primary {
		color: #FFFFFF;
		background: #FF8800;
		border-color: #FF8800;
		padding: 5px 10px;
		font-size: 12px;
	}

	#tg .el-button--primary.is-active,
	.el-button--primary:active {
		background: #FF8800 !important;
		border-color: #FF8800 !important;
	}

	#tg .el-button--primary:focus,
	.el-button--primary:hover {
		background: #FF8800 !important;
		border-color: #FF8800 !important;
	}

	#tg .el-pagination {
		text-align: center;
	}

	#tg .cell {
		text-align: center;
	}

	#tg th {
		background: #F2F2F2 !important;
		font-family: '微软雅黑';
		font-weight: 400;
		color: #333333;
	}

	#tg td {
		font-size: 12px;
		font-family: '微软雅黑';
		font-weight: 400;
		color: #333333;
	}

	#tg .el-table--fit {
		border: 1.5px solid #E8E8E8 !important;
	}

	#tg .cz {
		background: #00BE7F;
		border: #00BE7F;
	}

	#tg .cz:active {
		background: #00BE7F !important;
		border-color: #00BE7F !important;
	}

	#tg .cz:focus,
	.cz:hover {
		background: #00BE7F !important;
		border-color: #00BE7F !important;
	}

	#tg .button {
		display: flex;
		justify-content: center;
	}

	#tg .button .el-button--primary:nth-of-type(1) {
		background: #0A82F8;
		border: #0A82F8;
	}

	#tg .button .el-button--primary:nth-of-type(1):active {
		background: #0A82F8 !important;
		border-color: #0A82F8 !important;
	}

	#tg .button .el-button--primary:nth-of-type(1):focus,
	.button .el-button--primary:nth-of-type(1):hover {
		background: #0A82F8 !important;
		border-color: #0A82F8 !important;
	}

	#tg .button .el-button--primary:nth-of-type(2) {
		background: #00BE7F;
		border: #00BE7F;
	}

	#tg .button .el-button--primary:nth-of-type(2):active {
		background: #00BE7F !important;
		border-color: #00BE7F !important;
	}

	#tg .button .el-button--primary:nth-of-type(2):focus,
	.button .el-button--primary:nth-of-type(2):hover {
		background: #00BE7F !important;
		border-color: #00BE7F !important;
	}
	#tg .xq{
		display: flex;
	}
</style>
