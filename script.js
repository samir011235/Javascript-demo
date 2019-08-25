
let likes = document.querySelector("#like"),
  count1 = 0;

likes.addEventListener('click', addLikes); 

function addLikes() {
  count1 += 1;
  likes.textContent = " " + count1 ;
};

let dislikes = document.querySelector("#dislike"),
  count2 = 0;

dislikes.addEventListener('click', addDislikes )

function addDislikes() {
  count2 += 1;
  dislikes.textContent = " " + count2 ;
};

