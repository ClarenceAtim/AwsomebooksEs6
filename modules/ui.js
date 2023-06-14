export default class UI {
  static init(displayDateTime) {
    const list = document.getElementById('list');
    list.addEventListener('click', (e) => {
      e.preventDefault();
      const booklist = document.querySelector('#book-list');
      const addBookForm = document.querySelector('#addBookForm');
      const contact = document.querySelector('.contact');
      const heading = document.querySelector('#heading1');
      booklist.style.display = 'block';
      addBookForm.style.display = 'none';
      heading.style.display = 'block';
      contact.style.display = 'none';
    });

    const add = document.getElementById('add');
    add.addEventListener('click', (e) => {
      e.preventDefault();
      const addBookForm = document.querySelector('#addBookForm');
      const heading = document.querySelector('#heading1');
      const contact = document.querySelector('.contact');
      addBookForm.style.display = 'flex';
      const booklist = document.querySelector('#book-list');
      booklist.style.display = 'none';
      contact.style.display = 'none';
      heading.style.display = 'none';
    });

    const contactBtn = document.getElementById('contact');
    contactBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const addBookForm = document.querySelector('#addBookForm');
      const heading = document.querySelector('#heading1');
      const contactDiv = document.querySelector('.contact');
      addBookForm.style.display = 'none';
      const booklist = document.querySelector('#book-list');
      contactDiv.style.display = 'flex';
      booklist.style.display = 'none';
      heading.style.display = 'none';
    });
    setInterval(displayDateTime, 1000);
  }
}
