function closePopUp() {
    var PopUp = document.getElementById('popUp');
    PopUp.style.visibility = 'hidden';

}

function openPopUp() {
    var PopUp = document.getElementById('popUp');
    PopUp.style.visibility = 'visible';
    console.log('funciona');
}

$(document).ready(function() {

    var btnUp = $('#goHeader').on('click', function(e) {
        e.preventDefault();

        if ($(window).scrollTop() != 0) {
            $('html, body').animate({ scrollTop: 0 }, 1000)
        }
    });

    // $('#loginUserBtn').on('click', function(e) {
    //     e.preventDefault();
    //     if ($('#loginUserBox').css('display', 'none')) {
    //         $('#loginUserBox').slideDown();
    //     };
    // })
    $('#loginUserBtn').click(function(e) {
        e.preventDefault();
        $('#loginUserBox').toggle();
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