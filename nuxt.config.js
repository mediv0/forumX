export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: "server",
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || "",
            },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    /*
     ** Global CSS
     */
    css: ["@/assets/css/main.scss"],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [{ src: "~/plugins/gAuth.js", mode: "client" }],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        "@nuxtjs/eslint-module",
        "@nuxtjs/style-resources",
    ],

    // build modules
    styleResources: {
        // your settings here
        scss: ["@/assets/css/_variables.scss", "@/assets/css/_mixins.scss"],
    },
    /*
     ** Nuxt.js modules
     */
    modules: ["@nuxtjs/axios"],

    axios: {
        baseURL: "http://localhost:3000/api",
        common: {
            Accept: "application/json, text/plain, */*",
        },
    },

    serverMiddleware: ["~/server/index.js"],
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {},
};
