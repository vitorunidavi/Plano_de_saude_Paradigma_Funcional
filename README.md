# 👨‍⚕️ Análise Funcional de Custos de Plano de Saúde

Aplicação web desenvolvida para a disciplina **Linguagem de Programação e Paradigmas** — Prof. Esp. Ademar Perfoll Junior.

Este projeto aplica de forma rigorosa o **Paradigma de Programação Funcional (PF)** em JavaScript, simulando e calculando custos de um plano de saúde.  
A aplicação garante **integridade dos dados**, utilizando **funções puras**, **imutabilidade** e **funções de ordem superior**.

---

## 👥 Desenvolvedores

- **Vitor Hugo Tavares**  
- **Gustavo Borgonha**

Repositório oficial:  
[https://github.com/vitorunidavi/Plano_de_saude_Paradigma_Funcional](https://github.com/vitorunidavi/Plano_de_saude_Paradigma_Funcional)

---

## 🎯 Objetivo do Projeto

Implementar um programa prático e acessível utilizando JavaScript, com foco em:

- **Funções Puras:** Lógica de negócio sem efeitos colaterais.  
- **Imutabilidade:** Criação de novos estados de dados sem alterar os originais.  
- **Funções de Ordem Superior:** Uso de `map`, `filter` e `reduce` para processamento declarativo.  
- **Validação Pura:** Garantia da consistência dos dados de entrada antes do cálculo.

---

## ⚙️ Tecnologias Utilizadas

- **JavaScript** (ES Modules — Programação Funcional)  
- **HTML / CSS** (Interface cliente)  
- **Live Server** (Extensão do VS Code para rodar ES Modules localmente)

---

## 🚀 Guia de Instalação e Execução

### 🔧 1. Clonar o Repositório

```bash
git clone https://github.com/vitorunidavi/Plano_de_saude_Paradigma_Funcional.git
cd Plano_de_saude_Paradigma_Funcional
```

---

### 📦 2. Instalar Ferramentas (Live Server)

O projeto utiliza **ES Modules**, que requerem execução via servidor local.  
Para isso:

1. Abra o projeto no **VS Code**  
2. Instale a extensão **Live Server** (Autor: Ritwick Dey)  

---

### 🖥️ 3. Estrutura de Arquivos

```
plano-de-saude-funcional/
├── index.html     # Interface e CSS
├── index.js       # Fluxo de processamento e UI
└── regras.js      # Funções Puras e Tabelas de Dados
```

---

### 🌐 4. Execução da Aplicação (No Navegador)

1. Abra o projeto no VS Code  
2. Clique com o botão direito em `index.html`  
3. Selecione **“Open with Live Server”**  
4. A aplicação abrirá automaticamente no navegador  

---

## 🧩 Funcionamento do Sistema

A aplicação calcula o custo total de um plano de saúde com base em:

- Faixa etária do beneficiário  
- Custos de procedimentos realizados  
- Limites de coparticipação e franquias  

Cada cálculo é realizado por **funções puras**, garantindo resultados determinísticos e previsíveis.

---

## 🔁 Fluxo de Processamento Funcional

| Etapa | Função | Entrada | Saída |
|-------|---------|----------|-------|
| 1️⃣ Mensalidade | `calcularMensalidade(idade)` | Idade = 21 (Faixa 19–23) | Mensalidade = **R$ 250,00** |
| 2️⃣ Coparticipação | `calcularCustoProcedimento(valor)` | Valor = R$ 80,00 | Coparticipação = **R$ 24,00 (30%)** |
| 3️⃣ Agregação | `reduce()` + Lógica de Franquia | Copart. Bruta = R$ 24,00 | Copart. Final = **R$ 24,00** |

💰 **Custo Total Final = R$ 274,00**  
(Mensalidade + Coparticipação Final)

---

## 🧠 Aplicação do Paradigma de Programação Funcional

| Conceito | Implementação |
|-----------|----------------|
| **Imutabilidade** | Nenhum dado original é alterado; novas estruturas são criadas. |
| **Funções Puras** | `calcularMensalidade` e `calcularCustoProcedimento` não dependem de estado externo. |
| **Funções de Ordem Superior** | Uso de `filter`, `map` e `reduce` para processar listas de beneficiários e custos. |
| **Validação Pura** | Filtragem de entradas inválidas antes de qualquer cálculo. |

---

## 💡 Exemplo Simplificado de Código

```js
// Função pura: cálculo de mensalidade por faixa etária
const calcularMensalidade = (idade) => {
  if (idade <= 18) return 200;
  if (idade <= 23) return 250;
  if (idade <= 28) return 320;
  return 400;
};

// Uso funcional com map e reduce
const beneficiarios = [19, 25, 30];
const total = beneficiarios
  .map(calcularMensalidade)
  .reduce((acc, valor) => acc + valor, 0);

console.log(total); // Resultado: 970
```

---

## 🖋️ Créditos

Desenvolvido por:  
**Vitor Hugo Tavares** e **Gustavo Borgonha**  

📚 Curso: **Sistemas de Informação**  
🏫 Universidade — Disciplina: **Linguagem de Programação e Paradigmas**  
👨‍🏫 Professor: **Esp. Ademar Perfoll Junior**
