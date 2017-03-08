
$(document).ready(saluda)

function saluda(){
    $nuevo = $('<p>parrafo nuevo</p>');
    $('h2').after($nuevo);
}