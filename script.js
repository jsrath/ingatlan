/* Show menu on click 
 --------------------------------------------------- */
const search = document.querySelector('#search');
const menu = document.querySelector('.tab-menu-container');

window.addEventListener('click', function (event) {
  if (event.target === search || menu.contains(event.target)) {
    menu.style.top = `${event.pageY + 18}px`;
    menu.classList.add('visible');
    
  } else {
    menu.classList.remove('visible');
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
const placeLinks = document.querySelectorAll('.submenu a')

for (let i = 0; i < placeLinks.length; i++) {
  placeLinks[i].addEventListener('click', function (event) {
    let li = document.createElement('li');
    li.innerHTML = event.target.innerHTML;
    document.getElementById('selected-options').appendChild(li);
  });
}
