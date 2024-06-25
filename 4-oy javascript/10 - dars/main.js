let element = document.getElementById("users")
let user_age = parseInt(prompt("Royhatdan otish uchun yoshingizni kiriting: "))

if(user_age >= 18){
    let name = prompt("Ismingizni kiriting: ")
    let surname = prompt("Familiyangizni kiriting: ")
    let newRow = document.createElement("tr");

    let nameCell = document.createElement("td");
    nameCell.innerText = name;
    newRow.appendChild(nameCell);

    let surnameCell = document.createElement("td");
    surnameCell.innerText = surname;
    newRow.appendChild(surnameCell);

    let ageCell = document.createElement("td");
    ageCell.innerText = user_age;
    newRow.appendChild(ageCell);

    element.appendChild(newRow);
}else{
    alert("Sizni yoshingiz togri kelmaydi !")
}