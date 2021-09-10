<template>
  <div id="app">
    <router-view />
    <div id="nav">
      <router-link to="/BeforeSignIn">ログアウト画面へ</router-link>
      <router-link to="/AfterSignIn">ログイン画面へ</router-link>
    </div>
    <div class="sign-in">
      <span @click="signIn">ログインはここから！</span>
      <span @click="signOut">ログアウト！お疲れさま！</span>
    </div>
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
body {
  background-image: url(https://images.unsplash.com/photo-1624220330071-9df752d24688?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80); /* 背景画像指定 */
  background-repeat: repeat-y;
}

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
