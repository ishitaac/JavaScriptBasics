


//ECMA-->

const add= (a=0, b=0) =>{
    return a+b
}
console.log(add(12,23)) //here writing console over the top doen't work because there is no function keyword

//whenerver you declare a function using a keyword function js interpreter automatically hoists the function declaration at the top

console.log(sub(34,21))

function sub(a=0,b=0){
    return a-b
}