import {
    TABELA_PROCEDIMENTOS,
    TABELA_MENSALIDADE_POR_FAIXA,
    REGRAS_FRANQUIA,
    validarBeneficiario,
    calcularMensalidade
} from './regras.js';

// ESTADO E VARIÁVEIS DA INTERFACE (Efeitos Colaterais Controlados)

let beneficiariosParaProcessar = [];
let procedimentosAtuais = [];
let proximoId = 1;

// Seletores de Elementos
const addBeneficiarioBtn = document.getElementById('add-beneficiario-btn');
const addProcedimentoBtn = document.getElementById('add-procedimento-btn');
const processarBtn = document.getElementById('processar-btn');
const procedimentosList = document.getElementById('procedimentos-list');
const beneficiariosListDiv = document.getElementById('beneficiarios-list');
const resultadosSaidaDiv = document.getElementById('resultados-saida');

/**
 * Função Pura: Calcula a coparticipação para um único procedimento.
 */
const calcularCustoProcedimento = (procedimento) => {
    const regra = TABELA_PROCEDIMENTOS.find(p => p.nome === procedimento.nome);

    if (!regra) {
        return {
            ...procedimento,
            coparticipacao: 0.00,
            observacao: "Regra de procedimento não encontrada."
        };
    }

    let coparticipacao = procedimento.valor * regra.coparticipacao_perc;
    coparticipacao = Math.min(coparticipacao, procedimento.valor); // Invariante: coparticipação <= valor do procedimento

    // Retorna NOVO objeto (Imutabilidade)
    return {
        ...procedimento,
        coparticipacao: parseFloat(coparticipacao.toFixed(2))
    };
};

/**
 * Função Pura: Processa o beneficiário, usando MAP e REDUCE.
 */
const processarBeneficiario = (beneficiario) => {
    const mensalidade = calcularMensalidade(beneficiario.idade, TABELA_MENSALIDADE_POR_FAIXA);

    // Uso de MAP: calcula o custo de coparticipação para cada procedimento
    const procedimentosProcessados = beneficiario.procedimentos_utilizados
        .map(calcularCustoProcedimento);

    // Uso de REDUCE: soma o custo total de coparticipação
    const coparticipacaoTotalBruta = procedimentosProcessados.reduce((acumulador, proc) => {
        return acumulador + proc.coparticipacao;
    }, 0);

    // Aplica o limite de coparticipação
    const coparticipacaoFinal = Math.min(
        coparticipacaoTotalBruta,
        REGRAS_FRANQUIA.LIMITE_COPARTICIPACAO_MENSAL
    );

    const custoTotal = mensalidade + coparticipacaoFinal;

    // Retorna um NOVO objeto (Imutabilidade)
    return {
        id: beneficiario.id,
        nome: beneficiario.nome,
        idade: beneficiario.idade,
        mensalidade: parseFloat(mensalidade.toFixed(2)),
        coparticipacaoTotal: parseFloat(coparticipacaoFinal.toFixed(2)),
        custoTotal: parseFloat(custoTotal.toFixed(2)),
        procedimentosProcessados: procedimentosProcessados
    };
};

const handleAddProcedimento = () => {
    const procNomeInput = document.getElementById('proc-nome');
    const procValorInput = document.getElementById('proc-valor');

    const nome = procNomeInput.value.trim();
    const valor = parseFloat(procValorInput.value);

    if (nome && !isNaN(valor) && valor > 0) {
        procedimentosAtuais = [...procedimentosAtuais, { nome, valor }];
        
        procNomeInput.value = '';
        procValorInput.value = '';

        renderProcedimentosList();
    } else {
        alert("Preencha o nome e um valor positivo para o procedimento.");
    }
};

const handleAddBeneficiario = () => {
    const nomeInput = document.getElementById('nome');
    const idadeInput = document.getElementById('idade');

    const nome = nomeInput.value.trim();
    const idade = parseInt(idadeInput.value);

    if (procedimentosAtuais.length === 0) {
        alert("Erro: Adicione pelo menos um procedimento utilizado para este beneficiário.");
        return;
    }

    if (nome && idade > 0) {
        const novoBeneficiario = {
            id: proximoId++,
            nome: nome,
            idade: idade,
            procedimentos_utilizados: procedimentosAtuais
        };
        
        beneficiariosParaProcessar = [...beneficiariosParaProcessar, novoBeneficiario];

        // Reseta campos APÓS o sucesso
        nomeInput.value = '';
        idadeInput.value = '';
        procedimentosAtuais = [];
        
        renderProcedimentosList();
        renderBeneficiariosList();
    } else {
        alert("Preencha o nome e uma idade válida (positiva).");
    }
};

