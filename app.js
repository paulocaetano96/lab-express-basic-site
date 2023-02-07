// http comes by default with node
const http = require("http");

// criar uma aplicação express
const app = express();


//now, we link the server to the folder with the stuff we need aka public
app.use(express.static('public'));


//now, we create routes for the three pages we want to see:
    //route for the home page
app.get('/home', (request, response) => {
    response.sendFile(__dirname + '/views/home.html');
});
    //route for the about page
app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html');
});
    //route for the works page
app.get('/films', (request, response) => {
    response.sendFile(__dirname + '/views/films.html');
});

//now, we need the server to have a port number and a callback function that's triggered when the server is listening
app.listen(3000, () => console.log('server is running on port 3000'));


