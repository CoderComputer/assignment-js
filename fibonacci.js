// function fibonacci(n){
//     var fibo = [0,1];
// for (var i = 2; i <= n; i++) {
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }
// return fibo;
// }
// var result = fibonacci(100);
// console.log(result)

// function recursiveFibo(n){
//     if(n == 0){
//         return 0;
//     }
//     else if(n == 1){
//         return 1;
//     }
//     else{
//         return recursiveFibo(n-1) + recursiveFibo(n-2);
//     }
// }
// const result2 = recursiveFibo((10));
// console.log(result2)

function fib(n) {
    if (n == 0) return [0]
    if (n == 1) return [0, 1]
    const arr = fib(n - 1)
    return [...arr, arr[n-1] + arr[n-2]]
  }
  
  console.log(fib(15))