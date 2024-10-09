let bgChange = function() {

    let classToggle = function() {
        let body = document.querySelector(['body']);
        body.classList.toggle('dif_bg');
    }

    let switcher = document.querySelector('.bg_change');

    switcher.addEventListener('click', classToggle);

}

window.addEventListener('load', function() {
    bgChange();
})