const stories = [
  { id: 1, src: "./images/image11.jpg" },
  { id: 2, src: "./images/image2.jpg" },
  { id: 3, src: "./images/image33.jpg" },
  { id: 4, src: "./images/image44.jpg" },
  { id: 6, src: "./images/image66.jpg" },
  { id: 7, src: "./images/image77.jpg" },
  { id: 8, src: "./images/image88.jpg" },
  { id: 9, src: "./images/image99.jpg" },
  { id: 10, src: "./images/image10.jpg" },
  { id: 5, src: "./images/image55.jpg" },
  { id: 11, src: "./images/image11.jpg" },
  
];

const storyBar = document.querySelector(".story-bar");
const storyViewer = document.querySelector(".story-viewer");
const storyImage = document.getElementById("story-image");
const progressBar = document.querySelector(".progress-bar");
const insta_post = document.querySelector('.box_container')

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentStory = 0;
let timer;
let count = 0;

function createThumbnails() {
  stories.forEach((story, index) => {
    const img = document.createElement("img");
    img.src = story.src;
    img.addEventListener("click", () => {
      openStory(index);
    });
    storyBar.appendChild(img);
    
  });
}

function openStory(index) {
  currentStory = index;
  storyImage.src = stories[currentStory].src;
  storyViewer.classList.remove("hidden");
  progressBar.style.animation = "none"; 
  void progressBar.offsetWidth; 
  progressBar.style.animation = "fill 5s linear forwards";
  insta_post.style.display = 'none';

  clearTimeout(timer);
  timer = setTimeout(() => {
    nextStory();
  }, 5000);

}

function closeStory() {
  storyViewer.classList.add("hidden");
  clearTimeout(timer);
    insta_post.style.display = 'block';
}

storyViewer.addEventListener("click", (e) => {
  if (e.target === storyViewer) {
    closeStory();
  }
});

function nextStory() {
  if (currentStory < stories.length - 1) {
    openStory(currentStory + 1);
  } else {
    closeStory();
  }
}

function prevStory() {
  if (currentStory > 0) {
    openStory(currentStory - 1);
  }
}

nextBtn.addEventListener("click", nextStory);
prevBtn.addEventListener("click", prevStory);

createThumbnails();

// ===============================================
// Post

const post = document.querySelector('.post');
const heart = document.querySelector('.heart')
const like = document.querySelector('.like_me');
const like_count = document.querySelector('.like_count');

function animateHeart(){
     heart.style.transform = 'translate(-50%, -50%) scale(3.5)';
     heart.style.opacity = 0.8;
     
     setTimeout( ()=>{
      heart.style.opacity = 0;
      heart.style.transform = 'translate(-50%, -50%) scale(0)';
     },1000);
}

function count_Animate_Heart(){
     count += 1;
     like_count.innerText = `Likes: ${count}`;
     heart.style.transform = 'translate(-50%, -50%) scale(3.5)';
     heart.style.opacity = 0.8;
     
     setTimeout( ()=>{
      heart.style.opacity = 0;
      heart.style.transform = 'translate(-50%, -50%) scale(0)';
     },1000);
}

post.addEventListener('dblclick', count_Animate_Heart);
like.addEventListener('click', count_Animate_Heart);


