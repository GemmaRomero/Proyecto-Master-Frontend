function verMenu(){
    var startMenu = document.getElementById('starters');
    startMenu.style.display = 'block';
    var changeIcon = document.getElementById('downMenu');
    changeIcon.style.visibility = 'hidden';
    var changeIconClose = document.getElementById('closeMenu');
    changeIconClose.style.visibility = 'visible';
}
function cerrarMenu(){
    var startMenu = document.getElementById('starters');
    startMenu.style.display = 'none';
    var changeIcon = document.getElementById('downMenu');
    changeIcon.style.visibility = 'visible';
    var changeIconClose = document.getElementById('closeMenu');
    changeIconClose.style.visibility = 'hidden';
    console.log('funciona');
}
function openAlergics(){
    var popUpAlergics = document.getElementById('popUpAlergic');
    popUpAlergics.style.top = '15%';
    var btnAlergics = document.getElementById('btnAlergic');
    btnAlergics.style.visibility = 'hidden';
    console.log('funciona');

}
function closeAlergics(){
    var popUpAlergics = document.getElementById('popUpAlergic');
    popUpAlergics.style.top = '-200%';
    var btnAlergics = document.getElementById('btnAlergic');
    btnAlergics.style.visibility = 'visible';
}
