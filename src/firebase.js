
import Vue from "vue"
import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
	// ...
}

firebase.initializeApp(firebaseConfig)

/**
 * Vue.observable を使って、firebase.auth()をVueアプリ全体に共有する。
 * this.$authがアプリ全体でアクセスできる様になる。
 * @example
 * firebase.auth().currentUser.displayにアクセスする例。任意のコンポーネントで以下の様に記述できる。
 * ```js
 * this.$auth.currentUser.displayName // "displayName" or ""
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

<template>
 <div>
    {{ user.displayName }}
 </div>
</template>

<script>
export default {
  computed : {
    user() {
      return this.$auth.currentUser
    }
  }
}
</script>