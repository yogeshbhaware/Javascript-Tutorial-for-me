
// var x = 7; 


// var getName = () => {
//     console.log("Namaste JavaScript");
// }

// getName();
// console.log(x);

var x = 1 ; 

a() ; 
b() ; 
console.log(x);

function a() {
    var x = 10 ; 
    console.log(x);
    console.log("this : ", this);
}

function b() {
    var x = 100 ; 
    console.log(x);
}