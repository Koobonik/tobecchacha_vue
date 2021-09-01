<template>
  <div>
    <b-navbar toggleable="lg" type="light" style="background-color: rgb(43,58,65);">
      <b-navbar-brand href="/"><img style="height: 20px; align-content: center" alt="Vue logo" src="../../assets/logo_3.png"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

<!--   가로 사이즈 줄어들면 숨어버림!   -->
      <b-collapse id="nav-collapse" is-nav style="align-content: start">


        <b-button v-if="!$route.path.includes('/book',0)" style="background-color: rgb(43,58,65); color: grey; border-color: rgb(43,58,65); margin-right: 3px" v-bind:href="`bookDetail?id=`+bookId">Books</b-button>
        <b-button v-else style="background-color: rgb(43,58,65); color: white; border-color: rgb(43,58,65); margin-right: 3px" v-bind:href="`bookDetail?id=`+bookId"><strong>Books</strong></b-button>

        <b-button v-if="!$route.path.includes('/education',0)" style="background-color: rgb(43,58,65); color: grey; border-color: rgb(43,58,65); margin-right: 3px" v-bind:href="`educationDetail?id=`+educationId">Education</b-button>
        <b-button v-else style="background-color: rgb(43,58,65); color: white; border-color: rgb(43,58,65); margin-right: 3px" v-bind:href="`educationDetail?id=`+educationId"><strong>Education</strong></b-button>

        <b-button v-if="!$route.path.includes('/gallery',0)" style="background-color: rgb(43,58,65); color: grey; border-color: rgb(43,58,65); margin-right: 3px" v-bind:href="`galleryDetail?id=`+galleryId">Gallery</b-button>
        <b-button v-else style="background-color: rgb(43,58,65); color: white; border-color: rgb(43,58,65); margin-right: 3px" v-bind:href="`galleryDetail?id=`+galleryId"><strong>Gallery</strong></b-button>

        <b-button v-if="!$route.path.includes('/etc',0)" style="background-color: rgb(43,58,65); color: grey; border-color: rgb(43,58,65); margin-right: 3px" v-bind:href="`etcDetail?id=`+etcId">ETC</b-button>
        <b-button v-else style="background-color: rgb(43,58,65); color: white; border-color: rgb(43,58,65); margin-right: 3px" v-bind:href="`etcDetail?id=`+etcId"><strong>ETC</strong></b-button>

        <b-button v-if="!$route.path.includes('/news',0)" style="background-color: rgb(43,58,65); color: grey; border-color: rgb(43,58,65); margin-right: 0px" v-bind:href="`newsDetail?id=`+newsId">NEWS</b-button>
        <b-button v-else style="background-color: rgb(43,58,65); color: white; border-color: rgb(43,58,65); margin-right: 0px" v-bind:href="`newsDetail?id=`+newsId"><strong>NEWS</strong></b-button>
<!--        <b-button style="background-color: white; color: black; border-color: white; margin-right: 10px" href="/login">{{ $route.path }}</b-button>-->
<!--        <b-dropdown click="goto" href="/login" id="dropdown-offset" offset="25" text="Books" class="m-2" v-bind:variant="navColor">-->
<!--          <b-dropdown-item href="#">단체소개</b-dropdown-item>-->
<!--          <b-dropdown-item href="#">오시는 길</b-dropdown-item>-->
<!--          <b-dropdown-item href="#">조직도</b-dropdown-item>-->
<!--        </b-dropdown>-->

<!--        <b-dropdown id="dropdown-offset" offset="25" text="Education" class="m-2" v-bind:variant="navColor">-->
<!--          <b-dropdown-item href="#">스토어</b-dropdown-item>-->
<!--          <b-dropdown-item href="#">책소개</b-dropdown-item>-->
<!--          <b-dropdown-item href="#">편집장</b-dropdown-item>-->
<!--        </b-dropdown>-->
<!--        <b-dropdown id="dropdown-offset" offset="25" text="Gallery" class="m-2" v-bind:variant="navColor">-->
<!--          <b-dropdown-item href="#">모집공지</b-dropdown-item>-->
<!--          <b-dropdown-item href="#">갤러리</b-dropdown-item>-->
<!--        </b-dropdown>-->
<!--        <b-dropdown id="dropdown-offset" offset="25" text="Artists" class="m-2" v-bind:variant="navColor">-->
<!--          <b-dropdown-item href="#">모집공지</b-dropdown-item>-->
<!--          <b-dropdown-item href="#">갤러리</b-dropdown-item>-->
<!--        </b-dropdown>-->

<!--        <b-dropdown id="dropdown-offset" offset="25" text="Display" class="m-2" v-bind:variant="navColor">-->
<!--          <b-dropdown-item href="#">Action</b-dropdown-item>-->
<!--          <b-dropdown-item href="#">Another action</b-dropdown-item>-->
<!--          <b-dropdown-item href="#">Something else here</b-dropdown-item>-->
<!--        </b-dropdown>-->
<!--        <b-dropdown id="dropdown-offset" offset="25" text="For store" class="m-2" v-bind:variant="navColor">-->
<!--          <b-dropdown-item href="#">Action</b-dropdown-item>-->
<!--          <b-dropdown-item href="#">Another action</b-dropdown-item>-->
<!--          <b-dropdown-item href="#">Something else here</b-dropdown-item>-->
<!--        </b-dropdown>-->


<!--    회원 로그인/로그아웃에 대한 컴포넌트임    -->
        <b-navbar-nav v-show="false" class="ml-auto">
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
  b-button{
    background-color: white;
    color: red;
  }
.m-2{
  color:darkgreen
}
</style>
<script>
import * as user from "@/api/user";
import * as auth from "@/api/auth";
import * as noticeApi from "@/api/mainNotice";
import router from "@/router";

export default {
  name: "Header.vue",
  data(){
    return{
      // primary, success, info, warning, danger, dark, or light.
      navColor: "primary",
      isLogin: false,
      userNickname: "",
      bookId: 0,
      educationId: 0,
      galleryId: 0,
      etcId: 0,
      newsId: 0,


    }
  },
  methods: {
    async logout(){
      await auth.logout(auth.getToken(), auth.getRefreshToken());
    },
    goto(){
      console.log("asd");
      router.push("/");
    },
    async getCurrentIds(){
      noticeApi.getCurrentIds().then(response => {
        this.bookId = response.bookId
        this.educationId = response.educationId
        this.galleryId = response.galleryId
        this.etcId = response.etcId
        this.newsId = response.newsId
        console.log(this)
      })
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
    this.getCurrentIds();

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