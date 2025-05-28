
# 📦 API - Controle de Usuários, Treinos e Alimentação

API RESTful desenvolvida com **Node.js**, **Express** e **MongoDB Atlas**, projetada para gestão de usuários, treinos e alimentação. Ideal para aplicações fitness ou de estilo de vida saudável.

---

## 🧪 Tecnologias Utilizadas

- **Node.js** — Ambiente de execução.
- **Express.js** — Framework web.
- **MongoDB Atlas** — Banco de dados NoSQL em nuvem.
- **Mongoose** — Modelagem de dados MongoDB.
- **dotenv** — Gerenciamento de variáveis de ambiente.
- **CORS** — Compartilhamento de recursos entre domínios.
- **Nodemon** — Desenvolvimento com recarga automática.
- **Postman** — Testes de API.

---

## 📁 Estrutura do Projeto

```
API-Mongodb/
├── controllers/          # Lógica dos endpoints
│   ├── usuarioController.js
│   ├── treinoController.js
│   └── alimentacaoController.js
│   └── dashboardController.js
├── models/               # Schemas do MongoDB com Mongoose
│   ├── Usuario.js
│   ├── Treino.js
│   └── Alimentacao.js
├── routes/               # Definição das rotas por módulo
│   ├── usuarioRoutes.js
│   ├── treinoRoutes.js
│   └── alimentacaoRoutes.js
├── app.js                # Configuração principal da aplicação
├── server.js             # Inicialização do servidor e conexão MongoDB
├── .env                  # Variáveis de ambiente
├── package.json          # Dependências e scripts
├── package-lock.json     # Travamento de dependências
├── node_modules/         # Pacotes instalados (não versionado)
├── API Node.js + Mongodb.postman_collection.json  # Testes via Postman
```

---

## 🗂️ Modelagem do Banco de Dados

> Abaixo, insira a imagem da modelagem do banco de dados:

![Modelagem do banco de dados](imagens/2cb275e1-5f07-4370-92f1-18ec861a8029.jpeg)

---

## 🔧 Modelos de Dados

### 👤 Usuario

```json
{
  "nome": "String",
  "email": "String",
  "senha": "String"
}
```

> 🔒 **Recomenda-se criptografar senhas com bcrypt** em produção.

---

### 🏋️ Treino

```json
{
  "usuarioId": "ObjectId",
  "nome": "String",
  "exercicios": ["String"],
  "data": "Date" // gerado automaticamente
}
```

---

### 🍽️ Alimentação

```json
{
  "usuarioId": "ObjectId",
  "refeicao": "String",
  "descricao": "String",
  "data": "Date" // gerado automaticamente
}
```

---

## 📬 Endpoints da API

### 🔐 Usuários (`/api/usuarios`)
| Método | Rota             | Descrição             |
|--------|------------------|------------------------|
| POST   | `/`              | Cria novo usuário      |
| GET    | `/`              | Lista usuários         |
| PUT    | `/:id`           | Atualiza usuário       |
| DELETE | `/:id`           | Remove usuário         |

---

### 🏋️ Treinos (`/api/treinos`)
| Método | Rota                      | Descrição                        |
|--------|---------------------------|----------------------------------|
| POST   | `/`                       | Cria treino                      |
| GET    | `/:usuarioId`             | Lista treinos de um usuário      |
| PUT    | `/:id`                    | Atualiza treino                  |
| DELETE | `/:id`                    | Deleta treino                    |

---

### 🍽️ Alimentações (`/api/alimentacoes`)
| Método | Rota                      | Descrição                            |
|--------|---------------------------|--------------------------------------|
| POST   | `/`                       | Cria alimentação                     |
| GET    | `/`                       | Lista todas as alimentações          |
| GET    | `/:usuarioId`             | Lista alimentações de um usuário     |
| PUT    | `/:id`                    | Atualiza alimentação                 |
| DELETE | `/:id`                    | Remove alimentação                   |

---

### 📊 Dashboard (`/api/dashboard`)
| Método | Rota                                 | Descrição                                   |
|--------|--------------------------------------|---------------------------------------------|
| GET    | `/api/dashboard/:usuarioId`          | Retorna resumo de treinos e alimentação     |
| GET    | `/api/dashboard/dia/:usuarioId`      | Retorna resumo **do dia atual**             |

#### Exemplo de resposta:

```json
{
  "usuarioId": "abc123",
  "treinos": [...],
  "alimentacoes": [...]
}
```

---

## 🧪 Testes com Postman

1. Abra o Postman.
2. Importe o arquivo: `API Node.js + Mongodb.postman_collection.json`
3. Use o endpoint base: `http://localhost:4000`

---

## ▶️ Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/SeuUsuario/API-Mongodb.git
cd API-Mongodb
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Crie o arquivo `.env`

```env
PORT=4000
MONGODB_URI=sua_string_do_mongodb_atlas
```

### 4. Rode a API

Modo desenvolvimento:

```bash
npm run dev
```

Modo produção:

```bash
npm start
```

---

## 🔒 Boas Práticas

- Nunca envie `.env` para o GitHub.
- Use validações e autenticação (ex: JWT) em produção.
- Use `bcrypt` para criptografar senhas.
- Adicione logs para monitoramento.
- Separe ambiente de testes e produção.

---

## 📄 Licença

Este projeto está licenciado sob os termos da **ISC License** (ou ajuste conforme necessário).

---
