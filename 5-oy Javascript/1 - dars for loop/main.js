// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers[3])
// console.log(numbers.length)

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }


const person = [
    {
        name: 'John',
        age: 30,
        city: 'New York',
        phone_number: 902059000
    },
    {
        name: 'javlon',
        age: 30,
        city: 'New York',
        phone_number: 905251243
    },
    {
        name: 'javlon',
        age: 30,
        city: 'New York',
        phone_number: 905251243
    },
    {
        name: 'John',
        age: 30,
        city: 'New York',
        phone_number: 902059000
    },
    {
        name: 'javlon',
        age: 30,
        city: 'New York',
        phone_number: 905251243
    },
    {
        name: 'javlon',
        age: 30,
        city: 'New York',
        phone_number: 905251243
    },
];

const table = document.getElementById('myTable')

for (let index = 0; index < person.length; index++) {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${person[index].name}</td>
        <td>${person[index].age}</td>
        <td>${person[index].city}</td>
        <td>${person[index].phone_number}</td>
    `;
    table.appendChild(row);
}

// console.log(person['name'])

// for (let a in person) {
//     console.log(`${a}: ${person[a]}`);
// }




// let num = 10;
// while (num) {
//     console.log(num);
//     num--;
// }

// let num = 0;

// while (true) {
//     if (num === 90) {
//         break;
//     };
//     console.log(num);
//     num++;
// }
