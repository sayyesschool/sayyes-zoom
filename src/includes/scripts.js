var $requestModal = $('#request-modal');
var $successModal = $('#success-modal');

$('input[type=tel]').mask('+7 (999) 999-9999');

$('.whatsapp-button').click(function() {
    ym(YANDEX_METRIKA_COUNTER, 'reachGoal', 'wa');
    gtag('event', 'wa', {
        event_category: 'click'
    });
    fbq('track', 'Contact');

    return true;
});

$('.facebook-button').click(function() {
    ym(YANDEX_METRIKA_COUNTER, 'reachGoal', 'fb');
    gtag('event', 'fb', {
        event_category: 'click'
    });
    fbq('track', 'Contact');

    return true;
});

$('.instagram-button').click(function() {
    ym(YANDEX_METRIKA_COUNTER, 'reachGoal', 'inst');
    gtag('event', 'inst', {
        event_category: 'click'
    });
    fbq('track', 'AddToWishlist_insta');

    return true;
});

$('.tel-link, .call-button').click(function() {
    gtag('event', 'tel', {
        event_category: 'click'
    });

    return true;
});

document.querySelectorAll('form').forEach(function(form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var that = this;
        var name = this.elements.name.value;
        var phone = this.elements.phone.value;

        if (!name || !phone) {
            return false;
        }

        var data = {
            type: 'Заявка на пробный урок по скайп акция лето',
            name: name,
            phone: phone,
        };

        ym(YANDEX_METRIKA_COUNTER, 'reachGoal', 'lead');
        gtag('event', 'lead', {
            event_category: 'form'
        });
        fbq('track', 'Lead_skype');

        crm.addStudyRequest(data);

        $.post({
            url: 'https://api.sayes.ru/request.php' + location.search,
            data: data,
            contentType: 'application/x-www-form-urlencoded'
        }).done(function() {
            $requestModal.fadeOut();
            $successModal.fadeIn();
            that.elements.name.value = '';
            that.elements.phone.value = '';
        });
    });
});

$('[data-fancybox]').fancybox({
    youtube: {
        controls: 0,
        showinfo: 0
    },
    vimeo: {
        color: 'f00'
    }
});

$('a.scroll-to').on('click', function(e) {
    e.preventDefault();

    $([document.documentElement, document.body]).animate({
        scrollTop: $(this.getAttribute('href')).offset().top
    }, 1000);
});

document.querySelectorAll('.accordion-item').forEach(function(item) {
    var accordion = item.parentNode;
    var header = item.firstChild;

    header.addEventListener('click', function() {
        var item = this.parentNode;

        accordion.childNodes.forEach(function(child) {
            var content = child.lastChild;

            if (child === item) {
                child.classList.toggle('accordion-item--open');
                $(content).slideToggle();
            } else {
                child.classList.remove('accordion-item--open');
                $(content).slideUp();
            }
        });
    });
});

new Swiper('.teacher-slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    navigation: {
        nextEl: '.teacher-slider .swiper-button-next',
        prevEl: '.teacher-slider .swiper-button-prev'
    },
    breakpoints: {
        1200: {
            spaceBetween: 140
        }
    }
});

new Swiper('.portal-testimonials-slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    navigation: {
        nextEl: '.portal-testimonials-slider .swiper-button-next',
        prevEl: '.portal-testimonials-slider .swiper-button-prev'
    },
    breakpoints: {
        1200: {
            spaceBetween: 130
        }
    }
});

new Swiper('.people-testimonials-slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.people-testimonials-slider .swiper-button-next',
        prevEl: '.people-testimonials-slider .swiper-button-prev'
    },
    breakpoints: {
        701: {
            slidesPerView: 2,
        }
    }
});

document.querySelectorAll('.text-show').forEach(function(element) {
    element.addEventListener('click', function() {
        var block = this.parentNode;

        block.classList.toggle('is-active');

        if (block.classList.contains('is-active')) {
            this.textContent = 'Свернуть';
        } else {
            this.textContent = 'Развернуть';
        }
    });
});

$('.modal-button').on('click', function() {
    $requestModal.fadeIn();
});

$('.modal-close-button').on('click', function() {
    var modal = this.parentNode.parentNode;

    $(modal).fadeOut();
});