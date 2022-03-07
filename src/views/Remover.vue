<template>
<v-container style="margin-top: 20px" class="section">
    <v-row class="products">
        <v-col v-for="(department, index) in listProducts" :key="index" cols="12" sm="3">
            <v-icon large left color="red darken-2" v-on:click="editarProduct(index, department)">
                mdi-image-edit
            </v-icon>
            <v-icon large right class="icon-trash" color="red darken-2" v-on:click="removeProduct(index)">
                mdi-delete-alert
            </v-icon>
            <v-card class="pa-2 no-box-shadow">
                <h2 class="name">{{ department.name }}</h2>
                <img :src="department.img" alt="">
            </v-card>
        </v-col>
        <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
            Produto {{msg}} com Sucesso!
        </v-snackbar>
        <ModalEdit :dialog="activeModal" :index="index" :img="imgSelected" :name="nameSelected" @saved="saved()">
        </ModalEdit>
    </v-row>
</v-container>
</template>

<script>
import {
    mapState
} from 'vuex';
import ModalEdit from '../components/ModalEdit';

export default {
    components: {
        ModalEdit
    },
    data() {
        return {
            msg: 'alterado',
            hasSaved: false,
            activeModal: false,
            index: 0,
            imgSelected: '',
            nameSelected: '',
        };
    },
    computed: {
        ...mapState(['listProducts']),
    },
    methods: {
        removeProduct(params) {
            this.$store.commit('removeProducts', params);
            this.msg = 'removido';
            this.hasSaved = true;
        },
        editarProduct(index, params) {
            this.activeModal = true;
            this.index = index;
            this.imgSelected = params.img;
            this.nameSelected = params.name;
        },
        saved() {
            this.msg = 'alterado';
            this.hasSaved = true;
        }
    }
}
</script>

<style>
.icon-trash {
    color: red !important;
}
</style>
