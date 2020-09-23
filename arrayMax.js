var marks = [10, 23, 55,90, 98, 100, 23, 45];
var max = marks[0];

for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    if(element > max) {
        max = element;
    }
}
console.log("Highest marks is :", max)