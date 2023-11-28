const smaetPhone = function () {
  let count = 0;
  return function () {
    count++;
    return count;
  };
};

const result = smaetPhone();
// console.log(result());

const roast = function () {
  let count = 0;
  function call() {
    count ++;
    return count;
  }
  return call
};
const result3 = roast()
console.log(result3());
console.log(result3());
// roast();
// console.log(roastgiven());
// console.log(roastgiven());
// console.log(roastgiven());



 const x =function (){
 let a =5
 let  sum =0
 function y (){
  let b = a +5
   sum += b
   return sum
 }
 return y
}
const result2 = x()

console.log(result2());
console.log(result2());
console.log(result2());
console.log(result2());
console.log(result2());