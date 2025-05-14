let name = {
    firstName: "Akshay",
    lastName: "Saini",

}

const printName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + " , " + state);
}


printName.call(name, "Delhi", "Delhi");

let name2 = {
    firstName: "Yogesh",
    lastName: "Bhaware",

}

printName.call(name2, "Mumbai", "Maharashtra");



//callbind is used to borrow the function from another object
//callbind is used to call the function with different context
//callbind is used to call the function with different arguments
//callbind is used to call the function with different arguments and different context


//apply methods we pass arguments as ArrayList
printName.apply(name2, ["Bhopal", "Madhya Pradesh"]);


//bind method is used to borrow the function from another object and it returns a function which can be called later

let printMyName = printName.bind(name2, "Indore", "Madhya Pradesh");
console.log(printMyName());
