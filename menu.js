class PrilibreriMenu extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});

    const wrapper = document.createElement('div');
    wrapper.classList.add('Menu');

    const style = document.createElement('style');
    style.textContent = `
    .Menu {
      position: fixed;
      top: 0px;
      right: 0px;
      padding: 5px;
      background: #ccc;
    }`;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    this.wrapper = wrapper;
  }
  connectedCallback() {
    const wrapper = this.wrapper;

    const link = document.createElement('a');
    link.classList.add('Menu-link');
    link.setAttribute('href', './admin');
    link.textContent = 'Administration';
    wrapper.appendChild(link);
  }
}

customElements.define('prilibreri-menu', PrilibreriMenu);
