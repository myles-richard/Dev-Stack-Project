
console.log("sanity check");
const postsContainer = document.querySelector('#postlist');
document.getElementById('newBtn').addEventListener('click', createPost);


function createPost(e){
    e.preventDefault()
    
    const title = document.querySelector('#posting').value
    console.log(title)
    const body = document.querySelector('#description').value
    console.log(body)
    const languages = document.querySelector('#language').value
    console.log(languages)
    const code = document.querySelector('#codearea').value
    console.log(code)
    
    const newPost = {title, body, languages, code };

    
//     // const description = document.querySelector('#description').value
//     // console.log(description);
    
//     // const language = document.querySelector('#language').value
//     // console.log(language);
    
//     // const code = document.querySelector('#codearea').value
//     // console.log(code);
    
//     // console.log(code);
    
//     // const newPost = {title, description, language, code}
// //     fetch('/api/posts', {
// //         method: 'POST',
// //         headers: {
// //             'Content-Type': 'application/JSON'
// //         },
// //         body: JSON.stringify(newPost)
// //     })
// //     .then(stream => stream.json())
// //     .then(res => render(res))
// // }
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
    <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3 pb-md-3 mt-sm-3"> 
    <div class="card">
        <div id="postcard" class="card-body border border-warning rounded">
        <h5 class="card-title text-warning">${post.title}</h5>
        <h6 class="card-subtitle mb-4 text-light">${post.name}</h6>
        <p class="card-text text-warning">${post.body}</p>
        
        <button type="button" class="btn btn-outline-warning float-right">save</button>
        </div>
    </div>
</div>
    
    `;
}
