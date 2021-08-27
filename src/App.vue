<template>
  <div id="app">
    <div id="nav">
      <h1>就職活動を乗り切ろう！就活シェアサイト</h1>
      <h2>就職活動に関することは何でも投稿・シェアできるサイトです！</h2>
      <div>
        このサイトは何年卒業でもご利用いただけます。主な使い方は、本サイトにログインをし、就職活動で起った出来事や悩み、愚痴等今思っていることをみんなにシェアします。
        すると、ほかの利用者様から返信やいいね！をもらったり、利用者様の就職活動の不安等を解消したりすることもできます。
        では、あなたが思っている就職活動に対する全てを打ち明けてみましょう！
      </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
