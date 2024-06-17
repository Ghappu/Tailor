// preloader
(function ($) {
    function BackToTop() {
        $('.back-to-top').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 0);
            return false;
        });
        $(document).scroll(function () {
            var y = $(this).scrollTop();
            if (y > 600) {
                $('.back-to-top').fadeIn();
                $('.back-to-top').addClass('open');
            } else {
                $('.back-to-top').fadeOut();
                $('.back-to-top').removeClass('open');
            }
        });
    }
    BackToTop();
})(jQuery);




// swiper banner slider

var swiper = new Swiper(".mySwiper1", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// swiper brand box
var swiper = new Swiper(".mySwiper5", {
    slidesPerView: '2',
    spaceBetween: 10,
    speed: 2000,
    centeredSlides: true,
    freeMode: true,
    loop: true,
    loopedSlides: 4,
    allowTouchMove: true,
    autoplay: {
        delay: 0,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});

// swiper for divider
var swiper = new Swiper(".mySwiper6", {
    slidesPerView: '2',
    spaceBetween: 10,
    speed: 2000,
    centeredSlides: true,
    freeMode: true,
    loop: true,
    loopedSlides: 4,
    allowTouchMove: true,
    autoplay: {
        delay: 0,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});

// swiper why choose 

var swiper = new Swiper(".mySwiper2", {
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

// swiper suit design

var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    breakpoints: {
        // when window width is >= 1024px
        1200: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2.1,
            spaceBetween: 20,
        },
        // when window width is >= 320px
        320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        }
    },
});

// swiper gallery mobile

var swiper = new Swiper(".mySwiper4", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2-2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});


// swipper gallery destop
document.addEventListener("DOMContentLoaded", function () {
    var swiper1 = new Swiper(".mySwiper10", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
    });

    var swiper2 = new Swiper(".mySwiper12", {
        loop: true,
        // fadeEffect: { crossFade: true },
        // effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
    });

    swiper1.controller.control = swiper2;
    swiper2.controller.control = swiper1;

    // Get the box-1-gallery elements
    var box1Gallery = document.querySelectorAll('[id^="box-1-gallery-"]');

    // Add click event listeners to each box-1-gallery element
    box1Gallery.forEach(function (box, index) {
        box.addEventListener('click', function () {
            swiper2.slideTo(index); // Slide to corresponding index in swiper2
        });
    });
});

// swiper for single product page 
var swiper = new Swiper(".mySwiper-p1", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper-p2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});


var swiper = new Swiper(".mySwiper-related-product", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        640: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 50,
        },
    },
});



// floating icons

// Add JavaScript to show/hide the floating icons on scroll
var floatingIcons = document.querySelector('.floating-icons');
var isScrolling;

window.addEventListener('scroll', function () {
    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {
        floatingIcons.classList.add('show');
    }, 66); // Adjust this value as needed (66ms is 1/15th of a second)

    // Hide icons when scrolling
    floatingIcons.classList.remove('show');
}, false);


// video
$(document).ready(function () {
    $('.video-container').click(function () {
        var videoId = $(this).data('video-id');
        var playerDiv = document.getElementById('player');
        playerDiv.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/' + videoId + '?autoplay=1" frameborder="0" allowfullscreen></iframe>';
    });
});



// ****....................................................
//     ....................................................
//                   --------------------------
//                  (        product oage      )              
//                   --------------------------
//     ....................................................
//     ....................................................****


// For Filters
document.addEventListener("DOMContentLoaded", function () {
    var filterBtn = document.getElementById('filter-btn');
    var btnTxt = document.getElementById('btn-txt');
    var filterAngle = document.getElementById('filter-angle');

    $('#filterbar').collapse(false);
    var count = 0, count2 = 0;
    function changeBtnTxt() {
        $('#filterbar').collapse(true);
        count++;
        if (count % 2 != 0) {
            filterAngle.classList.add("fa-angle-right");
            btnTxt.innerText = "show filters"
            filterBtn.style.backgroundColor = "#36a31b";
        }
        else {
            filterAngle.classList.remove("fa-angle-right")
            btnTxt.innerText = "hide filters"
            filterBtn.style.backgroundColor = "#ff935d";
        }

    }

    // For Applying Filters
    $('#inner-box').collapse(false);
    $('#inner-box2').collapse(false);
    $('#inner-box3').collapse(false);
    $('#inner-box4').collapse(false);

    // For changing NavBar-Toggler-Icon
    var icon = document.getElementById('icon');

    // Showing tooltip for AVAILABLE COLORS
    $(function () {
        $('[data-tooltip="tooltip"]').tooltip()
    })
});

// contact page

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

// popup

// document.addEventListener("DOMContentLoaded", function () {
//     // window.addEventListener("load", function () {
//     //     setTimeout(function open(event) {
//     //         document.querySelector(".popup").style.display = "block";
//     //         document.body.classList.add("popup-open");
//     //     }, 5000);
//     // });

//     document.querySelector("#close").addEventListener("click", function () {
//         closePopup();
//     });

//     document.querySelector(".popup").addEventListener("click", function (event) {
//         if (event.target === this) {
//             closePopup();
//         }
//     });

//     document.querySelectorAll(".open-popup").forEach(function (button) {
//         button.addEventListener("click", function () {
//             document.querySelector(".popup").style.display = "block";
//             document.body.classList.add("popup-open");
//         });
//     });

//     function closePopup() {
//         document.querySelector(".popup").style.display = "none";
//         document.body.classList.remove("popup-open");
//     }
// });

// popup 2
$(document).ready(function () {
    $(".size-guide-tabs a").click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
});

// checkout page

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation')

        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
    }, false)
}())

// magnifier effect for product page
