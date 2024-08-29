$(document).ready(function(){
    $("#header").load("../nav/header.html");
    $("#slider").load("../slider/index.html");
    $("#about").load("../sessions/about.html");
    $("#interior").load("../sessions/interiorDecoration.html");
    $("#smartHome").load("../sessions/smartHome.html");
    $("#criteria").load("../sessions/criteria.html");
    $("#featuredProjects").load("../sessions/featuredProjects.html");
    $("#news").load("../sessions/news.html");
    $("#partner").load("../sessions/partner.html");
    $("#media").load("../sessions/media.html");
    $("#agency").load("../sessions/agency.html");
    $("#footer").load("../nav/footer.html");
    $("#goToTop").load("../nav/goToTop.html");
});

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 400) {
            $('#goTopBtn').fadeIn();
        } else {
            $('#goTopBtn').fadeOut();
        }
    });

    $('#goTopBtn').click(function(){
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
});


