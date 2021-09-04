<template>
  <div id="app">
    <div id="nav">
      <router-link to="/BeforeSignIn">ログアウト画面へ</router-link>
      <router-link to="/AfterSignIn">ログイン画面へ</router-link>
    </div>
    <div class="sign-in">
      <span @click="signIn">ログインはここから！</span>
      <span @click="signOut">ログアウト！お疲れさま！</span>
    </div>
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  methods: {
    signIn() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
    signOut() {
      firebase.auth().signOut()
      this.$router.push("/BeforeSignIn")
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #38b983;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #e93c11;
  padding: 0 1rem;
}
#nav a:hover {
  color: #f0432c2b;
}
.sign-in span {
  font-weight: bold;
  color: #e746cc;
  padding: 0 1rem;
}
.sign-in span:hover {
  color: #145ea32b;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
