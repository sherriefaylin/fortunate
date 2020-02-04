
$(document).ready(function () {

    $(".part2").hide();
    $(".part3").hide();
    $(".part4").hide();



    $(".fortune").mouseenter(function () {
        $(this).attr('src', 'assets/fortunate-shine.gif')
    })

    $(".fortune").mouseleave(function () {
        $(this).attr('src', 'assets/fortunate.png')
    })

    $(".fortune").on('click', function () {
        $(this).attr('src', 'assets/fortunate.gif')
        $(this).addClass('fortune-spin')

        setTimeout(function(){
            $(".part1").fadeOut()
    
        }, 3000)
        setTimeout(function(){
        $(".part2").fadeIn()
    }, 4000)
    })

    $(".fortune").mouseenter(function () {
        $(this).attr('src', 'assets/fortunate-shine.gif')
    })

    $(".fortune").mouseleave(function () {
        $(this).attr('src', 'assets/fortunate.png')
    })

    $(".fortune").on('click', function () {
        $(this).attr('src', 'assets/fortunate.gif')
        $(this).addClass('fortune-spin')

        setTimeout(function(){
            $(".part2").fadeOut()
    
        }, 3000)
        setTimeout(function(){
        $(".part3").fadeIn()
    }, 4000)
    })




})