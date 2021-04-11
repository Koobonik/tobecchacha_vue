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

      <b-button variant="primary" v-on:click="sendEmailForAuthEmail">인증번호 전송</b-button>

      <b-form-group id="input-group-2" label="닉네임" label-for="input-2" align="left">
        <b-form-input
            id="nickName"
            v-model="form.userNickname"
            v-bind:placeholder="nickNamePlaceholder"
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

      <b-form-group id="input-group-2" label="비밀번호 확인" label-for="input-4" align="left">
        <b-form-input
            type="password"
            id="input-4"
            v-model="form.password2"
            v-bind:placeholder="passwordPlaceholder"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group v-show="authButtonClicked" id="input-group-2" label="인증번호 입력" label-for="input-2" align="left">
        <b-form-input
            type="number"
            id="emailCode"
            v-model="form.authCode"
            v-bind:placeholder="authCodePlaceholder"

        ></b-form-input>
      </b-form-group>

<!--      <b-form-group id="input-group-3" label="Food:" label-for="input-3">-->
<!--        <b-form-select-->
<!--            id="input-3"-->
<!--            v-model="form.food"-->
<!--            :options="foods"-->
<!--            required-->
<!--        ></b-form-select>-->
<!--      </b-form-group>-->

<!--      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">-->
<!--        <b-form-checkbox-group-->
<!--            v-model="form.checked"-->
<!--            id="checkboxes-4"-->
<!--            :aria-describedby="ariaDescribedby"-->
<!--        >-->
<!--          <b-form-checkbox value="me">Check me out</b-form-checkbox>-->
<!--          <b-form-checkbox value="that">Check that out</b-form-checkbox>-->
<!--        </b-form-checkbox-group>-->
<!--      </b-form-group>-->

      <b-button @click="validation" variant="primary">회원가입</b-button>
<!--      <b-button type="reset" variant="danger">Reset</b-button>-->
    </b-form>
<!--    <b-card class="mt-3" header="Form Data Result">-->
<!--      <pre class="m-0">{{ form }}</pre>-->
<!--    </b-card>-->
  </div>
</template>

<script>
import * as auth from '@/api/auth'
export default {
name: "Signup",
  data() {
    return {
      form: {
        userEmail: '',
        userNickname: '',
        password: '',
        password2: '',
        authCode: '',
        // food: null,
        // checked: []
      },
      authCodePlaceholder: "인증번호는 6자 입니다.",
      passwordPlaceholder: "비밀번호는 9자 이상 입력해주세요.",
      nickNamePlaceholder: "닉네임은 2자 이상 입력해주세요.",
      // foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      authButtonClicked: false,
      show: true,
    }
  },
  methods: {
    onSubmit() {
      // alert(JSON.stringify(this.form));
      auth.signup(this.form.userEmail, this.form.password, this.form.userNickname, this.form.authCode);
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.userEmail = ''
      this.userNickname = ''
      // this.form.food = null
      // this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    async sendEmailForAuthEmail() {
      alert("인증번호 전송 시 다소 시간이 소요될 수 있습니다.");
      this.authButtonClicked = true;
      await auth.sendEmailForAuthEmail(this.form.userEmail);
    },

    async validation(){
      if(!this.authButtonClicked){
        alert("인증번호 전송 버튼을 클릭해주세요.");
        return null;
      }
      if(this.form.authCode.length !== 6){
        alert("인증번호는 6자 입니다.");
        return null;
      }
      else if(this.form.userNickname.length < 2){
        alert("닉네임은 2자 이상 입력해주세요.");
        return null;
      }
      else if(this.form.password !== this.form.password2){
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

  }
}

</script>

<style scoped>

</style>