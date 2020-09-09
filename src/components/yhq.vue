<template>
	<div id="yhq">
		<div class="head">
			<img src="../../public/img/u174.png" />
			优惠券
		</div>
		<div class="bod">
			<div class="nan">
				<div class="ding">
					<div class="left"></div>
					<div class="right">
						<el-button type="primary" @click="add">新增优惠券</el-button>
					</div>
				</div>
				<div class="di">
					<el-table style="width: 100%;" :data="tableData">
						<el-table-column label="编号" prop="bh" width="70">
						</el-table-column>
						<el-table-column label="优惠券名称" prop="yhqmc" width="130">
						</el-table-column>
						<el-table-column label="券总数" prop="qzs" width="80">
						</el-table-column>
						<el-table-column label="已领取量" prop="ylql" width="80">
						</el-table-column>
						<el-table-column label="上线时间" width="180">
							<template slot-scope="scope">
								<div class="sxsj">
									{{scope.row.sxsj[0]}}<br />
									{{scope.row.sxsj[1]}}
								</div>
							</template>
						</el-table-column>
						<el-table-column label="面值" prop="mz" width="110">
						</el-table-column>
						<el-table-column label="使用范围" prop="syfw" width="110">
						</el-table-column>
						<el-table-column label="类型" prop="lx" width="110">
						</el-table-column>
						<el-table-column label="状态" width="110">
							<template slot-scope="scope">
								<div class="switch">
									<el-switch v-model="scope.row.zt" active-color="#FF8800" inactive-color="#CCCCCC">
									</el-switch>
								</div>
							</template>
						</el-table-column>
						<el-table-column label="操作" prop="cz" width="125">
							<template slot-scope="scope">
								<div class="button">
									<el-button type="primary" @click="handleEdit(scope.$index, scope.row)">{{scope.row.cz[0]}}</el-button>
									<el-button type="primary" @click="remove(scope.$index, scope.row)">{{scope.row.cz[1]}}</el-button>
								</div>
							</template>
						</el-table-column>
					</el-table>
					<el-dialog :title="dialogTitle" width="50%" :visible.sync="iconFormVisible">
						<el-form :inline="true" :model="userInfo" class="demo-form-inline">
							<el-form-item label="编号">
								<el-input v-model="userInfo.bh" placeholder="编号"></el-input>
							</el-form-item>
							<el-form-item label="优惠券名称">
								<el-input v-model="userInfo.yhqmc" placeholder="优惠券名称"></el-input>
							</el-form-item>
							<el-form-item label="券总数">
								<el-input v-model="userInfo.qzs" placeholder="券总数"></el-input>
							</el-form-item>
							<el-form-item label="已领取量">
								<el-input v-model="userInfo.ylql" placeholder="已领取量"></el-input>
							</el-form-item>
							<el-form-item label="上线时间">
								<el-input v-model="userInfo.sxsj" placeholder="上线时间"></el-input>
							</el-form-item>
							<el-form-item label="面值">
								<el-input v-model="userInfo.mz" placeholder="面值"></el-input>
							</el-form-item>
							<el-form-item label="使用范围">
								<el-input v-model="userInfo.syfw" placeholder="使用范围"></el-input>
							</el-form-item>
							<el-form-item label="类型">
								<el-input v-model="userInfo.lx" placeholder="类型"></el-input>
							</el-form-item>
							<el-form-item label="状态">
								<el-input v-model="userInfo.zt" placeholder="状态"></el-input>
							</el-form-item>
							<el-form-item label="操作">
								<el-input v-model="userInfo.cz" placeholder="操作"></el-input>
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
		name: 'yhq',
		data() {
			return {
				iconFormVisible: false,
				userInfo: {},
				dialogTitle: '增加',
				value:'',
				rowIndex: null,
				userList: [{
					bh: '1001',
					yhqmc: '优惠券名称1',
					qzs: '1000',
					ylql: '489',
					sxsj: ['2018-12-12 10:00:00 开始', '2018-12-30 23:59:58 结束'],
					mz: '20',
					syfw: '商城',
					lx: '电子券',
					zt: true,
					cz: ['编辑', '删除']
				}, {
					bh: '1001',
					yhqmc: '优惠券名称1',
					qzs: '1000',
					ylql: '489',
					sxsj: ['2018-12-12 10:00:00 开始', '2018-12-30 23:59:58 结束'],
					mz: '20',
					syfw: '商城',
					lx: '电子券',
					zt: true,
					cz: ['编辑', '删除']
				}, {
					bh: '1001',
					yhqmc: '优惠券名称1',
					qzs: '1000',
					ylql: '489',
					sxsj: ['2018-12-12 10:00:00 开始', '2018-12-30 23:59:58 结束'],
					mz: '20',
					syfw: '商城',
					lx: '电子券',
					zt: true,
					cz: ['编辑', '删除']
				}, {
					bh: '1001',
					yhqmc: '优惠券名称1',
					qzs: '1000',
					ylql: '489',
					sxsj: ['2018-12-12 10:00:00 开始', '2018-12-30 23:59:58 结束'],
					mz: '20',
					syfw: '商城',
					lx: '电子券',
					zt: true,
					cz: ['编辑', '删除']
				}, {
					bh: '1001',
					yhqmc: '优惠券名称1',
					qzs: '1000',
					ylql: '489',
					sxsj: ['2018-12-12 10:00:00 开始', '2018-12-30 23:59:58 结束'],
					mz: '20',
					syfw: '商城',
					lx: '电子券',
					zt: true,
					cz: ['编辑', '删除']
				}, {
					bh: '1001',
					yhqmc: '优惠券名称1',
					qzs: '1000',
					ylql: '489',
					sxsj: ['2018-12-12 10:00:00 开始', '2018-12-30 23:59:58 结束'],
					mz: '20',
					syfw: '商城',
					lx: '电子券',
					zt: true,
					cz: ['编辑', '删除']
				}, {
					bh: '1001',
					yhqmc: '优惠券名称1',
					qzs: '1000',
					ylql: '489',
					sxsj: ['2018-12-12 10:00:00 开始', '2018-12-30 23:59:58 结束'],
					mz: '20',
					syfw: '商城',
					lx: '电子券',
					zt: true,
					cz: ['编辑', '删除']
				}, {
					bh: '1001',
					yhqmc: '优惠券名称1',
					qzs: '1000',
					ylql: '489',
					sxsj: ['2018-12-12 10:00:00 开始', '2018-12-30 23:59:58 结束'],
					mz: '20',
					syfw: '商城',
					lx: '电子券',
					zt: true,
					cz: ['编辑', '删除']
				}, {
					bh: '1001',
					yhqmc: '优惠券名称1',
					qzs: '1000',
					ylql: '489',
					sxsj: ['2018-12-12 10:00:00 开始', '2018-12-30 23:59:58 结束'],
					mz: '20',
					syfw: '商城',
					lx: '电子券',
					zt: true,
					cz: ['编辑', '删除']
				}, {
					bh: '1001',
					yhqmc: '优惠券名称1',
					qzs: '1000',
					ylql: '489',
					sxsj: ['2018-12-12 10:00:00 开始', '2018-12-30 23:59:58 结束'],
					mz: '20',
					syfw: '商城',
					lx: '电子券',
					zt: true,
					cz: ['编辑', '删除']
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
				this.$confirm(`确定删除${row.bh}吗?`, '提示', {
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
	#yhq .head {
		display: flex;
		align-items: center;
		background: #FFFFFF;
		padding: 15px;
		color: #898989;
	}

	#yhq .bod {
		padding: 10px 25px 15px 25px;
	}

	#yhq .nan {
		background: #FFFFFF;
		padding: 50px 40px 30px 40px;
		color: #333333;
	}

	#yhq .ding {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	#yhq .left {
		display: flex;
	}

	#yhq .el-input__inner {
		border: none;
	}

	#yhq .el-range-input:hover {
		border: 1px solid #FF8800 !important;
	}

	#yhq #yhq .shang input {
		height: 36px;
		border: 1px solid #DCDFE6 !important;
	}

	#yhq .shang {
		width: 200px;
	}

	#yhq .di {
		margin-top: 5px;
		padding-top: 10px;
		border-top: 3px solid #FF8800;
	}

	#yhq .shang:hover input {
		border: 1px solid #FF8800 !important;
	}

	#yhq .el-input--suffix {
		width: 100px !important;
		margin-left: 20px;
	}

	#yhq .el-input__inner i {
		display: none;
	}

	#yhq .el-range-input {
		border: 1px solid #DCDFE6 !important;
		width: 150px !important;
		text-align: left !important;
	}

	#yhq .el-button--primary {
		color: #FFFFFF;
		background: #FF8800;
		border-color: #FF8800;
		padding: 5px 10px;
		font-size: 12px;
	}

	#yhq .el-button--primary.is-active,
	.el-button--primary:active {
		background: #FF8800 !important;
		border-color: #FF8800 !important;
	}

	#yhq .el-button--primary:focus,
	.el-button--primary:hover {
		background: #FF8800 !important;
		border-color: #FF8800 !important;
	}

	#yhq .el-pagination {
		text-align: center;
	}

	#yhq .cell {
		text-align: center;
	}

	#yhq th {
		background: #F2F2F2 !important;
		font-family: '微软雅黑';
		font-weight: 400;
		color: #333333;
	}

	#yhq td {
		font-size: 12px;
		font-family: '微软雅黑';
		font-weight: 400;
		color: #333333;
	}

	#yhq .el-table--fit {
		border: 1.5px solid #E8E8E8 !important;
	}

	#yhq .cz {
		background: #00BE7F;
		border: #00BE7F;
	}

	#yhq .cz:active {
		background: #00BE7F !important;
		border-color: #00BE7F !important;
	}

	#yhq .cz:focus,
	.cz:hover {
		background: #00BE7F !important;
		border-color: #00BE7F !important;
	}

	#yhq .button {
		display: flex;
		justify-content: center;
	}

	#yhq .button .el-button--primary:nth-of-type(1) {
		background: #0A82F8;
		border: #0A82F8;
	}

	#yhq .button .el-button--primary:nth-of-type(1):active {
		background: #0A82F8 !important;
		border-color: #0A82F8 !important;
	}

	#yhq .button .el-button--primary:nth-of-type(1):focus,
	.button .el-button--primary:nth-of-type(1):hover {
		background: #0A82F8 !important;
		border-color: #0A82F8 !important;
	}

	#yhq .button .el-button--primary:nth-of-type(2) {
		background: #00BE7F;
		border: #00BE7F;
	}

	#yhq .button .el-button--primary:nth-of-type(2):active {
		background: #00BE7F !important;
		border-color: #00BE7F !important;
	}

	#yhq .button .el-button--primary:nth-of-type(2):focus,
	.button .el-button--primary:nth-of-type(2):hover {
		background: #00BE7F !important;
		border-color: #00BE7F !important;
	}
</style>
