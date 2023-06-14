import { DateTime } from './modules/luxon.js';
import Book from './modules/book.js';
import UI from './modules/ui.js';

function displayDateTime() {
  const dateElement = document.getElementById('date');
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  dateElement.textContent = now;
}

Book.init();
UI.init(displayDateTime);