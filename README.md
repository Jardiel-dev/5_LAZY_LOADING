# 🌲 Lazy Load de Imagens com JavaScript

Projeto desenvolvido durante um **curso de formação Front-end**, com o objetivo de praticar **HTML, CSS e JavaScript**, aplicando o conceito de **Lazy Load de imagens** utilizando a API `IntersectionObserver`.

O código foi escrito por mim como parte do meu processo de aprendizado, com apoio e orientação do curso.

---

## 📸 Demonstração

O projeto exibe uma lista de imagens de florestas que são carregadas de forma otimizada conforme o usuário faz scroll na página, melhorando a performance e a experiência do usuário.

---

## 🚀 Tecnologias Utilizadas

- HTML5  
- CSS3  
- JavaScript (ES6+)  
- IntersectionObserver API  

---

## 🧠 Conceitos Aplicados

- Estruturação semântica com HTML  
- Estilização e organização visual com CSS  
- Manipulação do DOM  
- Lazy Load de imagens  
- Performance e boas práticas Front-end  

---

## ⚙️ Como Funciona o Lazy Load

As imagens são observadas utilizando o `IntersectionObserver`.  
Quando uma imagem entra na área visível da tela (viewport), seu `src` é atualizado para carregar uma versão maior da imagem, evitando o carregamento desnecessário de recursos fora da tela.

---

## 📂 Estrutura do Projeto

```text
📁 projeto
├── index.html
├── CSS
│   └── styles.css
└── js
    └── script.js
