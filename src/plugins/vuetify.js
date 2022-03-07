import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                primary: '#0060B1',
                secondary: '#FF6500',
            },
            dark: {
                primary: '#0060B1',
                secondary: '#FF6500',
            },
        },
    },
}

export default new Vuetify(opts)