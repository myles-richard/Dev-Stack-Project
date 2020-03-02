//require models
const db = require('./models')

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

//remove all records
db.User.deleteMany({}, (err, users) => {
    if(err) {
        console.log(err);
        process.exit();
    }
    console.log(`successfully deleted ${users.deletedCount}`)
});

db.User.create(newUsers, (err, newUsers) => {
    if(err) {
        console.log(err);
        process.exit();
    }
    console.log(`successfully created ${newUsers.length} users.`);
    process.exit();
});