
// EVENT LISTENERS: 
const button=document.querySelector('button')
const element=document.querySelector('#selectme')
const body = document.querySelector('body')

console.log(button,element)

button.addEventListener('click',()=>{
    // element.style="background:aqua"
    console.log("Heya! you just changed the color")
    body.classList.toggle('dark')
    // if(element.classList.contains('aqua')){
    //     element.classList.remove('aqua')
    // }else{
    //     element.classList.add('aqua')
    // }
})
//it listens for an event