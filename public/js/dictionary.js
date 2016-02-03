$(document).ready(function () {

    $.getJSON('/articles', printTerms);
    $('form').submit(function (e) {
        e.preventDefault();
        $.post('/dictionary-api', {title: $('#title').val(), content: $('#content').val()}, printTerms);
        this.reset();
    });

});

function printTerms(terms) {
    $('article').empty();
    $.each(terms, function () {
        $('<h2>').text(this.title).appendTo('article');
        $('<p>').text(this.content).appendTo('article');
    });
    
}
