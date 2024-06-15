// let command = prompt("Choose style for login page: ")
// const element = document.getElementById("myId")

// if (command == "white"){
//     element.classList.add("white")
// }else if(command == "dark"){
//     element.classList.add("dark")
// }


const input_1 = document.getElementById("input1");
const input_2 = document.getElementById("input2");

let a = prompt("1 - input uchun malumot turini tanlang: ");
console.log(a);
if(a == "text" || a == "password" || a == "number" || a == "email"){
    let a1 = prompt("1 - chi input uchun nom tanlang: ");
    input_1.setAttribute("placeholder", a1);
}
input_1.setAttribute("type", a);

let b = prompt("2 - input uchun malumot turini tanlang: ");
if(b == "text" || b == "password" || b == "number" || b == "email"){
    let a1 = prompt("2 - chi input uchun nom tanlang: ");
    input_2.setAttribute("placeholder", a1);
}
input_2.setAttribute("type", b);


