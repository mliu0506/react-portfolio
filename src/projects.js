// Images
import point8Img from './assets/images/point8media.png';
import shareBoxImg from './assets/images/sharebox.png';
import ontrackImg from './assets/images/ontrack.png';
import faceImg from './assets/images/face-battles.png';
import nytImg from './assets/images/nyt.png';
import mongoScraperImg from './assets/images/mongo-scraper.png';
import burgerImg from './assets/images/burger.png';
import ffImg from './assets/images/friends-finder.png';
import rpsImg from './assets/images/rps-multiplayers.png';
import cseImg from './assets/images/custom-search-engine.png';
import tgImg from './assets/images/avengers-trivia-game.png';
import wggImg from './assets/images/word-guess-game.png';
import sfImg from './assets/images/street-fighter-game.png';

const projects = [
    {
        name:'Point8 Media',
        description:'Pont 8 Media is an On-line audio podcast, which provides entertaining, educational, encouraging, and inspirational content. This show was first introduced at Montreal Radio Centrale Ville FM 102.3 as live radio broadcast many years ago and it has now evolved to online audio and video podcast here, which supports around +500 active users.',
        skills:['AWS', 'Bootstrap', 'JQuery', 'Neo4j', 'S3', 'Node', 'CSS', 'HTML'],
        url:'http://www.point8media.com/',
        image:point8Img,
        git:'',
        position:1
    },
    {
        name:'ShareBox',
        description:'ShareBox is a tool sharing app where member would list their tools that aren’t required for constant use for other member to borrow.   Tools can be extremely expensive. This can sometimes lead to household jobs never getting finish. For example having a presentable garden requires a vast array of tools that not everyone can afford. Buying these tools is extremely expensive and the outlay isn’t usually worth to buy it as the tool then gets put away to gather with dust. With ShareBox, every member can share tools from one another. Also, making some money when tool is being rented.',
        skills:['React', 'Node', 'MongoDB', 'Stripe payment', 'Dropzone', 'Google Map', 'Bootstrap', 'CSS'],
        url:'https://secret-taiga-51440.herokuapp.com/',
        image:shareBoxImg,
        git:'https://github.com/mliu0506/sharebox',
        position:2
    },
    {
        name:'On Track',
        description:'OnTrack is future time management tool which help manage projects and tasks through every stage where work stands and can keep team member aligned on the team’s objectives. It implemented with Node.js Express server, controller, and view template engines. It utilized Bootstrap, CSS, and custom mySQL queries to create a live search and filter feature.',
        skills:['MySQL','Node.js','Express','MVC', 'Passport.js','JavaScript','Sequelize','Handlebars','Heroku','Bootstrap','RESTful API','JQuery'],
        url:'https://murmuring-mountain-70218.herokuapp.com/',
        image:ontrackImg,
        git:'https://github.com/mliu0506/ontrack',
        position:3
    },
    {
        name:'Face Battles',
        description:'Face Battles is a face recognition game like rock paper scissors. Used WebcamJS library to access and capture a still images from a webcam and returns it as a JPEG or PNG Data URIs. Taken a snapshot and use the Face++ API to detect and output whatever emotion the player is displaying.  Used JavaScript apply rock paper scissors logic to each emotion such as Happy is Rock, Neutral is Scissors, Surprised is Paper.',
        skills:['HTML5', 'CSS3', 'AJAX', 'Firebase', 'Face++', 'WebcamJS'],
        url:'https://mliu0506.github.io/face-battles/',
        image:faceImg,
        git:'https://github.com/mliu0506/face-battles',
        position:4
    },
    {
        name: "New York Time Article Scrubber",
        image:nytImg,
        description: "A new React-based rendition of the New York Times Article Search application. This application is using React components, work with helper/util functions, and utilize the React mounting lifecycle to query and display articles based on user searches. This application also use Node, Express, React-router and MongoDB so that users can save articles to read later.",
        url:'https://warm-sierra-77787.herokuapp.com/',
        git:'https://github.com/mliu0506/nyt-react',
        skills:['React','Node','Express','Mongoose', 'RESTful API','Bootstrap 4'],
        position:5
    },
    {
        name:"Mongo DB Scraper",
        image:mongoScraperImg,
        description:"Uses Cheerio to scrape news articles from a site and allows the user to make comments and delete them. Uses Mongoose to store comments and articles.",
        url:'https://shrouded-sea-11223.herokuapp.com/',
        git:'https://github.com/mliu0506/mongo-scraper',
        skills:['Node','Express','Mongoose','Cheerio','RESTful API','Bootstrap 4'],
        position:6
    },
    {
        name:"Burgerish!",
        image:burgerImg,
        description:"Burgerish is a full-stack logging app utilizing a RESTful API MySQL on the back end handlebars on the front end and Node.js mediating between the two.",
        url:'https://gentle-depths-75656.herokuapp.com/',
        git:'https://github.com/mliu0506/burger',
        skills:['Handlebars','Heroku','Bootstrap','RESTful API','MySQL','Node.js','Express','MVC'],
        position:7
    },
    {
        name:"Friend Finder",
        image:ffImg,
        description:"A fully deployed full-stack app that allows users to answer and submit a survey to find like-minded friends.",
        url:'https://stark-ocean-97773.herokuapp.com/',
        git:'https://github.com/mliu0506/friends-finder',
        skills:['Heroku','Node.js','Bootstrap 4','Express.js','HTML','JQuery'],
        position:8
    },
    {
        name:"Rock Paper Scissors for Multiplayers",
        image: rpsImg,
        description:"This is an online game which only allow two users play at the same time. Both players pick either `rock`, `paper` or `scissors`. After the players make their selection, the game will tell whether it's a tie occurred or if one player defeated the other.  Also, it allows users to add chat message in the chat room.",
        url:'https://mliu0506.github.io/rps-multiplayers/',
        git:'https://github.com/mliu0506/rps-multiplayers',
        skills:['HTML5','CSS3','JQuery','Firebase'],
        position:9
    },
    {
        name:"Custom Search Engine",
        image: cseImg,
        description:"This is a key word search engine which make a dynamic web page that populates content from Google Search, Giphy or New York Times.",
        url:'https://mliu0506.github.io/custom-search-engine/',
        git:'https://github.com/mliu0506/custom-search-engine',
        skills:['HTML5','CSS3','Google API','Giphy API','New York Times API'],
        position:10
    },
    {
        name:"Trivia Game",
        image:tgImg,
        description:"A trivia game that player must answer 10 questions.  Each time shows only one question until the player answers it all or their time runs out. ",
        url:'https://mliu0506.github.io/trivia-game/',
        git:'https://github.com/mliu0506/trivia-game',
        skills:['HTML5','Bootstrap 4', 'CSS3', 'JQuery & JS'],
        position:11
    },
    {
        name:"Word Guess Game",
        image: wggImg,
        description:'This is a word guess game for Pokemon character. The game will display number of guesses word remaining and letters already guessed.  After the player is completed the game should automatically choose the next character and make the user play it again.',
        url:'https://mliu0506.github.io/word-guess-game/',
        git:'https://github.com/mliu0506/word-guess-game',
        skills:['HTML','Bootstrap','Javascript','JQuery','CSS'],
        position:12
    },
    {
        name:"Street Fighter Game",
        image:sfImg,
        description:'This is a street fighter game for single player.  The player must select a character.  Each character has 3 attributes Health Power, Attack Power and Counter Attack Power. The Health Power will be reduced by each attach. The player can be continued with the next character until all Health Power is gone.',
        url:'https://mliu0506.github.io/unit-4-game/',
        git:'https://github.com/mliu0506/unit-4-game',
        skills:['HTML5','Bootstrap 4','CSS','JQuery'],
        position: 13
    }
]

export default projects;