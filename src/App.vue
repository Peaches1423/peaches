<template>
  <div>
    <div>
      <div class="nav_bar">
        <router-link to="/" class="nav_item nav_link">
          就活情報シェアサイト</router-link
        >
        <div class="nav_items">
          <router-link to="/" class="nav_item nav_link">Home</router-link>
          <div>
            <router-link to="/" class="nav_item nav_link"
              >ログイン画面</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <h2>投稿フォーム</h2>
    <div class="username">
      <p>ニックネーム</p>
      <input type="text" v-model="form_username" />
    </div>

    <select v-model="nendo">
      <option selected>卒業年度</option>
      <option>21卒以前</option>
      <option>22卒</option>
      <option>23卒</option>
      <option>24卒</option>
      <option>25卒以降</option>
    </select>
    <div class="form">
      <p>最近起こった出来事・感想</p>
      <textarea placeholder="何でもご自由にどうぞ！" v-model="form_textarea" />
    </div>
    <div class="form_button">
      <button v-on:click="posting" class="form_submit-button">投稿する</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  data() {
    return {
      posts: [],
      form_username: "",
      nendo: "",
      form_textarea: "",
    }
  },
  methods: {
    posting() {
      firebase.firestore().collection("posts").add({
        form_username: this.form_username,
        nendo: this.nendo,
        form_textarea: this.form_textarea,
      })
    },
  },
}
</script>

<style>
.nav_bar {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: aqua;
}

.nav_link {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
}

.username {
  display: flex;
}
.form_username {
  height: 15px;
}
.form_textarea {
  height: 10em;
  width: 30em;
}
</style>
