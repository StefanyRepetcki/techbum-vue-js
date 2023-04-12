<template>
  <div id="app">
    <v-card class="mx-auto overflow-hidden">
      <v-app-bar color="deep-purple accent-4 menu" prominent>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-btn icon v-for="(item, index) in icons" :key="index">
          <v-icon class="icon">{{ item.icon }}</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        class="menu-mb"
        absolute
        left
        temporary
      >
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item v-for="(item, index) in menuItems" :key="index">
              <v-list-item-title
                ><a :href="item.link">{{ item.text }}</a></v-list-item-title
              >
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
  data() {
    return {
      drawer: false,
      group: null,
      icons: [
        { icon: 'mdi-headset' },
        { icon: 'mdi-cards-heart' },
        { icon: 'mdi-cart' },
      ],
      menuItems: [
        { text: 'Tela de início', link: '#/' },
        { text: 'Cadastrar produto', link: '#/cadastrar' },
        { text: 'Editar produto', link: '#/editar' },
      ],
      list: [
        {
          name: 'PERIFÉRICOS',
          img: 'https://static.kabum.com.br/conteudo/categorias/PERIFERICOS.png',
        },
        {
          name: 'CADEIRAS',
          img: 'https://static.kabum.com.br/conteudo/categorias/CADEIRAS.png',
        },
        {
          name: 'GAMES',
          img: 'https://static.kabum.com.br/conteudo/categorias/GAMER.png',
        },
        {
          name: 'COMPUTADORES',
          img: 'https://static.kabum.com.br/conteudo/categorias/COMPUTADORES.png',
        },
        {
          name: 'CELULAR & SMARTPHONE',
          img: 'https://static.kabum.com.br/conteudo/categorias/CELULAR-SMARTPHONE_1645045581.png',
        },
        {
          name: 'TV',
          img: 'https://static.kabum.com.br/conteudo/categorias/TV_1645045665.png',
        },
        {
          name: 'BENEFÍCIO',
          img: 'https://static.kabum.com.br/conteudo/categorias/beneficio.png',
        },
        {
          name: 'SEGURANÇA',
          img: 'https://static.kabum.com.br/conteudo/categorias/SEGURANCA.png',
        },
        {
          name: 'TELEFONIA FIXA',
          img: 'https://static.kabum.com.br/conteudo/categorias/TELEFONIA-FIXA_1645096675.png',
        },
        {
          name: 'TABLETS',
          img: 'https://static.kabum.com.br/conteudo/categorias/TABLETS-IPADS-E-E-READERS_1645096620.png',
        },
      ],
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  mounted() {
    this.$store.commit('setListProducts', this.list);
  },
};
</script>

<style lang="scss">
 @import url(../src/assets/scss/main.scss);
 </style>
