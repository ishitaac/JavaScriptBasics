const element = document.getElementById('selectme')
console.log(element)
console.log(typeof element)

const elements = document.getElementsByClassName('heading')
console.log(elements)   //in class DOM shows the output of class as an array of elements/objects and not as a single object

const tags=document.getElementsByTagName('div') //going to return a array of objects
console.log(tags)

// const _element = document.querySelector('div#selectme')
const _element = document.querySelector('.heading')
console.log(_element)

//query selector always returns one element
const __element = document.querySelector('h3.heading')
console.log(__element)


//To get all the elements of the class 'heading' using query selector we get use:-
 const a= document.querySelectorAll('.heading')
 console.log(a)
 console.log(typeof a)