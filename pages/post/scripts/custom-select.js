const getTemplate = (data = [], placeholder) => {
    let text = placeholder ?? 'Select from the list';
    const items = data.map((element, index) => {
        return `<li class="select__option" data-id="${index}" data-type="option">${element}</li>`
    });
    return `
        <div class="select__input" data-type="input">
            <p class="select__input-text" data-type="input">${text}</p>
            <span data-type="input"></span>
        </div>
        <div class="select__dropdown">
            <ul class="select__list">
            ${items.join('')}
            </ul>
        </div>
    `
};

class Select {
    constructor(selector, options) {
        this.elementSelect = document.querySelector(selector);
        this.options = options;
        this.selectedOption = null;
        this._render();
        this._setup();
    };

    _render() {
        const {placeholder, data} = this.options;
        this.elementSelect.classList.add('select')
        this.elementSelect.innerHTML = getTemplate(data, placeholder);
    };

    _setup() {
        this.elementSelect.addEventListener('click', (evt) => {
            this.clickHandler(evt)
        });
        document.addEventListener('click', (evt) => {
            this.clickMissHandler(evt)
        });
        this.elementText = this.elementSelect.querySelector('.select__input-text');
    };

    clickMissHandler(evt) {
        const {type} = evt.target.dataset
        if (type !== 'input') {
            this.close();
        }
    }

    clickHandler(evt) {
        const {type} = evt.target.dataset
        if (type === 'input') {
            this.toggle();
        } else if (type === 'option') {
            const optionText = evt.target.textContent;
            const optionId = evt.target.dataset.id;
            this.choice(optionText, optionId);
        } 
    };

    get current() {
        return this.options.data.find(element => element.index === this.selectedOption)
    };

    choice(text, id) {
        this.selectedOption = id;
        this.elementText.textContent = text;
        this.elementSelect.querySelectorAll('[data-type="option"]').forEach(element => {
            element.classList.remove('active');
        });
        this.elementSelect.querySelector(`[data-id="${id}"]`).classList.add('active');
        this.options.onSelect ? this.options.onSelect(text, id) : null;
        this.close();
    };

    get isOpen() {
        return this.elementSelect.classList.contains('open');
    };

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        document.querySelectorAll('.select').forEach(element => {
            element.classList.remove('open');
        });
        this.elementSelect.classList.add('open');
    };

    close() {
        this.elementSelect.classList.remove('open');
    };
}