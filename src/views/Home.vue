<template>
    <div>
        IGGID: {{this.$root.passport.iggId}}
        <br/>
        登录方式: {{this.$root.passport.type}}
        <br/>
        设备标识: {{this.$root.passport.deviceId}}
    </div>
</template>

<script>
  export default {
    mounted(){
      if (!this.$root.passport.isLogin){
        this.$router.push('/login');
      }else {
        console.log(this.$root.passport);
      }
    }
  }
</script>