# Express,Node todo List Server

#### Single read me file for both the frontend and backend

#### 1. A description of the important libraries you used for each component and why you chose it
#### Only one external library used(React app) is Axios  - to consume the Node.js REST API and reason is second .then is execute even though the request has failed (Ideally it should go to catch statement), axios throws it to catch statement. Node server uses express( For easy routing and middleware handling),Morgan( For request logging),CORS(To allows request from any other origins (domain, scheme, or port) than its own),dotenv( To load the environment variables from .env file),pm2( To load balance and run the server as daemon process),XSS( To prevent cross site scripting attacks).

#### 2. A description of how you store the list items on the backend - The data structure decision you made for storing them and why you made it.
#### I have used a simple table in google mysql server instance, schema of table is (id,title,isCompleted). I haven't used any other Data structure as the schema was sufficient.

#### 3. A description of your deployment architecture – include why you chose whichever deployment platform you did.
#### Nginx serves as the web server and reverse proxy for both frontend ( Currently supports only http request) and backend. Both the nginx,frontend and backend is deployed in google cloud vm ubuntu instace. Node server connects to google sql server instance( All the todo tasks are stored in this sql instance). Nodeserver is load balanced by pm2(pm2config.json contains the basic config). Firewall is enabled to allow connection from instance and localhost for both server,sql. Mysqlworkbench is used to connect to google sql instance for local development. I have choosen this setup as it allows you to customize pretty much anything VS deploying it in heroku or any other( Couldn't install the mysql in free heroku account). Easier to customize anything but downside is the setup is little eloborate and time consuming( Once you have everything setup, deployment is superfast and fun!!!). Current deloyment process is react app is bunled,minified and uploaded to the directory to let nginx serve the files and node server is directly pulled from my github account.   

#### 4. Indication of what part of this project you had never done before –if you’ve never used React, or deployed before, or anything, please tell us.
#### I haven't developed any react app either in any personal projects or professional projects. Let alone deploying the app to google cloud VM instance and serving it through nginx. Never configured complete application (react app and node server )end to end before. Local development is simpler but deploying it to cloud is always tricky. 

#### 5. The Github links for each of the components (mono-repos are okay too).
#### react app repo - https://github.com/rbakash/todo-client-react
#### node server repo - https://github.com/rbakash/todo-server

#### 6. The URL of the live deployments – we should be able to open up the project and look at itThe URL of the live deployments – we should be able to open up the project and look at it
#### URL - http://35.208.206.47/ ( Make sure its http:// not https://. ONLY HTTP is supported as of now due to simplicity but nevertheless https can also be enabled )
