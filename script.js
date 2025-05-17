const book = document.getElementById('book');
const pages = Array.from(document.querySelectorAll('.page'));
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const startReadingBtn = document.getElementById('start-reading');
const bookContainer = document.getElementById('book-container');

let currentPage = 0; // 0 means cover page visible

// Hide navigation until started reading
prevBtn.style.display = 'none';
nextBtn.style.display = 'none';

startReadingBtn.addEventListener('click', () => {
  bookContainer.classList.remove('intro-animation');
  prevBtn.style.display = 'block';
  nextBtn.style.display = 'block';
  showPage(currentPage);
  updateButtons();
});

function showPage(index) {
  pages.forEach((page, i) => {
    page.style.zIndex = pages.length - i;
    if (i <= index) {
      page.classList.add('flipped');
      page.style.transform = 'rotateY(-180deg)';
      page.style.left = i % 2 === 0 ? '0' : '50%';
    } else {
      page.classList.remove('flipped');
      page.style.transform = 'rotateY(0deg)';
      page.style.left = i % 2 === 0 ? '0' : '50%';
    }
  });
}

function updateButtons() {
  prevBtn.disabled = currentPage <= 0;
  nextBtn.disabled = currentPage >= pages.length - 1;
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
    updateButtons();
  }
});
nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
    updateButtons();
  }
});

// Initialize buttons disabled
updateButtons();
