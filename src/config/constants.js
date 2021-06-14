export const API_URL = 
    process.env.NODE_ENV === 'production'
    ? 'https://itsmine-server.herokuapp.com'
    : "http://localhost:8080";