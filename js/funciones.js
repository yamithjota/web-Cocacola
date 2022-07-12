$(document).ready(listo);

// function listo(){
//     alert("Hola Mundo");
// }

function listo() {
    $(".hamb").click(function(e) {
        e.preventDefault();
        $("header .container nav").toggleClass("open");
        $(".hamb i").toggleClass("fa-solid fa-xmark");

    });
    $("header .container nav a").click(function() {
        $("header .container nav").removeClass("open");
        $(".hamb i").removeClass("fa-solid fa-xmark");
        var dev = $(this).attr("href")

        $("html,body").animate({
            "scrollTop": $(dev).offset().top - 76
        })
    })
}