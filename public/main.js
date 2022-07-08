// navbar scrolling ---------------------------------------------------------------------------------
$(function () {
    $(document).scroll(function () {
        var $nav = $(".sticky-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

// countdown ----------------------------------------------------------------------------------------
$(document).ready(function () {
    // set final date
    var countDownDate = new Date("Nov 11, 2022 16:00:00").getTime();
    // update every 1 second
    var x = setInterval(function() {
        // get today's date/time
        var now = new Date().getTime();

        // find distance between now and final date
        var distance = countDownDate - now;

        // calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        days = (days.toString()).padStart(2, '0');
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        hours = (hours.toString()).padStart(2, '0');
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        minutes = (minutes.toString()).padStart(2, '0');
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        seconds = (seconds.toString()).padStart(2, '0');

        // display the result in "countdown" elt
        document.getElementById("countdown").innerHTML = days + "d: " + hours + "h: "
        + minutes + "m: " + seconds + "s ";

        // if finished, just display 0s
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "00d: 00h: 00m: 00s";
        }
    }, 1000);
});

// schedule -----------------------------------------------------------------------------------------
$('#tab-saturday').on('click', function (event) {
    if (!$(this).hasClass('active')) {
        $('#tab-sunday').removeClass('active');
        $('#tab-saturday').addClass('active');
        $('#tab-saturday').removeClass('inactive');
        $('#tab-sunday').addClass('inactive');
        $('#saturday-body').css("display", '');
        $('#sunday-body').css("display", "none");
    }
});
$('#tab-sunday').on('click', function (event) {
    if (!$(this).hasClass('active')) {
        $('#tab-saturday').removeClass('active');
        $('#tab-sunday').addClass('active');
        $('#tab-sunday').removeClass('inactive');
        $('#tab-saturday').addClass('inactive');
        $('#sunday-body').css("display", '');
        $('#saturday-body').css("display", "none");
    }
});


// faq -----------------------------------------------------------------------------------------
$(".question").each(function() {
    $(this).click(function(){
        $(this).find("p").toggle();
        $(this).toggleClass("faq_exp");
        //$(this).css('listStyleImage', $(this).hasClass("selected")?sel:unsel);    
    })
});

// team ----------------------------------------------------------------------------------------
$('#seed-dir').on('click', function (event) {
    if (!$(this).hasClass('selected')) {
        $('.seed').removeClass('selected');
        $('#seed-dir').addClass('selected');
        $('.seed-txt').removeClass('selected-txt');
        $('#text-dir').addClass('selected-txt');
        $('.teamrow').css("display", "none");
        $('#row-dir').css("display", '');
    }
});

$('#seed-dev').on('click', function (event) {
    if (!$(this).hasClass('selected')) {
        $('.seed').removeClass('selected');
        $('#seed-dev').addClass('selected');
        $('.seed-txt').removeClass('selected-txt');
        $('#text-dev').addClass('selected-txt');
        $('.teamrow').css("display", "none");
        $('#row-dev').css("display", '');
    }
});

$('#seed-md').on('click', function (event) {
    if (!$(this).hasClass('selected')) {
        $('.seed').removeClass('selected');
        $('#seed-md').addClass('selected');
        $('.seed-txt').removeClass('selected-txt');
        $('#text-md').addClass('selected-txt');
        $('.teamrow').css("display", "none");
        $('#row-md').css("display", '');
    }
});

$('#seed-log').on('click', function (event) {
    if (!$(this).hasClass('selected')) {
        $('.seed').removeClass('selected');
        $('#seed-log').addClass('selected');
        $('.seed-txt').removeClass('selected-txt');
        $('#text-log').addClass('selected-txt');
        $('.teamrow').css("display", "none");
        $('#row-log').css("display", '');
    }
});

$('#seed-spon').on('click', function (event) {
    if (!$(this).hasClass('selected')) {
        $('.seed').removeClass('selected');
        $('#seed-spon').addClass('selected');
        $('.seed-txt').removeClass('selected-txt');
        $('#text-spon').addClass('selected-txt');
        $('.teamrow').css("display", "none");
        $('#row-spon').css("display", '');
    }
});

$('#seed-tres').on('click', function (event) {
    if (!$(this).hasClass('selected')) {
        $('.seed').removeClass('selected');
        $('#seed-tres').addClass('selected');
        $('.seed-txt').removeClass('selected-txt');
        $('#text-tres').addClass('selected-txt');
        $('.teamrow').css("display", "none");
        $('#row-tres').css("display", '');
    }
});
