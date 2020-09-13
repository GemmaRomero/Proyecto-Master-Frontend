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

});