
//1) Object Literal Example 2
var n ="name";
var city="Mumbai";

// We can add property name by using varibale
let obj ={
    [n]:"Vinit", // Normal Variable
    ["Emp"+n]:"Vinit Suryra", // Concat Strings
    city :"Pune",
    // we can write function also in prperty
    detail : function (){
        return `Name is ${this.name} and city is ${this.city}`
    }
}

console.log(obj);
console.log(obj.detail());