function seeFirstSectionMenu() {
    var firstSectionMenu = document.getElementById('firstSectionGroup');
    firstSectionMenu.style.display = 'block';

    var changeIcon = document.getElementById('downMenu-1');
    changeIcon.style.visibility = 'hidden';

    var changeIconClose = document.getElementById('closeMenu-1');
    changeIconClose.style.visibility = 'visible';
}

function closeFirstSectionMenu() {
    var firstSectionMenu = document.getElementById('firstSectionGroup');
    firstSectionMenu.style.display = 'none';

    var changeIcon = document.getElementById('downMenu-1');
    changeIcon.style.visibility = 'visible';

    var changeIconClose = document.getElementById('closeMenu-1');
    changeIconClose.style.visibility = 'hidden';
}


function seeSecondSectionMenu() {
    var secondSectionMenu = document.getElementById('secondSectionGroup');
    secondSectionMenu.style.display = 'block';

    var changeIcon = document.getElementById('downMenu-2');
    changeIcon.style.visibility = 'hidden';

    var changeIconClose = document.getElementById('closeMenu-2');
    changeIconClose.style.visibility = 'visible';
}

function closeSecondSectionMenu() {
    var secondSectionMenu = document.getElementById('secondSectionGroup');
    secondSectionMenu.style.display = 'none';

    var changeIcon = document.getElementById('downMenu-2');
    changeIcon.style.visibility = 'visible';

    var changeIconClose = document.getElementById('closeMenu-2');
    changeIconClose.style.visibility = 'hidden';
}


function seeThirdSectionMenu() {
    var thirdSectionMenu = document.getElementById('thirdSectionGroup');
    thirdSectionMenu.style.display = 'block';

    var changeIcon = document.getElementById('downMenu-3');
    changeIcon.style.visibility = 'hidden';

    var changeIconClose = document.getElementById('closeMenu-3');
    changeIconClose.style.visibility = 'visible';
}

function closeThirdSectionMenu() {
    var thirdSectionMenu = document.getElementById('thirdSectionGroup');
    thirdSectionMenu.style.display = 'none';

    var changeIcon = document.getElementById('downMenu-3');
    changeIcon.style.visibility = 'visible';

    var changeIconClose = document.getElementById('closeMenu-3');
    changeIconClose.style.visibility = 'hidden';
}


function seeFourthSectionMenu() {
    var fourthSectionMenu = document.getElementById('fourthSectionGroup');
    fourthSectionMenu.style.display = 'block';

    var changeIcon = document.getElementById('downMenu-4');
    changeIcon.style.visibility = 'hidden';

    var changeIconClose = document.getElementById('closeMenu-4');
    changeIconClose.style.visibility = 'visible';
}

function closeFourthSectionMenu() {
    var fourthSectionMenu = document.getElementById('fourthSectionGroup');
    fourthSectionMenu.style.display = 'none';

    var changeIcon = document.getElementById('downMenu-4');
    changeIcon.style.visibility = 'visible';

    var changeIconClose = document.getElementById('closeMenu-4');
    changeIconClose.style.visibility = 'hidden';
}


function seeFifthSectionMenu() {
    var fifthSectionMenu = document.getElementById('fifthSectionGroup');
    fifthSectionMenu.style.display = 'block';

    var changeIcon = document.getElementById('downMenu-5');
    changeIcon.style.visibility = 'hidden';

    var changeIconClose = document.getElementById('closeMenu-5');
    changeIconClose.style.visibility = 'visible';
}

function closeFifthSectionMenu() {
    var fifthSectionMenu = document.getElementById('fifthSectionGroup');
    fifthSectionMenu.style.display = 'none';

    var changeIcon = document.getElementById('downMenu-5');
    changeIcon.style.visibility = 'visible';

    var changeIconClose = document.getElementById('closeMenu-5');
    changeIconClose.style.visibility = 'hidden';
}


function openAlergics() {
    var popUpAlergics = document.getElementById('popUpAlergic');
    popUpAlergics.style.top = '0';

    var btnAlergics = document.getElementById('btnAlergic');
    btnAlergics.style.visibility = 'hidden';
}

function closeAlergics() {
    var popUpAlergics = document.getElementById('popUpAlergic');
    popUpAlergics.style.top = '-1000px';

    var btnAlergics = document.getElementById('btnAlergic');
    btnAlergics.style.visibility = 'visible';
}

function reservar() {
    alert('llámanos al 912 42 71 81');
}

$(document).ready(function() {
    var btnAlergic = $('#btnAlergic');
    var bubbleReservar = $('#bubbleReservar');

    $(window).on('scroll', function() {
        var sectionMenuTop = $('#sectionMenu').offset().top;
        if ($(window).scrollTop() >= sectionMenuTop) {
            btnAlergic.css('right', '-1rem');
            bubbleReservar.css('display', 'block');
        } else if ($(window).scrollTop() <= sectionMenuTop / 2) {
            btnAlergic.css('right', '-10rem');
            bubbleReservar.css('display', 'none');
        }
    });


    // $(window).on('scroll', function() {
    //     var sectionMenuTop = $('#sectionMenu').offset().top;
    //     if ($(window).scrollTop() >= sectionMenuTop) {
    //         bubbleReservar.css('top', '6rem');
    //     } else if ($(window).scrollTop() <= sectionMenuTop / 2) {
    //         bubbleReservar.css('top', ' 3rem');
    //     }
    // });


    var star1 = $('#star1');
    var star2 = $('#star2');
    var star3 = $('#star3');
    var star4 = $('#star4');
    var star5 = $('#star5');
    var thanks = $('#thanksStars');



    $(star1).click(function(e) {
        e.preventDefault();
        $(star1).css('fill', '#ffb300');
        $(thanks).fadeIn();
    });
    $(star2).click(function(e) {
        e.preventDefault();
        $(star1).css('fill', '#ffb300');
        $(star2).css('fill', '#ffb300');
        $(thanks).fadeIn();
    });
    $(star3).click(function(e) {
        e.preventDefault();
        $(star1).css('fill', '#ffb300');
        $(star2).css('fill', '#ffb300');
        $(star3).css('fill', '#ffb300');
        $(thanks).fadeIn();
    });
    $(star4).click(function(e) {
        e.preventDefault();
        $(star1).css('fill', '#ffb300');
        $(star2).css('fill', '#ffb300');
        $(star3).css('fill', '#ffb300');
        $(star4).css('fill', '#ffb300');
        $(thanks).fadeIn();
    });
    $(star5).click(function(e) {
        e.preventDefault();
        $(star1).css('fill', '#ffb300');
        $(star2).css('fill', '#ffb300');
        $(star3).css('fill', '#ffb300');
        $(star4).css('fill', '#ffb300');
        $(star5).css('fill', '#ffb300');
        $(thanks).fadeIn();
    });

    $('#btnAddFav').click(function(){
        $('#addFavOk').fadeIn()
    });
});