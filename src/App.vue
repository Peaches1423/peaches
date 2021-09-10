<template>
  <div id="app">
    <router-view />
    <div id="nav">
      <div class="login">
        <span @click="signIn" class="login_button">ログインはここから！</span>
      </div>
      <div class="view">
        <router-link to="/AfterSignIn" class="view_button"
          >閲覧画面へ（ログインが必要）</router-link
        >
      </div>

      <div class="sign-in">
        <!-- <router-link to="/BeforeSignIn">ログアウト画面へ</router-link> -->
        <div class="logout">
          <span @click="signOut" class="logout_button"
            >ログアウト！お疲れさま！</span
          >
        </div>
      </div>
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

#setsumei {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #38b983;
}
#nav {
  display: flex;
  width: 80%;
  margin: 0 auto;
  max-width: 500px;
  padding-top: 50px;
}

/*#nav a {
  font-weight: bold;
  color: #e93c11;
  padding: 0 1rem;
}
#nav a:hover {
  color: #f0432c2b;
} */

.login_button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0 auto;
  padding: 1em 2em;
  width: 150px;
  color: #333;
  font-size: 15px;
  font-weight: 700;
  background-color: #ccc;
  border-radius: 50vh;
  transition: 0.3s;
}

.login :before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  border: 2px solid #945fde;
  border-radius: 50vh;
  transition: 0.2s;
}

.login :after {
  content: "";
  width: 5px;
  height: 5px;
  border-top: 3px solid #333333;
  border-right: 3px solid #333333;
  transform: rotate(45deg);
}

.login :hover::before {
  top: 0;
  left: 0;
}

.login :hover {
  text-decoration: none;
  background-color: #d6bbfc;
}

/* 閲覧ボタン */
.view_button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0 auto;
  padding: 1em 2em;
  width: 150px;
  color: #333;
  font-size: 15px;
  font-weight: 700;
  background-color: #ccc;
  border-radius: 50vh;
  transition: 0.3s;
}

.view :before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  border: 2px solid #945fde;
  border-radius: 50vh;
  transition: 0.2s;
}

.view :after {
  content: "";
  width: 5px;
  height: 5px;
  border-top: 3px solid #333333;
  border-right: 3px solid #333333;
  transform: rotate(45deg);
}

.view :hover::before {
  top: 0;
  left: 0;
}

.view :hover {
  text-decoration: none;
  background-color: #d6bbfc;
}

/* ログアウトボタン */
.logout_button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0 auto;
  padding: 1em 2em;
  width: 150px;
  color: #333;
  font-size: 15px;
  font-weight: 700;
  background-color: #ccc;
  border-radius: 50vh;
  transition: 0.3s;
}

.logout :before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  border: 2px solid #945fde;
  border-radius: 50vh;
  transition: 0.2s;
}

.logout :after {
  content: "";
  width: 5px;
  height: 5px;
  border-top: 3px solid #333333;
  border-right: 3px solid #333333;
  transform: rotate(45deg);
}

.logout :hover::before {
  top: 0;
  left: 0;
}

.logout :hover {
  text-decoration: none;
  background-color: #d6bbfc;
}

/* .sign-in span {
  font-weight: bold;
  color: #e746cc;
  padding: 0 1rem;
}
.sign-in span:hover {
  color: #145ea32b;
} */
/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
