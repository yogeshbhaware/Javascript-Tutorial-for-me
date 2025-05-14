//debouncing is a technique to limit the execution of a function call to once after a certain amount of time has passed
// since the last time the event occurred.

let counter = 0;

const getData = () => {
  //calls on every key stroke
  console.log("Fetching Data", counter++);
};

// const input = document.getElementById("input");
// input.addEventListener("input", getData);

function doSomething(func, delay) {
  let context = this;
  args = arguments;
  let timer;

  return function () {
    timer = setTimeout(() => {
      func().apply(context, arguments);
    }, delay);
    clearTimeout(timer);
  };
}

const betterFunction = doSomething(getData, 300);
