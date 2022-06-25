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
						<h5 class="mb-4" style="display: inline-block; width: auto;">{{web_title}}</h5>
						<div class="mb-3">
							<div class="input-group">
								<label class="col-sm-1 col-form-label">品牌名</label>
								<div class="col-sm-11">
									<input type="text" class="form-control" v-model="form.name">
								</div>
							</div>
							<div class="input-group">
								<label class="col-sm-1 col-form-label">Logo</label>
								<div class="col-sm-11">
									<input @change="filechange" type="file">
								</div>
							</div>
							<div class="input-group">
								<label class="col-sm-1 col-form-label">商家</label>
								<div class="col-sm-11">
									<select name="agent" v-model="form.agent">
										<option v-for="agent in agents"
											:selected="agent.id == form.agent"
											:value="agent.id">{{agent.name}}</option>
									</select>
								</div>
							</div>
							<div class="input-group">
								<label class="col-sm-1 col-form-label">品牌簡述</label>
								<textarea class="form-control" v-model="form.intro"></textarea>
							</div>
							<hr>
						</div>
						<button type="button" @click="save()" class="btn btn-primary">建檔</button>
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
<style type="text/css">
	.format {
		display: inline-block;
		width: auto !important;
		flex: revert !important;
	}
	.pointer {
		cursor: pointer;
	}
	.remove {        
		border: 1px solid #D0D0D0;
		width: 20px;
		text-align: center;
		border-radius: 50% !important;
		line-height: 20px;
		box-shadow: 0 0 10px #D0D0D0;
		display: inline-block;
		margin-left: 0.5rem;
		height: 23px;
	}
</style>
<script>
	import Sidebar from '@/components/Sidebar.vue'
	import Navbar from '@/components/Navbar.vue'
	import Backtop from '@/components/Backtop.vue'
	import { ref } from 'vue'
	export default {
		name: 'Forms',
		components: {
			Sidebar,
			Navbar,
			Backtop
		},
		data() {
			return {
				web_title: '創建品牌',
				id: 0,
				form: {
					name: '',
					intro: '',
					file: '',
					agent: 0
				},
				agents: [
					{'id': 0, 'name': '請選擇'}
				]
			}
		},
		methods: {
			filechange(e) {
				const target = e.target
				const files = Array.from(target.files)
				this.form.file = null;
				if (files) {
					const ufile = files[0]
					this.form.file = ufile;
				}
			},
			save() {
				let url = '/brand';
				// let id = Number(this.id);
				// if (id > 0) url+= '/'+id;
				this.axios.post(url, this.form)
					.then(all => {
						let rs = all.data;
					});
			}
		},
		mounted() {
			document.title = this.web_title+'-Admin';
			if (this.$route.name === 'brand_create') {
			} else {
				this.id = this.$route.params.id;
				// this.axios.get('form/'+this.id)
				// 	.then(all => {
				// 		let rs = all.data;
				// 		this.form = rs.data;
				// 	});
			}
		}
	}
</script>