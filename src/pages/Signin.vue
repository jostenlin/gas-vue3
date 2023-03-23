<template>
  <div>
    <h2 v-if="user">Signed In User: {{ displayName }}</h2>
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>
    <br>
    <div v-if="isSignin">
      <button @click="handleSignOut">Sign Out</button>
    </div>
  </div>
</template>

<script>
  
  import firebase from 'firebase/compat/app';
  import * as firebaseui from 'firebaseui'
  import 'firebaseui/dist/firebaseui.css'
  import { getAuth, signOut } from "firebase/auth";
  import store from '@/store'
  import firebaseConfig from '@/plugins/firebaseConfig';

  firebase.initializeApp(firebaseConfig);
  const auth = getAuth();
  let ui = null;
  const uiConfig={
          // signInFlow: 'popup',
          signInFlow:'redirect',
          signinSuccessUrl: 'http://localhost:8080/signin',
          signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
          ],
          callbacks: {
            signInSuccessWithAuthResult: function (authResult) {
              let user={};
              user.displayName = authResult.user.displayName;
              user.emal=authResult.user.email;
              user.stu_no=authResult.user.metadata.stu_no;
              user.role=authResult.user.metadata.role;
              store.commit('user/setUser',user);

              // so it doesn't refresh the page
              return false;
            },
            uiShown: function() {
              // The widget is rendered.
              // Hide the loader.
              document.getElementById('loader').style.display = 'none';
            }
          }
        };

  export default {
      computed:{
        user(){return store.getters['user/user']},
        isSignin(){return store.getters['user/isSignin']},
        displayName(){return store.getters['user/displayName']}
      },
      mounted(){
        // signout
        signOut(auth);
        store.commit('user/setUser',null);

        // show signin ui
        ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', uiConfig);
      },
      methods:{
        handleSignOut(){
          signOut(auth).then(() => {
          store.commit('user/setUser',null);        
          ui.start('#firebaseui-auth-container', uiConfig);
          }).catch((error) => {
            console.log(error);
          });
        }
      }
    }
</script>