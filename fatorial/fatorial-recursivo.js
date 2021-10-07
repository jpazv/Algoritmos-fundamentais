function fatorial(n) {
    if (n < 0) {
        console.log('Digite um número válido')
        return false
    }    
    if (n==1) {
        console.log(1 + '! = 1')
        return 1
    }
    else {
        let resultado = fatorial(n-1);
        console.log(n + '! = ' + resultado)
        return resultado
    }
}

fatorial(5)