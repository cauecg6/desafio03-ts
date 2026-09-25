# Dio Bank

Projeto desenvolvido como parte do Desafio de Projeto "Dio Bank" da [DIO](https://www.dio.me/), com o objetivo de praticar **React + TypeScript**, aplicando conceitos de Context API, TDD (Test Driven Development), rotas protegidas e persistência de dados no navegador.

Baseado no projeto original de [Nathally Souza](https://github.com/nathyts).

🔗 **Deploy:** [dapper-lebkuchen-f2fd65.netlify.app](https://dapper-lebkuchen-f2fd65.netlify.app)

## Tecnologias

- React
- TypeScript
- React Router DOM
- Chakra UI
- Jest + Testing Library

## Checklist do desafio

- [x] Incluir validação da senha no campo de login
  - Validação de e-mail e senha implementada com TDD (testes escritos antes da implementação)
- [x] Implementar um sistema de login com a Context API
  - Estado global de login e dados do usuário
  - Dados do usuário salvos no `localStorage` ao logar
  - Login restaurado automaticamente se já existirem dados no `localStorage`
- [x] Criar uma página para exibir as informações do usuário
  - Exibe nome e e-mail do usuário logado
  - Rota protegida: redireciona para a tela de login caso o usuário não esteja logado
  - Testes unitários para as funções criadas/refatoradas
- [x] Fazer o deploy no Netlify e compartilhar o link da página

## Funcionalidades

- **Login** com validação de e-mail e senha
- **Persistência de sessão**: ao recarregar a página, se houver um login salvo no `localStorage`, o usuário continua logado
- **Página de informações da conta**, com nome e e-mail do usuário, acessível apenas para quem está logado
- **Logout**, que limpa o contexto da aplicação e o `localStorage`
- **Navegação** entre a conta e a página de informações do usuário

> A senha do usuário nunca é salva no `localStorage` — apenas nome e e-mail.

## Como rodar o projeto

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/cauecg6/desafio03-ts.git
cd desafio03-ts
npm install
```

Rode a aplicação em modo de desenvolvimento:

```bash
npm start
```

A aplicação abre em `http://localhost:3000`.

### Login de teste

Como os dados vêm de uma API simulada (`src/api.ts`), use as credenciais abaixo para logar:

- **E-mail:** `nath@dio.bank`
- **Senha:** `123456`

## Como rodar os testes

```bash
CI=true npm test
```

## Build de produção

```bash
npm run build
```

O arquivo `public/_redirects` garante que as rotas do React Router funcionem corretamente quando publicadas no Netlify.

## Deploy no Netlify

1. Faça login em [app.netlify.com](https://app.netlify.com) com sua conta do GitHub.
2. Clique em **"Add new site" → "Import an existing project"**.
3. Selecione o repositório `desafio03-ts`.
4. Configure o build:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
5. Clique em **"Deploy site"**.
6. Após o deploy, copie o link gerado e cole na seção de **Deploy** no topo deste README.

## Aprendizados

- **TDD (Test Driven Development):** escrever os testes antes da implementação ajuda a entender exatamente o que a função precisa fazer, e dá confiança de que o comportamento está correto assim que os testes passam.
- **Context API:** permite compartilhar o estado de autenticação (usuário logado, dados do usuário) entre vários componentes sem precisar passar `props` manualmente em cada nível.
- **Rotas protegidas:** usar `useNavigate` do React Router dentro de um `useEffect` evita redirecionar durante a renderização e permite reagir a mudanças no estado de login.
- **localStorage:** é uma forma simples de persistir dados no navegador entre recarregamentos de página, mas dados sensíveis (como senha) nunca devem ser armazenados nele.
