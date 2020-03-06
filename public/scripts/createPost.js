
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
    // <button type="button" class="btn col-sm-12 col-md-6 col-lg-3 col-xl-3 pb-md-3 mt-sm-3" data-toggle="modal" data-target="${post._id}">
    //     <div class="container ">

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
      

    //   <!-- Modal for post----------------------------------------------->
    //   <div class="modal fade bd-example-modal-md" id="${post._id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    //     <div class="modal-dialog modal-lg" role="">
    //       <div class="modal-content">
    //         <div class="modal-body" style="background-image: url('/images/login-background.png'); background-repeat: no-repeat; background-size: cover; background-position: center center;">


    //           <!--content inside the pop box-->
                
    //           <main class="container border border-warning mt-3"> <!--This is main container-->

    //             <div class="container-fluid mt-3 ">
    //               <div class="row">
    //                 <div class="col-md-12">
    //                   <div class="row">
              
              
    //                     <div class="col-md-4 col-lg-5">
    //                       <div class="row">
    //                         <div class="col-md-12">
    //                           <div class="row">
    //                             <div class="col-md-12">
    //                               <div class="card bg-dark text-warning border border-warning">
    //                                 <div class="card-body">
    //                                   <h3>
    //                                     ${post.name}
    //                                   </h3>
    //                                   <ul>
    //                                     <li class="list-item">
    //                                       languages: ${user.languages}
    //                                     </li>
    //                                     <li class="list-item">
    //                                       location:${user.location}
    //                                     </li>
    //                                     <li class="list-item">
    //                                       Github: ${user.github}
    //                                     </li>
    //                                     <li class="list-item">
    //                                       work: ${user.work}
    //                                     </li>
    //                                   </ul>
              
    //                                   <button type="button" class="btn btn-warning j">
    //                                     Follow +
    //                                   </button>
    //                                 </div>
    //                               </div>
    //                             </div>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
              
              
    //                     <div class="col-md-8 col-lg-7 text-warning">
    //                       <div class="row">
    //                         <div class="col-md-12">
    //                           <div class="row">
    //                             <div class="col-md-6">
    //                               <!--empty column-->
    //                             </div>
    //                             <div class="col-md-6">
    //                               <!-- <a class="btn btn-outline-warning my-2 my-sm-0 mr-2" href="#" data-toggle="modal" data-target="#edit-modal"></a> -->
    //                               <button id="editpost" type="button" data-target="edit-modal" class="btn btn-warning">
    //                                 Edit
    //                               </button>
    //                               <button id="delete" type="button" class="btn btn-warning btn-md">
    //                                 Delete
    //                               </button>
    //                             </div>
    //                           </div>
    //                           <h3 class="text-left">
    //                             ${post.title}
    //                           </h3>
    //                           <h6 class="text-left">
    //                             by ${post.name}
    //                           </h6>
    //                           <dl>
    //                             <dt>
    //                               <u> Description </u>
    //                             </dt>
    //                             <dd>
    //                               ${post.description}
    //                             </dd>
    //                           </dl>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
              
    //                   <div class="row text-warning">
    //                     <div class="col-md-12">
    //                       <div class="row">
    //                         <div class="col-md-12 col-lg-12">
    //                           <h3>
    //                             Code
    //                           </h3>
    //                           <blockquote class="blockquote">
    //                               <textarea class="text-warning border border-warning bg-dark col-lg-12" name="" id="codearea" cols="30" rows="6" placeholder=""></textarea>
    //                           </blockquote> 
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
              
    //                   <div class="row text-warning">
    //                     <div class="col-md-12">
    //                       <h3>
    //                         Add a comments.
    //                       </h3>
    //                       <dl>
    //                         <dt>
    //                           <div id="commentBox" class="container ">
    //                             <div id="postcard"  class="row comment-box-main p-3 rounded-bottom border border-warning ">
    //                               <div id="postcard" class="col-sm-12 col-md-12 col-lg-12 col-xl-12 comment-box">
    //                                 <textarea class="text-warning border border-warning bg-light col-lg-12" name="" id="codearea" cols="30" rows="6" placeholder="add to discussion"></textarea>
    //                                 <button type="button" class="btn btn-outline-warning float-right  mt-3">Add comment</button>
    //                               </div>
    //                             </div>
    //                           </div>
    //                         </dt>
    //                         <dd>
    //                           <div id="postcard" class=" col-sm-12 col-md-6 col-lg-10 col-xl-10 comment rounded pt-2 pb-2 mt-3 border border-warning">
    //                             <h4 class="m-0"><a href="#">Bruck LaCroix</a></h4>
    //                             <time class="text-warning ml-5">1 hours ago</time>
    //                             <like></like>
    //                             <p class="mb-0 text-warning mt-3">Awesome code, thanks for posting.</p>
    //                           </div>
    //                         </dd>
    //                       </dl>
    //                     </div>
    //                   </div>

    //                 </div>
    //               </div>
    //             </div>
    //           </main>

    //           <!--END OF CONTENT BOX-->
  
    //         </div>
    //       </div>
    //     </div>
    //   </div>
`;
}
