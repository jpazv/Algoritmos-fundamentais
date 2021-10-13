function PG(inicio, razao, termos) {
    let somatorio = inicio;
    
    if(termos > 1 && razao != 0){
        for(let i = Math.abs(inicio); i <= Math.abs(inicio)*(Math.pow(razao, termos-1)); i *= razao){
            console.log(somatorio);
            somatorio *= razao;
        }
    }
    else {
        console.log('Não é possível ter um número negativo de termos')
    }
}
