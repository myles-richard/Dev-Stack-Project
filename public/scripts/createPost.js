console.log("sanity check");

document.querySelector('form').addEventListener('submit', createPost)
const postsContainer = document.querySelector('#posts')

function createPost(e){
    e.preventDefault()
    const title = document.querySelector('#name').value
    
    const description = document.querySelector('#description').value
    const language = document.querySelector('#language').value
    const code = document.querySelector('#codearea').value
    console.log(code);
    
    const newPost = {title, description, language, code}
    fetch('/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/JSON'
        },
        body: JSON.stringify(newPost)
    })
    .then(stream => stream.json())
    .then(res => render(res))
}

function render(post){
    postsContainer.insertAdjacentHTML('afterbegin', getPostTemplate(post))
}

function getPostTemplate(post){
    return `
    <div class="col-md-3 pb-md-3 mt-sm-3 "> 
                <div class="card" style=" width: 16rem;">
                    <div class="card-body border border-warning shadow rounded bg-dark">
                    <h5 class="card-title text-warning">${title}</h5>
                    <h6 class="card-subtitle mb-4 text-light">Sonia</h6>
                    <p class="card-text text-warning">${description}</p>
                    <a href="#" class="card-link">save</a>
                    <button type="button" class="btn btn-outline-warning float-right">save</button>
                    </div>
                </div>
            </div>
    `
}