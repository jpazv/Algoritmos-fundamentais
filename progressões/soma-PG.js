function somaPG(inicio, razao, termos) {
    let somatorio = inicio;
    let array_termos = []
    let reducer = (previousValue, currentValue) => previousValue + currentValue;
    
    if(termos > 1 && razao != 0 && Number.isInteger(termos)){
        for(let i = inicio; i <= (inicio)*(Math.pow(razao, termos-1)); i *= Math.abs(razao)){
            array_termos.push(somatorio)
            somatorio *= razao;
        }
        return array_termos.reduce(reducer);
    }
    else {
        console.log('É necessário haver pelo menos um termo e a razão ser diferente de 0')
    }
}

console.log(somaPG(1,2,5))