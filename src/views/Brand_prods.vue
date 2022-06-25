<!-- 品牌的商品 -->
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
						<a :href="'prod/create?brand='+brand_id" style="float: right;" class="btn btn-primary">增加</a>
						<div><input type="button" @click="promote_model" class="btn btn-success" value="增加推廣"></div>
						<table class="table table-hover">
							<thead>
								<tr>
									<th scope="col"><input type="checkbox" :checked="check_all_checked" @click="check_all"></th>
									<th scope="col">商品名</th>
									<th scope="col">成本</th>
									<th scope="col">售價</th>
									<th scope="col">狀態</th>
									<th scope="col">建立日期</th>
									<th scope="col">更新日期</th>
									<th scope="col">推廣數</th>
									<th scope="col"></th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="form in forms">
									<td><input type="checkbox" name="ids" v-model="form.checked" :value="form.id"></td>
									<td><a :href="'/prod/'+form.id+'/edit?brand='+brand_id">{{form.name}}</a></td>
									<td>{{ form.cost }}</td>
									<td>{{ form.price }}</td>
									<td>{{ form.status_str }}</td>
									<td>{{form.created_at}}</td>
									<td>{{form.updated_at}}</td>
									<td>{{form.promote}}</td>
									<td><a :href="'/prod/'+form.id+'/edit?brand='+brand_id">編輯</a></td>
								</tr>
							</tbody>
						</table>
						<div class="modal fade" id="add-promote" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div class="modal-dialog modal-lg">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title" id="exampleModalLabel">推廣設定</h5>
										<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
									</div>
									<div class="modal-body">
										<div class="input-group mb-3">
											<div>
												指定推廣:&nbsp;<input list="agents" v-model="add.promote">
												<datalist id="agents">
													<option v-for="promote in promotes" :value="promote.name"/>
												</datalist>
											</div>
										</div>
										<div class="mb-3" v-for="prod in add.prods">
											<div class="input-group">
												<label class="col-sm-1 col-form-label">商品</label>
												<label class="col-sm-7 col-form-label">{{prod.name}}</label>
												<label class="col-sm-1 col-form-label">售價</label>
												<div class="col-sm-3"><input type="number" v-model="prod.price"></div>
											</div>
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
				check_all_checked: false,
				web_title: '商品列表',
				forms: [
					// {id: 1, name: '產品A', cost: 50, price: 100, checked: false, 'agent_rows': 5, 'date': '2022-07-06'},
					// {id: 2, name: '產品B', cost: 30, price: 80, checked: false, 'agent_rows': 8, 'date': '2022-07-06'}
				],
				promotes: [
					// {id: 1, name: 'jack', acc: '123'},
					// {id: 2, name: 'jack', acc: '456'}
				],
				add: {
					promote: '',
					prods: []
				},
				add_promote: null
			}
		},
		methods: {
			more_promote() {

			},
			check_all() {
				this.check_all_checked = !this.check_all_checked;
				let checked = this.check_all_checked;
				this.forms.map(function(i){
					i.checked = checked;
				});
			},
			promote_model() {
				let tmps = [];
				this.forms.map(function(i){
					if (i.checked) {
						let tmp = {
							id: i.id,
							name: i.name,
							price: i.price
						};
						tmps.push(tmp);
					}
				});
				this.add.prods = tmps;
				this.add_promote = new bootstrap.Modal(document.getElementById('add-promote'), {
				  keyboard: false,
				  backdrop: 'static'
				})
				this.add_promote.show();
				// this.reset_promote();
			},
		},
		mounted() {
			this.brand_id = this.$route.params.id;
			document.title = this.web_title+'-Admin';

			this.axios.get('brand/'+this.brand_id+'/prods')
				.then(all => {
					let rs = all.data;
					this.forms = rs.data;
					this.forms.forEach(function(i){
						i.status_str = i.status === 1 ? '上架':'下架';
						i.checked = false;
					});
				});
			this.axios.get('/brand/'+this.brand_id+'/promote')
				.then(all => {
					let rs = all.data;
					this.promotes = rs.data;
				});
		}
	}
</script>