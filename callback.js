const cart = [
  { name: "shoes", price: 1000 },
  { name: "pants", price: 700 },
  { name: "kurta", price: 1500 },
];

// js will call the createOrder api , after that it will call the proceedToPayment api and so on and after that it will call the updateWallet api
//that's why we are using callback
// one callback inside another callback is called callback hell and also tough to manage the code
//pyramid of doom
// inversion of control

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

//callback hell is avoided by using promises and async await
const promise = createOrder(cart);
// will return something an {onject , order id}

//we are attaching a function with promise
promise
  .then((orderId) => proceedToPayment(orderId))
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWallet(paymentInfo);
  });
