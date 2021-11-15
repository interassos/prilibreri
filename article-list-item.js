class ArticleListItem extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});

    const wrapper = document.createElement('div');
    wrapper.classList.add('ArticleListItem');

    const style = document.createElement('style');
    style.textContent = `
    .ArticleListItem {
    display: flex;
    }
    .ArticleListItem-photo {
      max-width: 60px;
    }
    .ArticleListItem-photoPlaceholder {
      text-align: center;
      font-size: 0.6rem;
       flex: 0 0 60px;
       height: 60px;
       background: #bbb;
    }
    .ArticleListItem-title {
    flex: 1;
    margin-left: 10px;
    }
    .ArticleListItem-price {
    
    }
    
    
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    this.wrapper = wrapper;
  }
  connectedCallback() {
    const wrapper = this.wrapper;

    if (this.hasAttribute('photo')) {
      const photo = document.createElement('img');
      photo.classList.add('ArticleListItem-photo');
      photo.src = this.getAttribute('photo');
      wrapper.appendChild(photo);
    } else {
      const placeholder = document.createElement('div');
      placeholder.classList.add('ArticleListItem-photoPlaceholder');
      placeholder.textContent = 'pas de photo';
      wrapper.appendChild(placeholder);
    }

    const title = document.createElement('div');
    title.classList.add('ArticleListItem-title');
    title.textContent = this.getAttribute('title');
    wrapper.appendChild(title);

    const price = document.createElement('div');
    price.classList.add('ArticleListItem-price');
    if (this.hasAttribute('price')) {
      price.textContent = `${this.getAttribute('price')}.00 €/EUS`;
    } else {
      price.textContent = 'prix libre';
    }
    wrapper.appendChild(price);
  }
}

customElements.define('ktrc-article-list-item', ArticleListItem);
