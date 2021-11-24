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
    
})