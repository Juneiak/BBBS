// selectors
const calendarCardPopupSelector = '#calendarCard';
const confirmPopupSelector = "#confirm";
const confirmedPopupSelector = "#confirmed";
const aboutButtonSelector = ".button_calendar-settings";
const signupButtonSelector = '#signupButton';
const confirmationButtonSelector = '#confirmationButton';
const canselButtonSelector = "#canselButton";
const backButtonSelector = "#backButton";

// popup elements
const calendarCardPopup = document.querySelector(calendarCardPopupSelector);
const confirmPopup = document.querySelector(confirmPopupSelector);
const confirmedPopup = document.querySelector(confirmedPopupSelector);
const popups = Array.from(document.querySelectorAll('.base-popUp'));

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


popups.forEach(popup => {
  popup.addEventListener('click', evt => {  
    if (evt.target.classList.contains('base-popUp_opened') || evt.target.classList.contains('base-popUp__close-button')) {
      closeAllPopups();
    };
  });
});



// open calendar popup
const aboutButton = document.querySelector(aboutButtonSelector);
aboutButton.addEventListener('click', () => openPopup(calendarCardPopup));

// open confirm popup
const signupButton = calendarCardPopup.querySelector(signupButtonSelector);
signupButton.addEventListener('click', () => openPopup(confirmPopup));

// open confirmed popup
const confirmationButton = confirmPopup.querySelector(confirmationButtonSelector);
confirmationButton.addEventListener('click', () => openPopup(confirmedPopup));

const canselButton = confirmPopup.querySelector(canselButtonSelector);
canselButton.addEventListener('click', () => closePopup(confirmPopup))

// back/close to calendar
const backButton = confirmedPopup.querySelector(backButtonSelector);
backButton.addEventListener('click', () => closeAllPopups());
