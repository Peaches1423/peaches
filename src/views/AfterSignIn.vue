<template>
  <div id="app">
    <div id="nav">
      <router-link to="/BeforeSignIn">ログアウト画面へ</router-link>
    </div>
    <div class="sign-in">
      <span @click="signIn">ログインはここから！</span>
      <span @click="signOut">ログアウト！お疲れさま！</span>
    </div>
    <router-view />

    <div>
      <div class="demo demo7">
        <div class="heading">
          <span class="title">就職活動を乗り切ろう！</span>
          <span class="caption">就活情報シェアサイト</span>
        </div>
      </div>
      <h1>ログインしました！</h1>
      <UserProfile />
    </div>
  </div>
</template>

.demo { width: 500px; margin: 0 auto; padding: 10px 0; font-family: sans-serif;
font-size: 20px; color:#3cb3e4; } .heading { margin: 10px 0 } .demo7 .heading {
position: relative; height: 50px; padding: 0; -moz-border-radius: 6px;
-webkit-border-radius: 6px; border-radius: 6px; border: 1px solid #3cb3e4;
line-height: 50px; } .demo7 .heading .caption{ position: absolute; right: 0;
top: 0; padding-left: 25px; padding-right: 40px; background: #3cb3e4; color:
#fff; } .demo7 .heading .caption:before{ display: block; content: ' '; width: 0;
height: 0; overflow: hidden; position: absolute; right: 99.9%; top: 0; border: 0
solid transparent; border-width: 50px 37px 0 0; border-right-color:#3cb3e4; }
.demo7 .heading .title{ float: left; padding-left: 20px; }

<script>
import UserProfile from "@/components/UserProfile.vue"
export default {
  components: {
    UserProfile,
  },
}
</script>
