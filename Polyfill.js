
//polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

//polyfill for map

let name ={
    firstName : "Yogesh",
    lastName : "Bhaware"
}

let printName = function () {
    console.log(this.firstName + " " + this.lastName);
}

let printMyName = printName.bind(name);
printMyName();

//Own implementation of bind method mybind function which behaves exactly like bind method

let printMyName2 = printName.mybind(name);
printMyName2();

Function.prototype.mybind = function (...args) {
    //this has the reference of printName function
    let obj = this;
    params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    };
};