window.addEventListener("load", () => {
   
    var slider1 = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet ' + className + '">' + (index + 1) + '</span>';
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
                return '<span class="bullet2 ' + className + '">' + (index + 1) + '</span>';
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

    
})
