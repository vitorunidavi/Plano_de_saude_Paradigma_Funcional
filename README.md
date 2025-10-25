# 👨‍⚕️ Análise Funcional de Custos de Plano de Saúde

Aplicação web desenvolvida para a disciplina **Linguagem de Programação e Paradigmas** — Prof. Esp. Ademar Perfoll Junior.

Este projeto foca na aplicação estrita do **Paradigma de Programação Funcional (PF)** em JavaScript para simular e calcular custos de um plano de saúde, garantindo a integridade dos dados através de **funções puras** e **imutabilidade**.

## 👥 Desenvolvedores

* Vitor Hugo Tavares
* Gustavo Borgonha

Repositório oficial:
https://github.com/vitorunidavi/Plano_de_saude_Paradigma_Funcional

---

## 🎯 Objetivo do Projeto

Implementar um programa prático e acessível utilizando JavaScript, com o objetivo principal de demonstrar:
* **Funções Puras:** Lógica de negócio sem efeitos colaterais.
* **Imutabilidade:** Criação de novos estados de dados sem alterar os originais.
* **Funções de Ordem Superior (HOCs):** Uso de `map`, `filter` e `reduce` para processamento declarativo de listas.
* **Validação Pura:** Garantia da consistência dos dados de entrada antes do cálculo.

---

## ⚙️ Tecnologias Utilizadas

* **JavaScript (ES Modules):** Linguagem principal, permitindo a modularização do código (`regras.js` e `index.js`).
* **HTML / CSS:** Interface do usuário (UI) para entrada e exibição de dados.
* **Node.js / Live Server:** Utilizados para executar o projeto e a interface via servidor local (necessário para o uso de `import`/`export`).

---

## 🧪 Tema Implementado: Plano de Saúde (Faixa Etária, Coparticipação e Franquias)

O sistema simula as regras de precificação e custo de procedimentos de um plano de saúde:

| Tipo | Descrição |
| :--- | :--- |
| **Entrada (Input)** | Beneficiários (Nome, Idade) e uma lista de Procedimentos utilizados (Nome, Valor de Referência). |
| **Regras (Lógica)** | 1. Mensalidade baseada na Faixa Etária. <br> 2. Cálculo da Coparticipação por Procedimento (percentual). <br> 3. Limite Máximo de Coparticipação Mensal (Franquia/Dedutível). |
| **Saída (Output)** | Custo total por Beneficiário (Mensalidade + Coparticipação Final) e o detalhamento do custo por Procedimento. |
| **Invariantes** | A Coparticipação paga nunca pode exceder o valor do procedimento e deve respeitar o limite máximo mensal. |

---

## 🧠 Aplicação do Paradigma de Programação Funcional

A lógica de processamento (`index.js`) é construída sobre funções puras definidas em `regras.js`, garantindo que a aplicação das regras seja previsível e sem estado.

### Funções Puras e Imutabilidade

Todas as funções de cálculo (`calcularMensalidade`, `calcularCustoProcedimento`, `processarBeneficiario`) são puras. A **Imutabilidade** é garantida pelo retorno de **novos objetos de dados** em cada etapa de processamento.

### Fluxo de Processamento com HOCs

O cálculo de custos é um pipeline de transformação de dados, utilizando as Funções de Ordem Superior:

| HOC | Função Aplicada | Objetivo |
| :--- | :--- | :--- |
| **`Array.prototype.filter()`** | `validarBeneficiario` | Descarta beneficiários com entradas inválidas (idade ou valores não-positivos) antes de qualquer cálculo. |
| **`Array.prototype.map()`** | `processarBeneficiario` | Transforma cada beneficiário válido em seu objeto de **Saída Final**, que inclui todos os custos calculados. |
| **`Array.prototype.reduce()`** | Função de soma | Agrega os custos de Coparticipação de todos os procedimentos de um beneficiário em um único valor (Coparticipação Bruta). |

### Exemplo de Processamento (Entrada e Saída)

Para ilustrar a aplicação das regras, considere o seguinte fluxo de dados:

**A. Dados de Entrada:**
| Beneficiário | Idade | Faixa | Procedimento | Valor (R$) | % Copart. (Tabela) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Alice | 21 | 19-23 | Consulta Clínica | 80.00 | 30% |
| *(Regra Adicional: Limite Mensal de Coparticipação: R$ 300,00)* |

**B. Cálculos Aplicados:**
1. **Mensalidade (Faixa 19-23):** R$ 250,00
2. **Coparticipação Bruta:** R$ 80,00 * 30% = R$ 24,00
3. **Coparticipação Final (Após Franquia):** R$ 24,00 (menor que o limite de R$ 300,00)

**C. Saída (Custo Final por Beneficiário):**
* **Mensalidade:** R$ 250,00
* **Coparticipação Total:** R$ 24,00
* **Custo Total Final:** R$ 274,00

---

Markdown

---
## 🚀 Guia de Instalação e Execução

O projeto é executado inteiramente no navegador, aproveitando o sistema de módulos JavaScript (ES Modules).

### 1. Clonar o Repositório

Obtenha uma cópia do código-fonte utilizando o comando `git clone` no seu terminal:

```bash

git clone [https://github.com/vitorunidavi/Plano_de_saude_Paradigma_Funcional.git](https://github.com/vitorunidavi/Plano_de_saude_Paradigma_Funcional.git)
cd Plano_de_saude_Paradigma_Funcional

2. Instalação de Ferramentas (VS Code)
Para garantir que o import/export funcione corretamente, é necessário rodar o projeto em um servidor local.

Instale a Extensão Live Server: No VS Code, procure e instale a extensão Live Server (Autor: Ritwick Dey).

3. Estrutura de Arquivos
A pasta do projeto contém a estrutura modular necessária para a execução:

plano-de-saude-funcional/
├── index.html     (Interface e CSS)
├── index.js       (Fluxo de processamento e UI)
└── regras.js      (Funções Puras e Tabelas de Dados)

4. Execução (No Navegador)
Abra a pasta do projeto no VS Code.

Clique com o botão direito no arquivo index.html.

Selecione "Open with Live Server".

A aplicação será aberta no seu navegador, pronta para testar o fluxo funcional.

---

## 🖋️ Créditos

Desenvolvido por:

* Vitor Hugo Tavares
* Gustavo Borgonha

📚 Curso: Sistemas de Informação
🏫 Universidade — Disciplina: Linguagem de Programação e Paradigmas
👨‍🏫 Professor: Esp. Ademar Perfoll Junior