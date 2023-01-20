class Popup {
    constructor(title, imgSrc, description) {
        this._popup = document.querySelector(".popup-container");
        this._handleEscClose = this._handleEscClose.bind(this);
        this.title = document.querySelector('.popup > h1');
        this.title.textContent = title;
        this.img = document.querySelector('.popup > img');
        this.img.src = `./img/${imgSrc}.png`;
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