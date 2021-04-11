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
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
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
export default {
  name: "Header.vue",
  data(){
    return{
      // primary, success, info, warning, danger, dark, or light.
      navColor: "primary",
    }
  },
 // name: "header"
};
</script>

<!--<style scoped>-->

<!--</style>-->