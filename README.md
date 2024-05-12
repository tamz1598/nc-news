# NorthCoder News
This is a social news website serving as the frontend to the be_nc_news_TH which can be [found here](https://github.com/tamz1598/be_nc_news_TH).

The application allows you to post articles to new or existing topics and comment + vote on the articles.

### Getting Started
#### Prerequisites
It is assumed that VS code (or another appropriate alternative) runs on your machine.

You also need node (at least v21.6.2) installed on your machine.

#### Installing
**Getting the code**
Fork the project from git. Then copy the git url and in the appropriate folder on your machine:
<sub>  git clone <url from git> </sub>
This will create the project on your local machine.
Open the project in VS code (or alternative app).

**Installing dependencies**
Run the following to install axios, react, react-dom and react-router-dom.
<sub> npm i </sub>
Once all required dependencies are installed, you can check the node_modules folder (which should be created now) to see if the folders for each of these libraries exists.

**Running the app**
<sub> npm run dev </sub>

### Tech Used

#### Front end
**Frameworks**
The front-end was developed using React and most of the styling was done via CSS. I considered other frameworks and libraries but i preferred vanilla css.

#### Back end
The database holding the article info is Postgres and Express was used to build the server. Supertest was used for testing.

**Testing**
Testing was done with Jest. Given the limited time, not all of the test cases were incorporated and will be done at a later date.

#### Sprint management
Excalidraw was used to track the application and map a plan.


### Application

This is a link to my deployed website, it has been deployed with netlify: [click here](https://tamya-news.netlify.app/)

When using this app, you can login if you have an account otherwise in the sign up page you can choose the default accounts given.

