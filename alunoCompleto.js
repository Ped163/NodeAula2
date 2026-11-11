const aluno = {
    nome: "Ana Paula",
    notas: [7.5, 8.0, 6.5],

    //METODO:  uma função guardada dentro de um objeto
    media() {
        let soma = 0;
        for (let i = 0; this.notas.length; i++) {
            soma += this.notas[i]
        }
        return soma / this.notas.length
    },

    //Outro método: Usa o primeiro para decidir a situação
    situacao() {
        const m = this.media();
        if (m >= 7) return "Aprovado";
        if (m >= 5) return "Recuperação";
        return "reprovado"
    }

}

// console.log (aluno.nome);
// console.log(aluno.media().toFixed(1))
// console.log(aluno.situacao())

//Mudança em tempo de execução: adicionar, substituir e inpecionar 

aluno.curso = "Node.js APIs" //cria uma propriedade
aluno.notas = [9.0, 8.5, 7.0] //substitui a lista de notas
aluno.falta = 2 // mais uma propriedade

console.log(aluno.curso)
console.log(aluno.nome)
console.log(JSON.stringify(aluno, null, 2))