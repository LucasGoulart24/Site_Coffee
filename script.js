let menu = document.getElementById('menu');
let menuBotao = document.getElementById('menuButton');

menuBotao.addEventListener('click', function (){
    if(menu.style.display === 'block') {
        menu.style.display = 'none';
    }else { 
        menu.style.display = 'block';
    }
});