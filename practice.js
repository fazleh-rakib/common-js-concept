
/* write a programe with arrow func with 3 peremiters */
const threePeramiter = (a, b, c) => {
  if (c === "add") {
    return  a + b;
    
  } else if (c === "multi") {
    return a*b
  }
  else if (c === 'div'){
    if (b!==0) {
        return a/b
    }
    else{
       return 'put right input'
    }
  }
  else{
   return 'invalide Operation'
  }
};
const result =threePeramiter(2, 4, "add");
const result2 = threePeramiter(3,4, 'multi')
const result3 = threePeramiter(3,2, 'div')
const result4 = threePeramiter(3,2, 'x')
// console.log(result , result2 , result3, result4);


/* write a programe with arrow func with 3 peremiters */

/* I can change the value  */
let storeFalsyValue = false
if(storeFalsyValue === true){
  console.log('nothing to show');
}
else{
  console.log('you are amazing');
}

let student = null

console.log( typeof student);