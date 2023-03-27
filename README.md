## Techbum Vue.js
Projeto em Vue.js que consiste em uma cópia da página da Kabum, com funcionalidades de CRUD implementadas no front-end.

### Tecnologias utilizadas
- Vue.js
- Vuetify
- SCSS

### Pré-requisitos
- Node.js instalado
- NPM ou Yarn instalado
- Como executar

Clone o repositório para sua máquina local:
```
git clone https://github.com/StefanyRepetcki/techbum-vue-js.git
```

Instale as dependências do projeto:
```
npm install
```

Inicie o servidor de desenvolvimento:
```
npm run serve
```

Acesse o endereço http://localhost:8080/ em seu navegador para visualizar o projeto em execução.

### Funcionalidades
- Listagem de produtos
- Adição de produtos
- Edição de produtos
- Remoção de produtos
### Estrutura de arquivos
- public/: contém o arquivo index.html e outros recursos estáticos que serão servidos diretamente pelo servidor
- src/: contém todo o código-fonte do projeto
- assets/: contém arquivos estáticos como imagens, fontes etc.
- components/: contém os componentes Vue utilizados na aplicação
- router/: contém as definições das rotas da aplicação
- store/: contém as definições das store Vuex utilizadas na aplicação
- views/: contém as views da aplicação, que correspondem às diferentes páginas
- App.vue: o componente raiz da aplicação
- main.js: o ponto de entrada da aplicação, onde são definidas as configurações principais e as bibliotecas são importadas
