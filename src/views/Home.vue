<template>
  <div class="home">
    <div class="demo demo4">
      <div class="heading">
        <h1>就職活動を乗り切ろう！就活情報シェアサイト</h1>
      </div>
    </div>

    <h2>就職活動に関することは何でも投稿・シェアできるサイトです！</h2>
    <div>
      <ol>
        <li>このサイトは何年卒業の方でもご利用いただけます。</li>
        <li>
          主な使い方は、本サイトにログインし、就職活動で起った出来事や悩み、愚痴など今思っていることを投稿します。
        </li>
        <li>
          すると、ほかの利用者様にシェアされ、返信やいいね！をもらったり、ご自身の就職活動の不安等を解消したりすることもできます。
        </li>
        <li>
          では、あなたが思っている就職活動に対する全てを打ち明けてみましょう！
        </li>
      </ol>
    </div>
  </div>
</template>

.demo { width: 500px; margin: 0 auto; padding: 10px 0; font-family: sans-serif;
font-size: 20px; color:#3cb3e4; } .heading { margin: 10px 0 } .demo4 .heading {
padding: 15px 5px; margin: 10px -20px; border: solid 3px #3cb3e4;
position:relative; text-align: center; border-radius: 3px; background: #fff; }
.demo4 .heading:after, .demo4 .heading:before { content: ''; position: absolute;
bottom: -7px; background: #3cb3e4; border: solid 2px #3cb3e4; width: 25px;
height: 20px; z-index: -1; } .demo4 .heading:after { left: 2px; transform:
rotate(120deg); } .demo4 .heading:before { right: 2px; transform: rotate(60deg);
} ol { list-style-type: none; } div { text-align: justify; }

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue"

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
}
</script>
