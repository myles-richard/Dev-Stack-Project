
const form = document.querySelector('#new-form')

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


name.classList.remove('is-invalid');
email.classList.remove('is-invalid');
password.classList.remove('is-invalid');


nameFeedback && nameFeedback.remove();
emailFeedback && emailFeedback.remove();
passwordFeedback && passwordFeedback.remove();




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
