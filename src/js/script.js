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
    let button1 = document.querySelector('.carrera1');
    let container__career = document.querySelector('.carrera1__career');
    let button2 = document.querySelector('.carrera2');
    let container__career2 = document.querySelector('.carrera2__career');
    let button3 = document.querySelector('.carrera3');
    let container__career3 = document.querySelector('.carrera3__career');
    let button4 = document.querySelector('.carrera4');
    let container__career4 = document.querySelector('.carrera4__career');
    let button5 = document.querySelector('.carrera5');
    let container__career5 = document.querySelector('.carrera5__career');
    button1.addEventListener("click", () => {
        button1.classList.toggle("gestion1");
        container__career.classList.toggle("gestion2");
    })
    button2.addEventListener("click", () => {
        button2.classList.toggle("ingenieria1");
        container__career2.classList.toggle("ingenieria2");
    })
    button3.addEventListener("click", () => {
        button3.classList.toggle("educacion1");
        container__career3.classList.toggle("educacion2");
    })
    button4.addEventListener("click", () => {
        button4.classList.toggle("ciencias1");
        container__career4.classList.toggle("ciencias2");
    })
    button5.addEventListener("click", () => {
        button5.classList.toggle("salud1");
        container__career5.classList.toggle("salud2");
    })
})


