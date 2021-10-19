require('./bootstrap');
const axios = require("axios");

const nickname =  document.querySelector('#nickname');
const message = document.querySelector('#message');
const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', () => {
    axios.post('/chat', {
        nickname: nickname.value,
        message: message.value
    });
});
