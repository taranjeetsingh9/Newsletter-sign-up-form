/*-----------------------------
   Author: Taranjeet Singh 
   Date  : 27 Dec 2024   
-------------------------------*/

const form = document.getElementById('form');
const emailErrorMess = "Valid email required";


function handleSubscription(e){
    e.preventDefault()

// const formData = new FormData(e.target);
// const data = Object.fromEntries(formData);

const data = Object.fromEntries(new FormData(e.target));
const emailInput = document.querySelector('input');
const emailErrMess = document.querySelector('.error-email');
const messDiv = document.querySelector('.mainDiv');
const successMess = document.querySelector('.success');
const enteredEmail = document.querySelector('.entered-email');

console.log(data);

const userEmail = data.email.trim();

// validating the data
if(userEmail === '' || userEmail === null){
emailInput.classList.add('email-input');
emailErrMess.style.display = 'block';
emailErrMess.textContent = emailErrorMess;

}

else if (!hasValidFormat(userEmail)) {
    emailInput.classList.add('email-input');
    emailErrMess.textContent = emailErrorMess;
    emailErrMess.style.display = 'block'; 
 
}

else {
    emailErrMess.style.display = 'none';
    messDiv.style.display = 'none';
    successMess.style.display = 'block';
    enteredEmail.textContent = userEmail;

}

// function to validate email format
function hasValidFormat(userEmail) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(userEmail);
  }

}

form.addEventListener('submit', handleSubscription);



// dismiss subscription message
const dismissBtn = document.querySelector('.dismiss-btn');

// function to dismiss the success message
dismissBtn.addEventListener('click', () => {
    successMess.style.display = 'none';
    messDiv.style.display = 'block';
    emailInput.value = '';
} );


// working with image size change

const IMAGE_PATHS = {
  mobile: './images/illustration-sign-up-mobile.svg',
  desktop: './images/illustration-sign-up-desktop.svg',
};

function updateImageSrc() {
  const image = document.getElementById('responsiveImage');
  if (!image) return; // Exit if the element doesn't exist

  const screenWidth = window.innerWidth || 1024;
  image.src = screenWidth <= 858 ? IMAGE_PATHS.mobile : IMAGE_PATHS.desktop;
}

  // call function to match image with current screen size
  updateImageSrc();
  
  // dynamically resizing
  window.addEventListener('resize', updateImageSrc);
  