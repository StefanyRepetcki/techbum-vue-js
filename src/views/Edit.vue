<template>
<v-container class="section">
    <v-row class="section__products">
        <v-col v-for="(department, index) in listProducts" :key="index" cols="12" sm="3">
            <v-icon large left v-on:click="editProduct(index, department)">
                mdi-image-edit
            </v-icon>
            <v-icon large right class="icon-trash" v-on:click="removeProduct(index)">
                mdi-delete-alert
            </v-icon>
            <v-card class="pa-2 no-box-shadow">
                <h2 class="name">{{ department.name }}</h2>
                <img :src="department.img" alt="Imagem do produto">
            </v-card>
        </v-col>
        <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
            Produto {{msg}} com Sucesso!
        </v-snackbar>
        <modal-edit :dialog="activeModal" :index="index" :img="imgSelected" :name="nameSelected" @saved="saved()" @cancel="cancel()"/>
    </v-row>
</v-container>
</template>

<script>
import {
    mapState
} from 'vuex';
import ModalEdit from '../components/ModalEdit.vue';

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
            this.$store.commit('removeProduct', params);
            this.msg = 'removido';
            this.hasSaved = true;
        },
        editProduct(index, params) {
            this.activeModal = true;
            this.index = index;
            this.imgSelected = params.img;
            this.nameSelected = params.name;
        },
        saved() {
            this.msg = 'Alterado';
            this.hasSaved = true;
            this.activeModal = false;
        },
        cancel() {
            this.activeModal = false;
        }
    }
}
</script>

<style scoped>
.icon-trash {
    color: red !important;
}

.section {
    margin-top: 20px;
}
</style>
