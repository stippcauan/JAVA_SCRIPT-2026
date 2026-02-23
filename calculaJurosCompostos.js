function calculaJurosCompostos (capital, taxa, tempo){
    let montante = capital * (1 + (taxa/100)) ** tempo;

    return montante;
}

    let conta1 = calculaJurosCompostos(100, 1, 10); 
    console.log("O montante é R$ " + conta1.toFixed(2));

    




