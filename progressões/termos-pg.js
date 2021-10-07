function PG(inicio, q, n) {
    let somatorio = inicio;
    
    if(n > 1){
        for(let i = Math.abs(inicio); i <= Math.abs(inicio)*(Math.pow(q, n-1)); i *= q){
            console.log(somatorio);
            somatorio *= q;
        }
    }
    else {
        console.log('Não é possível ter um número negativo de termos')
    }
}
