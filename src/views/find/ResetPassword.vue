<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" style="padding: 20px">
      <div style="padding-bottom: 20px"></div>


      <b-form-group id="input-group-2" label="비밀번호" label-for="input-3" align="left">
        <b-form-input
            type="password"
            id="input-3"
            v-model="form.password"
            v-bind:placeholder="passwordPlaceholder"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="비밀번호 확인" label-for="input-4" align="left">
        <b-form-input
            type="password"
            id="input-4"
            v-model="form.password2"
            v-bind:placeholder="passwordPlaceholder"
            required
        ></b-form-input>
      </b-form-group>


      <b-button block @click="validation" variant="primary">비밀번호 재설정</b-button>
<!--      <b-button type="reset" variant="danger">Reset</b-button>-->
    </b-form>
  </div>
</template>

<script>
import * as auth from '@/api/auth'
export default {
name: "ResetPassword",
  data() {
    return {
      form: {
        password: '',
        password2: '',
        authCode: '',
        // food: null,
        // checked: []
      },
      passwordPlaceholder: "비밀번호는 9자 이상 입력해주세요.",
      // foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
    }
  },
  methods: {
    onSubmit() {
      // alert(JSON.stringify(this.form));
      auth.resetPasswordUsingToken(this.$route.query.token,  this.form.password);
    },
    onReset(event) {
      event.preventDefault()
      this.form.password2 = '';
      this.form.password = '';
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },

    async validation(){
      // if(!this.authButtonClicked){
      //   console.log(this.$route.query.token);
      //   return null;
      // }

      if(this.form.password !== this.form.password2){
        alert("비밀번호가 일치하지 않습니다.");
        return null;
      }
      else if(this.form.password.length < 9 || this.form.password2.length < 9){
        alert("비밀번호는 9자 이상 입력해주세요.");
        return null;
      }
      else {
        this.onSubmit();
      }
    }

  },
  created() {
    console.log(this.$route.query.token); // outputs 'yay'
  }
}

</script>

<style scoped>

</style>