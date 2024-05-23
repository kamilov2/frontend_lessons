// let elements = document.querySelectorAll('.myClass');
// console.log(elements[0].textContent);

// let elements = document.querySelectorAll('div')
// console.log(elements)
        

// let elements = document.querySelectorAll('div[class="myCggglass"]')
// console.log(elements)

// let = elements = document.querySelectorAll("input[type='text']")
// console.log(elements)

// let elements = document.querySelectorAll('.myClgggass, p, input[type=text], div')
// console.log(elements)

let class_name = prompt("Class nomini kiriting va men uni elementlarini qaytaraman: ")
let element = document.querySelectorAll("." + class_name)
if (element.length > 0){
    console.log(class_name, "class si boyicha topilgan malumotlar: ", element)
}else{
    console.log("Bunday class ga oid malumotlar topilmadi!")
}