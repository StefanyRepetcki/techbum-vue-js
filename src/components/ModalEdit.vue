<template>
  <v-dialog
    v-model="dialogModal"
    transition="dialog-top-transition"
    max-width="600"
  >
    <template>
      <v-card class="card card--modal">
        <v-toolbar class="card__toolbar">Abrir editar produto</v-toolbar>
        <v-card-text class="card__text">
          <div class="pa-12">
            <v-text-field
              v-model="nameEdit"
              class="card__input card__input--name"
            ></v-text-field>
            <v-text-field v-model="imgEdit" class="card__input"></v-text-field>
          </div>
        </v-card-text>
        <v-card-actions class="card__actions">
          <v-btn
            v-on:click="editarProduct(0)"
            dark
            class="card__button card__button--cancel"
            >Cancelar</v-btn
          >
          <v-btn
            v-on:click="editarProduct(index)"
            class="card__button card__button--edit"
            >Editar</v-btn
          >
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
  <script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      indexEdit: "",
      nameEdit: "",
      imgEdit: "",
      dialogModal: false,
    };
  },
  props: {
    dialog: Boolean,
    index: Number,
    name: String,
    img: String,
  },
  created() {
    this.nameEdit = this.name;
    this.imgEdit = this.img;
  },
  watch: {
    dialog(item) {
      this.nameEdit = this.name;
      this.imgEdit = this.img;
      this.indexEdit = this.index;
      this.dialogModal = item;
    },
  },
  methods: {
    ...mapActions(["editProduct"]),
    editarProduct(index) {
      if (index === 0) {
        this.$emit("cancel");
        return;
      }
      const params = {
        name: this.nameEdit,
        img: this.imgEdit,
      };
      this.$store.commit("editProduct", {
        index,
        params,
      });
      this.dialogModal = false;
      this.$emit("saved");
    },
  },
};
</script>
  <style lang="scss" scoped>
.card--modal {
  width: 600px;
  margin: 2% auto;
}

.card__toolbar {
  background-color: #42a5f5;
  color: white !important;
}

.card__text {
  padding: 12px;
}

.card__input {
  width: 100%;
  margin-bottom: 15px;
}

.card__input--name {
  margin-right: 15px;
}

.card__actions {
  display: flex;
  justify-content: flex-end;
}

.card__button {
  color: white !important;
  border-radius: 5px;
  padding: 10px 20px;
  margin-left: 15px;
  font-weight: bold;
  text-transform: uppercase;
}

.card__button--cancel {
  background-color: #f44336 !important;
}

.card__button--edit {
  background-color: #4caf50 !important;
}
</style>