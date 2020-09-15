$(document).ready(function() {
    var btnNewSection = $('#btnNewMenuSection');
    var btnNewDish = $('#btnNewDish');
    var newSection = $('#newMenuSection');
    var newDish = $('#newDish');
    var btnAddSuggestion = $('#btnAddSuggestion');
    var addSuggestion = $('#addSuggestion');

    $(btnNewSection).click(function(e) {
        e.preventDefault();
        $(newSection).toggle();
    });

    $(btnNewDish).click(function(e) {
        e.preventDefault();
        $(newDish).toggle();
    });

    $('#btnConfirmSection').click(function (e) { 
        e.preventDefault();
        $('#sectionName').text($('#sectionMenuName').val()); 
    });



});



function addSection(){
    var btnConfirmar = document.getElementById('btnConfirmSection');
    var sectionName = document.getElementById('sectionName') ;
    var sectionNameInput = document.getElementById('sectionMenuName').value;

    sectionName.innerHTML = sectionNameInput;


};
function dishOk(){
    var confirmDish = document.getElementById('confirmDish');
    var dishCreated = document.getElementById('dishCreated');
    var dishCreatedName = document.getElementById('dishCreatedName');
    var dishMenuName = document.getElementById('dishMenuName').value;
    
    
    dishCreatedName.innerHTML = dishMenuName;
};