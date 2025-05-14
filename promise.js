
//promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
//promise is a state machine
//promise has 3 states
//1. pending
//2. fulfilled
//3. rejected
//promise is a placeholder for a certain value that will be available in the future 

const user = fetch("https://api.github.com/users/akshaymarch7");

//when it will be called it will be in pending state when consoled
//but after some time it will be in fulfilled state when consoled
console.log(user);


//when user is fulfilled then it will call the then function
user.then(function (data) {
    console.log(data);
});

//when user is rejected then it will call the catch function
user.catch(function (error) {
    console.log(error);
});