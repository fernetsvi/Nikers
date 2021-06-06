
let icon = document.getElementsByClassName('menu-mobile')[0];
let menu = document.getElementById('menu');
let close = document.getElementById('close');

icon.onclick = function(){
    menu.style.width = '70%';
}
close.onclick = function(){
    menu.style.width = '0%';
}
// avt
let akk = document.getElementById('akk');
let modala = document.getElementById('modal-avtorization');
let cloe = document.getElementById('cloe');

akk.onclick = function(){
    modala.style.width = '100%';
}
cloe.onclick = function(){
    modala.style.width = '0%';
}
//statys
let statys = document.getElementById('statys');
let modalstatys = document.getElementById('modal-statys');
let cle = document.getElementById('cle');

statys.onclick = function(){
    modalstatys.style.width = '100%';
}

cle.onclick = function(){
    modalstatys.style.width = '0%';
}
//backet
let basket = document.getElementById('basket');
let cl = document.getElementById('cl');
let modalbasket = document.getElementById('modal-basket');

basket.onclick = function(){
    modalbasket.style.width = '100%';
}
cl.onclick = function(){
    modalbasket.style.width = '0%';
}
   