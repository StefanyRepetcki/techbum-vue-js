<template>
  <div class="card-cadastro">
    <v-card class="card-cadastro__card" color="purple lighten-1">
      <v-toolbar flat color="purple">
        <v-icon class="card-cadastro__icon">mdi-cart-variant</v-icon>
        <v-toolbar-title class="card-cadastro__title font-weight-light">
          Cadastrar produto
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text>
        <v-text-field
          required
          v-model="name"
          color="white"
          class="card-cadastro__input card-cadastro__input--name"
          label="Nome do Produto"
        ></v-text-field>
        <v-text-field
          required
          v-model="product"
          color="white"
          class="card-cadastro__input card-cadastro__input--product"
          label="Link da imagem do Produto"
        ></v-text-field>
      </v-card-text>
      <v-divider class="card-cadastro__divider"></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          class="card-cadastro__button button button--primary"
          @click="save"
        >
          Cadastrar
        </v-btn>
      </v-card-actions>
      <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
        Produto Cadastrado com Sucesso!
      </v-snackbar>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasSaved: false,
      model: null,
      name: "",
      product: "",
    };
  },
  methods: {
    save() {
      if (this.name && this.product) {
        const payload = {
          name: this.name,
          img: this.product,
        };
        this.$store.commit("addProduct", payload);
        this.hasSaved = true;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.card-cadastro {
  width: 600px;
  height: 400px;
  margin: 2% auto;

  &__card {
    width: 100%;
    height: 100%;
    overflow: hidden;

    &__icon {
      margin-right: 10px;
    }

    &__title {
      margin-left: 10px;
    }

    &__input {
      width: 100%;

      &--name {
        margin-bottom: 15px;
      }
    }

    &__divider {
      margin: 15px 0;
    }
  }
  .button--primary {
    color: white !important;
    background-color: rgb(255, 101, 0) !important;
  }
}
</style>
