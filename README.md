# :dog: petlovers-backend

API REST do Petlovers.

## :globe_with_meridians: Web

- Você pode acessar o repositório do frontend [aqui](https://github.com/maeldz/petlovers-frontend).

## :pushpin: Endpoints

- GET  */sessions* - Autenticação do usuário
- POST  */users* - Cadastro do usuário
- PUT  */users* - Atualização dos dados do usuário :lock:
- GET  */dogs* - Listagem dos cachorros cadastrados :lock:
- POST  */dogs* - Cadastro de um novo cachorro :lock:

## :exclamation: Possíveis melhorias

- Desenvolver testes
- Aplicar uma arquitetura como Clean Architecture
- Aplicar design patterns
- Aplicar os princípios do SOLID
- Criar uma documentação com o Swagger

## :wrench: Rodando o projeto

- Clone este repositório.
- Instale todas as dependências usando o comando `yarn` ou `npm i`.
- Crie uma conexão com um banco de dados postgres.
- Faça uma cópia do arquivo `.env.example` e o renomeie para `.env`
- Preencha-o de acordo com os dados da sua conexão.

##### Scripts

##### `yarn start`

Inicia o servidor em modo de produção (faça um `build` antes)

##### `yarn dev`

Inicia o servidor em modo de desenvolvimento

##### `yarn build`

Faz um build do projeto na pasta `dist`, gerando uma versão do mesmo na sintaxe CommonJS

## :fire: Tecnologias usadas

- NodeJS
- Express
- Sequelize
- Sequelize Typescript
- Yup
- Multer
- Bcrypt
- Json Web Token

## :man: Contribuidores

- [@maeldz](https://github.com/maeldz)
