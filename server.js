const dotenv = require('dotenv');

dotenv.config({
    path: './config.env'
});

const app = require('./app');


// Start the server
app.listen(process.env.PORT,process.env.HOST, () =>{
    console.log(`Server running at http://${process.env.HOST}:${process.env.PORT}/ `);
});

