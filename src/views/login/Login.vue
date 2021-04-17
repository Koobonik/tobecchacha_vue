<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" style="padding: 20px">
      <div style="padding-bottom: 20px"></div>
      <b-form-group
          id="userEmail"
          label="이메일"
          label-for="input-2"
          align="left"
      >
        <b-form-input
            id="userEmail"
            v-model="form.userEmail"
            type="email"
            placeholder="Enter email"
            required
        ></b-form-input>
      </b-form-group>


      <b-form-group id="input-group-2" label="비밀번호" label-for="input-3" align="left">
        <b-form-input
            type="password"
            id="input-3"
            v-model="form.password"
            v-bind:placeholder="passwordPlaceholder"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
        >
<!--          <b-form-checkbox v-bind:value="autoLogin">자동 로그인</b-form-checkbox>-->
        </b-form-checkbox-group>
      </b-form-group>

      <b-button block @click="validation" variant="primary">로그인</b-button>
      <b-button block href="findPassword" variant="outline-primary">아이디 찾기</b-button>
      <b-button block href="findPassword" variant="outline-primary">비밀번호 찾기</b-button>
<!--      <b-button type="reset" variant="danger">Reset</b-button>-->
    </b-form>
<!--    <b-card class="mt-3" header="Form Data Result">-->
<!--      <pre class="m-0">{{ form }}</pre>-->
<!--    </b-card>-->
  </div>
</template>

<script>
import * as auth from '@/api/auth'
import router from "@/router";
import * as user from "@/api/user";
export default {
name: "Login",
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
    beforeCreate(){
      user.getMyProfile(auth.getToken()).then(response => {
        console.log(response);
        router.go(-1);
      }).catch(error => {
        console.log(error);
      })

    }

  }
}

</script>

<style scoped>

</style>