# 🪷 Mensagens Motivadoras  

**🔗 Deploy:** [https://mensagem-motivadora.vercel.app/](https://mensagem-motivadora.vercel.app/)

---

## 📖 Descrição  
O **Mensagens Motivadoras** é um projeto simples desenvolvido em **TypeScript** que exibe uma nova mensagem inspiradora a cada clique no botão.  
A aplicação consome uma **API externa** que retorna frases motivacionais aleatórias, proporcionando uma experiência leve e positiva para o usuário.

---

## 🚀 Tecnologias utilizadas  
- **HTML5** — Estrutura da página  
- **CSS3** — Estilização do layout  
- **TypeScript** — Lógica do programa e consumo da API  
- **Vercel** — Hospedagem do projeto  

---

## ⚙️ Funcionamento  

1. Ao abrir o site, é exibida uma mensagem inicial:  
   > “Clique para ter uma nova mensagem”  

2. Ao clicar no botão **“Nova mensagem”**, o sistema:
   - Faz uma requisição à API `https://api-random.vercel.app/`;  
   - Recebe um JSON com uma frase motivacional;  
   - Atualiza o texto exibido na tela com a nova mensagem.  

---

## 🌐 API utilizada  

- **Endpoint:** [`https://api-random.vercel.app/`](https://api-random.vercel.app/)  
- **Retorno esperado (JSON):**
  ```json
  {
    "mensage": "Acredite em si mesmo e vá em frente!"
  }