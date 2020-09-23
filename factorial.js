// function factorial(n){
//     let factorial = 1;
//     for (let i = 1; i <= n; i++) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }
// const result = factorial(5);
// console.log(result);


// function fact(n){
//     var i = 1;
//     var facto = 1;
//     while (i<= n){
//         facto = facto * i;
//         i++;
//     }
//     return facto;
// }
// const result2 = fact(6);
// console.log(result2);

function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
const result = factorial(4);
console.log(result)