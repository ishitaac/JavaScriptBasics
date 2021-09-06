
 const ELEMENT = document.querySelector('#selectme')
 ELEMENT.innerHTML = "This is js"

 ELEMENT.style.color ="cyan"
 ELEMENT.style.fontSize ="40px"
//  ELEMENT.style = 'display:none'


const b = document.querySelector('#SelectMe')
console.log(b.classList)
b.classList.add('five')
console.log(b.classList)
b.classList.remove('one')
console.log(b.classList)

const body = document.querySelector('body')
console.log(body.classList.toggle('dark'))


//to check if element has a particular class or not 
const value= ELEMENT.classList.contains('one') //conayins return =s a boolean value
console.log(value)