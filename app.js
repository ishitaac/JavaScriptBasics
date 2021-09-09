


const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const board = document.querySelector('#board')


const handler = (event) =>{               //event or  e both same
    // console.log(event.target)
    const action = event.target.id
//     if(action ==='rock'){
//         board.innerHTML = ('Rock crushes scissors')
//     }else if(action ==='paper'){
//         board.innerHTML = ('paper traps rock')
//     }else if(action ==='scissors'){
//         board.innerHTML = ('sissors cut paper')
//     }else{
//         board.innerHTML = ('Click something')
//     }
// }
// const handler = (action) =>{
//     console.log("You clicked "+ action)
// }

switch(action){
    case "rock":
       board.innerHTML = "Rock crushes scissors"
       break
    case "paper":
        board.innerHTML = "paper traps rock"
        break
    case "scissors":
        board.innerHTML = "scissors cut paper"
        break
    default:
        board.innerHTML = "Click something"
        break
}

rock.addEventListener('click',handler)
paper.addEventListener('click',handler)
scissors.addEventListener('click',handler)

}
// rock.addEventListener('click', ()=>{handler('rock')})
// paper.addEventListener('click',()=>{handler('paper')})
// scissors.addEventListener('click',()=>{handler('scissors')})


//function can also be defined in the event listener itself

/* rock.addEventListener('click',handler('rock')) =>{
    console.log("You clicked "+action)
}  
But here it would have been repetion of code. as for different handler value we would have to write same eventlistener code again  
*/