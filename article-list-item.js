class ArticleListItem extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});

    const wrapper = document.createElement('div');
    wrapper.classList.add('ArticleListItem');

    const style = document.createElement('style');
    style.textContent = `
    .ArticleListItem {
      display: grid;
      grid-gap: 10px;
      grid-template-rows: 50px 50px;
      grid-template-columns: 100px 80px 120px 145px 1fr 200px 150px;
      grid-template-areas:
      "photo title title title title reservation-infos confirm"
      "photo price reference location . contacts cancel"
    }
    .ArticleListItem-photo, .ArticleListItem-photoPlaceholder {
      grid-area: photo;
      max-width: 100%;
      max-height: 100%;
      margin: auto;
    }
    .ArticleListItem-photoPlaceholder {
      text-align: center;
      font-size: 0.6rem;
      background: #bbb;
    }
    .ArticleListItem-title {
      grid-area: title;
    }
    .ArticleListItem-price {
      grid-area: price;
    }
    .ArticleListItem-reference {
      grid-area: reference;
    }
    .ArticleListItem-location {
      grid-area: location;
    }
    .ArticleListItem-reservationInfos {
      grid-area: reservation-infos;
    }
    .ArticleListItem-contacts {
      grid-area: contacts;    
    }
    .ArticleListItem-confirm {
      grid-area: confirm;
    }
    .ArticleListItem-cancel {
      grid-area: cancel;
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

    if (this.hasAttribute('pending') && this.getAttribute('pending') === 'true') {
      const reference = document.createElement('div');
      reference.classList.add('ArticleListItem-reference');
      reference.innerHTML = `<img src="https://github.com/feathericons/feather/raw/master/icons/tag.svg"> ${this.getAttribute('reference')}`;
      wrapper.appendChild(reference);

      const location = document.createElement('div');
      location.classList.add('ArticleListItem-location');
      location.innerHTML = `<img src="https://github.com/feathericons/feather/raw/master/icons/map-pin.svg"> ${this.getAttribute('location')}`;
      wrapper.appendChild(location);

      const infos = document.createElement('div');
      infos.classList.add('ArticleListItem-reservationInfos');
      infos.innerHTML = `${this.getAttribute('reservation-name')}<br>il y a ${Math.round(Math.random() * 7)} jour(s)`;
      wrapper.appendChild(infos);

      const contacts = document.createElement('div');
      contacts.classList.add('ArticleListItem-contacts');
      const tel = this.getAttribute('tel');
      const email = this.getAttribute('email');
      contacts.innerHTML = `${tel} <br><a href="mailto:${email}">${email}</a>`;
      wrapper.appendChild(contacts);

      const confirm = document.createElement('button');
      confirm.classList.add('ArticleListItem-confirm');
      confirm.textContent = 'Confirmer la vente';
      wrapper.appendChild(confirm);
      const cancelReservation = document.createElement('button');
      cancelReservation.classList.add('ArticleListItem-cancel');
      cancelReservation.textContent = 'Annuler la reservation';
      wrapper.appendChild(cancelReservation);
    }
  }
}

customElements.define('ktrc-article-list-item', ArticleListItem);
