
const readline = require('readline-sync');

 let corSemafaro = readline.question("Digite a cor do semafaro");
 let veiculoEmergencia = true;

 if (veiculoEmergencia === false ){
    console.log("ALERTA: Ambulância detectada! Todos os sinais fechados. CRUZAMENTO LIVRE.");

 } else if (corSemafaro === "verde"){
    console.log("Pode passar! Siga com cuidado.");

 } else if (corSemafaro === "amarelo"){
    console.log("Atenção! Reduza a velocidade e prepare-se para parar.");

 } else{
    console.log("PARE! Aguarde o sinal verde.");
 }
