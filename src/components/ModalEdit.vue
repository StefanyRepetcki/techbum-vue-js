<template>
<v-row>
    <v-dialog v-model="dialogModal" transition="dialog-top-transition" max-width="600">
        <template v-slot:default="dialogModal">
            <v-card>
                <v-toolbar color="primary" dark>Abrir editar produto</v-toolbar>
                <v-card-text>
                    <div class="pa-12">
                        <v-text-field v-model="nameEdit"></v-text-field>
                        <v-text-field v-model="imgEdit"></v-text-field>
                    </div>
                </v-card-text>
                <v-card-actions class="justify-end">
                    <v-btn v-on:click="editarProduct(index)" @click="dialogModal = false">Editar</v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</v-row>
</template>

<script>
export default {
    data() {
        return {
            nameEdit: '',
            imgEdit: '',
            dialogModal: false,
        };
    },
    props: {
        dialog: Boolean,
        index: Number,
        name: String,
        img: String,
    },
    mounted() {
        this.nameEdit = this.name;
        this.imgEdit = this.img;
    },
    watch: {
        dialog(newValue) {
            this.dialogModal = newValue;
        },
    },
    editarProduct(index) {
        const params = {
            name: this.nameEdit,
            img: this.imgEdit,
        }
        this.$store.commit('editarProduct', {
            index,
            params
        });
        this.$emit("saved");
    },
}
</script>
