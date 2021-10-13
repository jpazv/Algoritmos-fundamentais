function PA(inicio, razao, termos) {
    if(termos>0){    
        if(razao<0) {
            let somatorio = inicio
            for(let i = inicio; i >= (inicio + (termos-1)*razao); i+=razao) {
                console.log(somatorio);
                somatorio += razao;
            }
        }
        else{
            let somatorio = inicio
            for(let i = inicio; i <= (inicio + (termos-1)*razao); i+=razao) {
                console.log(somatorio);
                somatorio+= razao;
            }
        }
    }
    else{
        console.log('É necessário haver pelo menos um termo')
    }    
}  
