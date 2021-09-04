import Vue from "vue"
import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChfzBo-B4mtXMf1ORy4pZZqMVSXK9Ypq0",
  authDomain: "peaches-40b33.firebaseapp.com",
  projectId: "peaches-40b33",
  storageBucket: "peaches-40b33.appspot.com",
  messagingSenderId: "859732748262",
  appId: "1:859732748262:web:f2c1c0d52c6121d1941827",
  measurementId: "G-2ZPHHHXWZH",
}

firebase.initializeApp(firebaseConfig)

/**
 * Vue.observable を使って、firebase.auth()をVueアプリ全体に共有する。
 * this.$authがアプリ全体でアクセスできる様になる。
 * @example
 * computed() を通じて firebase.auth().currentUser.displayにアクセスする例。任意のコンポーネントで以下の様に記述できる。
 * ```vue
 * computed: {
 *  user() {
 *    reutrn this.$auth.currentUser
 *  }
 * }
 * ```
 */

const initialUserState = {
  uid: "",
  displayName: "",
  photoURL: "",
}
const $auth = Vue.observable({
  currentUser: { ...initialUserState },
})
firebase.auth().onAuthStateChanged((user) => {
  let state
  if (user) {
    const { uid, displayName, photoURL } = user
    state = {
      uid,
      displayName,
      photoURL,
    }
  } else {
    state = initialUserState
  }
  Object.assign($auth.currentUser, state)
})
Vue.prototype.$auth = $auth
