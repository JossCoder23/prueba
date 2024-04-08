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

    let button1 = document.querySelector('.carrera1__button');
    let careers1 = document.querySelectorAll('.carrera1__career');
    let button2 = document.querySelector('.carrera2__button');
    let careers2 = document.querySelectorAll('.carrera2__career');
    let button3 = document.querySelector('.carrera3__button');
    let careers3 = document.querySelectorAll('.carrera3__career');
    let button4 = document.querySelector('.carrera4__button');
    let careers4 = document.querySelectorAll('.carrera4__career');
    let button5 = document.querySelector('.carrera5__button');
    let careers5 = document.querySelectorAll('.carrera5__career');

    button1.addEventListener("click", () => {
        button1.innerHTML = `<h1 style="margin:0; font-size:1.8rem">&#x2013;</h1>`;
        button1.classList.add("button_active_one");
        careers1[0].style.display = "grid";
        //cerrando boton 2
        button2.innerHTML = `<h1 style="margin:0; font-size:2.5rem">&#x2b;</h1>`;
        button2.classList.remove("button_active_two");
        careers2[0].style.display = "none";
        careers2[1].style.display = "none";
        careers2[2].style.display = "none";
        careers2[3].style.display = "none";
        careers2[4].style.display = "none";
        //cerrando boton 2
        //cerrando boton 3 
        button3.innerHTML = `<h1 style="margin:0; font-size:2.6rem">&#x2b;</h1>`;
        button3.classList.remove("button_active_three");
        careers3[0].style.display = "none";
        careers3[1].style.display = "none";
        //cerrando boton 3 
        //cerrando boton 4
        button4.innerHTML = `<h1 style="margin:0; font-size:2.6rem">&#x2b;</h1>`;
        button4.classList.remove("button_active_four");
        careers4[0].style.display = "none";
        careers4[1].style.display = "none";
        careers4[2].style.display = "none";
        //cerrando boton 4
        //cerrando boton 5 
        button5.innerHTML = `<h1 style="margin:0; font-size:2.6rem">&#x2b;</h1>`;
        button5.classList.remove("button_active_five");
        careers5[0].style.display = "none";
        careers5[1].style.display = "none";
        careers5[2].style.display = "none";
        careers5[3].style.display = "none";
        careers5[4].style.display = "none";
        careers5[5].style.display = "none";
        careers5[6].style.display = "none";
        careers5[7].style.display = "none";
        careers5[8].style.display = "none";
        careers5[9].style.display = "none";
        //cerrando boton 5 
    })

    button2.addEventListener("click", () => {
        button2.innerHTML = `<h1 style="margin:0; font-size:1.8rem">&#x2013;</h1>`;
        button2.classList.add("button_active_two");
        careers2[0].style.display = "grid";
        careers2[1].style.display = "grid";
        careers2[2].style.display = "grid";
        careers2[3].style.display = "grid";
        careers2[4].style.display = "grid";
        //cerrando boton 1
        button1.innerHTML = `<h1 style="margin:0; font-size:2.5rem">&#x2b;</h1>`;
        button1.classList.remove("button_active_one");
        careers1[0].style.display = "none";
        //cerrando boton 1
        //cerrando boton 3 
        button3.innerHTML = `<h1 style="margin:0; font-size:2.6rem">&#x2b;</h1>`;
        button3.classList.remove("button_active_three");
        careers3[0].style.display = "none";
        careers3[1].style.display = "none";
        //cerrando boton 3 
        //cerrando boton 4
        button4.innerHTML = `<h1 style="margin:0; font-size:2.6rem">&#x2b;</h1>`;
        button4.classList.remove("button_active_four");
        careers4[0].style.display = "none";
        careers4[1].style.display = "none";
        careers4[2].style.display = "none";
        //cerrando boton 4
        //cerrando boton 5 
        button5.innerHTML = `<h1 style="margin:0; font-size:2.6rem">&#x2b;</h1>`;
        button5.classList.remove("button_active_five");
        careers5[0].style.display = "none";
        careers5[1].style.display = "none";
        careers5[2].style.display = "none";
        careers5[3].style.display = "none";
        careers5[4].style.display = "none";
        careers5[5].style.display = "none";
        careers5[6].style.display = "none";
        careers5[7].style.display = "none";
        careers5[8].style.display = "none";
        careers5[9].style.display = "none";
        //cerrando boton 5 
    })
    
    button3.addEventListener("click", () => {
        button3.innerHTML = `<h1 style="margin:0; font-size:1.8rem">&#x2013;</h1>`;
        button3.classList.add("button_active_three");
        careers3[0].style.display = "grid";
        careers3[1].style.display = "grid";
        //cerrando boton 1
        button1.innerHTML = `<h1 style="margin:0; font-size:2.5rem">&#x2b;</h1>`;
        button1.classList.remove("button_active_one");
        careers1[0].style.display = "none";
        //cerrando boton 1
        //cerrando boton 2
        button2.innerHTML = `<h1 style="margin:0; font-size:2.6rem">&#x2b;</h1>`;
        button2.classList.remove("button_active_two");
        careers2[0].style.display = "none";
        careers2[1].style.display = "none";
        careers2[2].style.display = "none";
        careers2[3].style.display = "none";
        careers2[4].style.display = "none";
        //cerrando boton 2
        //cerrando boton 4
        button4.innerHTML = `<h1 style="margin:0; font-size:2.6rem">&#x2b;</h1>`;
        button4.classList.remove("button_active_four");
        careers4[0].style.display = "none";
        careers4[1].style.display = "none";
        careers4[2].style.display = "none";
        //cerrando boton 4
        //cerrando boton 5 
        button5.innerHTML = `<h1 style="margin:0; font-size:2.6rem">&#x2b;</h1>`;
        button5.classList.remove("button_active_five");
        careers5[0].style.display = "none";
        careers5[1].style.display = "none";
        careers5[2].style.display = "none";
        careers5[3].style.display = "none";
        careers5[4].style.display = "none";
        careers5[5].style.display = "none";
        careers5[6].style.display = "none";
        careers5[7].style.display = "none";
        careers5[8].style.display = "none";
        careers5[9].style.display = "none";
        //cerrando boton 5 
    })

    button4.addEventListener("click", () => {
        button4.innerHTML = `<h1 style="margin:0; font-size:1.8rem">&#x2013;</h1>`;
        button4.classList.add("button_active_four");
        careers4[0].style.display = "grid";
        careers4[1].style.display = "grid";
        careers4[2].style.display = "grid";
        //cerrando boton 1
        button1.innerHTML = `<h1 style="margin:0; font-size:2.5rem">&#x2b;</h1>`;
        button1.classList.remove("button_active_one");
        careers1[0].style.display = "none";
        //cerrando boton 1
        //cerrando boton 2
        button2.innerHTML = `<h1 style="margin:0; font-size:2.5rem">&#x2b;</h1>`;
        button2.classList.remove("button_active_two");
        careers2[0].style.display = "none";
        careers2[1].style.display = "none";
        careers2[2].style.display = "none";
        careers2[3].style.display = "none";
        careers2[4].style.display = "none";
        //cerrando boton 2
        //cerrando boton 3 
        button3.innerHTML = `<h1 style="margin:0; font-size:2.6rem">&#x2b;</h1>`;
        button3.classList.remove("button_active_three");
        careers3[0].style.display = "none";
        careers3[1].style.display = "none";
        //cerrando boton 3 
        //cerrando boton 5 
        button5.innerHTML = `<h1 style="margin:0; font-size:2.6rem">&#x2b;</h1>`;
        button5.classList.remove("button_active_five");
        careers5[0].style.display = "none";
        careers5[1].style.display = "none";
        careers5[2].style.display = "none";
        careers5[3].style.display = "none";
        careers5[4].style.display = "none";
        careers5[5].style.display = "none";
        careers5[6].style.display = "none";
        careers5[7].style.display = "none";
        careers5[8].style.display = "none";
        careers5[9].style.display = "none";
        //cerrando boton 5 
    })

    button5.addEventListener("click", () => {
        button5.innerHTML = `<h1 style="margin:0; font-size:1.8rem">&#x2013;</h1>`;
        button5.classList.add("button_active_five");
        careers5[0].style.display = "grid";
        careers5[1].style.display = "grid";
        careers5[2].style.display = "grid";
        careers5[3].style.display = "grid";
        careers5[4].style.display = "grid";
        careers5[5].style.display = "grid";
        careers5[6].style.display = "grid";
        careers5[7].style.display = "grid";
        careers5[8].style.display = "grid";
        careers5[9].style.display = "grid";
        //cerrando boton 1
        button1.innerHTML = `<h1 style="margin:0; font-size:2.5rem">&#x2b;</h1>`;
        button1.classList.remove("button_active_one");
        careers1[0].style.display = "none";
        //cerrando boton 1
        //cerrando boton 2
        button2.innerHTML = `<h1 style="margin:0; font-size:2.5rem">&#x2b;</h1>`;
        button2.classList.remove("button_active_two");
        careers2[0].style.display = "none";
        careers2[1].style.display = "none";
        careers2[2].style.display = "none";
        careers2[3].style.display = "none";
        careers2[4].style.display = "none";
        //cerrando boton 2
        //cerrando boton 3 
        button3.innerHTML = `<h1 style="margin:0; font-size:2.6rem">&#x2b;</h1>`;
        button3.classList.remove("button_active_three");
        careers3[0].style.display = "none";
        careers3[1].style.display = "none";
        //cerrando boton 3 
        //cerrando boton 4
        button4.innerHTML = `<h1 style="margin:0; font-size:2.6rem">&#x2b;</h1>`;
        button4.classList.remove("button_active_four");
        careers4[0].style.display = "none";
        careers4[1].style.display = "none";
        careers4[2].style.display = "none";
        //cerrando boton 4
    });
    

})


