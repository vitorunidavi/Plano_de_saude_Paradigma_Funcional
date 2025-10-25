
// ESTRUTURAS DE DADOS IMUTÁVEIS (Tabelas de Regras e Referências)

export const TABELA_MENSALIDADE_POR_FAIXA = [
    { faixa_etaria: "0-18", idade_min: 0, idade_max: 18, valor_base: 200.00 },
    { faixa_etaria: "19-23", idade_min: 19, idade_max: 23, valor_base: 250.00 },
    { faixa_etaria: "24-28", idade_min: 24, idade_max: 28, valor_base: 300.00 },
    { faixa_etaria: "29-33", idade_min: 29, idade_max: 33, valor_base: 350.00 },
    { faixa_etaria: "34-38", idade_min: 34, idade_max: 38, valor_base: 400.00 },
    { faixa_etaria: "39-43", idade_min: 39, idade_max: 43, valor_base: 450.00 },
    { faixa_etaria: "44-48", idade_min: 44, idade_max: 48, valor_base: 500.00 },
    { faixa_etaria: "49-53", idade_min: 49, idade_max: 53, valor_base: 550.00 },
    { faixa_etaria: "+54", idade_min: 54, idade_max: Infinity, valor_base: 600.00 } // Usando Infinity para o limite superior
];

export const TABELA_PROCEDIMENTOS = [
    { nome: "Consulta Clínica", valor_referencia: 80.00, coparticipacao_perc: 0.30 },
    { nome: "Exame Laboratorial Simples", valor_referencia: 40.00, coparticipacao_perc: 0.40 },
    { nome: "Procedimento de Baixa Complexidade", valor_referencia: 150.00, coparticipacao_perc: 0.20 },
    { nome: "Exame de Imagem", valor_referencia: 250.00, coparticipacao_perc: 0.15 }
];

export const REGRAS_FRANQUIA = {
    LIMITE_COPARTICIPACAO_MENSAL: 300.00
};

// 2. FUNÇÕES PURAS DE VALIDAÇÃO (Requisito 2)

/**
 * Função pura: Verifica se um valor é um número positivo e finito.
 * @param {number} valor
 * @returns {boolean}
 */
export const ehNumeroPositivo = (valor) => {
    return typeof valor === 'number' && isFinite(valor) && valor > 0;
};

/**
 * Função pura de validação de beneficiário (para uso com filter).
 * @param {object} beneficiario
 * @returns {boolean}
 */
export const validarBeneficiario = (beneficiario) => {
    // Valida a idade
    const idadeValida = ehNumeroPositivo(beneficiario.idade);

    // Valida que todos os procedimentos têm nome e valor válidos
    const procedimentosValidos = beneficiario.procedimentos_utilizados.every(procedimento => {
        return ehNumeroPositivo(procedimento.valor) &&
               typeof procedimento.nome === 'string' &&
               procedimento.nome.trim() !== '';
    });

    return idadeValida && procedimentosValidos;
};

// 3. FUNÇÕES PURAS DE CÁLCULO DE MENSALIDADE

/**
 * Função pura: Encontra o valor base da mensalidade baseado na idade.
 * @param {number} idade
 * @param {Array<object>} tabelaFaixas - TABELA_MENSALIDADE_POR_FAIXA
 * @returns {number} O valor da mensalidade.
 */
export const calcularMensalidade = (idade, tabelaFaixas) => {
    const faixa = tabelaFaixas.find(f => idade >= f.idade_min && idade <= f.idade_max);
    return faixa ? faixa.valor_base : 0.00; // Retorna 0.00 se a idade não for encontrada (erro)
};