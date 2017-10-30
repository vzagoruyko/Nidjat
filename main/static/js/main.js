$(document).ready(function(){
    new WOW().init();

    $(".owl-carousel").owlCarousel({
        singleItem: true,
        items: 1,
        loop:true,
        autoplay: true,
        autoplayTimeout: 3000
    });

    $('#callback').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var cost = button.data('cost');
        var size = button.data('size');
        var img = button.data('img');

        var modal = $(this);
        if (cost != "0"){
            modal.find('.painting-cost').text(cost + ' \u20BD');
        }
        else
        {
            modal.find('.painting-cost').text('Продано');
        }
        modal.find('.painting-size').text(size);
        modal.find('.painting-img').attr('href', img);
        });

    $("a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 2000, function(){

        window.location.hash = hash;
        });
    }
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('#phone-call').fadeIn(200);
        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);
        $('#phone-call').fadeOut(200);
    }
});
$('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});