(function ($) {
    "use strict";

    // PRE LOADER
    $(window).on('load', function() {
        $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
    });

    // NAVBAR
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('hide');
        } else {
            $('.navbar').removeClass('hide');
        }
    });

    $('.navbar-collapse a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });

    $('.slick-slideshow').slick({
        autoplay: true,
        infinite: true,
        arrows: false,
        fade: true,
        dots: true,
    });

    $('.slick-testimonial').slick({
        arrows: false,
        dots: true,
    });

    // Leaflet 지도 초기화
    if (document.getElementById('map')) {
        initLeafletMap();
    }

    function initLeafletMap() {
        var map = L.map('map').setView([37.5665, 126.9780], 10);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var coramfluencerLocations = [
            { lat: 37.5665, lng: 126.9780, name: 'John Doe', content: 'John shares his journey of finding the perfect apartment in Seoul. His tips on negotiating rent and understanding the local market are invaluable.' },
            { lat: 37.541, lng: 127.0, name: 'Jane Smith', content: 'Jane provides insights into the best neighborhoods for families. Her reviews of local schools and amenities help families make informed decisions.' },
            { lat: 37.5236, lng: 126.9846, name: 'Alice Kim', content: 'Alice explores the luxury housing market in Seoul. Her advice on finding high-end apartments and working with realtors is a must-read.' }
        ];

        coramfluencerLocations.forEach(function(location) {
            var marker = L.marker([location.lat, location.lng]).addTo(map);
            marker.on('click', function() {
                showCoramfluencerInfo(location.name, location.content);
            });
        });
    }

    function showCoramfluencerInfo(name, content) {
        var coramfluencerInfoDiv = document.getElementById('coramfluencer-info');
        coramfluencerInfoDiv.innerHTML = `
            <h4>${name}</h4>
            <p>${content}</p>
        `;
    }

    // 기타 커스텀 초기화 코드들
    // 예를 들어, 스크롤 이벤트, 클릭 이벤트 등
    $('.some-button').on('click', function() {
        alert('Button clicked!');
    });

    // 더 많은 초기화 코드들...
})(window.jQuery);