<template>
	<div id="ziliao">
		<div class="head">
			<img src="../../public/img/u174.png" />
			商户资料管理
		</div>
		<div class="bod">
			<div class="nan">
				<el-tabs v-model="activeName" @tab-click="handleClick">
				    <el-tab-pane label="商户资料管理" name="first">
						<div class="table">
							<div class="row">
								<div class="spa1">商家名称：</div>
								<div class="spa2">十月大神商家</div>
							</div>
							<div class="row">
								<div class="spa1">申请会员：</div>
								<div class="spa2">十月大神</div>
							</div>
							<div class="row">
								<div class="spa1">营业执照：</div>
								<div class="spa2">
									<img src="../../public/img/tu.png" />
								</div>
							</div>
							<div class="row">
								<div class="spa1">其它资质：</div>
								<div class="spa2">
									<img src="../../public/img/tu.png" />
									<img src="../../public/img/tu.png" />
									<img src="../../public/img/tu.png" />
									<img src="../../public/img/tu.png" />
								</div>
							</div>
							<div class="row">
								<div class="spa1">商户商标：</div>
								<div class="spa2">
									<img src="../../public/img/tu.png" />
								</div>
							</div>
							<div class="row">
								<div class="spa1">门店默认图片：</div>
								<div class="spa2">
									<img src="../../public/img/tu.png" />
								</div>
							</div>
							<div class="row">
								<div class="spa1">分类：</div>
								<div class="spa2">餐饮美食</div>
							</div>
							<div class="row">
								<div class="spa1">子分类</div>
								<div class="spa2">西餐    料理    烧烤</div>
							</div>
							<div class="row">
								<div class="spa1">城市：</div>
								<div class="spa2">广东省  广州市  越秀区</div>
							</div>
							<div class="row">
								<div class="spa1">商圈：</div>
								<div class="spa2">天河商圈</div>
							</div>
							<div class="row">
								<div class="spa1">地址：</div>
								<div class="spa2">东园横路1号</div>
							</div>
							<div class="row">
								<div class="spa1">联系电话：</div>
								<div class="spa2">18812345678</div>
							</div>
							<div class="row">
								<div class="spa1">联系人：</div>
								<div class="spa2">十月大神</div>
							</div>
							<div class="row">
								<div class="spa1">营业时间：</div>
								<div class="spa2">周一至周五8点至20点，周六周日全天</div>
							</div>
						</div>
						<div class="botton1">
							<router-link tag="el-button" to="/shou" class="bian">
								编辑
							</router-link>
							<router-link tag="el-button" to="/shou" class="fan">
								返回
							</router-link>
						</div>
					</el-tab-pane>
				    <el-tab-pane label="加盟协议" name="second">
						<h3>O2O商城系统服务协议</h3>
						<p>
							<span>您确认，在开始"实名认证"前，您已详细阅读了本协议所有内容，一旦您开始认证流程，即表示您充分理解并同意接受本协议的全部内容。</span><br />
							<span>为了提高服务的安全性和我们的商户身份的可信度，我们向您提供认证服务。在您申请认证前，您必须先注册成为用户。商户认证成功后，我们将给予每个商户一个认证标识。本公司有权采取各种其认为必要手段对商户的身份进行识别。但是，作为普通的网络服务提供商，本公司所能采取的方法有限，而且在网络上进行商户身份识别也存在一定的困难，因此，本公司对完成认证的商户身份的准确性和绝对真实性不做任何保证。</span><br />
							<span>本公司有权记录并保存您提供给本公司的信息和本公司获取的结果信息，亦有权根据本协议的约定向您或第三方提供您是否通过认证的结论以及您的身份信息。</span>
						</p>
						<h3>一、关于认证服务的理解与认同</h3>
						<p>
							认证服务是由本公司提供的一项身份识别服务。除非本协议另有约定，一旦您的账户完成了认证，相应的身份信息和认证结果将不因任何原因被修改或取消；如果您的身份信息在完成认证后发生了变更，您应向本公司提供相应有权部门出具的凭证，由本公司协助您变更账户的对应认证信息。<br />
							本公司有权单方随时修改或变更本协议内容，并通过网站公告变更后的协议文本，无需单独通知您。本协议进行任何修改或变更后，您还继续使用我们的服务和/或认证服务的，即代表您已阅读、了解并同意接受变更后的协议内容；您如果不同意变更后的协议内容，应立即停用我们的服务和认证服务。<br />
						</p>
						<h3>二、实名认证</h3>
						<p>
							个体工商户类商户向本公司申请认证服务时，应向本公司提供以下资料：中华人民共和国工商登记机关颁发的个体工商户营业执照或者其他身份证明文件。<br />
							企业类商户向本公司申请认证服务时，应向本公司提供以下资料：中华人民共和国工商登记机关颁发的企业营业执照或者其他身份证明文件。<br />
							其他类商户向本公司申请认证服务时，应向本公司提供以下资料：能够证明商户合法身份的证明文件，或者其他本公司认为必要的身份证明文件。<br />
							如商户在认证后变更任何身份信息，则应在变更发生后三个工作日内书面通知本公司变更认证，否则本公司有权随时单方终止提供服务，且因此造成的全部后果，由商户自行承担。<br />
							通过实名认证的商户不能自行修改已经认证的信息，包括但不限于企业名称、姓名以及身份证件号码等。
						</p>
						<h3>三、特别声明</h3>
						<p>
							认证信息共享：<br />
							为了使您享有便捷的服务，您经由其它网站向本公司提交认证申请即表示您同意本公司为您核对所提交的全部认证信息，并同意本公司将是否通过认证的结果及相关认证信息提供给该网站。<br />
							认证资料的管理：<br />
							您在认证时提交给本公司的认证资料，即不可撤销的授权由本公司保留。本公司承诺除法定或约定的事由外，不公开或编辑或透露您的认证资料及保存在本公司的非公开内容用于商业目的，<br />
							但本条第1项规定以及以下情形除外：<br />
							您授权本公司透露的相关信息；<br />
							本公司向国家司法及行政机关提供；<br />
							您授权本公司透露的相关信息；<br />
							本公司向本公司关联企业提供；<br />
							第三方和本公司一起为商户提供服务时，该第三方向您提供服务所需的相关信息；<br />
						</p>
						<h3>四、第三方网站的链接</h3>
						<p>
							<span> 为实现认证信息审查，我们网站上可能包含了指向第三方网站的链接（以下简称"链接网站"）。"链接网站"非由本公司控制，对于任何"链接网站"的内容，包含但不限于"链接网站"内含的任何链接，或"链接网站"的任何改变或更新，本公司均不予负责。自"链接网站"接收的网络传播或其它形式之传送，本公司不予负责。</span><br />
						</p>
						<h3>五、不得为非法或禁止的使用</h3>
						<p>
							<span>接受本协议全部的说明、条款、条件是您申请认证的先决条件。您声明并保证，您不得为任何非法或为本协议、条件及须知所禁止之目的进行认证申请。您不得以任何可能损害、使瘫痪、使过度负荷或损害网站或其他网站的服务、或干扰本公司或他人对于认证申请的使用等方式使用认证服务。您不得经由非本公司许可提供的任何方式取得或试图取得任何资料或信息。</span><br />
						</p>
						<h3>六、有关免责</h3>
						<p>
							<span>下列情况时本公司无需承担任何责任：</span><br />
							由于您将账户密码告知他人或未保管好自己的密码或与他人共享账户或任何其他非本公司的过错，导致您的个人资料泄露。<br />
							任何由于黑客攻击、计算机病毒侵入或发作、电信部门技术调整导致之影响、因政府管制而造成的暂时性关闭、由于第三方原因(包括不可抗力，例如国际出口的主干线路及国际出口电信提供商一方出现故障、火灾、水灾、雷击、地震、洪水、台风、龙卷风、火山爆发、瘟疫和传染病流行、罢工、战争或暴力行为或类似事件等)及其他非因本公司过错而造成的认证信息泄露、丢失、被盗用或被篡改等。<br />
							由于与本公司链接的其它网站所造成的商户身份信息泄露及由此而导致的任何法律争议和后果。<br />
							任何商户向本公司提供错误、不完整、不实信息等造成不能通过认证或遭受任何其他损失，概与本公司无关。
						</p>
						<div class="botton">
							<router-link tag="el-button" to="/shou" class="fan">
								返回
							</router-link>
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ziliao',
		data() {
			return {
				activeName: 'first',
			}
		},
		methods: {
		      handleClick(tab, event) {
		      }
		    }
	}
