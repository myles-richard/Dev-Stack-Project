const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4000;

//set up DB 
const db = require('./models')

const routes = require('./routes')

//----------MiddleWare----------------
// serve public assets making it available on every page
app.use(express.static(__dirname + '/public'));

//Init BodyParser
app.use(bodyParser.json());



//-----------VIEW ROUTES-----------------
 app.use('/', routes.views);

// //-----------API ROUTES-----------------
app.use('/api', routes.api)

// //API Error 
// app.use('/api/*', (req,res) => {
//     res.status(404).json({status: 404, error: 'Error 404: Resource not found'});
// })

// //HTML Error 
// app.use('*', (req,res) => {
//     res.send('<h2>Error 404: Not Found</h2>')
// })

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));