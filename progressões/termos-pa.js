function PA(inicio, razao, termos) {
    if(termos>0){    
        if(razao<0) {
            for(let i = inicio; i >= (inicio + (termos-1)*razao); i+=razao) {
                console.log(i);
                i += r;
            }
        }
        else{
            for(let i = inicio; i <= (inicio + (termos-1)*razao); i+=razao) {
                console.log(i);
               i += r;
            }
        }
    }
    else{
        console.log('É necessário haver pelo menos um termo')
    }    
}  
