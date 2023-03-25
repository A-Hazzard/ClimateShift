// add functionality to like button
// const likeBtn = document.querySelector('.fa-heart').parentElement;
// let likeCount = 0;
// likeBtn.addEventListener('click', () => {
// likeCount++;
// likeBtn.innerHTML = `<i class="fa fa-heart"></i> Like (${likeCount})`;
// });

// add functionality to like button
const likeBtn = document.querySelector('.like-btn');
const tabBtns = document.querySelectorAll('.tab-btn');
const postHeader = document.querySelector('.post-headers');
const dropdownIcon = document.querySelector('#dropdown-icon');
const postInfo = document.querySelector('#post-info');

let likeCount = 0;
likeBtn.addEventListener('click', () => {
  likeCount++;
  likeBtn.textContent = `Like (${likeCount})`;
});

// add functionality to comment button
const commentBtn = document.querySelector('.fa-comment').parentElement;
let commentCount = 0;
commentBtn.addEventListener('click', () => {
commentCount++;
alert(`You have ${commentCount} comments.`);
});

// Add click event listeners to each tab button
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Get the data-tab attribute value of the clicked button
      const tab = btn.getAttribute('data-tab');
      
      // Get all the tab content elements
      const tabContents = document.querySelectorAll('.tab-content');
      
      // Deactivate all tab buttons and hide all tab contents
      tabBtns.forEach(btn => {
        btn.classList.remove('active');
      });
      tabContents.forEach(content => {
        content.classList.remove('active');
      });
      
      // Activate the clicked tab button and show the corresponding tab content
      btn.classList.add('active');
      document.getElementById(tab + '-tab').classList.add('active');
    });
  });



postHeader.addEventListener('click', () => {
  postInfo.classList.toggle('show');
  dropdownIcon.classList.toggle('rotate');
});

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}