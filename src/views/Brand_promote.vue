<!-- 品牌 - 推廣 -->
<template>
	<Sidebar/>
	<div class="content">
		<!-- Navbar Start -->
		<Navbar/>
		<!-- Navbar End -->
		<!-- Table Start -->
		<div class="container-fluid pt-4">
			<div class="row g-4">
				<div class="col-sm-12 col-xl-12">
					<div class="bg-light rounded h-100 p-4">
						<h5 class="mb-4" style="display: inline-block;">{{web_title}}</h5>
						<a href="javascript:;" @click="promote_model" style="float: right;" class="btn btn-primary">增加</a>
						<table class="table table-hover">
							<thead>
								<tr>
									<th scope="col">名稱</th>
									<th scope="col">網址</th>
									<th scope="col">狀態</th>
									<!-- <th scope="col">建立日期</th> -->
									<th scope="col"></th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="form in forms">
									<td><a href="">{{form.name}}</a><br>圖</td>
									<td>{{form.url}}</td>
									<td>{{form.status}}</td>
									<td><a href="javascript:;" @click="stop(form.id)">停用</a></td>
								</tr>
							</tbody>
						</table>
						<div class="modal fade" id="add-promote" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title" id="exampleModalLabel">增加推廣人</h5>
										<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
									</div>
									<div class="modal-body">
										<div class="input-group mb-3">
											請輸入名稱:&nbsp;<input list="agents" v-model="news.promote">
											<datalist id="agents">
												<option v-for="promote in promotes" :label="promote.name" :value="promote.acc"/>
											</datalist>	
											<input type="hidden" name="brand_id" v-model="brand_id">
										</div>
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
										<button type="button" @click="add()" class="btn btn-primary">確定</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Table End -->


		<!-- Footer Start -->
		<div class="container-fluid pt-4 px-4">
			<div class="bg-light rounded-top p-4">
				<div class="row">
					<div class="col-12 col-sm-6 text-center text-sm-start">
						&copy; <a href="#">Your Site Name</a>, All Right Reserved. 
					</div>
					<div class="col-12 col-sm-6 text-center text-sm-end">
						<!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
						Designed By <a href="https://htmlcodex.com">HTML Codex</a>
					</div>
				</div>
			</div>
		</div>
		<!-- Footer End -->
	</div>
	<Backtop/>
</template>
<script>
	import Sidebar from '@/components/Sidebar.vue'
	import Navbar from '@/components/Navbar.vue'
	import Backtop from '@/components/Backtop.vue'
	export default {
		name: 'Forms',
		components: {
			Sidebar,
			Navbar,
			Backtop
		},
		data() {
			return {
				brand_id: 0,
				web_title: '合作推廣',
				forms: [
					// {id: 1, name: 'jack', url: 'xx.com/shop/jack', status:'上線'},
					// {id: 2, name: 'jack', url: 'xx.com/shop/jack', status:'上線'}
				],
				news: {
					promote: '',
					brand: 0
				},
				add_promote: null
			}
		},
		methods: {
			reset_promote() {
				this.news.promote = '';
			},
			promote_model() {
				this.add_promote = new bootstrap.Modal(document.getElementById('add-promote'), {
				  keyboard: false,
				  backdrop: 'static'
				})
				this.add_promote.show();
				this.reset_promote();
			},
			// promote_model() {
			// 	const agent = $.map(this.agents, function(item, index) {
			// 		return item.acc;
			// 	}).indexOf(this.news.agent);
			// 	if (agent === -1) {
			// 		alert('請確實選擇代理');
			// 		return;
			// 	}
			// 	this.add_promote.hide();
			// 	this.add_promote = null;
			// 	this.reset_promote();
			// 	// this.axios.post('prod/agent', this.news)
			// 	// 	.then(all => {
			// 	// 		let rs = all.data;
			// 	// 	});
			// }
		},
		mounted() {
			this.brand_id = this.$route.params.id;
			document.title = this.web_title+'-Admin';
			// location.href = 'login';
        	this.axios.get('/brand/'+this.brand_id+'/promote')
				.then(all => {
					let rs = all.data;
					this.forms = rs.data;
				});
		}
	}
</script>