# Customer Service Chatbot

A project that I made to explore chatbots and how they function within a web app. This application allows you to chat with a customer service chatbot.

Demo Video: https://www.youtube.com/watch?v=ML78pRB7F5s

# Setup & Start
1. Install dependencies: npm install
2. Create a database called `chatbot`
3. A few secret variables need to be defined before using the app. All of the following can be retreived from IBM Watson's website. Note that the free trial is only for 30 days and the api key will expire after that. Make a .env file on the project's root folder and add the following:
    1. WATSON_ASSISTANT_APIKEY=""
    2. WATSON_ASSISTANT_UR=""
    3. WATSON_ASSISTANT_ID=""
4. Sync and seed your database by running npm run seed
5. Use npm run start:dev to start a local server (on port 8080)


# Tech Stack
1. React
2. Redux
3. Express
4. Postgres
5. Sequelize
6. Node.js
7. Watson API



