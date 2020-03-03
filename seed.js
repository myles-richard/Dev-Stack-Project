//require models
const db = require('./models')
const Post = require('./models/Post')

const newUsers = [
    {
        name: 'Myles', 
        email: 'myemail@gmail.com',
        location: 'Antioch, Ca', 
        languages: ['JavaScript', 'HTML'],
        github: 'www.gitHub.com',
        work: 'GA', 
        // posts: [Post.schema],
        photo: 'No photo',
    },
    {
        name: 'Eddie', 
        email: 'eddie@gmail.com',
        location: 'Miami, Fl', 
        languages: ['Ruby', 'CSS3', 'Python'],
        github: 'www.gitHub.com/ed',
        work: 'GA', 
        
        photo: 'No photo',
    },
    {
        name: 'Sonia', 
        email: 'sonia@gmail.com',
        location: 'Fremont, Ca', 
        languages: ['JavaScript', 'HTML', 'Ruby'],
        github: 'www.gitHub.com/SA',
        work: 'GA', 
        // posts: [Post.schema],
        photo: 'No photo',
    },
];

const newPost = [{
    title: 'My first JavaScript post', 
    description: 'This is how you do a for loop',
    date: '10/12/2020', 
    comments: ['Thats cool', 'Thats really cool', 'Thanks for the answer'],
    likes: '4', 
    code: 'for( i = 0; i < something.length; i++ {console.log(i)})', 
    // user: {
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'User'
    // }
}]



//remove all records
// db.User.deleteMany({}, (err, users) => {
//     if(err) {
//         console.log(err);
//         process.exit();
//     }
//     console.log(`successfully deleted ${users.deletedCount}`)
// });

// db.User.create(newUsers, (err, newUsers) => {
//     if(err) {
//         console.log(err);
//         process.exit();
//     }
//     console.log(`successfully created ${newUsers.length} users.`);
//     process.exit();
// });


//remove all records
// db.Post.deleteMany({}, (err, post) => {
//     if(err) {
//         console.log(err);
//         process.exit();
//     }
//     console.log(`successfully deleted ${post.deletedCount}`)
// });

// db.Post.create(newPost, (err, newPost) => {
//     if(err) {
//         console.log(err);
//         process.exit();
//     }
//     console.log(`successfully created ${newPost.length} users.`);
//     process.exit();
// });

// REFRENCE ASSOCIATION BETWEEN POST AND USER
db.User.findOne({firstName: 'Sonia'}, (err, foundUser) =>{
    if(err){
        console.log(err);
        process.exit();
    }
})

// EMBEDED REFRENCE BETWEEN POST AND USER
db.User.findOne({firstName: 'Myles'}, (err,foundOne) =>{
    Post.findOne({title: 'Post One'}, (err, foundPost) => {

        foundUser.post.push(foundPost);

        foundUser.save((err, savedUser) => {
            console.log(savedUser)
        })
    })
});

