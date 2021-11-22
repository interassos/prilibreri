const pendingItems = (() => {
  const item = {
    title: 'Aspirateur Rowenta 1000W',
    reservationName: 'Alexandre Lanard',
    telephone: '06.51.08.49.26',
    email: 'brazty@coqe.sue',
    reference: 'ZEE-12-KOP',
    location: 'Placard élec.mén. porte droite'
  };
  const list = [];
  for (let i = 0; i < 20; i++) {
    list.push(item);
  }
  return list;
})();

document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementsByClassName('Pending-list')[0];
  pendingItems.forEach(({title, reservationName, telephone, email, reference, location}) => {
    const element = document.createElement('ktrc-article-list-item');
    element.classList.add('ArticleList-item');
    element.setAttribute('pending', 'true');
    element.setAttribute('title', title);
    element.setAttribute('reservation-name', reservationName);
    element.setAttribute('tel', telephone);
    element.setAttribute('email', email);
    element.setAttribute('reference', reference);
    element.setAttribute('location', location);
    list.appendChild(element);
  });
});
