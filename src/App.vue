<template>
  <div>
    <div>
      <router-link to="/">Home</router-link> |

      <router-link to="/my-page">MyPage</router-link>
      <router-link to="/postform">PostForm</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
.form-page {
  background: url(../images/peach.jpg);
  background-size: 100% auto;
  opacity: 0.7;
}
</style>
