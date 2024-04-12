window.addEventListener("load", () => {
   
    let date1 = document.querySelector('.bloque3__years');
    let date2 = document.querySelector('.bloque3__convenios');
    let date3 = document.querySelector('.bloque3__egresados');
    let date4 = document.querySelector('.bloque3__talleres');
    let cantidad1 = 0;
    let cantidad2 = 0;
    let cantidad3 = 0;
    let cantidad4 = 0;

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
                slidesPerView: 4,
                slidesPerColumn: 1
            },
            1280: {
                slidesPerView: 4,
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

    let bloque2__button = document.querySelector('.change_button');
    let bloque4__button = document.querySelector('.bloque4__button--container');

    if(screen.width > 1020 ) {
        bloque2__button.setAttribute("onclick", "window.scrollTo({top:50, behavior: 'smooth'});")
        bloque4__button.setAttribute("onclick", "window.scrollTo({top:50, behavior: 'smooth'});")
    }

    if(screen.height > 500) {
        let tiempo1 = setInterval(() => {
            cantidad1 += 1;
            date1.textContent = cantidad1;
            if( cantidad1 === 63 ) {
                clearInterval( tiempo1 );
            }
        }, 80);
            
        let tiempo2 = setInterval(() => {
            cantidad2 += 1;
            date2.textContent = cantidad2;
            if( cantidad2 === 200 ) {
                clearInterval( tiempo2 );
            }
        }, 35);
    
        let tiempo3 = setInterval(() => {
            cantidad3 += 1;
            date3.textContent = cantidad3;
            if( cantidad3 === 97 ) {
                clearInterval( tiempo3 );
            }
        }, 70);
    
        let tiempo4 = setInterval(() => {
            cantidad4 += 1;
            date4.textContent = cantidad4;
            if( cantidad4 === 15 ) {
                clearInterval( tiempo4 );
            }
        }, 150);
    }

})


