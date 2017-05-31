// Scripts
// Store Banner Images
var img0 = 'https://unsplash.it/600/300?image=1';
var img1 = 'https://unsplash.it/600/300?image=2';
var img2 = 'https://unsplash.it/600/300?image=3';

// Random Number Generator
var maxRand = 3;
var randNum = Math.floor( Math.random() * maxRand );
console.log(randNum);

// Video Banner
$('#video').YTPlayer({
    fitToBackground: true,
    videoId: 'rHG-JO8gIGk', mute: false, pauseOnScroll: true
});

// Lightgallery
$('figure').lightGallery({
    selector: 'a', 
    mode: 'lg-lollipop',
    thumbnail: true
});