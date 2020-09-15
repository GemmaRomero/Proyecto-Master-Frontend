
$(document).ready(function () {
    $('.icon-heart').click(function (e) { 
        e.preventDefault();
        $(this).parent().hide();  
    });



    $('#loginUserBtn').click(function(e) {
        e.preventDefault();
        $('#sesionBox').toggle();
    });

    $('#searchGlassBtn').click(function(e) {
        e.preventDefault();
        $('#loginSearchBox').toggle();
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
        $('#loginUserBtn').css('backgroundColor', 'transparent');
    
    });
});

