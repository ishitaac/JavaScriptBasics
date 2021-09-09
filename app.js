//FOR LOOP
// let i

for(var i=1;i<10;i++){
    console.log(i)
}

//let has a block scope while var has a global scope. We get refrence error comes up when let is used
console.log(i)

// const temp = ()=>{
//     var dontknow="dontknow"
// }
// console.log(dontknow)  //scope of var, let and comst gets  limited  the block of function when used inside a function.


//WHILE LOOP

// let condition = true
// while(condition){
//     console.log()
// }

let iteration=0
while(iteration<10){
    console.log(iteration)
    iteration++
}