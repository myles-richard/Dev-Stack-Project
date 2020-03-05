console.log("hello");

const form = document.querySelector('#new-form')
console.log(form);
const create = document.getElementById('createPost')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
        let formIsValid = false;

//select inputs 

const name = document.getElementById('name')
const email = document.getElementById('email')
const location = document.getElementById('location')
const github = document.getElementById('github')
const work = document.getElementById('work')
const language = document.getElementById('language')
const password = document.getElementById('password')

// error message
const nameFeedback = document.querySelector('.name-feedback')
const emailFeedback = document.querySelector('.email-feedback')
const passwordFeedback = document.querySelector('.password-feedback')
// const locationFeedback = document.querySelector('.location-feedback')
// const githubFeedback = document.querySelector('.github-feedback')
// const workFeedback = document.querySelector('.work-feedback')
// const languageFeedback = document.querySelector('.language-feedback')

// reset validation classes and errors 

name.classList.remove('is-invalid');
email.classList.remove('is-invalid');
password.classList.remove('is-invalid');
// location.classList.remove('is-invalid');
// github.classList.remove('is-invalid');
// work.classList.remove('is-invalid');
// language.classList.remove('is-invalid');

nameFeedback && nameFeedback.remove();
emailFeedback && emailFeedback.remove();
passwordFeedback && passwordFeedback.remove();
// locationFeedback && locationFeedback.remove();
// githubFeedback && githubFeedback.remove();
// workFeedback && workFeedback.remove();
// languageFeedback && languageFeedback.remove();



if (!name.value) {
    formIsValid = false;
    name.classList.add('is-invalid');
    name.parentNode.insertAdjacentHTML('beforeend', '<div class="invalid-feedback name-feedback">Name is required</div>');
} else {
    formIsValid = true;
    name.classList.add('is-valid');
}

if (!email.value) {
    formIsValid = false;
    email.classList.add('is-invalid');
    email.parentNode.insertAdjacentHTML('beforeend', '<div class="invalid-feedback email-feedback">Email is required</div>');
} else {
    formIsValid = true;
    email.classList.add('is-valid');
}

if (!password.value) {
    formIsValid = false;
    password.classList.add('is-invalid');
    password.parentNode.insertAdjacentHTML('beforeend', '<div class="invalid-feedback name-feedback">Name is required</div>');
} else {
    formIsValid = true;
    password.classList.add('is-valid');
}




if(formIsValid){
    console.log('Submit this bad boy');
    const newUser = {
        name: name.value,
        email: email.value,
        password: password.value,
        location: location.value,
        github: github.value, 
        work: work.value,
        languages: language.value,
        // password: 1234
    }
    console.log(newUser);

    fetch('/api/v1/users/create', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    })
        .then ((stream)=> stream.json())
        .then((res)=>{
            if(res){
                window.location = '/'
            }
        })
    .catch((err) => console.log(err))
}

}
