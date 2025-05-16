
const obj = {
    name:"Yogesh",
    age:20,
    address:{
        city:"Indore",
        state:"Madhya Pradesh",
        landmark: {
            temple:"ABC"
        }
    }
}

// const copiedObject = {...obj , address:{...obj.address} , } ;  //deep copy

// copiedObject.name = "Akshay" ; 
// copiedObject.address.city = "Delhi" ; 
// copiedObject.address.state = "UP" ; 
// copiedObject.address.landmark.temple = "XYZ" ;

// console.log(obj);
// console.log(copiedObject);

//create your oun function

function deepCopy(obj){
    let objCopy = {};
    Object.keys(obj).forEach((key) => {
        if(typeof obj[key] === 'object'){
            objCopy[key] = deepCopy(obj[key]);
        }else{
            objCopy[key] = obj[key];
        }
    })
    return objCopy;
}

const copiedObject = deepCopy(obj);
copiedObject.name = "Akshay" ; 
copiedObject.address.city = "Delhi" ; 
copiedObject.address.state = "UP" ; 
copiedObject.address.landmark.temple = "XYZ" ;

console.log(obj);
console.log(copiedObject);