<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <div v-if="isLogin"></div>
      <div v-else>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link tag="b-nav-item" to="/sign-up" active-class="active">SignUp</router-link>
            <router-link tag="b-nav-item" :to="{name:'login'}" active-class="active">Login</router-link>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$route.query.user
    };
  }
};
</script>

<style>
</style>
