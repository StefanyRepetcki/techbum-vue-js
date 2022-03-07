<template>
<v-card class="overflow-hidden card-cadastro" color="purple lighten-1">
    <v-toolbar flat color="purple">
        <v-icon class="icon">mdi-cart-variant</v-icon>
        <v-toolbar-title class="font-weight-light">
            Cadastrar produto
        </v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
        <v-text-field required v-model="name" color="white" label="Nome do Produto"></v-text-field>
        <v-text-field required v-model="product" color="white" label="Link da imagem do Produto"></v-text-field>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="button" @click="save">
            Cadastrar
        </v-btn>
    </v-card-actions>
    <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
        Produto Cadastrado com Sucesso!
    </v-snackbar>
</v-card>
</template>

<script>
export default {
    data() {
        return {
            hasSaved: false,
            model: null,
            name: '',
            product: '',
        }
    },
    methods: {
        save() {
            if (this.name && this.product) {
                const payload = {
                    name: this.name,
                    img: this.product
                };
                this.$store.commit('addProducts', payload);
                this.hasSaved = true;
            }
        },
    },
}
</script>

<style>
.card-cadastro {
    width: 600px;
    height: 400px;
    margin: 2% auto;
}

.button {
    color: white !important;
    background-color: rgb(255, 101, 0) !important;
}
</style>
