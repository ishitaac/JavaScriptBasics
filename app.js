// const rock = document.querySelector('#rock')
// const paper = document.querySelector('#paper')
// const scissor = document.querySelector('#scissor')

// FUNCTIONS

// function logName(){
//     console.log("Nishtha")
// }
// logName()

function logName(Name="John Doe" , age="18"){
    console.log(Name+" you are "+age+" years old.")
}
logName("Nishtha", "21")

//never misspell thr function keyword
//a function can have multiple parameters
//you can set default values for tthe parameters, like below:
function logName(Name="John Doe" , age="18"){
    console.log(Name+" you are "+age+" years old.")
}
logName()

//any function you define inside a function's body will be local to that function
function add(a=0,b=0){
    // const sum=a+b
    // return sum
    return a+b
}
console.log(add(3,7))
// const result =add(3,7)
// console.log(result)
