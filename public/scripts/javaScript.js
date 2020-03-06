console.log('hello')
let clickedId;
fetch('/api/v1/posts')
.then( (data) => {
    console.log(data);
    return data.json()
})
.catch(err => console.log(err))
.then((posts) => {
    const postsContainer = document.querySelector('#postlist');
    posts.forEach(post => {
        postsContainer.innerHTML += `             
        <button type="button" class="btn col-sm-12 col-md-6 col-lg-3 col-xl-3 pb-md-3 mt-sm-3" data-toggle="modal" data-target="#kesha">
        <div class="container ">
                    <!--Button trigger modal -->
            <div class=""> 
              <div  class="card ">
                  <div data-id="${post._id}" class="card-body clickpost border border-warning rounded ">
                  <h5 class="card-title text-warning">${post.title}</h5>
                  <h6 class="card-subtitle mb-4 text-light">${post.name}</h6>
                   <p class="card-text text-warning">${post.description}</p>
                  <div>
              </div>
            </div>
          </div>
      </button>
      `
    })
    document.querySelector('#editpost').addEventListener('click', () => console.log('hi'));
    addDeleteListener();
}
)

document.querySelector('#postlist').addEventListener('click', (event) => {
   if(event.target.classList.contains('clickpost')){
   console.log(event.target.dataset.id)
   clickedId = event.target.dataset.id
   console.log('beep')
       fetch(`/api/v1/posts/${event.target.dataset.id}`, {
           method: 'get',
           headers: {
               'Content-Type': 'application/json',
           },
       })
       .then(stream => stream.json())
       .then(data =>{
           document.getElementById('post-title').innerText = data.title
           document.getElementById('post-description').innerText = data.description
           document.getElementById('post-code').innerHTML = data.code
       })
       .catch(err => console.log(err))
    }
});

function addDeleteListener() {
    document.getElementById('deletepost').addEventListener('click', (event)=> {
        console.log('yeet')
        fetch(`/api/v1/posts/${clickedId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },

        })
        .then(stream => stream.json())
        .then(data => console.log(data))
    })
}