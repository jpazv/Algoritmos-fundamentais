function fatorial(n) {
     if(Number.isInteger(n) && n >= 0) { 
        let a = 1;
        for (let i = 1; i <= n; i++) {
            a *= i;
        }
        console.log(a);
    }
    else {
        console.log('Digite um número válido')
    }
}

fatorial(1)