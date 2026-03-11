const readline = require('readline-sync');

console.log("Sistema de acesso ao Pub do John");
if (idade >= 16) {
const nome = readline.question("Qual seu nome? ");
const idade = readline.questionInt("Qual sua idade? ");
 const jovem =  readline.keyInYN("Deseja refri? ");
    if (jovem){
        console.log("temos pepsi e coca!");
    } else{
        console.log("Temos sucos e água com gás");
if (idade >= 16) {
    console.log(`Olá ${nome}, sua entrada foi Autorizada. `)
    const jovem =  readline.keyInYN("Deseja refri? ");
    if (jovem){
        console.log("temos pepsi e coca!");
    } else{
        console.log("Temos sucos e água com gás");
    }
} else if (idade >= 16){
    console.log(`Olá ${nome}, você precisa estar acompanhado.. `);
}else{
    console.log(`Sinto muito ${nome}, apenas maiores que 16 ...`);
}