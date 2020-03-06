//require models
const db = require('./models')
const Post = require('./models/Post')
const User = require('./models/User')

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




// remove all records
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


// const newPost = [{
//     title: 'My second JavaScript post', 
//     description: 'This is how you do a for require',
//     date: '10/12/2020', 
//     comments: ['chill', 'Thats really chill', 'cool'],
//     likes: '4', 
//     code: 'const require()', 
//     // user: {
//     //     type: mongoose.Schema.Types.ObjectId, 
//     //     ref: 'User'
//     // }
// }]

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
// User.findOne({name: 'Myles'}, (err, foundUser) =>{
//     if(err){
//         console.log(err);
//         process.exit();
//     }
    
//   Post.findOne({title: 'My second JavaScript post'}, (err, foundPost) => {
//     if (err) {
//       console.log(err);
//       process.exit();
//     }

// // console.log(foundUser, foundPost);

// foundPost.user = foundUser._id;

//     foundPost.save((err, savedPost) => {
//       if (err) {
//         console.log(err);
//         process.exit();
//       }

//       console.log('Success', savedPost);
//     });
//   })
// });

// // EMBEDED REFRENCE BETWEEN POST AND USER
// User.findOne({name: 'Myles'}, (err,foundUser) =>{
//     Post.findOne({title: 'This is how you do a for require'}, (err, foundPost) => {
//         // console.log(foundUser, foundPost)
//         foundUser.posts.push(foundPost);

//         foundUser.save((err, savedUser) => {
//             console.log(savedUser)
//         })
//     })
// });

