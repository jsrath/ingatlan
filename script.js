/* Show menu on click 
 --------------------------------------------------- */
const search = document.querySelector('#search');
const menu = document.querySelector('.tab-menu-container');

window.addEventListener('click', function (event) {
  if (menu.contains(event.target) === false) {
    menu.classList.remove('visible');
  }

  /* Set placeholder text
 --------------------------------------------------- */

  if (document.querySelector('#selected-options li')) {
    search.placeholder = '';
  } else {
    search.placeholder = 'Select Locations';
  }

});

window.addEventListener('click', function (event) {
  if (event.target === search) {
    menu.classList.add('visible');
    menu.style.left = `${search.getBoundingClientRect().left - 20}px`;
    menu.style.top = `${search.getBoundingClientRect().bottom + this.pageYOffset}px`;
    search.placeholder = '';
  }

});

/* Run a function on menu tabs click
 --------------------------------------------------- */
document.querySelector('.tabbar').addEventListener('click', function (event) {
  if (event.target.className === 'tabitems') {
    getActiveTab(event);
  }
});


function getActiveTab(event) {
  const submenu = document.querySelectorAll('.submenu');
  const tabitems = document.querySelectorAll('.tabitems');

  /* Remove all menus from view
  --------------------------------------------------- */

  for (let i = 0; i < submenu.length; i++) {
    submenu[i].classList.remove('visible');
  }

  /* Remove the active color from all tabs
  --------------------------------------------------- */
  for (let i = 0; i < tabitems.length; i++) {
    tabitems[i].classList.remove('active');
  }

  /* Set the active color for the clicked tab
  --------------------------------------------------- */
  event.target.classList.add('active');


  /* Set the menu to display based on the clicked tab
  --------------------------------------------------- */
  document.getElementById(event.target.name).classList.add('visible');
}

/* Show clicked location in search bar
 --------------------------------------------------- */
const placeLinks = document.querySelectorAll('.submenu a');
const selectedOptions = document.getElementById('selected-options');

for (let i = 0; i < placeLinks.length; i++) {
  placeLinks[i].addEventListener('click', function (event) {
    let li = document.createElement('li');
    li.innerHTML = event.target.innerHTML;
    selectedOptions.appendChild(li);
  });
  selectedOptions.style.left = `${search.getBoundingClientRect().left + 5}px`;
  selectedOptions.style.top = `${search.getBoundingClientRect().bottom - 40 + this.pageYOffset}px`;
  selectedOptions.style.width = `${search.getBoundingClientRect().width - 2}px`;
}
