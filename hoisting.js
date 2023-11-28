for(var i = 0; i< 5 ; i++){
    // console.log(i);
}
// console.log('outside of for' ,i);
// here i is hoisting cause of var 

print5()
function print5 (){
    console.log('print5',5);
}
print10()

const print10 = function(){
    console.log('print10', 10);
}




function foo(){
    if(true){
        var fruit1 = 'apple';        //exist in function scope
        const fruit2 = 'banana';     //exist in block scope
        let fruit3 = 'strawberry';   //exist in block scope

    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

foo();
//result:
//apple
//error: fruit2 is not defined
//error: fruit3 is not defined