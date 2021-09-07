<template>
  <div>
    <div class="nav_bar">
      <router-link to="/" class="nav_item nav_link">タイトル</router-link>
      <div class="nav_items">
        <router-link to="/" class="nav_item nav_link">投稿</router-link>
        <router-link to="/" class="nav_item nav_link">ログイン画面</router-link>
      </div>
    </div>

    <div id="title">閲覧ページ</div>
    <div class="category">
      <div v-for="posts in cage" :key="posts.id">
        <div class="box">
          <div id="name">ユーザーネーム:{{ posts.form_username }}</div>
          <div id="uni">大学:{{ posts.university }}</div>
          <div id="bunrii">文理:{{ posts.bunri }}</div>
          <div id="nendoo">卒業年度:{{ posts.nendo }}</div>
          <div id="internorhonsenkouu">
            インターン/本選考:{{ posts.internOrHonsenkou }}
            <div id="gyoukaii">業界:{{ posts.gyoukai }}</div>
            <div id="dankaii">段階:{{ posts.dankai }}</div>
            <div id="kansou">感想:{{ posts.form_textarea }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="username">
      <p>ニックネーム</p>
    </div>
    <p>卒</p>
    <p>日付</p>
    <div id="app">
      <div>{{ posts[0].text }}</div>
    </div>
    <div class="btn" v-on:click="changeState">
      いいね<font-awesome-icon
        v-bind:class="{ like_button: buttonState }"
        v-on:click="changeState"
        icon="heart"
      />
    </div> -->
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  data() {
    return {
      cage: [],
    }
  },
  created() {
    firebase
      .firestore()
      .collection("posts")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.cage.push({
            id: doc.id,
            ...doc.data(),
          })
        })
      })
  },
}
// data() {
//   return {
//     posts: [],
//     buttonState: false,
//   }
// },
// methods: {
//   changeState: function () {
//     this.buttonState = !this.buttonState
//   },
// },
// created: function () {
//   firebase
//     .firestore()
//     .collection("posts")
//     .get()
//     .then((docs) => {
//       // success
//       docs.forEach((doc) => {
//         // console.log(doc.data())
//         this.posts.push(doc.data())
//       })
//     })
//   this.$refs.ThumbsUp.active = true
// },
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
.btn {
  width: 5rem;
  cursor: pointer;
}
.like_button {
  color: #ff0000;
  box-shadow: none;
}
</style>
