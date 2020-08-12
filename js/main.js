let btn = document.querySelector('.btn');
let btnIA = document.querySelector('.abrirBtn');
let btnIC = document.querySelector('.cerarBtn');
let items = document.querySelector('.items');
let item = document.querySelectorAll('.item');


btn.addEventListener('click', function(e) {
    if (e.target.classList.contains('abrirBtn')) {
        items.classList.add('abierto');
        btn.classList.add('abierto');
    } else {
        items.classList.remove('abierto');
        btn.classList.remove('abierto');
    }
})

item.forEach((item) => item.addEventListener('click', function() {
    items.classList.remove('abierto');
    btn.classList.remove('abierto');
}));