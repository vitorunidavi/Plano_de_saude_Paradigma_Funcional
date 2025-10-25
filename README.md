👨‍⚕️ Análise Funcional de Custos de Plano de Saúde

Aplicação web desenvolvida para a disciplina Linguagem de Programação e Paradigmas — Prof. Esp. Ademar Perfoll Junior.

Este projeto foca na aplicação estrita do Paradigma de Programação Funcional (PF) em JavaScript para simular e calcular custos de um plano de saúde, garantindo a integridade dos dados através de funções puras e imutabilidade.

👥 Desenvolvedores

Vitor Hugo Tavares

Gustavo Borgonha

📦 Repositório oficial:
https://github.com/vitorunidavi/Plano_de_saude_Paradigma_Funcional

🎯 Objetivo do Projeto

Implementar um programa prático e acessível utilizando JavaScript, com o objetivo principal de demonstrar:

Funções Puras: Lógica de negócio sem efeitos colaterais

Imutabilidade: Criação de novos estados de dados sem alterar os originais

Funções de Ordem Superior (HOCs): Uso de map, filter e reduce para processamento declarativo de listas

Validação Pura: Garantia da consistência dos dados de entrada antes do cálculo

⚙️ Tecnologias Utilizadas

JavaScript (ES Modules — Programação Funcional)

HTML / CSS (Interface cliente)

Live Server (Extensão do VS Code necessária para executar módulos JS localmente)

🚀 Guia de Instalação e Execução
🔧 1. Clonar o repositório

Obtenha uma cópia do código-fonte utilizando o comando abaixo no terminal:

git clone https://github.com/vitorunidavi/Plano_de_saude_Paradigma_Funcional.git
cd Plano_de_saude_Paradigma_Funcional

📦 2. Instalar Ferramentas (Live Server)

O projeto usa ES Modules (import/export), exigindo um servidor local para execução.
Certifique-se de ter a ferramenta necessária:

Abra o projeto no VS Code

Instale a extensão Live Server (Autor: Ritwick Dey)

🖥️ 3. Estrutura de Arquivos
plano-de-saude-funcional/
├── index.html     # Interface e CSS
├── index.js       # Fluxo de processamento e UI
└── regras.js      # Funções Puras e Tabelas de Dados

🌐 4. Execução da Aplicação (No Navegador)

Abra o projeto no VS Code

Clique com o botão direito no arquivo index.html

Selecione “Open with Live Server”

O projeto será aberto automaticamente no navegador

🧠 Aplicação do Paradigma de Programação Funcional

O sistema utiliza o paradigma PF através de:

🧩 Imutabilidade

Os dados de entrada (regras e beneficiários) nunca são alterados.
Novas informações (custos) são retornadas em novos objetos.

⚙️ Funções Puras

As regras de cálculo (calcularMensalidade, calcularCustoProcedimento) não dependem de estado externo e não causam efeitos colaterais.

🔁 Fluxo com Funções de Ordem Superior (HOCs)
HOC	Propósito Funcional
filter()	Validação Pura — remove dados inválidos antes de qualquer cálculo
map()	Transformação — calcula mensalidade e coparticipação
reduce()	Agregação — soma custos para obter o valor total final
💡 Exemplo de Processamento Funcional

Exemplo do cálculo de um beneficiário que usa um procedimento:

Passo	Função	Dados de Entrada	Saída (Transformação)
1. Mensalidade	calcularMensalidade(idade)	Idade = 21 (Faixa 19–23)	Mensalidade = R$ 250,00
2. Coparticipação	calcularCustoProcedimento(valor)	Valor = R$ 80,00	Coparticipação Bruta = R$ 24,00 (30%)
3. Agregação	reduce() + Lógica de Franquia	Copart. Bruta = R$ 24,00 (Limite R$ 300,00)	Copart. Final = R$ 24,00

💰 Custo Total Final:
Mensalidade + Coparticipação Final = R$ 274,00

🖋️ Créditos

Desenvolvido por:
Vitor Hugo Tavares e Gustavo Borgonha

📚 Curso: Sistemas de Informação
🏫 Universidade: UNIDAVI
💻 Disciplina: Linguagem de Programação e Paradigmas
👨‍🏫 Professor: Esp. Ademar Perfoll Junior
