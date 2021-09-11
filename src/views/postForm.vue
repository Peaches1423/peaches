<template>
  <div class="form-page">
    <div class="header">
      <div class="nav_bar">
        <div class="nav_title">就活情報シェアサイト</div>
        <div class="nav_items">
          <router-link to="/viewPage" class="item">閲覧画面へ</router-link>
          <router-link to="/" class="item">ログイン画面</router-link>
        </div>
      </div>
    </div>
    <div class="nakami">
      <h2 class="toukou_title">投稿フォーム</h2>
      <!-- ニックネーム -->
      <div class="namae">
        <div class="cp_iptxt">
          <input
            class="ef"
            type="text"
            placeholder=""
            v-model="form_username"
          />
          <label>ニックネーム</label>
          <span class="focus_line"></span>
        </div>
      </div>
      <!--ニックネーム終わり-->
      <div class="cp_selectYear">
        <select v-model="nendo" class="cp_sl06" required>
          <option value="" hidden disabled selected></option>
          <option>21卒以前</option>
          <option>22卒</option>
          <option>23卒</option>
          <option>24卒</option>
          <option>25卒以降</option>
        </select>
        <span class="cp_sl06_highlight"></span>
        <span class="cp_sl06_selectbar"></span>
        <label class="cp_sl06_selectlabel">卒業年度</label>
      </div>
      <div class="uni-bunri">
        <!-- 大学 -->
        <div class="cp_ipuni">
          <input class="ef2" type="text" placeholder="" v-model="university" />
          <label>大学</label>
          <span class="focus_line2"></span>
        </div>
        <!-- <div class="sentaku">
        <p>文理</p>
        <input type="radio" v-model="bunri" value="文系" id="human" />
        <label for="bun">文系</label>
        <input type="radio" v-model="bunri" value="理系" id="science" />
        <label for="ri">理系</label>
      </div> -->
        <div class="cp_ipradio">
          <div class="box">
            <input
              type="radio"
              v-model="bunri"
              value="文系"
              id="radio1"
              name="cpipr01"
            />
            <label for="radio1">文系</label>
            <input
              type="radio"
              v-model="bunri"
              value="理系"
              id="radio2"
              name="cpipr01"
            />
            <label for="radio2">理系</label>
          </div>
        </div>
      </div>
      <div class="hidukeSentaku">
        <label>活動した日付：</label>
        <input type="date" class="nentukihi" v-model="datePick" />
      </div>
      <div class="cp_selectg">
        <select class="cp_sl07" required v-model="gyoukai">
          <option value="" hidden disabled selected></option>
          <option>メーカー</option>
          <option>商社</option>
          <option>金融</option>
          <option>マスコミ</option>
          <option>IT</option>
          <option>その他</option>
        </select>
        <span class="cp_sl07_highlight"></span>
        <span class="cp_sl07_selectbar"></span>
        <label class="cp_sl07_selectlabel">業界</label>
      </div>
      <!-- インターンor本選考 -->
      <div class="select_i">
        <select class="cp_sl08" required v-model="internOrHonsenkou">
          <option value="" hidden disabled selected></option>
          <option>インターン</option>
          <option>本選考</option>
          <option>その他</option>
        </select>
        <span class="cp_sl08_highlight"></span>
        <span class="cp_sl08_selectbar"></span>
        <label class="cp_sl08_selectlabel">インターンor本選考</label>
      </div>
      <div class="select_d">
        <select class="cp_sl09" v-model="dankai">
          <option value="" hidden disabled selected></option>
          <option>ES</option>
          <option>グループディスカッション</option>
          <option>面接</option>
          <option>その他</option>
        </select>
        <span class="cp_sl09_highlight"></span>
        <span class="cp_sl09_selectbar"></span>
        <label class="cp_sl09_selectlabel">段階</label>
      </div>

      <div class="nyuryoku">
        <div class="form">
          <label class="ef3">
            <p>最近起こった出来事・感想</p>
            <textarea
              placeholder="何でもご自由にどうぞ！"
              v-model="form_textarea"
              style="background-color: #fff0f5"
            />
          </label>
        </div>
      </div>
      <div class="form_button">
        <button v-on:click="posting" class="submit">投稿する</button>
      </div>
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
      datePick: new Date(),
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
        date: this.datePick,
        gyoukai: this.gyoukai,
        internOrHonsenkou: this.internOrHonsenkou,
        dankai: this.dankai,
        form_textarea: this.form_textarea,
      })
      ;(this.form_username = ""),
        (this.nendo = ""),
        (this.university = ""),
        (this.bunri = ""),
        (this.datePick = ""),
        (this.gyoukai = ""),
        (this.internOrHonsenkou = ""),
        (this.dankai = ""),
        (this.form_textarea = "")
    },
  },
}
</script>

