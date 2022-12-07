console.log("Kevin Rules!")

$("#downloadRes").on("click", function() {

    window.open("https://docs.google.com/document/d/1L90qUYb8xQDsNoapPMkyhUAqaY5wRfFnWteRnc0OozU/edit?usp=sharing");
});

$(document).ready(function() {

    $(document).scroll(function() {
        const topButton = $("#backTop"),
            header = $("header"),
            work = $("#workHeader"),
            skills = $("#skillsHeader"),
            about = $("main"),
            contact = $("#contactHeader"),
            scroll = $(document).scrollTop(),
            buffer = 100;

        if (scroll < 147) {
            topButton.addClass("dNone");

        } else {
            topButton.removeClass("dNone");
        }

        if (scroll < work.offset().top - header.height() - buffer) {
            $("#aboutLink").addClass("selected")
            $("#workLink").removeClass("selected")
        } else if (scroll < skills.offset().top - header.height() - buffer) {
            $("#aboutLink").removeClass("selected")
            $("#workLink").addClass("selected")
            $("#skillsLink").removeClass("selected")

        } else if (scroll < contact.offset().top - header.height() - buffer - 1) {
            $("#workLink").removeClass("selected")
            $("#skillsLink").addClass("selected")
            $("#contactLink").removeClass("selected")
            console.log(contact.offset().top);
        } else {

            $("#skillsLink").removeClass("selected")
            $("#contactLink").addClass("selected")


        }


    });
})

$("#backTop img").click(function() {

    $([document.documentElement, document.body]).animate({
        scrollTop: $("main").offset().top - $("header").height()
    }, 1000);
});


$("#workLink").click(function() {

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#workHeader").offset().top - $("header").height()
    }, 1000);
});

$("#skillsLink").click(function() {

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#skillsHeader").offset().top - $("header").height()
    }, 1000);
});

$("#contactLink").click(function() {

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contactHeader").offset().top - $("header").height()
    }, 1000);
});

$("#aboutLink").click(function() {

    $([document.documentElement, document.body]).animate({
        scrollTop: $("main").offset().top - $("header").height()
    }, 1000);
});

$("#chevron img").click(function() {

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#workHeader").offset().top - $("header").height()
    }, 1000);
});