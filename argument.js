function addFunction(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        var num = arguments[i];
        sum = sum + num;
    }
    return sum;
}
var result = addFunction(3, 5, 7, 7, 34);
console.log(result);