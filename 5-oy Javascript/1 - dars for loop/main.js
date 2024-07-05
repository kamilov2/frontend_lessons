// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers[3])
// console.log(numbers.length)

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }


const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    phone_number: 902059000
};
console.log(person['name'])

for (let a in person) {    
    console.log(`${a}: ${person[a]}`);
}


const numbers = [1,2,3,4,5];
const element = document.getElementById('myid')
for (let a in numbers) {
    element.innerHTML += `<h1>${numbers[a]}</h1>`   
}


// const word = "hello world"
// for (let a in word) {
//     console.log(word[a])
// }
