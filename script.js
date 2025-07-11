const songList = [
  {
    title: "Khuda Jaane",
    artist: "Vishal-Shekhar",
    image: "assets/cover12.jpg",
    file: "assets/song12.mp3"
  },{
    title: "Phir Aur Kya Chahiye",
    artist: "Arijit Singh",
    image: "assets/cover11.jpg",
    file: "assets/song11.mp3"
  },{
    title: "Choomantar",
    artist: "Benny Dayal",
    image: "assets/cover10.jpg",
    file: "assets/song10.mp3"
  },
  {
    title: "Kamoshiyan",
    artist: "Arijit Singh",
    image: "assets/cover1.jpg",
    file: "assets/song1.mp3"
  },
  {
    title: "Tinka Tinka",
    artist: "Tressa D'Souza",
    image: "assets/cover2.jpg",
    file: "assets/song2.mp3"
  },
  {
    title: "Zarrorat",
    artist: "Arijit Singh",
    image: "assets/cover3.jpg",
    file: "assets/song3.mp3"
  },
  {
    title: "Tumse Pyar Kiya",
    artist: "Arijit Singh",
    image: "assets/cover4.jpg",
    file: "assets/song4.mp3"
  },
  {
    title: "Maahi Ve",
    artist: "Neha Kakkar",
    image: "assets/cover5.jpg",
    file: "assets/song5.mp3"
  },
  {
    title: "Shammat",
    artist: "Ankit Tiwari",
    image: "assets/cover6.jpg",
    file: "assets/song6.mp3"
  },
  {
    title: "Naseeb Se",
    artist: "Ankit Mishra",
    image: "assets/cover7.jpg",
    file: "assets/song7.mp3"
  },
  {
    title: "Chal Tere Ishq Mein",
    artist: "Arijit Singh",
    image: "assets/cover8.jpg",
    file: "assets/song8.mp3"
  },
  {
    title: "Rocky Handsome",
    artist: "Arijit Singh",
    image: "assets/cover9.jpg",
    file: "assets/song9.mp3"
  }
];

const podcastList = [
  {
    title: "My Honest Business Advice",
    artist: "Nikhil Kamath",
    image: "podcast/p8.jpg",
    file: "podcast/pm8.mp3"
  },
  {
    title: "How To Deal With lack of Focus & Mental Fatigue",
    artist: "Dr.Tanu Jain",
    image: "podcast/p1.jpg",
    file: "podcast/pm1.mp3"
  },
  {
    title: "Will AI Take Over The World Like God",
    artist: "Tressa D'Souza",
    image: "podcast/p2.jpg",
    file: "podcast/pm2.mp3"
  },
  {
    title: "Avoid these TOXIC INGREDIENTS for Healthy Skin",
    artist: "Dr. Manjot Marwah",
   image: "podcast/p3.jpg",
    file: "podcast/pm3.mp3"
  },
  {
    title: "How Can You Build a 1000 Cr Company In India",
    artist: "Viraj Bahl",
    image: "podcast/p4.jpg",
    file: "podcast/pm4.mp3"
  },
  {
    title: "The Biggest Challenges Bill Gates Faces Today",
    artist: "Bill Gates",
    image: "podcast/p5.jpg",
    file: "podcast/pm5.mp3"
  },
  {
    title: "Products That Actually Work For Your Skin",
    artist: "Dr. Geetanjali Shetty",
    image: "podcast/p6.jpg",
    file: "podcast/pm6.mp3"
  },
  {
    title: "Importance Of Self Discipline - Mindset Of A Winners",
    artist: "Sunil Chhetri",
    image: "podcast/p7.jpg",
    file: "podcast/pm7.mp3"
  }

];

const songsPage = document.getElementById('songsPage');
const podcastsPage = document.getElementById('podcastsPage');
const songsHeader = document.getElementById('songsHeader');
const podcastHeader = document.getElementById('podcastHeader');
const audioPlayer = document.getElementById('player');
const progressBar = document.getElementById('progress');

function createCard(item) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${item.image}" alt="${item.title}" onerror="this.style.display='none'">
    <h3>${item.title}</h3>
    <p>${item.artist}</p>
    <button class="play-btn" onclick="playAudio('${item.file}')"><i class="fas fa-play"></i></button>
  `;
  return card;
}

function renderSongs() {
  songsPage.innerHTML = '';
  songList.forEach(song => {
    songsPage.appendChild(createCard(song));
  });
}

function renderPodcasts() {
  podcastsPage.innerHTML = '';
  podcastList.forEach(podcast => {
    podcastsPage.appendChild(createCard(podcast));
  });
}

function playAudio(src) {
  audioPlayer.src = src;
  audioPlayer.play();
}

audioPlayer.addEventListener('timeupdate', () => {
  if (!isNaN(audioPlayer.duration)) {
    progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  }
});

progressBar.addEventListener('input', () => {
  if (!isNaN(audioPlayer.duration)) {
    const seekTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
  }
});

function showPage(page) {
  const isSong = page === 'songs';

  // Set display for content sections
  songsPage.style.display = isSong ? "grid" : "none";
  podcastsPage.style.display = isSong ? "none" : "grid";

  // Set display for headers
  songsHeader.style.display = isSong ? "block" : "none";
  podcastHeader.style.display = isSong ? "none" : "block";

  // Render content based on the selected page
  if (isSong) {
    renderSongs();
  } else {
    renderPodcasts();
  }
}

// Initial render when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    showPage('songs'); // Call showPage to set initial header and page visibility to 'songs'
});