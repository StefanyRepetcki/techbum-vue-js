<template>
<v-container class="section">
    <v-row class="banner">
        <img src="https://themes.kabum.com.br/conteudo/layout/2346/banner_img.jpg" alt="Banner Principal KaBuM!" width="1440" height="600" class="sc-gouySG kUhSAV">
    </v-row>
    <v-row class="header-products">
        <h1>QUINZENA DO CONSUMIDOR</h1>
    </v-row>
    <v-row class="subtitle">
        <img height="18" width="22" src="../assets/images/icon-deparment.png">
        <h2>PRODUTOS</h2>
    </v-row>
    <v-row class="products">
        <v-col v-for="(department, index) in listProducts" :key="index" cols="12" sm="3">
            <v-card class="pa-2 no-box-shadow">
                <h2 class="name">{{ department.name }}</h2>
                <img :src="department.img" alt="Imagem do produto" width="210" height="132">
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import {
    mapState
} from 'vuex';

export default {
    computed: {
        ...mapState(['listProducts']),
    }
}
</script>
