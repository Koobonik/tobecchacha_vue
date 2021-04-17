<template>
  <div>

  </div>
</template>

<script>
import * as auth from '@/api/auth'
import * as user from '@/api/user'
import router from "@/router";
export default {
name: "Logout",
  data() {
    return {

    }
  },
  methods: {

  },
  async beforeCreate() {
    console.log("로그아웃");
    await auth.removeTokens();
    await user.getMyProfile();
    router.go(-1);
  },
}

</script>

<style scoped>

</style>