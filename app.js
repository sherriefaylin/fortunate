
var iintro = 0;
var i = 0;
var i2 = 0;
var i3 = 0;


var introtxt = "Welcome to Fortunate"
var txt = '1. You must be rich in social currency to play.';

var txt2 = '2. You’re seventeen. You must make a decision that will put you in debt for the rest of your life with no guarantee of success.';

var txt3 = "3. You're stuck in your decision, unhappy and unable to pull yourself together while the debt continues to grow exponentially. What are you doing to do?";

var txt4 = "Now that you’ve strayed from societal norm, you’re on your own. But you get a lifeline and may phone a friend. Who do you pick?"

var speed = 40;

function typeWriterIntro() {
    if (iintro < introtxt.length) {
        document.getElementById("intro").innerHTML += introtxt.charAt(iintro);
        iintro++;
        setTimeout(typeWriterIntro, speed);

        if (iintro >= introtxt.length) {
            setTimeout(function () {
                $("#intro").fadeOut();
            }, 1000)
            setTimeout(function () {
                typeWriter();
            }, 2000)
        }


    }
}

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("note1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);

        if (i >= txt.length) {
            setTimeout(function () {
                $("#fortune1").fadeIn();
            }, 1000)

        }


    }
}


function typeWriter2() {
    if (i2 < txt2.length) {
        document.getElementById("note2").innerHTML += txt2.charAt(i2);
        i2++;
        setTimeout(typeWriter2, speed);

        if (i2 >= txt2.length) {
            setTimeout(function () {
                $("#fortune2").fadeIn();
            }, 1000)

        }


    }
}


function typeWriter3() {
    if (i3 < txt3.length) {
        document.getElementById("note3").innerHTML += txt3.charAt(i3);
        i3++;
        setTimeout(typeWriter3, speed);

        if (i3 >= txt3.length) {
            setTimeout(function () {
                $("#fortune3").fadeIn();
            }, 1000)

        }


    }
}



function unfold() {
    setTimeout(function () {
        $("#ending-fortune").attr('src', 'assets/unfold1.png')
    }, 1000)

    setTimeout(function () {
        $("#ending-fortune").attr('src', 'assets/unfold2.png')
    }, 1500)

    setTimeout(function () {
        $("#ending-fortune").attr('src', 'assets/unfold3.png')
    }, 2000)

    setTimeout(function () {
        $("#ending-fortune").attr('src', 'assets/urhere.png')
    }, 2500)
}



$(document).ready(function () {
    $("#fortune2").hide();
    $("#fortune3").hide();
    $("#fortune1").hide();
    $(".part2").hide();
    $(".part3").hide();
    $("#fortune1-cap").hide();
    $("#fortune2-cap").hide();
    $("#fortune3-cap").hide();
    $(".ending").hide();

    typeWriterIntro();



    $("#fortune1").mouseenter(function () {
        $("#fortune1-cap").fadeIn();
        $(this).attr('src', 'assets/fortunate-shine.gif')
        $("#fortune1").mousemove(function (e) {
            $("#fortune1-cap").offset({
                left: e.pageX + 15,
                top: e.pageY - 15
            })
        })
    })

    $("#fortune1").mouseleave(function () {
        $(this).attr('src', 'assets/fortunate.png')
        $("#fortune1-cap").fadeOut();
    })

    $("#fortune1").on('click', function () {
        $("#fortune1-cap").fadeOut();
        $(this).attr('src', 'assets/fortune-speed.gif')
        $(this).addClass('fortune-spin')

        $("#fortune1").on('click', function () {
            $(".part1").fadeOut();
            setTimeout(function () {
                $(".part2").fadeIn()
                typeWriter2();
            }, 1000)
        })

    })

    $("#fortune2").mouseenter(function () {
        $(this).attr('src', 'assets/fortunate-shine.gif')
        $("#fortune2-cap").fadeIn();


        $("#fortune2").mousemove(function (e) {
            $("#fortune2-cap").offset({
                left: e.pageX + 15,
                top: e.pageY - 15
            })

        })
    })

    $("#fortune2").mouseleave(function () {
        $(this).attr('src', 'assets/fortunate.png')
        $("#fortune2-cap").fadeOut();
    })

    $("#fortune2").on('click', function () {
        $("#fortune2-cap").fadeOut();
      
        $(this).attr('src', 'assets/fortune-speed.gif')
        $(this).addClass('fortune-spin')

        $("#fortune2").on('click', function () {
            $(".part2").fadeOut();
            setTimeout(function () {
                $(".part3").fadeIn()
                typeWriter3();
            }, 1000)
        })
    })


    $("#fortune3").mouseenter(function () {
        $("#fortune3-cap").fadeIn();
        $(this).attr('src', 'assets/fortunate-shine.gif')
        $("#fortune3").mousemove(function (e) {
            $("#fortune3-cap").offset({
                left: e.pageX + 15,
                top: e.pageY - 15
            })

        })



    })

    $("#fortune3").mouseleave(function () {
        $(this).attr('src', 'assets/fortunate.png')
        $("#fortune3-cap").fadeOut();
    })



    $("#fortune3").on('click', function () {

        $("#fortune3-cap").fadeOut();

        $(this).attr('src', 'assets/fortune-speed.gif')
        $(this).addClass('fortune-spin')

        $("#fortune3").on('click', function () {
            $(".part3").fadeOut();
            $(".ending").fadeIn();
        
        })

    })

    $("#ending-fortune").on('click', function() {
        console.log('clicking final')
        unfold();
    })






 






})