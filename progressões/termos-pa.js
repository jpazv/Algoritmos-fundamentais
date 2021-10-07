function PA(inicio, r, n) {
    if(n>0){    
        let somatorio = inicio;
        
        if(r<0) {
            for(let i = inicio; i >= (inicio + (n-1)*r); i+=r) {
                console.log(somatorio);
                somatorio += r;
            }
        }
        else{
            for(let i = inicio; i <= (inicio + (n-1)*r); i+=r) {
                console.log(somatorio);
                somatorio += r;
            }
        }
    }
    else{
        console.log('É necessário haver pelo menos um termo')
    }    
}  
