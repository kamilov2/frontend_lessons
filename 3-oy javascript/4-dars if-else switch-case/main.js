// let num = -10 
// if (num > 0){
//     console.log("Berilgan son musbat son!")
// }else if (num < 0){
//     console.log("Berilgan son manfiy son")
// }else {
//     console.log("berilgan son 0 ga teng")
// }

// let x = 15
// if (x % 2 == 0){
//     console.log("Berilgan son qoldiksiz bolinadi 2 ga")
// }else {
//     console.log("Berilgan son qoldikli bolinadi va uning javobi", x % 2 )
// }


let num = parseInt(prompt("Yoshingizni kiriting: "))


if (num < 100){
if (num > 7 && num < 18){
    console.log("Siz hali maktab oquvchisiz!")
}else if(num > 18 && num < 50){
    console.log("Siz ishlaysiz!")
}
else{
    console.log("Siz pensionersiz !")
}
}
else {
    console.log("Yoshingizni togri kiriting !")
}

let username = "admin"
let password = "12345"

let u = prompt("Username kiriting: ")
let p = prompt("Parol kiriting: ")


// && simvoli yoqi mantikini beradi(or)
// || simvoli va mantikini beradi(and)

// if operatori biron malumot ni tekshirish uchun ishlatamiz va uni sherigi else if operatori if operatori bilan bir hil vazifani bajarib ishlaydi va agar bu operatorlarimiz tekshiruvidan ota olmasa shundagina else operatorimiz ishledi