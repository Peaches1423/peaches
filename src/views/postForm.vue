<template>
  <div class="form-page">
    <div class="header">
      <div class="nav_bar">
        <router-link to="/" class="nav_title">
          就活情報シェアサイト</router-link
        >
        <div class="nav_items">
          <router-link to="/" class="item">Home</router-link>
          <router-link to="/" class="item">ログイン画面</router-link>
        </div>
      </div>
    </div>
    <h2>投稿フォーム</h2>
    <div class="username">
      <p>ニックネーム</p>
      <input type="text" v-model="form_username" />
    </div>
    <div>
      <p>卒業年度</p>
      <select v-model="nendo">
        <option>21卒以前</option>
        <option>22卒</option>
        <option>23卒</option>
        <option>24卒</option>
        <option>25卒以降</option>
      </select>
    </div>
    <div class="uni">
      <p>大学名</p>
      <input type="text" v-model="university" />
    </div>
    <div class="sentaku">
      <p>文理</p>
      <input type="radio" v-model="bunri" value="文系" id="human" />
      <label for="bun">文系</label>
      <input type="radio" v-model="bunri" value="理系" id="science" />
      <label for="ri">理系</label>
    </div>
    <div>
      <div>
        <p>業界</p>
        <select v-model="gyoukai">
          <option>メーカー</option>
          <option>商社</option>
          <option>金融</option>
          <option>マスコミ</option>
          <option>IT</option>
          <option>その他</option>
        </select>
      </div>
      <div>
        <p>インターンor本選考</p>
        <select v-model="internOrHonsenkou">
          <option>インターン</option>
          <option>本選考</option>
          <option>その他</option>
        </select>
      </div>
      <div>
        <p>段階</p>
        <select v-model="dankai">
          <option>ES</option>
          <option>グループディスカッション</option>
          <option>面接</option>
          <option>その他</option>
        </select>
      </div>
    </div>
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
      university: "",
      bunri: "",
      gyoukai: "",
      internOrHonsenkou: "",
      dankai: "",
      form_textarea: "",
    }
  },
  methods: {
    posting() {
      firebase.firestore().collection("posts").add({
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        form_username: this.form_username,
        nendo: this.nendo,
        university: this.university,
        bunri: this.bunri,
        gyoukai: this.gyoukai,
        internOrHonsenkou: this.internOrHonsenkou,
        dankai: this.dankai,
        form_textarea: this.form_textarea,
      })
    },
  },
}
</script>

<style>
.form-page {
  background: url(../images/peaches.jpeg);
  background-size: 100% auto;
}

.nav_bar {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: #492f10;
  opacity: 0.7;
}

.nav_items {
  display: flex;
}

.nav_items :hover {
  color: teal;
  transition: all 0.25s;
}

.nav_title {
  color: white;
  font-size: 1.2em;
  padding-left: 5px;
}

.item {
  color: white;
  padding: 15px;
}

.nav_login {
  color: white;
}
.username {
  display: flex;
  height: 20px;
}
.form_username {
  height: 15px;
}
.form textarea {
  height: 10em;
  width: 50em;
}
</style>
