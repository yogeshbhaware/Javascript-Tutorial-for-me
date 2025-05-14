
let multiply = function(x, y) {
    console.log(x*y);
}

let multiplyByTwo = myltiply.bind(this, 2);
multiplyByTwo(5);

//currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument
//currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument

let multiplyByThree = function(x) {
    return function(y) {
        console.log(x*y);
    }
}

let multiplyByThrevalue = multiplyByThree(3);
multiplyByThrevalue(5);


//function closures is a function that has access to the parent scope, even after the parent function has closed.

let multiplyByFour = function(x) {
    return function(y) {
        return function(z) {
            console.log(x*y*z);
        }
    }
}

let multiplyByFourValue = multiplyByFour(4);
let multiplyByFourValue2 = multiplyByFourValue(5);
multiplyByFourValue2(6);