
# API - Controle de Usuários, Treinos e Alimentação

API RESTful desenvolvida com **Node.js**, **Express** e **MongoDB Atlas**, projetada para gestão de usuários, treinos e alimentação. Ideal para aplicações fitness ou de estilo de vida saudável.

---

## Tecnologias Utilizadas

- **Node.js** — Ambiente de execução.
- **Express.js** — Framework web.
- **MongoDB Atlas** — Banco de dados NoSQL em nuvem.
- **Mongoose** — Modelagem de dados MongoDB.
- **dotenv** — Gerenciamento de variáveis de ambiente.
- **CORS** — Compartilhamento de recursos entre domínios.
- **Nodemon** — Desenvolvimento com recarga automática.
- **Postman** — Testes de API.

---

## Estrutura do Projeto

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
├── package.json          # Dependências e scripts
├── package-lock.json     # Travamento de dependências
├── API Node.js + Mongodb.postman_collection.json  # Testes via Postman
```

---

## Modelagem do Banco de Dados

![Modelagem do banco de dados](imagens/2cb275e1-5f07-4370-92f1-18ec861a8029.jpeg)

---

## Modelos de Dados

### Usuario

```json
{
  "nome": "String",
  "email": "String",
  "senha": "String"
}
```

---

### Treino

```json
{
  "usuarioId": "ObjectId",
  "nome": "String",
  "exercicios": ["String"],
  "data": "Date" // gerado automaticamente
}
```

---

### Alimentação

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

### Usuários (`/api/usuarios`)
| Método | Rota             | Descrição             |
|--------|------------------|------------------------|
| POST   | `/`              | Cria novo usuário      |
| GET    | `/`              | Lista usuários         |
| PUT    | `/:id`           | Atualiza usuário       |
| DELETE | `/:id`           | Remove usuário         |

---

### Treinos (`/api/treinos`)
| Método | Rota                      | Descrição                        |
|--------|---------------------------|----------------------------------|
| POST   | `/`                       | Cria treino                      |
| GET    | `/:usuarioId`             | Lista treinos de um usuário      |
| PUT    | `/:id`                    | Atualiza treino                  |
| DELETE | `/:id`                    | Deleta treino                    |

---

### Alimentações (`/api/alimentacoes`)
| Método | Rota                      | Descrição                            |
|--------|---------------------------|--------------------------------------|
| POST   | `/`                       | Cria alimentação                     |
| GET    | `/`                       | Lista todas as alimentações          |
| GET    | `/:usuarioId`             | Lista alimentações de um usuário     |
| PUT    | `/:id`                    | Atualiza alimentação                 |
| DELETE | `/:id`                    | Remove alimentação                   |

---

### Dashboard (`/api/dashboard`)
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

## 🚀 Instalação e Uso da API

### 1. 📦 Clonar o Repositório

```bash
git clone https://github.com/vitormdoja04/api_mongodb.git
cd api_mongodb
```

### 2. 📁 Instalar Dependências

```bash
npm install
```

### 3. 🔐 Configurar Variáveis de Ambiente

Crie um arquivo `.env` com:

```env
PORT=4000
MONGODB_URI=mongodb+srv://treinoeAlimentacao:bancomongodb@apimongoose.5xjfgqa.mongodb.net/AppTreinoeAlimentacao?retryWrites=true&w=majority&appName=APIMongoose
```

### 4. 🛡️ Configurar Acesso no MongoDB Atlas

- Vá em **Network Access** no painel do MongoDB Atlas.
- Clique em **Add IP Address**.
- Escolha **Allow access from anywhere** ou adicione o IP da sua máquina.

### 5. ▶️ Iniciar o Servidor

Modo desenvolvimento:

```bash
npm run dev
```

Modo produção:

```bash
npm start
```

---

## 🧪 Testando a API com Postman

### 1. 📥 Importar Coleção do Postman

- Abra o Postman.
- Clique em **Import > File > Upload Files**.
- Selecione `API Node.js + Mongodb.postman_collection.json`.

### 2. ⚙️ Configurar Ambiente

- Vá em **Manage Environments** > **Add**.
- Adicione `base_url = http://localhost:4000`.
- Selecione o ambiente no topo do Postman.

### 3. 📤 Testar Endpoints

- Clique em uma requisição da coleção e depois em **Send**.

---

## 🧰 Recursos Úteis

- [MongoDB Atlas Docs](https://www.mongodb.com/docs/atlas/)
- [Postman Docs](https://learning.postman.com/docs/getting-started/introduction/)

---

## 📄 Licença

Este projeto está licenciado sob os termos da **ISC License** (ou ajuste conforme necessário).

---
