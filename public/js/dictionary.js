$(document).ready(function () {

    $.getJSON('/dictionary-api', printTerms);
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
    /*$('dt').off('dblclick').dblclick(function() {
        $.ajax({
            url: '/dictionary-api/' + $(this).text(),
            type: 'DELETE',
            success: printTerms
        });
    });*/
}
