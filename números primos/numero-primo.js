function primo(n) {
    if (n==1){
        console.log('Não é primo');
        return false
    }
    else {
        if(n==2 || n == -2){
            console.log('É primo');
            return true
        }
        else{   
            for(let i = 2; i < Math.abs(n); i++) {
                if( n % i == 0) {
                    console.log('Não é primo');
                    return false
                }
                else{
                    console.log('É primo');
                    return true
                }
            }
        }
    }
}
