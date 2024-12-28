const form = document.getElementById('form');


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
emailErrMess.textContent = "Valid email required";

}

else if (!hasValidFormat(userEmail)) {
    emailInput.classList.add('email-input');
    emailErrMess.textContent = "Valid email required";
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
function updateImageSrc() {
const screenWidth = window.innerWidth;
const image = document.getElementById('responsiveImage');
    if (screenWidth <= 858) {
      // Mobile view
      image.src = './images/illustration-sign-up-mobile.svg';
    } else {
      // Desktop view
      image.src = './images/illustration-sign-up-desktop.svg';
    }
  }
  
  // Call the function on page load
  updateImageSrc();
  
  // Update the image source dynamically on window resize
  window.addEventListener('resize', updateImageSrc);
  