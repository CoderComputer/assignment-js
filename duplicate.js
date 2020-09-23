var idNo = [23,235,23,11,2,45,3,2,66,867,55,66,7];
var uniqueId = [];

for(var i = 0; i < idNo.length; i++){
    var element = idNo[i];
    var uniqueElement = uniqueId.indexOf(element);
    if(uniqueElement !== 1){
        uniqueId.push(element);
    }
}
console.log(uniqueId)