const handleProcessar = () => {
    if (beneficiariosParaProcessar.length === 0) {
        resultadosSaidaDiv.innerHTML = '<p class="invalid-data">Adicione beneficiários antes de processar.</p>';
        return;
    }

    // Aplicação da Programação Funcional:
    
    // 1. Validação (Função de Ordem Superior: FILTER)
    const beneficiariosValidos = beneficiariosParaProcessar.filter(validarBeneficiario);

    // 2. Processamento (Função de Ordem Superior: MAP)
    const resultadoFinal = beneficiariosValidos.map(processarBeneficiario);

    // 3. Exibição da Saída
    renderResultadoFinal(resultadoFinal, beneficiariosParaProcessar.length);
};

const renderProcedimentosList = () => {
    procedimentosList.innerHTML = '';
    
    // Adiciona uma mensagem se a lista estiver vazia
    if (procedimentosAtuais.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Adicione procedimentos acima para que o beneficiário possa ser salvo.';
        li.style.color = '#777';
        procedimentosList.appendChild(li);
        return;
    }
    
    procedimentosAtuais.forEach(p => {
        const li = document.createElement('li');
        // Destaque do procedimento
        li.innerHTML = `<strong>${p.nome}</strong> (Valor Ref. R$ ${p.valor.toFixed(2)})`; 
        procedimentosList.appendChild(li);
    });
};

const renderBeneficiariosList = () => {
    beneficiariosListDiv.innerHTML = '';
    beneficiariosParaProcessar.forEach(b => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>ID ${b.id}: ${b.nome}</strong> (${b.idade} anos) - ${b.procedimentos_utilizados.length} procedimentos.`;
        beneficiariosListDiv.appendChild(div);
    });
};

const renderResultadoFinal = (resultados, totalEntrada) => {
    resultadosSaidaDiv.innerHTML = '';
    
    if (resultados.length === 0) {
        resultadosSaidaDiv.innerHTML = `<p class="invalid-data">Nenhum beneficiário foi considerado válido para processamento.</p>`;
        return;
    }

    const invalidos = totalEntrada - resultados.length;
    if (invalidos > 0) {
        resultadosSaidaDiv.innerHTML += `<p class="invalid-data"><strong>Atenção:</strong> ${invalidos} beneficiário(s) foram descartados na validação (FILTER).</p>`;
    }

    resultados.forEach(b => {
        const card = document.createElement('div');
        card.className = 'result-card';
        
        let htmlContent = `
            <h2>${b.nome} (ID: ${b.id})</h2>
            <p><strong>Idade:</strong> ${b.idade}</p>
            <p class="valid-data"><strong>MENSALIDADE:</strong> R$ ${b.mensalidade.toFixed(2)}</p>
            <p><strong>COPARTICIPAÇÃO TOTAL:</strong> R$ ${b.coparticipacaoTotal.toFixed(2)}</p>
            <p class="valid-data"><strong>CUSTO FINAL TOTAL:</strong> R$ ${b.custoTotal.toFixed(2)}</p>
            <h4>Detalhes da Coparticipação:</h4>
            <div class="details">
        `;

        b.procedimentosProcessados.forEach(p => {
            htmlContent += `<p>- ${p.nome}: Copart. R$ ${p.coparticipacao.toFixed(2)} (Ref. R$ ${p.valor.toFixed(2)})</p>`;
        });

        htmlContent += `</div>`;
        card.innerHTML = htmlContent;
        resultadosSaidaDiv.appendChild(card);
    });
};

addProcedimentoBtn.addEventListener('click', handleAddProcedimento);
addBeneficiarioBtn.addEventListener('click', handleAddBeneficiario);
processarBtn.addEventListener('click', handleProcessar);

// Estado inicial
renderBeneficiariosList();
renderProcedimentosList();

resultadosSaidaDiv.innerHTML = '<p>Use o formulário acima para adicionar beneficiários e depois clique em "Processar Custos".</p>';