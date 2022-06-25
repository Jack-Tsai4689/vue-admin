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
						<a href="brand/create" style="float: right;" class="btn btn-primary">創建</a>
						<table class="table table-hover">
							<thead>
								<tr>
									<th scope="col">名稱</th>
									<th scope="col">網址</th>
									<th scope="col">商品清單</th>
									<th scope="col">合作推廣</th>
									<th scope="col"></th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="form in forms">
									<td>{{form.name}}</td>
									<td>{{form.url}}</td>
									<td><a :href="'/brand/'+form.id+'/prods'">List</a></td>
									<td><a :href="'/brand/'+form.id+'/promote'">List</a></td>
									<td><a :href="'/brand/'+form.id+'/edit'">編輯</a></td>
								</tr>
							</tbody>
						</table>
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
				web_title: '品牌列表',
				forms: [
					// {id: 1, name: 'BrandA'},
					// {id: 2, name: 'BrandB'}
				]
			}
		},
		mounted() {
			document.title = this.web_title+'-Admin';
			// location.href = 'login';
			this.axios.get('brands')
				.then(all => {
					let rs = all.data;
					this.forms = rs.data;
				});
		}
	}
</script>