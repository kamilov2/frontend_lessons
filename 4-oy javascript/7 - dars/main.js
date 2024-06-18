let metod = parseInt(prompt("DOM boyicha ishlatilinadigon metodlarni raqamini kiriting va men u amallarni bajaraman: MISOL: 1 - setAttribute, 2 - getAttribute, 3 - removeAttribute, 4 - classList.add, 5 - classList.remove, 6 - classList.toggle, 7 - classList.contains"))

let element = document.getElementById("myID")

if (metod === 1) {
    let a = prompt("setAttribute uchun attribute nomini kiriting: ")
    let b = prompt("setAttribute uchun attribute qiymatini kiriting: ")
    element.setAttribute(a, b);
    element.innerHTML = '<h1>Siz setAttribute metodini tanladingiz!</h1>';
} else if (metod === 2) {
    let a = prompt("getAttribute uchun nom kiriting: ")
    let attrValue = element.getAttribute(a);
    alert('Attribute value: ' + attrValue);
} else if (metod === 3) {
    let a = prompt("removeAttribute uchun nom kiriting va uni ochrib tashleman: ")
    element.removeAttribute(a);
    element.innerHTML = '<h1>Siz removeAttribute metodini tanladingiz!</h1>';
} else if (metod === 4) {
    let a = prompt("add uchun nom kiriting va men uni class ichiga qoshib qoyaman")
    element.classList.add(a);
    element.innerHTML = '<h1>Siz classList.add metodini tanladingiz!</h1>';
} else if (metod === 5) {
    let a = prompt("remove uchun nom kritiign va men uni ochirib tashleman: ")
    element.classList.remove(a);
    element.innerHTML = '<h1>Siz classList.remove metodini tanladingiz!</h1>';
} else if (metod === 6) {
    let a = prompt("toggle uchun nom kiriting va men u qiymat mavjud bolsa ochirib tashlayman agar mavjud bolmasa qoshaman: ")
    element.classList.toggle(a);
    element.innerHTML = '<h1>Siz classList.toggle metodini tanladingiz!</h1>';
} else if (metod === 7) {
    let a = prompt("contains uchun nom kiriting va men uni bor yoqi yoqligini boolean malumot turi asosida qaytaraman masalan true yoqi false")
    let hasClass = element.classList.contains(a);
    alert('Class exists: ' + hasClass);
} else {
    alert('Noto\'g\'ri raqam kiritdingiz!');
}
