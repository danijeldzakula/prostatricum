// ANIMATION
(function () {
    document.querySelectorAll('.card-animation .row div').forEach((item) => {
        item.classList.add('opacity-0');
    });
    document.querySelectorAll('#problematiche .usp-icone').forEach((item) => {
        item.classList.add('opacity-0');
    });     
    
    
    // Section one
    ScrollOut({
        once: true,
        targets: '.card-animation .row div:nth-child(1)',
        onShown(el) {
            el.classList.add('animated', 'flipInY');
            setTimeout(() => {
                el.classList.remove('opacity-0');
            });
        }
    });
    ScrollOut({
        once: true,
        targets: '.card-animation .row div:nth-child(2)',
        onShown(el) {
            el.classList.add('animated', 'animation-delay03', 'flipInY');
            setTimeout(() => {
                el.classList.remove('opacity-0');
            }, 300);
        }
    });
    ScrollOut({
        once: true,
        targets: '.card-animation .row div:nth-child(3)',
        onShown(el) {
            el.classList.add('animated', 'animation-delay06', 'flipInY');
            setTimeout(() => {
                el.classList.remove('opacity-0');
            }, 600);
        }
    });
    ScrollOut({
        once: true,
        targets: '.card-animation .row div:nth-child(4)',
        onShown(el) {
            el.classList.add('animated', 'animation-delay09', 'flipInY');
            setTimeout(() => {
                el.classList.remove('opacity-0');
            }, 900);
        }
    });
    // Section problematiche
    ScrollOut({
        once: true,
        targets: '#problematiche .usp-icone:nth-child(2)',
        onShown(el) {
            el.classList.add('animated', 'zoomIn');
            setTimeout(() => {
                el.classList.remove('opacity-0');
            });
        }
    });
    ScrollOut({
        once: true,
        targets: '#problematiche .usp-icone:nth-child(3)',
        onShown(el) {
            el.classList.add('animated', 'animation-delay03', 'zoomIn');
            setTimeout(() => {
                el.classList.remove('opacity-0');
            }, 300);
        }
    });
    ScrollOut({
        once: true,
        targets: '#problematiche .usp-icone:nth-child(4)',
        onShown(el) {
            el.classList.add('animated', 'animation-delay06', 'zoomIn');
            setTimeout(() => {
                el.classList.remove('opacity-0');
            }, 600);
        }
    });
    ScrollOut({
        once: true,
        targets: '#problematiche .usp-icone:nth-child(5)',
        onShown(el) {
            el.classList.add('animated', 'animation-delay09', 'zoomIn');
            setTimeout(() => {
                el.classList.remove('opacity-0');
            }, 900);
        }
    });
    
    











})();