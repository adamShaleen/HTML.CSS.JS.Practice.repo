$(document).ready(function(){

    // declaring our variables to set colors

    var colors = 'white green red blue yellow';
    var color = 'white';

    // creating box functionality

    $('.box').on('click', function(){
        $(this).addClass(color);
    });
    $('.box').on('dblclick', function(){
        $(this).removeClass(colors);
    });

   // creating reset button

    $('#reset').on('click', function(){
        $('.box').removeClass(colors);
    });

    // color Pallette

    $('#red').on('click', function(){
        color = 'red';
    });
    $('#blue').on('click', function(){
        color = 'blue';
    });
    $('#green').on('click', function(){
        color = 'green';
    });
    $('#yellow').on('click', function(){
        color = 'yellow';
    });
    $('#white').on('click', function(){
        color = 'white';
    });

});


// replace color selectors with 1 thing.
// make it so you can drag the brush through multiple boxes
