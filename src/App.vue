<template>
  <div>
    <div class="nav_bar">
      <router-link to="/" class="nav_item nav_link">タイトル</router-link>
      <div class="nav_items">
        <router-link to="/" class="nav_item nav_link">投稿</router-link>
        <router-link to="/" class="nav_item nav_link">ログイン画面</router-link>
      </div>
    </div>

    <body>
      <div class="username">
        <p>ニックネーム</p>
      </div>
      <p>卒</p>
      <p>日付</p>
      <textarea class="form_textarea" v-model="text" />
      <div class="like_button">
        <button v-on:click="post" class="like-button">いいね！</button>
      </div>
    </body>
  </div>
</template>

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
