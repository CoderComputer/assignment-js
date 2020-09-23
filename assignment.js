// feet to mile
function feetToMile(feet){
    var mile = feet * 0.000189394;
    return mile;
}

var result = feetToMile(8888);
console.log(result);

// wood quantity 
function woodCalculator(c,t,b){
    var chairWood = c * 1;
    var tableWood = t * 3;
    var bedWood = b * 5;
    var total = chairWood + tableWood + bedWood;
    return total;
}
var result = woodCalculator(1,1,1);
console.log(result);

// brick Calculator
function brickCalculator(floor){
    var height = 0;
    if(floor <= 10){
        height = floor * 15;
    }
    else if(floor <= 20){
        var firstPart = 10 * 15;
        var remaining = floor - 10;
        var secondPart = remaining * 12;
        height = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 15;
        var secondPart = 10 * 12;
        var remaining = floor - 20;
        var thirdPart = remaining * 10;
        height = firstPart + secondPart + thirdPart;
    }
    return height;
}
var result = brickCalculator(22);
var bricks = result * 1000;
console.log(bricks);


// tiny friends

function tinyFriend(arr) {
    let shortLength = Infinity;
    let shortest = "";

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string' && arr[i].length < shortLength) {
                shortest = arr[i];
                shortLength = arr[i].length;
            }
        }
    }

    return shortest;
}
var names = ["Arko", "Chowa", "Jelly", "Fahmida", "Mredul", "Rohan", "Joy", "Sourov", "Rifat", "Tazid", "Tanim", "Niloy", "Akil"];
var output = tinyFriend(names);
console.log(output);