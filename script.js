$(document).ready(function() {

    const $carouselTrack = $('.carousel-track');
    const $carouselItems = $('.carousel-item');
    const $prevBtn = $('.prev-btn');
    const $nextBtn = $('.next-btn');

    let currentIndex = 0;
    const itemsPerView = 3; 
    const totalItems = $carouselItems.length;

    function updateCarousel() {
        const itemWidth = $carouselItems.first().outerWidth(true); // true includes margins
        const offset = -currentIndex * itemWidth;
        $carouselTrack.css('transform', `translateX(${offset}px)`);

        
        $prevBtn.prop('disabled', currentIndex === 0);
        $nextBtn.prop('disabled', currentIndex >= totalItems - itemsPerView);
    }

    $nextBtn.on('click', function() {
        if (currentIndex < totalItems - itemsPerView) {
            currentIndex++;
            updateCarousel();
        }
    });

    $prevBtn.on('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    
    updateCarousel();


    $(window).on('resize', function() {
    
        if ($(window).width() <= 768 && $(window).width() > 480) { 
             itemsPerView = 2;
        } else if ($(window).width() <= 480) { 
            itemsPerView = 1;
        } else {
            itemsPerView = 3; 
        }
        updateCarousel(); 
    });


    

    const $requestDishModal = $('#requestDishModal');
    const $requestDishBtn = $('.request-dish-btn');
    const $closeModalBtn = $requestDishModal.find('.close-button');
    const $cancelBtn = $requestDishModal.find('.btn-cancel');
    const $submitRequestBtn = $requestDishModal.find('.btn-submit-request');

    function openModal() {
        $requestDishModal.css('display', 'flex');
        $('body').addClass('no-scroll'); 
    }

    function closeModal() {
        $requestDishModal.css('display', 'none');
        $('body').removeClass('no-scroll'); 
        $('#requestDishForm')[0].reset(); 
    }

    $requestDishBtn.on('click', openModal);
    $closeModalBtn.on('click', closeModal);
    $cancelBtn.on('click', closeModal);

    $submitRequestBtn.on('click', function(e) {
        e.preventDefault(); 

        
        const dishName = $('#dishName').val();
        const yourName = $('#yourName').val();
        const yourEmail = $('#yourEmail').val();

        if (dishName && yourName && yourEmail) {
            alert('Request for "' + dishName + '" submitted by ' + yourName + ' (' + yourEmail + ')');
            closeModal();
        } else {
            alert('Please fill in all fields.');
        }
    
    });

    $(window).on('click', function(event) {
        if ($(event.target).is($requestDishModal)) {
            closeModal();
        }
    });

    const $foodVideo = $('#foodVideo');
    const $playButton = $('#playButton');

    $playButton.on('click', function() {
        if ($foodVideo[0].paused) {
            $foodVideo[0].play();
            $playButton.hide();
        }
    });

    $foodVideo.on('pause', function() {
        $playButton.show();
    });

    $foodVideo.on('play', function() {
        $playButton.hide();
    });

    $foodVideo.on('ended', function() {
        $playButton.show();
    });

});
let buttons = document.querySelectorAll('.add-to-cart-btn');

buttons.forEach(button => {
    let val = 0;
    button.addEventListener('click', () => {
        val += 1;
        button.innerText = val;
    });
});

