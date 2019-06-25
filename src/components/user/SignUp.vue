<template>
  <div>
    <div style="padding:20px">
      <div class="btn-success" v-if="message">{{message}}</div>
      <div class="col-md-12 center">
        <div class="form-group">
          First Name:
          <input type="text" class="form-control" v-model="fname">
          Last Name:
          <input type="text" class="form-control" v-model="lname">
          Email ID:
          <input type="text" class="form-control" v-model="email">
          Password:
          <input type="password" class="form-control" v-model="password">
          <br>
          <button class="btn btn-primary" @click.prevent="signUp">Sign Up</button>
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
      fname: "",
      lname: "",
      email: "",
      password: "",
      message: ""
    };
  },
  methods: {
    signUp() {
      let data = {
        lname: this.lname,
        fname: this.fname,
        email: this.email,
        password: this.password
      };
      axios.post("http://localhost:8000/register", data).then(response => {
        if (response.data.message == "user already exist") {
          this.message = response.data.message;
        } else {
          this.message = response.data.message;
        }
        this.fname = "";
        this.lname = "";
        this.email = "";
        this.password = "";
      });
    }
  }
};
</script>

<style>
</style>
