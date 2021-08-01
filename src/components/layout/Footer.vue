<template>
  <div>
    <div style="margin: 30px;">
      <img style="height: 50px;" v-on:click="instagram" alt="Vue logo" src="../../assets/icons/insta_icon.jpg">
      <img style="padding-left: 20px; height: 50px;" v-on:click="facebook" alt="Vue logo" src="../../assets/icons/facebook_icon.jpg">
      <img style="padding-left: 20px; height: 50px;" v-on:click="kakao" alt="Vue logo" src="../../assets/icons/kakao_icon.jpg">
        <b-dropdown id="dropdown-1" text="관련사이트" class="m-md-2" style="margin-left: 20px; background-color: palegreen; color: red;">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item active>Active action</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
    </div>
    <div style="width: 100%; background-color: rgb(43,58,65)">
      <div style="display: inline-block;">
        <div class="footer">
          <h4 style="color: white; font-weight: 700">문화온도 씨도씨</h4>
          <h6>서울특별시 종로구 청계천로 159 가동 651호  대표 : 이제경</h6>
          <h6>사업자등록번호 : 814-06-01303  통신판매업신고번호 : 2020-서울종로-2309호</h6>
          <h6>Copyright  ⓒ seedosee.com. All rights Reserved</h6>
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
    }
  }
}
</script>

<style scoped>
  h6{
    color: white;
  }
.footer {
  padding: 30px;
  background-color: rgb(43,58,65);
  width: 100%;
  text-align: start;
}

</style>