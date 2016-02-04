$(document).ready(function () {

    $.getJSON('/articles', printTerms);
    

});

function printTerms(terms) {
    $('article').empty();

    $.each(terms, function () {
        $('<h2>').text(this.title).appendTo('article');
        $('<p>').text(this.content).appendTo('article');
    });
    
}
