
//1) Object Literal Example 3
var name ="Vinit";
var city="Mumbai";

// Old way of Function in Object
let obj ={
    name:"Vinit", 
    city :"Pune",
    detail : function (){
        return `Name is ${this.name} and city is ${this.city}`
    }
}
console.log(obj);
console.log(obj.detail());

// New way of Function in Object
let obj2 ={
    name:"Vinit", 
    city :"Pune",
    detail(){
        return `Name is ${this.name} and city is ${this.city}`
    },
    // we can give space in func name
    'display data'(){
        return `Name is ${this.name} and city is ${this.city}`
    }
}
console.log(obj2);
console.log(obj2.detail());
console.log(obj2['display data']());