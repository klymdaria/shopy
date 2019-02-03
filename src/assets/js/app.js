import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

import slick from 'slick-carousel/slick/slick.min.js';
import 'lightbox2/dist/js/lightbox.js';


$(document).foundation();

$('.ba-featured-products').slick({
    arrows:false,
    dots: true,
    slide:'.ba-featured-product',
    appendDots: '.ba-featured-products__dots'
});

let singleGallerySlider = $('.ba-single-gallery');

singleGallerySlider.slick({
    infinite: false,
    arrows:false,
    dots: false,
});


//Gallery thumbs

const thumbsLinks = $('[data-gallery-thumbs] a');

thumbsLinks.on('click', function (event) {
    event.preventDefault();
    let clickedThumbLink = $(this);
    let clickedThumbIndex = thumbsLinks.index(clickedThumbLink);

    // thumbsLinks.removeClass('active');
    // clickedThumbLink.addClass('active');

    singleGallerySlider.slick('slickGoTo',clickedThumbIndex);
})

singleGallerySlider.on('afterChange', function (event, slick, currentSlide) {
    thumbsLinks.removeClass('active');
    thumbsLinks.eq(currentSlide).addClass('active');
})

let filters = $('.ba-filters-wrap');
$('[data-filters]').on('click', () => {
filters.toggleClass('open');
});