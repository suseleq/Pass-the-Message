//Selections
const btn = document.querySelector('.submit-btn');
const message = document.querySelector('.msg');
const deliveredMessage = document.querySelector('.delivered-msg');
//Event Listeners
btn.addEventListener('click', changeMessage);
// Functions
function changeMessage() {
    let messageValue = message.value;
    deliveredMessage.innerHTML = messageValue;
    message.value = '';
}