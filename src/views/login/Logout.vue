<template>
  <div>

  </div>
</template>

<script>
import * as auth from '@/api/auth'
import * as member from '@/api/member'
import router from "@/router";
export default {
name: "Logout",
  data() {
    return {
      form: {
        userEmail: '',
        password: '',
        autoLogin : false,
      },
      passwordPlaceholder: "비밀번호는 9자 이상 입력해주세요.",
      show: true,
    }
  },
  methods: {
    onSubmit() {
      // alert(JSON.stringify(this.form));
      auth.login(this.form.userEmail, this.form.password);
      // this.beforeRouteEnter();

    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.prevRoute = from
      })
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.userEmail = '';
      this.form.password = '';
      // this.form.food = null
      // this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },

    async validation(){
      if(this.form.password.length < 9){
        alert("비밀번호는 9자 이상 입력해주세요.");
        return null;
      }
      else {
        this.onSubmit();
      }
    },
    async beforeCreate() {
      await auth.removeTokens();

      await member.getMyProfile();
      router.go(-2);


    }
  }
}

</script>

<style scoped>

</style>