</script>

<style>
	#ziliao .head{
		display: flex;
		align-items: center;
		background: #FFFFFF;
		padding: 15px;
		color: #898989;
	}
	#ziliao .bod{
		padding: 10px 25px 15px 25px;
	}
	#ziliao .nan{
		background: #FFFFFF;
		padding: 50px 40px 30px 40px;
		color: #333333;
	}
	#ziliao .el-tabs__item.is-active{
		color: #FF8800;
	}
	#ziliao .el-tabs__item{
		padding-left: 20px;
	}
	#ziliao .el-tabs__active-bar{
		background-color: #FF8800;
	}
	#ziliao h3{
		font-size: 15px;
		font-weight: 700;
		font-family:'微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
		margin-bottom: 0;
	}
	#ziliao p{
		font-size: 12px;
		color: #666666;
		font-weight: 400;
		line-height: 24px;
	}
	#ziliao span{
		display: inline-block;
		text-indent: 1em;
	}
	#ziliao .botton span{
		text-indent: initial;
	}
	#ziliao .table{
		width: 100%;
	}
	#ziliao .row{
		display: flex;
	}
	#ziliao .row>div{
		padding: 0 10px;
	}
	#ziliao .table>div:nth-of-type(3)>div{
		height: 81px;
		line-height: 81px;
	}
	#ziliao .table>div:nth-of-type(4)>div{
		height: 81px;
		line-height: 81px;
	}
	#ziliao .table>div:nth-of-type(5)>div{
		height: 81px;
		line-height: 81px;
	}
	#ziliao .table>div:nth-of-type(6)>div{
		height: 81px;
		line-height: 81px;
	}
	#ziliao .spa2 img{
		width: 61px;
		margin: 10px;
	}
	#ziliao .spa1{
		flex: 2;
		background: #FAFAFA;
		border: 1px solid #D7D7D7;
		font-family: '微软雅黑';
		font-weight: 400;
		font-style: normal;
		font-size: 12px;
		text-align: right;
		height: 50px;
		line-height: 50px;
	}
	#ziliao .spa2{
		flex: 8;
		border: 1px solid #D7D7D7;
		border-left: none;
		font-family: '微软雅黑';
		font-weight: 400;
		font-style: normal;
		font-size: 12px;
		color: #666666;
		text-align: left;
		height: 50px;
		line-height: 50px;
	}
	#ziliao .botton1{
		margin-left: 250px;
		margin-top: 20px;
	}
	#ziliao .botton1 span{
		text-indent: initial;
	}
	#ziliao .fan{
		background: #00BE7F!important;
		color: #FFFFFF!important;
	}
	#ziliao .bian{
		background: #FF8800!important;
		color: #FFFFFF!important;
	}
</style>
