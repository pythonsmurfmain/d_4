function sendMessage() {
    const messageInput = document.getElementById('message');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        const chatMessages = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.innerText = messageText;
        chatMessages.appendChild(messageDiv);

        // Clear the input field
        messageInput.value = '';

        // Scroll to the bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
