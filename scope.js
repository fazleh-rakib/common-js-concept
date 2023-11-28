function scope (a,b){
   const sum = a+b
if (a>5) {
    const sum = 5+a+b
    console.log(sum);
    // sum is into a "if" block 
}

else{
    const sum = 20+a+b
    var total =sum
}
console.log(total);
// because of var total variable hoisting to the top and shows result 
return sum
}

const result = scope(2,3)
// console.log(result);
