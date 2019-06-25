<template>
  <div class="container">
    <!-- <app-home></app-home> -->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link">Create Post</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/posts" class="nav-link">Posts</router-link>
        </li>
      </ul>
    </nav>
    <br>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- <app-header :isLogin="isLogin" ></app-header>
    <div class="row">
      <div class="col-md-5">
        <router-view ></router-view>
      </div>
    </div>-->
  </div>
</template>

<script>
// import Header from "./components/Header.vue";

export default {
  name: "app"
  // data() {
  //   return {
  //     isLogin: false
  //   };
  // }
};
</script>

<style >
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
body {
  padding: 20px;
}
</style>
