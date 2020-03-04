console.log('hello')
fetch('http://localhost:4000/api/posts')
.then( (data) => {
    console.log(data);
})
.catch (err => console.log(err));

// $.ajax({
//     method: 'GET', 
//     url: 'http://localhost:4000/api/posts',
//     data: 
// })
