import Vue from "vue";
import GAuth from "vue-google-oauth2";

const gauthOption = {
    clientId: "845815543702-12es6ujv1hdpg33jpenr36893ua6dpkv.apps.googleusercontent.com",
    scope: "profile email",
    prompt: "select_account",
};
Vue.use(GAuth, gauthOption);
