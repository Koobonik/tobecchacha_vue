<template>
  <div>

  </div>
</template>

<script>
import * as auth from '@/api/auth'
import * as member from '@/api/user'
import router from "@/router";
export default {
name: "Logout",
  data() {
    return {

    }
  },
  methods: {
    beforeCreate() {

    },
    created(){
      auth.removeTokens();
      member.getMyProfile();
      router.go(-2);
    }

  }
}

</script>

<style scoped>

</style>