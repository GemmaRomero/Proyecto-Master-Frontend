function closePopUp() {
    var PopUp = document.getElementById('popUp');
    PopUp.style.visibility = 'hidden';

}

function openPopUp() {
    var PopUp = document.getElementById('popUp');
    PopUp.style.visibility = 'visible';
    console.log('funciona');
}

// window.addEventListener('load', function() {

//     var searching = document.querySelector('#formBuscar');
//     var registerRest = document.querySelector('#formRegister');

//     searching.addEventListener('submit', function() {

//         var restaurantName = document.getElementById('filterName').value;
//         var place = document.getElementById('filterPlace').value;


//         var searchingResult = { 'Nombre del restaurante': restaurantName, 'Lugar': place };
//         console.log(searchingResult);



//     });
//     registerRest.addEventListener('submit', function() {

//         var restaurantUserName = document.getElementById('userName').value;
//         var restaurantOficialName = document.getElementById('resturantName').value;
//         var restaurantAddress = document.getElementById('address').value;
//         var restaurantPostCode = document.getElementById('postCode').value;

//         var dataRestaurant = { 'Nombre de usuario': restaurantUserName, 'Nombre del restaurante': restaurantOficialName, 'Dirección del restaurante': restaurantAddress, 'CP del restaurante': restaurantPostCode };
//         console.log(dataRestaurant);



//     });

// });


$(document).ready(function() {

    var btnUp = $('#goHeader').on('click', function(e) {
        e.preventDefault();

        if ($(window).scrollTop() != 0) {
            $('html, body').animate({ scrollTop: 0 }, 1000)
        }
    });

    $('#loginUserBtn').click(function(e) {
        e.preventDefault();
        $('#loginUserBox').toggle();
    });

    $('#searchGlassBtn').click(function(e) {
        e.preventDefault();
        $('#loginSearchBox').toggle();
    });



    var slider = $('#slider');
    var btnR = $('#btnRight');
    var btnL = $('#btnLeft');

    $('#slider .suggestion--box:last').insertBefore('#slider .suggestion--box:first');

    function moveRight() {
        slider.animate({ marginLeft: '-25%' }, 700, function() {
            $('#slider .suggestion--box:first').insertAfter('#slider .suggestion--box:last');
            slider.css('marginLeft', '0')

        });
    };


    btnR.on('click', moveRight);

    function moveLeft() {

        slider.animate({ marginLeft: '25%' }, 700, function() {
            $('#slider .suggestion--box:last').insertBefore('#slider .suggestion--box:first');

            slider.css('marginLeft', '0')

        });
    };
    btnL.on('click', moveLeft);

    $('#popUp').on("click", function(e) {

        var popUpContent = $(".popUp__content");

        if (!popUpContent.is(e.target) && popUpContent.has(e.target).length === 0) {
            $('.popUp').css('visibility', 'hidden')
        }
    });

    $('#changeSingup').click(function (e) { 
        e.preventDefault();
        $('#signUserBox').show();
        
    });

    $('#changeLoginp').click(function (e) { 
        e.preventDefault();
        $('#signUserBox').hide();
        $('#loginUserBox').show();
        
    });

    $('#cerrarSesion').click(function(e){
        e.preventDefault();
        $('#sesionBox').hide();
        $('#loginUserBox').show();

    });



});










// var logIn = 
//     /* 
//         Primer click.
//         Función que descubre un panel oculto
//         y cambia el texto del botón.
//     */
//     function(e) {
//         $('#loginUserBox').slideDown();
//         $(this).style.background('red');
//         e.preventDefault();

//     }, // Separamos las dos funciones con una coma

//     /* 
//         Segundo click.
//         Función que oculta el panel
//         y vuelve a cambiar el texto del botón.
//     */
//     function(e) {
//         e.preventDefault();
//         $('#loginUserBox').slideUp();

//     }

// )