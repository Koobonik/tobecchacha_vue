<template>
  <div>
    <b-navbar toggleable="lg" type="light" v-bind:variant="navColor">
      <b-navbar-brand href="/">차차 편집소</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

<!--   가로 사이즈 줄어들면 숨어버림!   -->
      <b-collapse id="nav-collapse" is-nav>


        <b-dropdown id="dropdown-offset" offset="25" text="소개" class="m-2" v-bind:variant="navColor">
          <b-dropdown-item href="#">단체소개</b-dropdown-item>
          <b-dropdown-item href="#">오시는 길</b-dropdown-item>
          <b-dropdown-item href="#">조직도</b-dropdown-item>
        </b-dropdown>

        <b-dropdown id="dropdown-offset" offset="25" text="출판" class="m-2" v-bind:variant="navColor">
          <b-dropdown-item href="#">스토어</b-dropdown-item>
          <b-dropdown-item href="#">책소개</b-dropdown-item>
          <b-dropdown-item href="#">편집장</b-dropdown-item>
        </b-dropdown>
        <b-dropdown id="dropdown-offset" offset="25" text="공연·전시" class="m-2" v-bind:variant="navColor">
          <b-dropdown-item href="#">모집공지</b-dropdown-item>
          <b-dropdown-item href="#">갤러리</b-dropdown-item>
        </b-dropdown>
        <b-dropdown id="dropdown-offset" offset="25" text="교육" class="m-2" v-bind:variant="navColor">
          <b-dropdown-item href="#">모집공지</b-dropdown-item>
          <b-dropdown-item href="#">갤러리</b-dropdown-item>
        </b-dropdown>

        <b-dropdown id="dropdown-offset" offset="25" text="작가군" class="m-2" v-bind:variant="navColor">
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ userNickname }}</em>
            </template>
            <div v-if="isLogin">
              <b-dropdown-item href="#">내 정보</b-dropdown-item>
              <b-dropdown-item @click="logout">로그아웃</b-dropdown-item>
            </div>
            <div v-else>
              <b-dropdown-item href="/login">로그인</b-dropdown-item>
              <b-dropdown-item href="/signup">회원가입</b-dropdown-item>
            </div>

          </b-nav-item-dropdown>
          <!--          <b-nav-form>-->
          <!--            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
          <!--            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
          <!--          </b-nav-form>-->


        </b-navbar-nav>

<!--        <b-navbar-nav>-->
<!--          <b-nav-item href="#">소개</b-nav-item>-->
<!--          <b-nav-item href="/member" >멤버소개</b-nav-item>-->
<!--        </b-navbar-nav>-->

        <!-- Right aligned nav items -->

      </b-collapse>
    </b-navbar>
  </div>
</template>
<style>
.m-2{
  color:darkgreen
}
</style>
<script>
import * as user from "@/api/user";
import * as auth from "@/api/auth";

export default {
  name: "Header.vue",
  data(){
    return{
      // primary, success, info, warning, danger, dark, or light.
      navColor: "primary",
      isLogin: false,
      userNickname: "",
    }
  },
  methods: {
    async logout(){
      await auth.logout(auth.getToken(), auth.getRefreshToken());
    }
 // name: "header"


  },
  beforeCreate() {

  },
  async created() {
    // this.userNickname = member.getMyProfile();
    console.log("헤더 만들어짐");
    if(await auth.getToken() !== null){
      console.log("토큰 있음");
      user.getMyProfile().then(response => {
        console.log(response);
        if(response !== null){
          console.log("is not null");
          this.userNickname = response;
          this.isLogin = true;
        }
      }).catch(error => {
        console.log(error);
        this.userNickname = "로그인하기";
        this.isLogin = false;
      });
    }
    else {
      console.log("계정 없음");
      this.isLogin = false;
      this.userNickname = "로그인하기";
    }
  },
  beforeMount() {
  },
  mounted() {
  },
  beforeUpdate() {
  },
  updated() {
  },
  beforeDestroy() {
  },
  destroyed() {
  }
};


</script>

<!--<style scoped>-->

<!--</style>-->