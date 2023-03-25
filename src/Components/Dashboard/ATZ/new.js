// Add click event listeners to each tab button

const likeBtn = document.querySelector('.like-btn');
const tabBtns = document.querySelectorAll('.tab-btn');

const dropdownHeader = document.querySelector('.dropdown-header');
const dropdownContent = document.querySelector('.dropdown-content');
const downArrow = document.querySelector('.dropdown-header .fa-caret-down');
const upArrow = document.querySelector('.dropdown-content .fa-caret-up');

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

window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 0);
  });

  

  
  dropdownHeader.addEventListener('click', () => {
    dropdownContent.classList.toggle('open');
  });
  
  downArrow.addEventListener('click', () => {
    dropdownContent.classList.toggle('open');
  });
  
  upArrow.addEventListener('click', () => {
    dropdownContent.classList.remove('open');
  });

  