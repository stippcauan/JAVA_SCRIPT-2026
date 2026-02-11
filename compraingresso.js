let saldoConta = 500;
let preçoIngresso = 200;

console.log("Tentando comprar o ingresso...")

if (saldoConta >= preçoIngresso){
    let troco = saldoConta - preçoIngresso;
    console.log("Compra realizada, bom show!");
    console.log("Seu troco é R$: " + troco)
}else{
    console.log("Saldo insuficiente. Falta R$: " + (preçoIngresso - saldoConta))
}