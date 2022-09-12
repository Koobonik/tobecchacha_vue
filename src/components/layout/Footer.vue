<template>
  <div>
    <div style="width: 100%; background-color: rgb(43,58,65); margin-top: 40px;">
      <div style="display: inline-block;">
        <div class="footer">
          <h4 style="color: white; font-weight: 700">문화온도 씨도씨</h4>
          <h6>서울시 도봉구 노해로 341, 732호</h6>
          <h6>사업자등록번호 : 814-06-01303</h6>
          <h6>통신판매업신고번호 : 제 2022-서울도봉-0944호</h6>
          <h6>Copyright  ⓒ seedosee.com All rights Reserved</h6>
          <div style="margin: 10px;">
            <img style="height: 50px;" v-on:click="instagram" alt="Vue logo" src="../../assets/icons/insta_icon.png">
            <img style="padding-left: 5px; height: 50px;" v-on:click="facebook" alt="Vue logo" src="../../assets/icons/facebook_icon.png">
            <img style="padding-left: 5px; height: 50px;" v-on:click="email" alt="Vue logo" src="../../assets/icons/email_icon.png">
            <b-dropdown id="dropdown-1" text="관련사이트" class="m-md-2" style="margin-left: 10px; color: red;">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item active>Active action</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
name: "Footer",
  methods: {
    instagram(){
      window.open("https://www.instagram.com/see_dosee", '_blank').focus();
    },
    facebook(){
      window.open("https://www.facebook.com/seedosee0608", '_blank').focus();
    },
    kakao(){
      window.open("https://kakao.com", '_blank').focus();
    },
    email(){
      location.href = "mailto: seedosee@naver.com";
    }
  }
}
</script>

<style scoped>
  h6{
    font-size: 15px;
    margin-bottom: 3px;
    color: white;
  }
.footer {
  padding: 20px;
  background-color: rgb(43,58,65);
  width: 100%;
  text-align: start;
}

</style>
