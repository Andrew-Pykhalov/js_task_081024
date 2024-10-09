let galleryReview = function() {

    let create = function() {
        let elemBg = document.createElement('div');
        elemBg.classList.add('popup__bg'); 

        let elem = document.createElement('div');
        elem.classList.add('popup');
        
        let btnClose = document.createElement('button');
        btnClose.classList.add('popup__close');
        btnClose.innerText = '+';

        let elemBlock = document.createElement('div');
        elemBlock.classList.add('popup__block');

        // let elemContent = document.createElement('div');
        // elemContent.classList.add('popup__content');

        elem.append(btnClose, elemBlock)

        btnClose.addEventListener('click', remove);
        
        elem.addEventListener('click', function(event) {
            if (!event.target.classList.contains('popup')) return;

            remove();
        });

        return [elemBg, elem]
    };

    let remove = function() {
        let elemsPopupBg = document.querySelectorAll('.popup__bg');
        let elemsPopup = document.querySelectorAll('.popup');

        elemsPopupBg.forEach(function(item) {
            item.remove();
        });
        elemsPopup.forEach(function(item) {
            item.remove();
        });
    };

    let show = function(content = null, src = null, type = null) {
        remove();
        let elems = create();

        if (type == 'zoom' && src) {
            let imgElem = document.createElement('img');
            imgElem.src = src;

            content = imgElem.outerHTML;
        };

        if (content) {
            let contentElem = elems[1].querySelector('.popup__block')
            contentElem.innerHTML = content;
        }

        document.body.append(elems[0], elems[1]);
    };

    let action = function(event) {
        event.preventDefault();

        let elem = event.target;

        if (!('popup' in elem.dataset)) {
            elemParent = elem.closest('[data-popup]');

           if (!elemParent) return;
           elem = elemParent;
        };

        if (elem.tagName == 'A') {
            if (elem.children[0] && elem.children[0].tagName == 'IMG') {
                let href = elem.href;
                
                if (!href) return;

                show(false, href, 'zoom');
            } 
        };
    };

    let elems = document.querySelectorAll('[data-popup]');

    if(!elems || elems.length == 0) return;

    elems.forEach(function(item) {
        item.addEventListener('click', action)
    });
}

window.addEventListener('load', function() {
    galleryReview();
})