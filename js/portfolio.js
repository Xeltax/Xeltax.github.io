let index = 0
let globalImgSrc = []
class Popup {
    constructor(title, imgSrc, description) {
        this._popup = document.querySelector(".popup-container");
        this._handleEscClose = this._handleEscClose.bind(this);
        this.title = document.querySelector('.popup > h1');
        this.title.textContent = title;
        this.img = document.querySelector('.popup > img');
        if (imgSrc) {
            globalImgSrc = imgSrc
            this.img.src = `./img/${imgSrc[index]}.png`;
        }
        this.desc = document.querySelector('.popup > h3');
        this.desc.textContent = description;
    }

    open() {
        this._popup.classList.add('popup_opened');
        this._popup.animate([{ opacity : "0"}, {opacity : "1"}], {duration: 350, fill: "forwards"});
        this._popup.style.visibility = 'visible';
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        console.log('close');
        globalImgSrc = []
        index = 0
        this._popup.classList.remove('popup_opened');
        this._popup.animate([{ opacity : "1"}, {opacity : "0"}], {duration: 350, fill: "forwards"});
        setTimeout(() => {
            this._popup.style.visibility = 'hidden';
        } , 1000);
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
        this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
            this.close();
        }
        });
    }
}

function changeImage(value) {
    if (globalImgSrc) {
        if (value === false && index < globalImgSrc.length - 1) {
            index++;
        } else if (value === true && index > 0) {
            index--;
        }
        console.log(index)
        let img= document.querySelector('.popup > img');
        img.src = `./img/${globalImgSrc[index]}.png`;
    }
}