$(window).scroll(function(){
    if ($(window).scrollTop() >= 200) {
       $('nav').addClass('bar-fixed');
    }
    else {
       $('nav').removeClass('bar-fixed');
    }
});