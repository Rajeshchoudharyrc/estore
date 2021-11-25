$(document).ready(function() {
    //Open sidenav as well as enable overlay
    $("#Menu-icon").on("click", function() {
        $(".sidenav").addClass("sidenav-open");
        $(".overlay").addClass("overlay-enable");
    });
    //close sidenav as well as disable overlay
    $(".overlay, .close-arrow").on("click", function() {
        $(".sidenav").removeClass("sidenav-open");
        $(".overlay").removeClass("overlay-enable");
    });



    //Search container Open
    $("#Search-icon").on("click", function() {
        $(".search-container").show();
    });
    //Close Search container
    $(".exit-search-cont").on("click", function() {
        $(".search-container").hide();
    });


    //------------- owl carousel --------------
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 25,
        nav: false,
        // dots: false,
        // stagePadding: 20,
        autoplay: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    
})