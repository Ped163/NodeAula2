export function formatar(valor) {
    return Number(valor.toFixed(1))
}

//recebe dados e devolve um completo 
export function criarAluno(nome, p1, p2, p3) {
    const media = (p1 + p2 + p3) / 3;
    let situacao
    if (media >= 7) {
        situacao = "Aprovado"
    }
    else if (media >= 5) {
        situacao = "Recuperação"
    }
    else {
        situacao = "Reprovado"
    }
    return { nome: nome, media: formatar(media), situacao: situacao }

}

//Recebe uma lista e devolve o relatório em texto, uma linha por aluno
export function relatorio(lista) {
    let texto = "";
    for (let i = 0; i < lista.length; i++) {
        const linha = `O aluno(a) ${lista[i].nome} teve a média ${lista[i].media.toFixed(1)}`;
        texto += `${linha} - ${lista[i].situacao}\n`
    }
    return texto;

}