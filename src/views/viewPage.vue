<template>
  <div>
    <div class="bg"></div>
    <div class="nav_bar">
      <router-link to="/" class="nav_item nav_link">タイトル</router-link>
      <div class="nav_items">
        <router-link to="/" class="nav_item nav_link">投稿</router-link>
        <router-link to="/" class="nav_item nav_link">ログイン画面</router-link>
      </div>
    </div>

    <div class="title">閲覧ページ</div>
    <div class="category">
      <div v-for="posts in cage" :key="posts.id">
        <div class="box">
          <div id="name">ユーザーネーム: {{ posts.form_username }}</div>
          <div id="uni">大学: {{ posts.university }}</div>
          <div id="bunrii">文理: {{ posts.bunri }}</div>
          <div id="nendoo">卒業年度: {{ posts.nendo }}</div>
          <div id="internorhonsenkouu">
            インターン/本選考: {{ posts.internOrHonsenkou }}
            <div id="gyoukaii">業界: {{ posts.gyoukai }}</div>
            <div id="dankaii">段階: {{ posts.dankai }}</div>
            <div id="kansou">感想: {{ posts.form_textarea }}</div>
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
      /
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
.title {
  font-family: TsukuARdGothic-Regular;
  font-size: 120%;
  display: flex;
}
.nav_bar {
  font-family: Hannotate SC;
  font-size: 120%;
  padding: 15px;
  color: rgba(255, 255, 255, 0.253);
  height: 100px;
  display: flex;
  justify-content: space-between;
  /* ここまでは必要 */
  align-items: stretch;
  background-color: rgb(240, 194, 215);
}
.nav_items {
  display: flex;
  padding: 15px;
}
.box {
  height: auto;
  width: 20em;

  margin: 0 auto;

  padding: 1em 1.5em;

  background-color: #fff0f5;
  border: 1px solid #9370db;
  color: #000000;
  border-radius: 10px;
}
.nav_link {
  font-family: TsukuARdGothic-Regular;
  font-size: 120%;
  display: flex;
  padding: 15px;
  justify-content: center;
  /* align-items: center; */
  height: 100%;
  text-decoration: none;
}
.category {
  color: rgba(66, 59, 59, 0.986);
  font-family: TsukuARdGothic-Regular;
  font-size: 120%;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
}
.bg {
  /*位置の設定*/
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  /* 背景画像の設定
  background: url(https://images.unsplash.com/photo-1624220330071-9df752d24688?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80);
  background-size: cover; */

  /*透過の設定*/
  opacity: 0.3;
}

/* .nav_bar {
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
} */

/* .uni {
  font-family: TsukuARdGothic-Regular;
  width: 5rem;
  cursor: pointer;
}
.like_button {
  font-family: TsukuARdGothic-Regular;
  color: #ff0000;
  box-shadow: none;
} */
</style>