<style>
/* .nakami {
  text-align: center;
} */

.toukou_title {
  color: #945fde;
  text-align: center;
}

.nav_bar {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: #fa9480;
  opacity: 0.7;
}

.nav_items {
  display: flex;
}

.nav_items :hover {
  background-color: #945fde;
  transition: all 0.25s;
}
.nav_title {
  color: #4f0bd6;
  font-size: 1.2em;
  padding: 10px;
}

.item {
  color: #4f0bd6;
  padding: 10px;
}

/* ニックネーム */
.namae {
  width: 80%;
  margin: 0 auto;
  max-width: 500px;
}

.cp_iptxt {
  position: relative;
  width: 40%;
  margin: 40px 3%;
}
.cp_iptxt input[type="text"] {
  font: 20px/24px sans-serif;
  box-sizing: border-box;
  width: 100%;
  letter-spacing: 1px;
  padding-left: 5.5em;
}
.cp_iptxt input[type="text"]:focus {
  outline: none;
}
.ef {
  padding: 4px 0;
  border: 0;
  border-bottom: 1px solid #1b2538;
  background-color: transparent;
}
.ef ~ .focus_line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  transition: 0.4s;
  background-color: #945fde;
}
.ef:focus ~ .focus_line,
.cp_iptxt.ef ~ .focus_line {
  width: 100%;
  transition: 0.4s;
}
.ef ~ label {
  position: absolute;
  z-index: -1;
  top: 4px;
  left: 0;
  width: 100%;
  transition: 0.3s;
  letter-spacing: 0.5px;
  color: black;
}
.ef:focus ~ label,
.cp_iptxt.ef ~ label {
  font-size: 12px;
  top: -16px;
  transition: 0.3s;
  color: #945fde;
}
/* ニックネーム終わり */

/* 卒業年度 */
.cp_selectYear {
  position: relative;
  width: 40%;
  margin: 2em auto;
  text-align: center;
}
.cp_sl06 {
  position: relative;
  font-family: inherit;
  background-color: transparent;
  width: 100%;
  padding: 10px 10px 10px 0;
  font-size: 18px;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.cp_sl06:focus {
  outline: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
}
.cp_selectYear .cp_sl06 {
  appearance: none;
  -webkit-appearance: none;
}
.cp_selectYear select::-ms-expand {
  display: none;
}
.cp_selectYear:after {
  position: absolute;
  top: 18px;
  right: 10px;
  width: 0;
  height: 0;
  padding: 0;
  content: "";
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid black;
  pointer-events: none;
}
.cp_sl06_selectlabel {
  color: black;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 10px;
  transition: 0.2s ease all;
}
.cp_sl06:focus ~ .cp_sl06_selectlabel,
.cp_sl06:valid ~ .cp_sl06_selectlabel {
  color: #945fde;
  top: -20px;
  transition: 0.2s ease all;
  font-size: 14px;
}
.cp_sl06_selectbar {
  position: relative;
  display: block;
  width: 100%;
}
.cp_sl06_selectbar:before,
.cp_sl06_selectbar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #945fde;
  transition: 0.2s ease all;
}
.cp_sl06_selectbar:before {
  left: 50%;
}
.cp_sl06_selectbar:after {
  right: 50%;
}
.cp_sl06:focus ~ .cp_sl06_selectbar:before,
.cp_sl06:focus ~ .cp_sl06_selectbar:after {
  width: 50%;
}
.cp_sl06_highlight {
  position: absolute;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}
/* 卒業年度終わり */

.uni-bunri {
  width: 80%;
  margin: 0 auto;
  max-width: 500px;
  display: flex;
}

