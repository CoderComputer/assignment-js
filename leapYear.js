// // 1st way
// const yearNo = 2002;
// const remember = yearNo % 4;
// // console.log(remember == 0)

// 2nd way
function leapYear(year) {
    const reminder = year % 4;
    const leapFinal = year % 400;
    if(reminder == 0 && leapFinal == 0){
        return true;
    }
    else{
        return false;
    }
}
const result = leapYear(1700);
console.log(result)