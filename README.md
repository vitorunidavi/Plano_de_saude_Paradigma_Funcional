# 👨‍⚕️ Análise Funcional de Custos de Plano de Saúde

Aplicação web desenvolvida para a disciplina **Linguagem de Programação e Paradigmas** — Prof. Esp. Ademar Perfoll Junior.

Este projeto foca na aplicação estrita do **Paradigma de Programação Funcional (PF)** em JavaScript para simular e calcular custos de um plano de saúde, garantindo a integridade dos dados através de **funções puras** e **imutabilidade**.

---

## 👥 Desenvolvedores

- **Vitor Hugo Tavares**
- **Gustavo Borgonha**

Repositório oficial:  
[https://github.com/vitorunidavi/Plano_de_saude_Paradigma_Funcional](https://github.com/vitorunidavi/Plano_de_saude_Paradigma_Funcional)

---

## 🎯 Objetivo do Projeto

Implementar um programa prático e acessível utilizando JavaScript, com o objetivo principal de demonstrar:

- **Funções Puras:** Lógica de negócio sem efeitos colaterais.  
- **Imutabilidade:** Criação de novos estados de dados sem alterar os originais.  
- **Funções de Ordem Superior (HOCs):** Uso de `map`, `filter` e `reduce` para processamento declarativo de listas.  
- **Validação Pura:** Garantia da consistência dos dados de entrada antes do cálculo.  

---

## ⚙️ Tecnologias Utilizadas

- **JavaScript** (ES Modules, para Programação Funcional)  
- **HTML / CSS** (interface cliente)  
- **Live Server** (Extensão do VS Code necessária para executar módulos JS localmente)

---

## 🚀 Guia de Instalação e Execução

### 🔧 1. Clonar o Repositório

Obtenha uma cópia do código-fonte utilizando o comando `git clone` no seu terminal:

```bash
git clone https://github.com/vitorunidavi/Plano_de_saude_Paradigma_Funcional.git
cd Plano_de_saude_Paradigma_Funcional
```

---

### 📦 2. Instalar Ferramentas (Live Server)

O projeto usa **ES Modules** (`import/export`), exigindo um servidor local para execução.  
Certifique-se de ter a ferramenta necessária para rodar o projeto localmente.  

No **VS Code**, siga os passos:

1. Abra o projeto  
2. Vá em **Extensões (Ctrl+Shift+X)**  
3. Procure e instale **Live Server** (Autor: Ritwick Dey)  

---

### 🖥️ 3. Estrutura de Arquivos

A pasta do projeto contém a estrutura modular necessária para a execução:

```
plano-de-saude-funcional/
├── index.html     (Interface e CSS)
├── index.js       (Fluxo de processamento e UI)
└── regras.js      (Funções Puras e Tabelas de Dados)
```

---

### 🌐 4. Execução da Aplicação (No Navegador)

1. Abra o projeto no **VS Code**  
2. Clique com o botão direito no arquivo `index.html`  
3. Selecione **"Open with Live Server"**  
4. O projeto será aberto no navegador  

---

## 🧠 Aplicação do Paradigma de Programação Funcional

O sistema utiliza o paradigma **PF** através de:

### 🧩 Imutabilidade  
Os dados de entrada (regras e beneficiários) **nunca são alterados**.  
Novas informações (custos) são retornadas em **novos objetos**.

### ⚙️ Funções Puras  
As regras de cálculo (`calcularMensalidade`, `calcularCustoProcedimento`) **não dependem de estado externo** e **não causam efeitos colaterais**.

### 🔁 Fluxo com HOCs  

| HOC | Propósito Funcional |
|-----|----------------------|
| `filter()` | Validação Pura — Remove dados inválidos antes de qualquer cálculo |
| `map()` | Transformação — Calcula a mensalidade e a coparticipação para cada beneficiário e procedimento |
| `reduce()` | Agregação — Soma os custos para chegar ao valor total final |

---

## 💡 Exemplo de Processamento Funcional

Para ilustrar o fluxo, considere o cálculo de um beneficiário que usa um procedimento:

| Passo | Função | Dados de Entrada | Saída (Transformação) |
|-------|---------|------------------|------------------------|
| 1️⃣ | `calcularMensalidade(idade)` | Idade = 21 (Faixa 19–23) | Mensalidade = **R$ 250,00** |
| 2️⃣ | `calcularCustoProcedimento(valor)` | Valor = R$ 80,00 | Coparticipação Bruta = **R$ 24,00 (30%)** |
| 3️⃣ | `reduce()` + Lógica de Franquia | Copart. Bruta = R$ 24,00 (Limite de R$ 300,00) | Copart. Final = **R$ 24,00** |

💰 **Custo Total Final (Mensalidade + Coparticipação Final) = R$ 274,00**

---

## 🖋️ Créditos

Desenvolvido por:  
**Vitor Hugo Tavares** e **Gustavo Borgonha**  

📚 Curso: **Sistemas de Informação**  
🏫 Universidade — Disciplina: **Linguagem de Programação e Paradigmas**  
👨‍🏫 Professor: **Esp. Ademar Perfoll Junior**
