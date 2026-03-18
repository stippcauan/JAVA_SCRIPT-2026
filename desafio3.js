const readline = require('readline-sync');

let nomeHeroi = readline.question("Digite o nome do seu heroi");
let pontoXp = readline.question("Digite quantidade de pontoXp");
let categoria;

if(pontoXp <100 ){
    categoria = "iniciante";
}else if(pontoXp <500){
    categoria = "Guerreiro";
}else if(pontoXp <1000){
    categoria = "mestre";
}else{
    categoria = "Lenda viva";
}
console.log(`O herói ${nomeHeroi} possui ${pontoXp} de experiência e seu rank atual é: ${categoria}.`);