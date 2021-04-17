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
            placeholder="이메일을 입력해주세요."
            required
        ></b-form-input>
      </b-form-group>


      <b-form-group id="input-group-2" label="닉네임" label-for="input-2" align="left">
        <b-form-input
            id="nickName"
            v-model="form.userNickname"
            v-bind:placeholder="nickNamePlaceholder"
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

      <b-button block @click="validation" variant="primary">초기화 링크 전송</b-button>
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
name: "FindPassword",
  data() {
    return {
      form: {
        userEmail: '',
        userNickname: '',
        autoLogin : false,
      },
      show: true,
      nickNamePlaceholder: "닉네임은 2자 이상 입력해주세요."
    }
  },
  methods: {
    onSubmit() {
      // alert(JSON.stringify(this.form));
      auth.findPassword(this.form.userEmail, this.form.userNickname);
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
      this.form.userNickname = '';
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },

    async validation(){

        this.onSubmit();

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