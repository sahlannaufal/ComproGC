(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // // Change Image on Click
    // window.changeImage = function (element) {
    //     // Update gambar utama
    //     const mainImage = document.getElementById('main-image');
    //     mainImage.src = element.src;
    //     mainImage.alt = element.alt;

    //     // Highlight gambar yang aktif
    //     const thumbnails = document.querySelectorAll('.gallery-img');
    //     thumbnails.forEach((img) => img.classList.remove('active'));
    //     element.classList.add('active');
    // };

    // // Inisialisasi gambar pertama sebagai aktif
    // $(document).ready(function () {
    //     const firstImage = document.querySelector('.gallery-img');
    //     if (firstImage) firstImage.classList.add('active');
    // });

    // Intersection Observer for animations
    $(document).ready(function () {
        const cards = document.querySelectorAll('.philosophy-card, .operation-philosophy');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            observer.observe(card);
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const navbar = document.querySelector('.navbar');
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    
        // Tambahkan event listener untuk hover
        navbar.addEventListener('mouseenter', function() {
            if (window.scrollY <= 50) {
                navbar.classList.add('scrolled');
            }
        });
    
        navbar.addEventListener('mouseleave', function() {
            if (window.scrollY <= 50) {
                navbar.classList.remove('scrolled');
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const navbar = document.querySelector('.navbar');
        const navLinks = navbar.querySelectorAll('.nav-link');
    
        // Fungsi untuk mengubah warna navbar
        function updateNavbarColor() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    
        // Tambahkan event listener untuk scroll
        window.addEventListener('scroll', updateNavbarColor);
    
        // Tambahkan event listener untuk hover
        navbar.addEventListener('mouseenter', function() {
            navbar.classList.add('hovered');
        });
    
        navbar.addEventListener('mouseleave', function() {
            navbar.classList.remove('hovered');
        });
    });
    
    // Tambahkan event listener untuk hover pada nav-link
    $(document).ready(function() {
        $('.nav-link').hover(
            function() {
                // Saat mouse enter
                if (!$(this).hasClass('active')) {
                    $(this).css('color', '#28a745');
                }
            },
            function() {
                // Saat mouse leave
                if (!$(this).hasClass('active')) {
                    // Reset warna sesuai kondisi navbar
                    if ($('.navbar').hasClass('scrolled') || $('.navbar').hasClass('hovered')) {
                        $(this).css('color', 'var(--dark)');
                    } else {
                        $(this).css('color', '#FFFFFF');
                    }
                }
            }
        );
    });
})(jQuery);

