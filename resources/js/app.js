require('./bootstrap');
const axios = require("axios");

const nickname =  document.querySelector('#nickname').value;
const message = document.querySelector('#message').value;
const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', () => {
    axios.post('/chat', {
        nickname: nickname,
        message: message
    });
});
