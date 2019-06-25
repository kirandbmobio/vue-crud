<template>
  <div>
    <br>
    <h4>Full Name:- {{user.fname}} {{user.lname}}</h4>
    <h4>Email:- {{user.email}}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$route.query.user
    };
  },
  name: "profile"
};
</script>

<style>
</style>
