function scope (a,b){
   const sum = a+b
if (a>5) {
    const sum = 5+a+b
    console.log(sum);
}
else{
    const sum = 20+a+b
    var total =sum
}
console.log(total);
return sum
}

const result = scope(2,3)
// console.log(result);
