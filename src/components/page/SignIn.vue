<template>
  <div class="bg">
    <div class="logo">
      <router-link to="/">
        <b-navbar-brand>
          <b-img width="85" height="50"
                 src="https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png"/>
        </b-navbar-brand>
      </router-link>
    </div>
    <div class="main">

      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup2"
                    label="Your Password:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="password"
                      v-model="password"
                      required
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>
      <b-button type="button" variant="primary" class="sign-in-btn" @click="onClick">SignIn</b-button>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      onClick() {
        var that = this;
        this.$http
          .post('http://localhost:8080/user/sign_in', {"email": this.email, "password": this.password})
          .then(function (response) {
            alert(JSON.stringify(response.data.data));
            localStorage.setItem("loginUser", JSON.stringify(response.data.data))
            that.$router.push("/")
          })
      }
    }
  }
</script>

<style scoped>
  .bg {
    background-color: #EEE;
    width: 100%;
    height: 1200px;
  }

  .logo {
    position: absolute;
    top: 50px;
    left: 50px;
  }

  .main {
    width: 400px;
    margin: 100px auto 0 420px;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);
    vertical-align: middle;
    display: inline-block;
  }

  .sign-in-btn {
    width: 300px;
    height: 40px;
    border-radius: 30px;
  }
</style>
