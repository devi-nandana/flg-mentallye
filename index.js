function bookCounselling(){
    window.location = "book_counselling.html";
}

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.list-options');
  
    hamburger.addEventListener('click', function () {
      menu.classList.toggle('show-menu');
    });
});
