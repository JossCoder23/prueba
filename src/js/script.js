window.addEventListener("load", () => {
   
    var slider1 = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet ' + className + '"></span>';
            }
        },
        breakpoints: {
            760: {
                slidesPerView: 2,
                slidesPerColumn: 1
            },
            999: {
                slidesPerView: 3,
                slidesPerColumn: 1
            },
            1280: {
                slidesPerView: 3,
                slidesPerColumn: 1
            }
        }
    });

    var slider2 = new Swiper(".mySwiper2", {
        pagination: {
            el: ".swiper-pagination2",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet2 ' + className + '"></span>';
            }
        },
        breakpoints: {
            760: {
                slidesPerView: 2,
                slidesPerColumn: 1
            },
            999: {
                slidesPerView: 3,
                slidesPerColumn: 1
            },
            1280: {
                slidesPerView: 3,
                slidesPerColumn: 1
            }
        }
    });
    
    // let button1 = document.querySelector('.carrera1__button');
    let button1 = document.querySelector('.carrera_1');
    let button2 = document.querySelector('.carrera_2');
    let button3 = document.querySelector('.carrera_3');
    let button4 = document.querySelector('.carrera_4');
    let button5 = document.querySelector('.carrera_5');

    button1.addEventListener("click", () => {
        button1.style.transition = "all 1s ease-in";
        button1.classList.toggle("activa");
    })

    button2.addEventListener("click", () => {
        button2.classList.toggle("activa2");
    })

    button3.addEventListener("click", () => {
        button3.classList.toggle("activa3");
    })

    button4.addEventListener("click", () => {
        button4.classList.toggle("activa4");
    })

    button5.addEventListener("click", () => {
        button5.classList.toggle("activa5");
    })

})


