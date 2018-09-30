<template>
    <div>
        <button @click="login">点击登录</button>
    </div>
</template>

<script>
  export default {
    name: "login",
    methods: {
      login(){
        let passport = this.$root.passport;
        passport.set('isLogin', true);
        passport.set('iggId', 1234545);
        this.$router.push('/');
      }
    }
  }
</script>