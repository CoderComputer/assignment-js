function primeNumber(n){
    for( var  i = 2; i < n; i++){
        if(n%i == 0){
            return "It's a prime number";
        }
        return 'Not a prime number'
    }
}
const result = primeNumber(127);
console.log(result);