function PG(inicio, razao, termos) {
    let somatorio = inicio;
    
    if(termos > 1 && razao != 0 && Number.isInteger(termos)){
        for(let i = inicio; i <= (inicio)*(Math.pow(razao, termos-1)); i *= Math.abs(razao)){
            console.log(somatorio);
            somatorio *= razao;
        }
    }
    else {
        console.log('É necessário haver pelo menos um termo e a razão ser diferente de 0')
    }
}
