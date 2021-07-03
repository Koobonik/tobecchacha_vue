<template>
  <div>
    <div style="margin: 30px;">
      <img style="height: 50px;" v-on:click="instagram" alt="Vue logo" src="../../assets/icons/insta_icon.jpg">
      <img style="padding-left: 20px; height: 50px;" v-on:click="facebook" alt="Vue logo" src="../../assets/icons/facebook_icon.jpg">
      <img style="padding-left: 20px; height: 50px;" v-on:click="kakao" alt="Vue logo" src="../../assets/icons/kakao_icon.jpg">
    </div>
    <b-row>
    <div style="width: 100%; background-color: rgb(43,58,65)">
      <div style="display: inline-block;">
        <div class="footer" style="text-align: start;">
          <h4 style="color: white; font-weight: 700">문화 온도 씨도씨</h4>
          <h6>서울특별시 종로구 청계천로 159 가동 651호  대표 : 이제경</h6>
          <h6>사업자등록번호 : 814-06-01303  통신판매업신고번호 : 2020-서울종로-2309호</h6>
          <h6>Copyright  ⓒ see_dosee.com. All rights Reserved</h6>
        </div>
      </div>
    </div>
    </b-row>
  </div>
</template>
<script>
export default {
name: "Footer",
  methods: {
    instagram(){
      window.open("https://instagram.com", '_blank').focus();
    },
    facebook(){
      window.open("https://facebook.com", '_blank').focus();
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
}

</style>