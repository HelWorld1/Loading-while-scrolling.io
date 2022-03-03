$(window).scroll(function () {
    let servicesHeight = $('.animation').height();
    let servicesOffset = $('.animation').offset().top;
    let animStart = 4;
    let servicesPoint = window.innerHeight - servicesHeight / animStart;
    console.log(servicesHeight)
    console.log(servicesOffset)
    if (servicesHeight > window.innerHeight) {
        let servicesPoint = window.innerHeight - window.innerHeight / animStart;    
    }
    console.log($(window).innerHeight)
    if ($(this).scrollTop() >= 751) {
        $('.services').removeClass('_hide');
        console.log(servicesPoint)
    }
    if ($(this).scrollTop() >= 1371) {
        $('.about-company').removeClass('_hide');
        console.log(servicesPoint)
    }
    if ($(this).scrollTop() >= 1871) {
        $('#map').removeClass('_hide');
        console.log(servicesPoint)
    }
    let windowCentre = window.innerHeight / 2 + window.scrollY;
    let scrollOffset = $('.animation').offset().top;
    console.log(windowCentre)
    console.log(scrollOffset)
})