/* 大学 */
.cp_ipuni {
  position: relative;
  width: 40%;
  margin: 40px 3%;
}
.cp_ipuni input[type="text"] {
  font: 20px/24px sans-serif;
  box-sizing: border-box;
  width: 100%;
  letter-spacing: 1px;
  padding-left: 3.5em;
}
.cp_ipuni input[type="text"]:focus {
  outline: none;
}
.ef2 {
  padding: 4px 0;
  border: 0;
  border-bottom: 1px solid #1b2538;
  background-color: transparent;
}
.ef2 ~ .focus_line2 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  transition: 0.4s;
  background-color: #945fde;
}
.ef2:focus ~ .focus_line2,
.cp_ipuni.ef2 ~ .focus_line2 {
  width: 100%;
  transition: 0.4s;
}
.ef2 ~ label {
  position: absolute;
  z-index: -1;
  top: 4px;
  left: 0;
  width: 100%;
  transition: 0.3s;
  letter-spacing: 0.5px;
  color: black;
}
.ef2:focus ~ label,
.cp_ipuni.ef2 ~ label {
  font-size: 12px;
  top: -16px;
  transition: 0.3s;
  color: #945fde;
}
/* 大学終わり */
/* 文理 */
.cp_ipradio {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.cp_ipradio:before,
.cp_ipradio:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}
.cp_ipradio .box {
  width: 100%;
  display: flex;
  margin: 2em auto;
  text-align: center;
  border-radius: 3px;
}
.cp_ipradio input[type="radio"] {
  display: none;
}
.cp_ipradio label:focus,
.cp_ipradio label:hover,
.cp_ipradio label:active,
.cp_ipradio input:checked + label {
  color: #945fde;
}
.cp_ipradio label:focus:before,
.cp_ipradio label:hover:before,
.cp_ipradio label:active:before,
.cp_ipradio input:checked + label:before {
  border-color: #945fde;
}
.cp_ipradio label {
  font-size: 1em;

  line-height: 1;
  position: relative;
  display: block;
  overflow: hidden;
  padding: 1em 1em 1em 3em;
  cursor: pointer;
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.cp_ipradio label:before {
  position: absolute;
  top: 1em;
  left: 1em;
  width: 10px;
  height: 10px;
  content: "";
  border: 0.2em solid #838080;
  border-radius: 50%;
}
.cp_ipradio input:checked + label:before {
  border-color: #945fde;
  background: #945fde;
}
.cp_ipradio input:disabled + label {
  cursor: not-allowed;
  color: rgba(0, 0, 0, 0.5);
}
.cp_ipradio input:disabled + label:hover {
  border-color: rgba(0, 0, 0, 0.1);
}
.cp_ipradio input:disabled + label:before {
  border-color: #ffffff;
  background: #ffffff;
}
/* 文理終わり */

/* 日付選択 */
.hidukeSentaku {
  width: 80%;
  margin: 0 auto;
  max-width: 500px;
}

.nentukihi {
  background-color: #fff0f5;
  border-color: #945fde;
}

/* 業界 */
.cp_selectg {
  position: relative;
  width: 40%;
  margin: 2em auto;
  text-align: center;
}
.cp_sl07 {
  position: relative;
  font-family: inherit;
  background-color: transparent;
  width: 100%;
  padding: 10px 10px 10px 0;
  font-size: 18px;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.cp_sl07:focus {
  outline: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
}
.cp_selectg .cp_sl07 {
  appearance: none;
  -webkit-appearance: none;
}
.cp_selectg select::-ms-expand {
  display: none;
}
.cp_selectg:after {
  position: absolute;
  top: 18px;
  right: 10px;
  width: 0;
  height: 0;
  padding: 0;
  content: "";
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.3);
  pointer-events: none;
}
.cp_sl07_selectlabel {
  color: black;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 10px;
  transition: 0.2s ease all;
}
.cp_sl07:focus ~ .cp_sl07_selectlabel,
.cp_sl07:valid ~ .cp_sl07_selectlabel {
  color: #945fde;
  top: -20px;
  transition: 0.2s ease all;
  font-size: 14px;
}
.cp_sl07_selectbar {
  position: relative;
  display: block;
  width: 100%;
}
.cp_sl07_selectbar:before,
.cp_sl07_selectbar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #945fde;
  transition: 0.2s ease all;
}
.cp_sl07_selectbar:before {
  left: 50%;
}
.cp_sl07_selectbar:after {
  right: 50%;
}
.cp_sl07:focus ~ .cp_sl07_selectbar:before,
.cp_sl07:focus ~ .cp_sl07_selectbar:after {
  width: 50%;
}
.cp_sl07_highlight {
  position: absolute;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}
