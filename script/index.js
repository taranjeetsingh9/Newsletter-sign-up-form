const form = document.getElementById('form');

function handleSubscription(e){
    e.preventDefault()

// const formData = new FormData(e.target);
// const data = Object.fromEntries(formData);

const data = Object.fromEntries(new FormData(e.target));
console.log(data);

// validating the data


}

form.addEventListener('submit', handleSubscription);
