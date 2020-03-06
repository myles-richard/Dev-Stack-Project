
console.log("sanity check");
const postsContainer = document.querySelector('#postlist');
document.getElementById('newBtn').addEventListener('click', createPost);


function createPost(e){
    e.preventDefault()
    
    const title = document.querySelector('#posting').value
    console.log(title)
    const description = document.querySelector('#description').value
    console.log(description)
    const languages = document.querySelector('#language').value
    console.log(languages)
    const code = document.querySelector('#codearea').value
    console.log(code)
    
    const newPost = {title, description, languages, code };

    
fetch('/api/v1/posts/create', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost)
})
  .then(stream => stream.json())
  .then(res => render(res))
}

function render(posts){
    console.log(posts)
    
    const postTemplate = getPostTemplate(posts);
    postsContainer.insertAdjacentHTML('beforeend', postTemplate)
}

function getPostTemplate(post) {
    return ` 
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
    `;
}
