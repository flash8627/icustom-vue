<template>
  <div class="app-login">
    <div id="login-form">
        <div>
            <span>用户名：</span>
            <span><input v-model="loginInfoVo.username" placeholder="请输入用户名" /></span>
        </div>
        <div>
            <span>密码：</span>
            <span><input v-model="loginInfoVo.password" placeholder="请输入密码" /></span>
        </div>
        
        <div>
            <button v-on:click="login">登陆</button>
            <button v-on:click="reset">重置</button>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app-login',
  components: {
  },
  data () {
    return {
      loginInfoVo: { username: '', password: '' },
      responseResult: []
    }
  },
  methods: {
    reset(){
      console.info('login reset info:','reset...');
      this.loginInfoVo.username = '';
      this.loginInfoVo.password = '';
    },
    login () {
      console.info('login info:','submit...');
      this.$axios
        .post('/login', {
          username: this.loginInfoVo.username,
          password: this.loginInfoVo.password
        })
        .then(response => {
          this.response = JSON.stringify(response.data)
          if (response.data.code === 200) {
            this.$router.replace({path: '/'});
          }else{
            alert(response.data.message);
            this.reset();
          }
        })
    }
  }
}
</script>
<style>

</style>