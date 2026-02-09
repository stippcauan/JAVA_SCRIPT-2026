
let nota1 = 10;
let nota2 = 10;
let nota3 = 10;
let nota4 = 10;

const nomeAluno = "Cauan";

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >7){
    console.log("O aluno " + nomeAluno + " está aprovado")
}
if(media >= 5 && media < 7){
    console.log("O aluno " + nomeAluno + " está no se liga")    
}
if(media <= 5){
     console.log("O aluno " + nomeAluno + " está reprovado")
}

console.log("O aluno: " + nomeAluno);
console.log("Tem a média: " + media);