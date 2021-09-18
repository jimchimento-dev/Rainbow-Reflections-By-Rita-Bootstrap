$(function () {
    $(".carousel").carousel({ interval: 3500 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});

function move_navigation( $navigation, $MQ) {
    if ( $(window).width() >= $MQ ) {
       $navigation.detach();
       $navigation.appendTo('header');
    } else {
       $navigation.detach();
       $navigation.insertAfter('header');
    }
 }
