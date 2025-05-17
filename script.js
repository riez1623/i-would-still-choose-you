const leftPage = document.getElementById('leftPage');
const rightPage = document.getElementById('rightPage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Story broken into pages (2 pages per "spread" since it's two-page view)
const storyPages = [
  // Spread 1 (left, right)
  [
    "About the Author:\n\nMaestro Riez is a pianist and storyteller who believes in love, music, and heartfelt moments.",
    "Chapter 1:\nIt all started when I was just laying on my bed, bored while friends were busy or playing. I wanted to talk to someone new, a girl maybe..."
  ],
  // Spread 2
  [
    "I asked my friend Ahron if he knew someone I could talk to. He introduced me to Ciara. I found her social and started talking to her; she was kind and friendly.",
    "We shared hobbies and quickly grew comfortable talking. Weeks passed, and we knew each other’s favorites and birthdays. It felt like talking nonstop."
  ],
  // Spread 3
  [
    "Months later, I realized I had feelings for Ciara and confessed. She liked me back, and I courted her.",
    "My friends suggested meeting up. I was scared, doubting myself, but Ciara reassured me that personality mattered, not looks."
  ],
  // Spread 4
  [
    "The day we met was full of nervous excitement. Despite traffic, I saw her sitting, and when pushed forward by Ahron, I fell onto the bench she was on.",
    "She hugged me first. It was the first hug from a girl I had. We talked for minutes, and she gave me her hairtie to hold when I missed her."
  ],
  // Spread 5
  [
    "Inside the store, shy, I talked mostly to Ahron. Ciara hugged me from behind; butterflies filled me and I blushed hard.",
    "Outside, holding her soft hand for the first time made me fall harder. We found a spot, ate snacks, watched the sunset, and held hands."
  ],
  // Spread 6
  [
    "After Ahron left, Ciara and I talked for hours until she had to go. I walked her to the bus stop, hugged goodbye, and smiled on the ride home.",
    "That night I texted her; she replied quickly. I slept well dreaming of our day, wishing for it to happen again."
  ],
  // Spread 7
  [
    "Ciara’s strict parents meant we couldn’t meet again soon, but texting kept us close. Our relationship grew despite small problems.",
    "Then, her old crush texted her. She told me their story, and I told her it was fine to meet him, though jealousy hit me hard."
  ],
  // Spread 8
  [
    "She grew distant and cold. The spark faded. Weeks later, she got back with the old crush. I was devastated and cried, wondering what I did wrong.",
    "She blocked me on socials. I wanted to give up on life."
  ],
  // Spread 9
  [
    "Then she unblocked me. I said I still loved her, expecting no response. But she replied.",
    "We talked briefly. I asked to meet one last time, unsure she'd agree, but she did."
  ],
  // Spread 10
  [
    "The day came. I saw her from afar, walked to her, shy with Ahron there. After he left, we hugged tight; she said it was okay.",
    "People saw us and called us cute. I wanted to cry. After that day, we never talked again."
  ],
  // Spread 11 (Final)
  [
    "Maybe she’s the right person but the wrong time, or maybe not meant to be. First love hurts the worst, but if I lived again, I’d still choose her.",
    "I’d choose her in every world, every universe, every multiverse."
  ]
];

let currentSpread = 0;

function renderSpread(index) {
  if (index < 0) index = 0;
  if (index >= storyPages.length) index = storyPages.length -1;
  currentSpread = index;

  leftPage.textContent = storyPages[currentSpread][0];
  rightPage.textContent = storyPages[currentSpread][1];
  
  // Enable/disable buttons
  prevBtn.disabled = currentSpread === 0;
  nextBtn.disabled = currentSpread === storyPages.length -1;
}

// Optional flip animation (simple fade for now to keep it smooth and clean)
function flipForward() {
  leftPage.classList.add('flip-left');
  rightPage.classList.add('flip-left');
  setTimeout(() => {
    leftPage.classList.remove('flip-left');
    rightPage.classList.remove('flip-left');
    renderSpread(currentSpread + 1);
  }, 600);
}

function flipBackward() {
  leftPage.classList.add('flip-right');
  rightPage.classList.add('flip-right');
  setTimeout(() => {
    leftPage.classList.remove('flip-right');
    rightPage.classList.remove('flip-right');
    renderSpread(currentSpread - 1);
  }, 600);
}

prevBtn.onclick = () => {
  if (currentSpread > 0) {
    flipBackward();
  }
};

nextBtn.onclick = () => {
  if (currentSpread < storyPages.length -1) {
    flipForward();
  }
};

// Initial render
renderSpread(0);
