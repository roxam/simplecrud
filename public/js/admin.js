$(document).ready(function () {

    $.getJSON('/articles', printTerms);
    $('form').submit(function (e) {
        e.preventDefault();
        $.post('/articles', {title: $('#title').val(), content: $('#content').val()}, printTerms);
        this.reset();
    });

});

function printTerms(terms) {
    $('article').empty();
    
    $.each(terms, function (index, value) {
        
        $('<input type="checkbox" value="'+ this._id + '">').appendTo('#injected');
        $('<span>').text(this.title).appendTo('#injected');
        $('<p>').text(this.content).appendTo('#injected');
    });

    /*
    for(i=0;i<terms.length;i++) {
        console.log(i);
        if(i===0) {
            $('<form>').appendTo('article');
        } 
        $('<input type="checkbox" id="'+ i + '" value="'+ this._id + '">').appendTo('article');
        $('<p>').text(this.title).appendTo('article');
        $('<p>').text(this.content).appendTo('article');
        
    }
    */
    
}
