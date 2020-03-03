console.log("sanity check");
const postsContainer = document.querySelector('#posts');
document.getElementById('postBtn').addEventListener('click', createPost);


function createPost(e){
    e.preventDefault()
//     // const title = document.querySelector('#name').value
//     // console.log(title);
    
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
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))
}
function render(posts){
    console.log(posts)
    // posts.forEach(post => {
    //     const postTemplate = getPostTemplate(post);
    //     postsContainer.insertAdjacentHTML('beforeend', postTemplate);
    // })
    // postsContainer.insertAdjacentHTML('afterbegin', getPostTemplate(post))
    // console.log(post)
}

function getPostTemplate(post) {
    return `
    <div class="post">
    <p>${post.title}</p>
    <p>${post.body}</p>
    </div>
    `;
}
// function getPostTemplate(post){
//     return `
//     <div class="col-md-3 pb-md-3 mt-sm-3 "> 
//                 <div class="card" style=" width: 16rem;">
//                     <div class="card-body border border-warning shadow rounded bg-dark">
//                     <h5 class="card-title text-warning">${title}</h5>
//                     <h6 class="card-subtitle mb-4 text-light">Sonia</h6>
//                     <p class="card-text text-warning">${description}</p>
//                     <a href="#" class="card-link">save</a>
//                     <button type="button" class="btn btn-outline-warning float-right">save</button>
//                     </div>
//                 </div>
//             </div>
//     `
// }