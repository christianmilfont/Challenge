function sendMessage() {
    var userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') {
      return;
    }
    appendMessage('user', userInput);
    // You can add your chatbot logic here to generate a response
    var botResponse = generateBotResponse(userInput);
    appendMessage('bot', botResponse);
    // Clear input field after sending message
    document.getElementById('userInput').value = '';
   }
   function appendMessage(sender, message) {
    var chatBox = document.getElementById('chatBox');
    var messageElement = document.createElement('div');
    messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.innerHTML = message;
    chatBox.appendChild(messageElement);
    // Scroll to bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;
   }
   function generateBotResponse(userInput) {
    // Basic example: Echo back user's input
    return userInput;
   }