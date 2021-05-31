// header elements
const headerElement = document.querySelector('.header');

const menuButton = headerElement.querySelector('.header__menu-button');
const menuElement = headerElement.querySelector('.header__menu');
const profileButton = headerElement.querySelector('.header__profile-button');
const locationButon = headerElement.querySelector('.header__location-button');

const loginFormPopup = document.querySelector('#loginForm');
const locationPopup = document.querySelector('#locationForm');
// interactive constants 
const isAuthorized = false;

if (isAuthorized) {
  profileButton.classList.add('header__profile-button_authorized');
};

// popups features
const openPopup = popup => {
  popup.classList.add('base-popUp_opened');
};

const closePopup = popup => {
  popup.classList.remove('base-popUp_opened');
};

const closeAllPopups = () => {
  popups.forEach(popup => {
    closePopup(popup)
  })
}

const popups = Array.from(document.querySelectorAll('.base-popUp'));
popups.forEach(popup => {
  popup.addEventListener('click', evt => {  
    if (evt.target.classList.contains('base-popUp_opened') || evt.target.classList.contains('base-popUp__close-button')) {
      closeAllPopups();
    };
  });
});

//add menu button listener
menuButton.addEventListener('click', () => {
  menuElement.classList.toggle('header__menu_opened');
  menuButton.classList.toggle('header__menu-button_opened');
  profileButton.classList.toggle('header__profile-button_opened');
});

// add profile button 
profileButton.addEventListener('click', () => {
  if (!isAuthorized) {
    openPopup(loginFormPopup);
  };
});

// search input
locationButon.addEventListener('click', () => {
  openPopup(locationForm);
})