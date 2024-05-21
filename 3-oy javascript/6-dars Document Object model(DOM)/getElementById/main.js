const element = document.getElementById('myId');
console.log(element)
console.log("Element ichidagi malumot: ", element.textContent)

const x = document.getElementById('myId');
x.innerText = "helo world"

console.log("Ozgargan malumot: ", document.getElementById('myId').textContent)