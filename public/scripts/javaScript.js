console.log('hello')
fetch('http://localhost:4000/api/v1/posts')
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
              <div class="card ">
                  <div id="postcard" class="card-body border border-warning rounded ">
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
})

// $.ajax({
//     method: 'GET', 
//     url: 'http://localhost:4000/api/posts',
//     data: 
// })

//------ EDIT POST---
// let editYourPost;

// function handleEdit(e) {
//     editRows = e.target.parent
// }

document.querySelector('#editpost').addEventListener('click', (editPost) => {
    editPost.preventDefault()

    // fetch('/api/v1/posts/:id', {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify
    // })
    console.log('hi')
});