// Alunos de uma escola que foram ou não aprovados.
// nota menor que 5 foram reprovados.
// nota igual ou maior que 5 foram aprovados.



const aluno0 = {
    nome: "Felipe",
    media:  4
}

const aluno1 = {
    nome: "Maria",
    media: 5
}

const aluno2 = {
    nome: "Camila",
    media: 8
}

const aluno3 = {
    nome: "Fabio",
    media: 2
}

const aluno4 = {
    nome: "Geise",
    media: 9
}

const alunos = [aluno0, aluno1, aluno2, aluno3, aluno4];

if(alunos.media >= 5){
    console.log( `O ${alunos.nome} foi aprovado`)
}
if(alunos.media <= 4){
    console.log( `O ${alunos.nome} foi reprovado`)
}
