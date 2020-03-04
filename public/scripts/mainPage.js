console.log('hello')
fetch('http://localhost:4000/api/posts')
.then( (data) => {
    console.log(data);
    data.forEach(index => {
        let testHTML = document.createElement('h2');
        testHTML.textContent = index.title;
        document.body.appendChild(testHTML);
    }) 
})
.catch (err => console.log(err));

