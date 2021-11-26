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


    //------------- [owl carousel] --------------
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


    //------------- [ Number Counter ] --------------
    let counter_fired = 0;
    $(window).scroll(function() {
            let Scroll_top = $(window).scrollTop();
            let Scroll_pos = 2000;

            if(Scroll_top > Scroll_pos && counter_fired == 0) {
                //----- Number Animation -------
                $({ Counter: 0 }).animate({
                    Counter: $('#Registered_users').text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                    $('#Registered_users').text(Math.ceil(this.Counter));
                    }
                });

                $({ Counter: 0 }).animate({
                    Counter: $('#Uploaded_books').text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                    $('#Uploaded_books').text(Math.ceil(this.Counter));
                    }
                });
                counter_fired = 1;
            }
    });

    //------------- [ Copyright ] --------------
    let  Copyright_year = new Date().getFullYear();
    $("#Copyright_year").text(Copyright_year);
    
    
})