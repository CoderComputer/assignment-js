var billGates = 7660;
var Zukerberkg = 5710;
var aroArko = 100;

if(billGates > Zukerberkg){
    if(billGates > aroArko){
        console.log("Bill Gates is richer");
    }
    else{
        console.log("Aro Arko is richer");
    }
}
else if(Zukerberkg > billGates){
    if(Zukerberkg > aroArko){
        console.log("Zukerberkg is richer")
    }
    else{
        console.log("Aro Arko is richer")
    }
}

var max = Math.max(billGates, Zukerberkg, aroArko);
console.log(max)