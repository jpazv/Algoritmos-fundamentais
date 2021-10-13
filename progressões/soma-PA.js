function somaPA(inicio, razao, termos) {
    if(termos>0){    
        if(razao<0) {
            let somatorio = inicio
            let array_termos = []
            let reducer = (previousValue, currentValue) => previousValue + currentValue;
            for(let i = inicio; i >= (inicio + (termos-1)*razao); i+=razao) {
                array_termos.push(somatorio)
                somatorio += razao;
            }
            return array_termos.reduce(reducer);
    }
    else{
        let somatorio = inicio
        let array_termos = []
        let reducer = (previousValue, currentValue) => previousValue + currentValue;
        for(let i = inicio; i <= (inicio + (termos-1)*razao); i+=razao) {
            array_termos.push(somatorio)
            somatorio+= razao;
        }
        return array_termos.reduce(reducer);
        }
    }
    else{
        console.log('É necessário haver pelo menos um termo')
    }    
}
