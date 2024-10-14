document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".about");
    window.addEventListener('scroll', () => {
        items.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            
            if (rect.top <= window.innerHeight - 200 && rect.bottom >= 200) {
                sec.classList.remove('animate__animated', 'animate__lightSpeedOutRight');
                sec.classList.add('animate__animated', 'animate__lightSpeedInRight');

            } else {
                sec.classList.remove('animate__animated', 'animate__lightSpeedInRight');
                sec.classList.add('animate__animated', 'animate__lightSpeedOutRight');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".hh1");
    window.addEventListener('scroll', () => {
        items.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            
            if (rect.top <= window.innerHeight - 200 && rect.bottom >= 200) {
                sec.classList.remove('animate__animated', 'animate__fadeOutDown');
                sec.classList.add('animate__animated', 'animate__fadeInDown');

            } else {
                sec.classList.remove('animate__animated', 'animate__fadeInDown');
                sec.classList.add('animate__animated', 'animate__fadeOutDown');
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".rightt");
    window.addEventListener('scroll', () => {
        items.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            
            if (rect.top <= window.innerHeight - 200 && rect.bottom >= 200) {
                sec.classList.remove('animate__animated', 'animate__fadeOutLeft');
                sec.classList.add('animate__animated', 'animate__fadeInLeft');

            } else {
                sec.classList.remove('animate__animated', 'animate__fadeInLeft');
                sec.classList.add('animate__animated', 'animate__fadeOutLeft');
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".centerr");
    window.addEventListener('scroll', () => {
        items.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            
            if (rect.top <= window.innerHeight - 200 && rect.bottom >= 200) {
                sec.classList.remove('animate__animated', 'animate__fadeOut');
                sec.classList.add('animate__animated', 'animate__fadeIn');

            } else {
                sec.classList.remove('animate__animated', 'animate__fadeIn');
                sec.classList.add('animate__animated', 'animate__fadeOut');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".leftt");
    window.addEventListener('scroll', () => {
        items.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            
            if (rect.top <= window.innerHeight - 200 && rect.bottom >= 200) {
                sec.classList.remove('animate__animated', 'animate__fadeOutRight');
                sec.classList.add('animate__animated', 'animate__fadeInRight');

            } else {
                sec.classList.remove('animate__animated', 'animate__fadeInRight');
                sec.classList.add('animate__animated', 'animate__fadeOutRight');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".support");
    window.addEventListener('scroll', () => {
        items.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            
            if (rect.top <= window.innerHeight - 200 && rect.bottom >= 200) {
                sec.classList.remove('animate__animated', 'animate__fadeOutRight');
                sec.classList.add('animate__animated', 'animate__fadeInRight');

            } else {
                sec.classList.remove('animate__animated', 'animate__fadeInRight');
                sec.classList.add('animate__animated', 'animate__fadeOutRight');
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll("#fh2");
    window.addEventListener('scroll', () => {
        items.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            
            if (rect.top <= window.innerHeight - 200 && rect.bottom >= 200) {
                
                sec.classList.add('animate__animated', 'animate__jackInTheBox');
            } 
           })
    });
});
