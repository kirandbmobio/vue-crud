<template>
  <div>
    <div style="padding:20px">
      <div class="col-md-12 center">
        <div class="form-group">
          Email ID:
          <input type="text" v-model="email" class="form-control">
          Password:
          <input type="text" class="form-control" v-model="password">
          <br>
          <button class="btn btn-primary" @click.prevent="login">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      isLogin: true
    };
  },
  methods: {
    login() {
      let data = {
        email: this.email,
        password: this.password
      };
      axios.post("http://localhost:8000/user/login", data).then(response => {
        this.$router.push({
          name: "profile",
          query: { user: response.data.user }
        });
      });
    }
  }
};
</script>

<style>
</style>
