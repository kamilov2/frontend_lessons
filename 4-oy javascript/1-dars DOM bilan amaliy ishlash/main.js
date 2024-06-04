// const element = document.getElementById('myId')
// element.innerText = "Hello world"
// element.innerHTML = "<p id='hello' style='background-color:yellow; color:white;'>Hello</p>"

// const element = document.getElementById("myId")

// element.setAttribute('class', 'false')

// const element = document.getElementById('myId')
// const d = element.textContent
// if(d === "null"){
//     element.setAttribute('class' , 'null')
//     element.innerText = "Davomat olinmagan"
// }else if(d === "false"){
//     element.setAttribute('class', 'false')
//     element.innerText = "Kelmadi"
// }else if(d === "true"){
//     element.setAttribute('class', 'true')
//     element.innerText = "Keldi"
// }else{
//     element.innerText = "Backendan kelgan malumot notogri!"
// }

// function changeBackgroundColor() {
//     const divs = document.querySelectorAll('div');
//     divs.forEach(div => {
//       div.setAttribute('style', 'background-color: black;');
//     });
//   }
// const element = document.getElementById("myId").getAttribute("")
// let a = element.getAttribute("class")
// console.log(element.textContent)
// console.log(a)

const element = document.getElementById("myId")
const f = element.removeAttribute('class')

