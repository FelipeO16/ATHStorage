export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'ATHStorage',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{ src: '@/plugins/qr.js', mode: 'client' }, '@/plugins/accessor', { src: '@/plugins/qr-gen.js', mode: 'client' }],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [{ path: '@/components', pathPrefix: false }],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/fontawesome'
    ],

    fontawesome: {
        icons: {
            solid: [
                'faHome',
                'faChartBar',
                'faClipboardList',
                'faCreditCard',
                'faWrench',
            ],
        },
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/toast'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: process.env.NODE_ENV === 'production' ? 'http://ath-storage.kinghost.net:21071/api' : 'http://ath-storage.kinghost.net:21071/api',
        browserBaseURL: process.env.NODE_ENV === 'production' ? 'http://ath-storage.kinghost.net:21071/api' : 'http://ath-storage.kinghost.net:21071/api'
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    // toast module configuration: https://www.npmjs.com/package/vue-toast-notification
    // toast module instalation: https://www.npmjs.com/package/@nuxtjs/toast
    toast: {
        position: 'top-center',
        register: [ // Register custom toasts
            {
                name: 'my-error',
                message: 'Oops...Something went wrong',
                options: {
                    type: 'error'
                }
            }
        ]
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/pro-solid-svg-icons',
            '@fortawesome/pro-regular-svg-icons',
            '@fortawesome/pro-light-svg-icons',
            '@fortawesome/free-brands-svg-icons'
        ],
        postcss: {
            plugins: {
                "postcss-custom-properties": false
            },
        },
    },

    server: {
        host: 'localhost', // default: localhost
        port: '21075'
    }
}