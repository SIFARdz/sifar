

ScrollReveal({ 
    reset: true ,
    distance: '300px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home_photo3 ', { origin: 'top'});
ScrollReveal().reveal('.home_photo5 ', { origin: 'bottom'});
ScrollReveal().reveal('.home_photo3 ', { origin: 'left'});
ScrollReveal().reveal('.home_photo4 ', { origin: 'right'});


function changeWindow() {
    // Replace 'newPage.html' with the URL of the page you want to redirect to
    window.location.href = 'thankyou.html';
}

// Set a timeout to call the changeWindow function after 3 seconds
setTimeout(changeWindow, 4000);