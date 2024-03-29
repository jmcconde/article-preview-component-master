const shareIcon = document.querySelector('.share-btn');
const shareOverlay = document.querySelector('.share-overlay');

const width = window.innerWidth;

if(width < 769) {
    shareOverlay.classList.add('hidden-mobile');
    shareIcon.addEventListener('click', toggleMobile);
} else {
    shareOverlay.classList.add('hidden-desktop');
    shareIcon.addEventListener('click', toggleDesktop);
    shareIcon.addEventListener('blur', toggleBlur)
}


window.addEventListener('resize', () => {
    let width = window.innerWidth;
    if(width < 769) {
        shareOverlay.classList.remove('hidden-desktop');
        shareOverlay.classList.add('hidden-mobile');
        shareIcon.addEventListener('click', toggleMobile);
        shareIcon.removeEventListener('click', toggleDesktop);
        shareIcon.removeEventListener('blur', toggleBlur)
    } else {
        shareOverlay.classList.remove('hidden-mobile');
        shareOverlay.classList.add('hidden-desktop');
        shareIcon.removeEventListener('click', toggleMobile);
        shareIcon.addEventListener('click', toggleDesktop);
        shareIcon.blur();
        shareIcon.addEventListener('blur', toggleBlur)
    }
})

function toggleMobile() {
    shareOverlay.classList.toggle('hidden-mobile');
}

function toggleDesktop() {
    shareOverlay.classList.toggle('hidden-desktop');
    if(isFocused() && shareOverlay.classList.contains('hidden-desktop')) {
        shareIcon.blur();
    }
}

function toggleBlur() {
    shareOverlay.classList.add('hidden-desktop');
    shareIcon.blur();
}

function isFocused() {
    return document.activeElement === shareIcon;
}