$(function() {
    var pull = $('#pull');
    menu = $('nav ul');
    menuHeight = menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
});

$(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')){
        menu.removeAttr('style');}
});

$(function() {
    var slide = $('#registro');
    men = $('section .wrap');
    menHeight = men.height();

    $(registro).on('click', function(e) {
        e.preventDefault();
        men.slideToggle();
    });
});

$(window).resize(function(){
    var z = $(window).width();
    if(z > 320 && men.is(':hidden')){
        men.removeAttr('style');}
});
