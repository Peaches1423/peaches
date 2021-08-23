<template>
  <div>
    <div class="nav_bar">
      <router-link to="/" class="nav_item nav_link"> タイトル</router-link>
      <div class="nav_items">
        <router-link to="/" class="nav_item nav_link">Home</router-link>
        <router-link to="/" class="nav_item nav_link">ログイン画面</router-link>
      </div>
    </div>

    <body>
      <h2>投稿フォーム</h2>
      <div class="username">
        <p>ニックネーム</p>
        <textarea class="form_username" v-model="text" />
      </div>
      <p>日付</p>
      <p>最近起こった出来事・感想</p>
      <textarea class="form_textarea" v-model="text" />
      <div class="form_button">
        <button v-on:click="post" class="form_submit-button">投稿する</button>
      </div>
    </body>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    }
  },
  methods: {
    post() {
      alert("投稿機能の完成をお楽しみに！")
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
