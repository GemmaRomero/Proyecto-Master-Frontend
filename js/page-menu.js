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
    
}
function openAlergics(){
    var popUpAlergics = document.getElementById('popUpAlergic');
    popUpAlergics.style.top = '0';

    var btnAlergics = document.getElementById('btnAlergic');
    btnAlergics.style.visibility = 'hidden';
    

}
function closeAlergics(){
    var popUpAlergics = document.getElementById('popUpAlergic');
    popUpAlergics.style.top = '-1000px';

    var btnAlergics = document.getElementById('btnAlergic');
    btnAlergics.style.visibility = 'visible';
}
