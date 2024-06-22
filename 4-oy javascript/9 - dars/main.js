let element = document.getElementById("myId")
let newelement = document.createElement('div')

newelement.setAttribute('class', 'myClass')

newelement.setAttribute('id','myId2')

newelement.textContent = "Hello world"
newelement.style.width = '100px'
newelement.classList.add('myClass2')

element.appendChild(newelement) 

let child = document.getElementById('myId2')
element.removeChild(child)