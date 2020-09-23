var a = 10;
var b = 20;

var temp = a;
a = b;
b = temp;

console.log("After swap: a =", a, "b =", b);


var x = 15; 
var y = 20;

x = x + y;
y = x - y;
x = x - y;

console.log("After swap: x =", x, "y =", y);


var p = 100;
var q = 200;

[p,q] = [q,p]
console.log("After swap: p =", p, "q =", q);