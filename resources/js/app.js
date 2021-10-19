require('./bootstrap');
const axios = require("axios");

const nickname =  document.querySelector('#nickname');
const message = document.querySelector('#message');
const submitButton = document.querySelector('#submitButton');
const chatElement = document.querySelector('#chat');

submitButton.addEventListener('click', () => {
    axios.post('/chat', {
        nickname: nickname.value,
        message: message.value
    });
});

window.Echo.channel('chat')
    .listen('.chat-message', (event) => {
    console.log(event);
    if (event.nickname === nickname.value) {
        chatElement.innerHTML += `<div class="w-max ml-auto break-all mt-2 mb-1 p-2 rounded-br-none bg-blue-500 rounded-2xl text-white text-l">
            ${event.message} de <em>${event.nickname}</em>
        </div>`
    } else {
        chatElement.innerHTML += `<div class="other break-all mt-2 ml-5 rounded-bl-none float-none bg-gray-300 mr-auto rounded-2xl p-2">
            ${event.message} de <em>${event.nickname}</em>
        </div>`
    }
});
