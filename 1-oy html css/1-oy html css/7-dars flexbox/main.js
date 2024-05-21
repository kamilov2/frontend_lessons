const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');

let box1XSpeed = 2;
let box1YSpeed = 2;
let box2XSpeed = 3;
let box2YSpeed = 3;

let collisionDetected = false;

function moveBoxes() {
    const rect1 = box1.getBoundingClientRect();
    const rect2 = box2.getBoundingClientRect();

    box1.style.left = rect1.left + box1XSpeed + 'px';
    box1.style.top = rect1.top + box1YSpeed + 'px';

    box2.style.left = rect2.left + box2XSpeed + 'px';
    box2.style.top = rect2.top + box2YSpeed + 'px';

    handleCollision(rect1, rect2);
}

function getRandomDirection() {
    return Math.random() > 0.5 ? 1 : -1;
}

function handleCollision(rect1, rect2) {
    if (rect1.left < 0 || rect1.right > window.innerWidth) {
        box1XSpeed *= getRandomDirection();
        setTimeout(() => collisionDetected = false, 100); // Delay to prevent immediate collision reversal
        collisionDetected = true;
    }
    if (rect1.top < 0 || rect1.bottom > window.innerHeight) {
        box1YSpeed *= getRandomDirection();
        setTimeout(() => collisionDetected = false, 100); // Delay to prevent immediate collision reversal
        collisionDetected = true;
    }
    if (rect2.left < 0 || rect2.right > window.innerWidth) {
        box2XSpeed *= getRandomDirection();
        setTimeout(() => collisionDetected = false, 100); // Delay to prevent immediate collision reversal
        collisionDetected = true;
    }
    if (rect2.top < 0 || rect2.bottom > window.innerHeight) {
        box2YSpeed *= getRandomDirection();
        setTimeout(() => collisionDetected = false, 100); // Delay to prevent immediate collision reversal
        collisionDetected = true;
    }

    if (collisionDetected && rect1.left >= rect2.right && rect1.right <= rect2.left &&
        rect1.top >= rect2.bottom && rect1.bottom <= rect2.top) {
        collisionDetected = false;
    }
}

setInterval(moveBoxes, 10); // Move boxes every 10 milliseconds


window.addEventListener('mousemove',(e)=>{
    let x = e.clientX-50+"px"
    let y = e.clientY-50+"px"
    let div = document.getElementById("boxme")
    div.style.left = x
    div.style.top = y

    document.body.append(div)
})