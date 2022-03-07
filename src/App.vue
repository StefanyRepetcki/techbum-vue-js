<template>
<div id="app">
    <v-card class="mx-auto overflow-hidden">
        <v-app-bar color="deep-purple accent-4 menu" prominent>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon class="icon">mdi-headset</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon class="icon">mdi-cards-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon class="icon">mdi-cart</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" class="menu-mb" absolute left temporary>
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                    <v-list-item>
                        <v-list-item-title>Foo</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Bar</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Fizz</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Buzz</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-card-text class="navigation">
            <router-link to="/">PREVIEW</router-link>
            <router-link to="/cadastrar">CADASTRO</router-link>
            <router-link to="/editar">EDITAR PRODUTOS</router-link>
        </v-card-text>
    </v-card>
    <router-view />
</div>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
        group: null,
        list: [{
            name: 'HARDWARE',
            img: 'https://static.kabum.com.br/conteudo/categorias/HARDWARE_1646235347.png',
        }, {
            name: 'PERIFÉRICOS',
            img: 'https://static.kabum.com.br/conteudo/categorias/PERIFERICOS.png',
        }, {
            name: 'CADEIRAS',
            img: 'https://static.kabum.com.br/conteudo/categorias/CADEIRAS.png',
        }, {
            name: 'GAMES',
            img: 'https://static.kabum.com.br/conteudo/categorias/GAMER.png',
        }, {
            name: 'COMPUTADORES',
            img: 'https://static.kabum.com.br/conteudo/categorias/COMPUTADORES.png',
        }, {
            name: 'CELULAR & SMARTPHONE',
            img: 'https://static.kabum.com.br/conteudo/categorias/CELULAR-SMARTPHONE_1645045581.png',
        }, {
            name: 'TV',
            img: 'https://static.kabum.com.br/conteudo/categorias/TV_1645045665.png',
        }, {
            name: 'BENEFÍCIO',
            img: 'https://static.kabum.com.br/conteudo/categorias/beneficio.png',
        }, {
            name: 'SEGURANÇA',
            img: 'https://static.kabum.com.br/conteudo/categorias/SEGURANCA.png',
        }, {
            name: 'CÂMERAS DIGITAIS',
            img: 'https://static.kabum.com.br/conteudo/categorias/CAMERAS-DIGITAIS.png',
        }, {
            name: 'TELEFONIA FIXA',
            img: 'https://static.kabum.com.br/conteudo/categorias/TELEFONIA-FIXA_1645096675.png',
        }, {
            name: 'TABLETS',
            img: 'https://static.kabum.com.br/conteudo/categorias/TABLETS-IPADS-E-E-READERS_1645096620.png',
        }]
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
    mounted() {
        this.$store.commit('setListProducts', this.list);
    }
}
</script>

<style src="./assets/css/app.css"></style>
