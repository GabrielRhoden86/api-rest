# API REST com Node.js

## Aula 1.

### 1. Crie um arquivo de configuração `package.json`:
```bash
npm init -y
```

### 2. Crie uma pasta `src`:
```bash
mkdir src
```

### 3. Instale os pacotes necessários para o projeto (Express):
Execute o seguinte comando para instalar o Express:
```bash
npm install express
```

### 4. Crie o arquivo `src/app.js` e faça as implementações:
```bash
mkdir src && touch src/app.js
```

### 5. Execute o comando para verificar sua implementação no navegador:
Após implementar seu servidor, execute o seguinte comando e abra o navegador em http://localhost:3000:
```bash
node src/app.js 
```

## Aula 2.

### 6. Utilize o Nodemon para monitorar e recarregar automaticamente o servidor:
Instale o Nodemon usando o seguinte comando:
```bash
npm install nodemon -D
```

Execute o script definido no `package.json` (por exemplo, o script `dev`):
```bash
npm run dev
```
## Aula 3.
## 8. Crie um arquivo server.js e copie as credencias para conexão ao servidor e clique nos ... da diretiva required para criar um importação:s
```bash
code server.js
```
## 9. Crie um exportação no  final do `server.js`, de forma que possamos importá-lo em outros módulos:
```bash
app.js: export default app     server.js: import from './src/app.js'
```

### 10. em package.json inclu o  type:module para poder trabalhar com importações:
Instale o Nodemon usando o seguinte comando:
```bash
  "type":"module"
```

### 11. vamos utiliza o postman para inserir dados em nossa estrutura de dados atravéz da rota:
Instale postman
```bash
  post(/selecoes)
```