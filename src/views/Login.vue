<template>
	<div class="container-fluid">
	    <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
	        <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
	            <div class="bg-light rounded p-4 p-sm-5 my-4 mx-3">
	                <div class="d-flex align-items-center justify-content-between mb-3">
	                    <!-- <a href="index.html" class="">
	                        <h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>Admin</h3>
	                    </a> -->
	                    <h3 style="margin: 0 auto;">Admin</h3>
	                </div>
	                <div class="form-floating mb-3">
	                    <input type="email" class="form-control" name="account" placeholder="name@example.com" v-model="form.account">
	                    <label>帳號</label>
	                </div>
	                <div class="form-floating mb-4">
	                    <input type="password" class="form-control" name="password" v-model="form.password" placeholder="Password">
	                    <label>密碼</label>
	                </div>
	                <!-- <div class="d-flex align-items-center justify-content-between mb-4">
	                    <div class="form-check">
	                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
	                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
	                    </div>
	                    <a href="">Forgot Password</a>
	                </div> -->
	                <button type="button" @click="login()" class="btn btn-primary py-3 w-100 mb-4">Sign In</button>
	                <!-- <p class="text-center mb-0">Don't have an Account? <a href="">Sign Up</a></p> -->
	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'Login',
	data() {
		return {
			form: {
				account: '',
				password: ''
			}
		}
	},
	methods: {
		login() {
			location.href = '/';
		}
	}
  // components: {
  //   HelloWorld
  // }
}
</script>
