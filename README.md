# web02-api-node

API feita para a disciplina de Web02, usando Node.js com TypeScript, Express e TypeORM conectado a um banco MySQL.

## Tecnologias

- Node.js
- TypeScript
- Express
- TypeORM
- MySQL

## Como rodar o projeto

1. Instalar as dependências:

```
npm install
```

2. Copiar o arquivo `.env.example` para `.env` e preencher com os dados do seu banco:

```
PORT=8080

DB_DIALECT=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=
DB_DATABASE=node_api
```

3. Ter o MySQL instalado e criar o banco de dados com o nome que você colocou no `DB_DATABASE`.

4. Rodar as migrations para criar as tabelas:

```
npx typeorm migration:run -d dist/data-source.js
```

(precisa ter rodado o build antes, com `npm run build`)

5. Subir o servidor:

```
npm run start:watch
```

O servidor sobe em `http://localhost:8080`.

## Rotas

- `GET /login` - rota inicial de teste

## Estrutura

```
src/
  controllers/   -> regras das rotas
  entity/        -> entidades do banco (Situations, Users)
  migration/     -> migrations do TypeORM
  data-source.ts -> configuração da conexão com o banco
  index.ts       -> arquivo principal do servidor
```
