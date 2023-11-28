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

// when we have a expretion function we can't declarre function befoure  initialization
// print 10 give you an console.error  
