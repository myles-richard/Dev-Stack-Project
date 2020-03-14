
document.querySelector('form').addEventListener('submit',(event)=>{
   event.preventDefault()

   const password = document.querySelector('#password').value
   const name = document.querySelector('#name').value 
   const some = { name, password}
   console.log(some);
   fetch('/api/v1/auth', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(some)
})
  .then(stream => stream.json())
  .then(data => {
      if (data.status === 201) {
          window.location = '/home'
      }
  })
  

});

document.getElementById('create').addEventListener('click', (event) => {
    window.location = 'http://localhost:4000/createUser'
})