/* 業界終わり */
/* インターンor本選考 */
.select_i {
  position: relative;
  width: 40%;
  margin: 2em auto;
  text-align: center;
}
.cp_sl08 {
  position: relative;
  font-family: inherit;
  background-color: transparent;
  width: 100%;
  padding: 10px 10px 10px 0;
  font-size: 18px;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.cp_sl08:focus {
  outline: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
}
.select_i .cp_sl08 {
  appearance: none;
  -webkit-appearance: none;
}
.select_i select::-ms-expand {
  display: none;
}
.select_i:after {
  position: absolute;
  top: 18px;
  right: 10px;
  width: 0;
  height: 0;
  padding: 0;
  content: "";
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.3);
  pointer-events: none;
}
.cp_sl08_selectlabel {
  color: black;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 10px;
  transition: 0.2s ease all;
}
.cp_sl08:focus ~ .cp_sl08_selectlabel,
.cp_sl08:valid ~ .cp_sl08_selectlabel {
  color: #945fde;
  top: -20px;
  transition: 0.2s ease all;
  font-size: 14px;
}
.cp_sl08_selectbar {
  position: relative;
  display: block;
  width: 100%;
}
.cp_sl08_selectbar:before,
.cp_sl08_selectbar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #945fde;
  transition: 0.2s ease all;
}
.cp_sl08_selectbar:before {
  left: 50%;
}
.cp_sl08_selectbar:after {
  right: 50%;
}
.cp_sl08:focus ~ .cp_sl08_selectbar:before,
.cp_sl08:focus ~ .cp_sl08_selectbar:after {
  width: 50%;
}
.cp_sl08_highlight {
  position: absolute;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}
/* インターンor本選考終わり */
/* 段階 */
.select_d {
  position: relative;
  width: 40%;
  margin: 2em auto;
  text-align: center;
}
.cp_sl09 {
  position: relative;
  font-family: inherit;
  background-color: transparent;
  width: 100%;
  padding: 10px 10px 10px 0;
  font-size: 18px;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.cp_sl09:focus {
  outline: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
}
.select_d .cp_sl09 {
  appearance: none;
  -webkit-appearance: none;
}
.select_d select::-ms-expand {
  display: none;
}
.select_d:after {
  position: absolute;
  top: 18px;
  right: 10px;
  width: 0;
  height: 0;
  padding: 0;
  content: "";
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.3);
  pointer-events: none;
}
.cp_sl09_selectlabel {
  color: #945fde;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 10px;
  transition: 0.2s ease all;
}
.cp_sl09:focus ~ .cp_sl09_selectlabel,
.cp_sl09:valid ~ .cp_sl09_selectlabel {
  color: black;
  top: -20px;
  transition: 0.2s ease all;
  font-size: 14px;
}
.cp_sl09_selectbar {
  position: relative;
  display: block;
  width: 100%;
}
.cp_sl09_selectbar:before,
.cp_sl09_selectbar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #945fde;
  transition: 0.2s ease all;
}
.cp_sl09_selectbar:before {
  left: 50%;
}
.cp_sl09_selectbar:after {
  right: 50%;
}
.cp_sl09:focus ~ .cp_sl09_selectbar:before,
.cp_sl09:focus ~ .cp_sl09_selectbar:after {
  width: 50%;
}
.cp_sl09_highlight {
  position: absolute;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

/* 段階終わり */
/* 入力エリア */
.form textarea {
  height: 10em;
  width: 50em;
  resize: none;
}
.form textarea:focus {
  border: solid 2px #945fde;
  outline: 0;
}

.nyuryoku {
  width: 80%;
  margin: 0 auto;
  max-width: 500px;
}

/* 入力エリア終わり */
/* 投稿ボタン */
.submit {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0 auto;
  padding: 1em 2em;
  width: 150px;
  color: #333;
  font-size: 15px;
  font-weight: 700;
  background-color: #ccc;
  border-radius: 50vh;
  transition: 0.3s;
}

.form_button :before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  border: 2px solid #945fde;
  border-radius: 50vh;
  transition: 0.2s;
}

.form_button :after {
  content: "";
  width: 5px;
  height: 5px;
  border-top: 3px solid #333333;
  border-right: 3px solid #333333;
  transform: rotate(45deg);
}

.form_button :hover::before {
  top: 0;
  left: 0;
}

.form_button :hover {
  text-decoration: none;
  background-color: #d6bbfc;
}
</style>
