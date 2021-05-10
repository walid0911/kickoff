var splashNotClosed = true;

function closeSplash() {
    $(".button-container").hide();
    $(".next-container").show();
}

function startSplash() {
    console.log("yalaaah");

    // setTimeout(function () {
    //     if (splashNotClosed) {
    //         $("#close_splash").fadeOut();
    //     }
    // }, 14000);
    var newlayout = '<div class="sp-container" id="splash_container"><video playsinline autoplay muted loop id="bgvid"> <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28831/Typer.mp4" type="video/mp4"> </video><div class="sp-content"><div class="close-modal" id="close_splash" onclick="closeSplash()" style="display: none;"><div class="lr"><div class="rl"></div></div></div><div class="sp-globe"></div><h2 class="frame-5"></h2><a class="sp-circle-link" onclick="closeSplash()">YALLA !</a></div></div>';

    $(".button-container").html(newlayout);

}

// $(document).ready(function () {

//     if ($(window).width() < 1150) {
//         closeSplash();
//     }

// })

document.addEventListener('scroll', function (e) {
    var top  = window.pageYOffset + window.innerHeight,
        isVisible1 = top > document.querySelector('.section2').offsetTop;
        isVisible2 = top > document.querySelector('.section3').offsetTop;
        isVisible3 = top > document.querySelector('.section4').offsetTop;
        // isVisible4 = top > document.querySelector('.section5').offsetTop;
  
    if (isVisible1) {
    document.querySelector('.section2').classList.add('animate-icon1');
    }

    if (isVisible2) {
        document.querySelector('.section3').classList.add('animate-icon2');
    }

    if (isVisible3) {
        document.querySelector('.section4').classList.add('animate-icon3');
    }

    // if (isVisible4) {
    //     document.querySelector('.section5').classList.add('animate-icon4');
    // }
});

// var question = document.querySelector('.question');

// question.onclick() = function() {
//     document.querySelector('.drop').classList.toggle('flip');
// }

var question = document.querySelectorAll(".question");
var drop = document.querySelectorAll(".drop");
var i = 0;

for (let i = 0; i < question.length; i++) {

    question[i].onclick = function() {

        drop[i].classList.toggle("flip");
    
    };
};


