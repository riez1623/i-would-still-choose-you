const readButton = document.getElementById('readButton');
const introScreen = document.getElementById('introScreen');
const devicePicker = document.getElementById('devicePicker');
const bookContainer = document.getElementById('bookContainer');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const bookPage = document.getElementById('bookPage');
const transitionOverlay = document.getElementById('transitionOverlay');

const story = `It all started when I was just laying on my bed... [full story continued here] ... I'd still choose you, in every world, in every universe, every multiverse, I'd still choose you.`;

let currentPage = 0;
let pageArray = [];

readButton.addEventListener('click', () => {
  showTransition(() => {
    introScreen.style.display = 'none';
    devicePicker.style.display = 'flex';
  });
});

document.querySelectorAll('.device').forEach(btn => {
  btn.addEventListener('click', () => {
    const device = btn.dataset.device;
    setupBook(device);
    showTransition(() => {
      devicePicker.style.display = 'none';
      bookContainer.style.display = 'flex';
      displayPage();
    });
  });
});

prevPageBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    displayPage();
  }
});

nextPageBtn.addEventListener('click', () => {
  if (currentPage < pageArray.length - 1) {
    currentPage++;
    displayPage();
  }
});

function showTransition(callback) {
  transitionOverlay.classList.add('active');
  setTimeout(() => {
    callback();
    transitionOverlay.classList.remove('active');
  }, 500);
}

function setupBook(device) {
  const sentences = story.split(/(?<=\.)\s+/);
  let sentencesPerPage = device === 'phone' ? 3 : device === 'tablet' ? 2 : 3;
  let pages = device === 'phone' ? 1 : 2;

  pageArray = [];
  for (let i = 0; i < pages; i++) {
    const pageText = sentences.slice(i * sentencesPerPage, (i + 1) * sentencesPerPage).join(' ');
    pageArray.push(pageText);
  }

  currentPage = 0;
}

function displayPage() {
  bookPage.textContent = pageArray[currentPage] || '';
}
