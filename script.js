// ==================== AI RESPONSE DATABASE ====================
const aiResponses = {
  greetings: {
    patterns: ['hi', 'hello', 'hey', 'namaste', 'good morning', 'good evening', 'good afternoon', 'hola'],
    responses: [
      "👋 Hello! How can I help you today?",
      "✨ Hi there! What can I do for you?",
      "🌟 Hello! I'm Chat_2.0, your AI assistant. Ask me anything!",
      "🙏 Namaste! How can I assist you today?",
      "💫 Hey! Ready to help you with anything you need!"
    ]
  },
  
  motivation: {
    patterns: ['motivation', 'inspire', 'motivational', 'encourage', 'positive', 'keep going', 'never give up', 'believe'],
    responses: [
      "💪 You are stronger than you think! Keep pushing forward! Every step counts!",
      "✨ Believe in yourself. Every expert was once a beginner! You've got this!",
      "🌟 Your only limit is your mind. Stay positive, work hard, make it happen!",
      "🔥 Success is not final, failure is not fatal. It's the courage to continue that counts.",
      "🎯 Don't wait for opportunity. Create it! You have everything you need to succeed!",
      "🌈 Your attitude determines your direction. Stay positive and keep moving forward!"
    ]
  },
  
  study: {
    patterns: ['study', 'exam', 'learn', 'how to study', 'study tips', 'concentration', 'focus', 'homework'],
    responses: [
      "📚 Study Tip: Use the Pomodoro technique - 25 minutes focus, 5 minutes break!",
      "🎯 Create a study schedule and stick to it. Consistency is key to success!",
      "💡 Active recall and spaced repetition are scientifically proven study methods.",
      "📝 Take notes, teach others, and practice regularly for better retention.",
      "⏰ Study in a quiet place, remove distractions, and set specific goals for each session.",
      "🧠 Sleep well and stay hydrated! Your brain needs rest to process information."
    ]
  },
  
  math: {
    patterns: ['math', 'calculate', 'solve', 'equation', 'formula', 'add', 'subtract', 'multiply', 'divide'],
    responses: [
      "🧮 I can help with math! What specific problem do you need help with?",
      "📐 Mathematics is the language of science. What would you like to calculate?",
      "🔢 Give me the numbers, and I'll help you solve it!",
      "📊 Tell me your math problem and I'll do my best to help!"
    ]
  },
  
  career: {
    patterns: ['career', 'job', 'future', 'profession', 'what should i do', 'career advice', 'work'],
    responses: [
      "🎯 Follow your passion and skills. What interests you the most?",
      "💼 The best career is one that combines your talents with your interests.",
      "🌟 Explore different fields, learn new skills, and keep growing every day!",
      "🚀 Research different career paths, talk to professionals, and never stop learning.",
      "💡 Find what you love doing and find a way to get paid for it!"
    ]
  },
  
  poem: {
    patterns: ['poem', 'poetry', 'shayari', 'write a poem', 'kavita'],
    responses: [
      "📜 Here's a small poem for you:\n\n✨ Dreams take flight,\n🌟 In the darkest night,\n💪 Keep up the fight,\n🎯 You'll find the light!",
      "🌸 A little inspiration:\n\nLife is a beautiful journey,\nEach day a new story,\nKeep spreading love and glory,\nYou're destined for victory!",
      "💫 For you:\n\nStars shine bright,\nIn the silent night,\nYou have the might,\nTo make everything right!"
    ]
  },
  
  coding: {
    patterns: ['code', 'programming', 'python', 'javascript', 'html', 'css', 'coding', 'developer'],
    responses: [
      "💻 Coding is a superpower! Start with basics and practice daily.",
      "👩‍💻 Which programming language are you learning? I can help!",
      "🚀 Practice coding on platforms like Codecademy, freeCodeCamp, or LeetCode!",
      "🔧 Debugging tip: Read error messages carefully and break problems into smaller parts."
    ]
  },
  
  science: {
    patterns: ['science', 'physics', 'chemistry', 'biology', 'experiment', 'scientist'],
    responses: [
      "🔬 Science is fascinating! What topic would you like to explore?",
      "⚛️ The universe is full of wonders. Ask me anything about science!",
      "🧪 Science is all about curiosity and experimentation. What interests you?",
      "🌍 From atoms to galaxies, science explains everything around us!"
    ]
  },
  
  technology: {
    patterns: ['tech', 'technology', 'ai', 'artificial intelligence', 'robot', 'computer'],
    responses: [
      "🤖 AI is revolutionizing the world! I'm an example of that!",
      "💡 Technology grows exponentially. What tech topic interests you?",
      "🚀 The future of tech is exciting! AI, ML, IoT - endless possibilities!",
      "🔧 Computers and technology are tools. What would you like to build?"
    ]
  },
  
  happiness: {
    patterns: ['happy', 'happiness', 'smile', 'joy', 'fun', 'enjoy'],
    responses: [
      "😊 Happiness comes from within! Do what you love, love what you do!",
      "🌈 Smile! It's contagious and makes the world better!",
      "🎉 Find joy in small moments - they add up to a happy life!",
      "💖 Spread happiness wherever you go. You'll get it back tenfold!"
    ]
  }
};

// ==================== HELPER FUNCTIONS ====================

// Get AI response based on user input
function getAIResponse(userMessage) {
  const message = userMessage.toLowerCase().trim();
  
  // Check for mathematical calculations
  if (message.includes('what is') || message.includes('calculate') || message.includes('=')) {
    const numbers = message.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      try {
        let expression = message
          .replace(/what is/gi, '')
          .replace(/calculate/gi, '')
          .replace(/[^0-9+\-*/%.]/g, '');
        
        // Handle percentage
        if (expression.includes('%')) {
          expression = expression.replace('%', '/100');
        }
        
        const result = eval(expression);
        if (!isNaN(result) && isFinite(result)) {
          return `🧮 The answer is: ${result.toFixed(2)}`;
        }
      } catch(e) {
        // Continue to other checks
      }
    }
  }
  
  // Check all categories for pattern matches
  for (let category in aiResponses) {
    if (aiResponses[category].patterns) {
      for (let pattern of aiResponses[category].patterns) {
        if (message.includes(pattern)) {
          const responses = aiResponses[category].responses;
          return responses[Math.floor(Math.random() * responses.length)];
        }
      }
    }
  }
  
  // Check for name question
  if (message.includes('your name')) {
    return "🤖 I'm Chat_2.0, your smart AI assistant! Created by Purnima Nishad. How can I help you today?";
  }
  
  // Check for time
  if (message.includes('time') || message.includes('clock')) {
    const now = new Date();
    return `⏰ The current time is ${now.toLocaleTimeString('en-IN')}`;
  }
  
  // Check for date
  if (message.includes('date') || message.includes('today')) {
    const now = new Date();
    return `📅 Today is ${now.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`;
  }
  
  // Check for thanks
  if (message.includes('thank') || message.includes('thanks')) {
    return "🙏 You're welcome! I'm always here to help. Feel free to ask anything else!";
  }
  
  // Check for bye
  if (message.includes('bye') || message.includes('goodbye')) {
    return "👋 Goodbye! Come back anytime you need help. Have a great day!";
  }
  
  // Check for help
  if (message.includes('help') || message.includes('what can you do')) {
    return "💡 I can help you with:\n\n• General questions\n• Study tips and motivation\n• Math calculations\n• Coding help\n• Poems and shayari\n• Career advice\n• And much more! Just ask me anything!";
  }
  
  // Default responses
  const defaultResponses = [
    "🤔 That's interesting! Could you tell me more about it?",
    "💡 Great question! I'm still learning. What else would you like to know?",
    "🌟 I'm here to help! Could you rephrase that or ask something else?",
    "🎯 Good point! Tell me more so I can help you better.",
    "✨ I'm listening! What would you like to explore together?"
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// ==================== DOM MANIPULATION FUNCTIONS ====================

// Send message
async function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim();
  
  if (!message) {
    input.placeholder = "Please type something...";
    input.style.borderColor = "#ff6b6b";
    setTimeout(() => {
      input.placeholder = "Type your message here...";
      input.style.borderColor = "#e0e0e0";
    }, 2000);
    return;
  }
  
  // Add user message to chat
  addMessage(message, 'user');
  input.value = '';
  input.focus();
  
  // Show typing indicator
  showTypingIndicator();
  
  // Simulate AI thinking with random delay
  const delay = 500 + Math.random() * 800;
  setTimeout(() => {
    hideTypingIndicator();
    const response = getAIResponse(message);
    addMessage(response, 'bot');
    
    // Play notification sound (optional - will work when user interacts)
    playNotificationSound();
  }, delay);
}

// Add message to chat
function addMessage(text, sender) {
  const chatMessages = document.getElementById('chatMessages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}`;
  
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  messageDiv.innerHTML = `
    <div class="message-content">
      <div class="message-bubble">${escapeHtml(text)}</div>
      <div class="message-time">${time}</div>
    </div>
  `;
  
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  // Save to localStorage
  saveChatHistory();
}

// Show typing indicator
function showTypingIndicator() {
  const indicator = document.getElementById('typingIndicator');
  if (indicator) {
    indicator.style.display = 'flex';
  }
}

function hideTypingIndicator() {
  const indicator = document.getElementById('typingIndicator');
  if (indicator) {
    indicator.style.display = 'none';
  }
}

// Clear chat
function clearChat() {
  if (confirm('🗑️ Are you sure you want to clear all messages?')) {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.innerHTML = `
      <div class="message bot">
        <div class="message-content">
          <div class="message-bubble">
            🗑️ Chat cleared! I'm still here if you need me. How can I help you today?
          </div>
          <div class="message-time">Just now</div>
        </div>
      </div>
    `;
    localStorage.removeItem('chat_2_0_history');
  }
}

// Save chat history to localStorage
function saveChatHistory() {
  const messages = [];
  const messageElements = document.querySelectorAll('.message');
  
  messageElements.forEach(msg => {
    const sender = msg.classList.contains('user') ? 'user' : 'bot';
    const bubble = msg.querySelector('.message-bubble');
    const time = msg.querySelector('.message-time');
    
    if (bubble && time) {
      messages.push({
        sender: sender,
        text: bubble.innerText,
        time: time.innerText
      });
    }
  });
  
  // Limit history to last 100 messages
  if (messages.length > 100) {
    messages.splice(0, messages.length - 100);
  }
  
  localStorage.setItem('chat_2_0_history', JSON.stringify(messages));
}

// Load chat history from localStorage
function loadChatHistory() {
  const saved = localStorage.getItem('chat_2_0_history');
  
  if (saved) {
    const messages = JSON.parse(saved);
    const chatMessages = document.getElementById('chatMessages');
    
    if (chatMessages && messages.length > 0) {
      chatMessages.innerHTML = '';
      
      messages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${msg.sender}`;
        messageDiv.innerHTML = `
          <div class="message-content">
            <div class="message-bubble">${escapeHtml(msg.text)}</div>
            <div class="message-time">${msg.time}</div>
          </div>
        `;
        chatMessages.appendChild(messageDiv);
      });
      
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }
}

// Handle Enter key press
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

// Sample question handler
function askSample(question) {
  const input = document.getElementById('userInput');
  if (input) {
    input.value = question;
    sendMessage();
  }
}

// Escape HTML to prevent XSS attacks
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Play notification sound (optional)
function playNotificationSound() {
  try {
    // Simple beep using Web Audio API (optional)
    if (window.AudioContext || window.webkitAudioContext) {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      oscillator.frequency.value = 800;
      gainNode.gain.value = 0.1;
      
      oscillator.start();
      gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.2);
      oscillator.stop(audioCtx.currentTime + 0.2);
    }
  } catch(e) {
    // Silent fail if audio not supported
  }
}

// ==================== PWA & SERVICE WORKER ====================

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(registration => {
        console.log('✅ Service Worker registered successfully:', registration.scope);
      })
      .catch(error => {
        console.log('❌ Service Worker registration failed:', error);
      });
  });
}

// ==================== INITIALIZATION ====================

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Chat_2.0 AI Assistant Loaded!');
  
  // Load chat history
  loadChatHistory();
  
  // Auto-focus input field
  const input = document.getElementById('userInput');
  if (input) {
    input.focus();
  }
  
  // Add smooth scroll to chat
  const chatMessages = document.getElementById('chatMessages');
  if (chatMessages) {
    chatMessages.style.scrollBehavior = 'smooth';
  }
  
  // Optional: Add keyboard shortcut (Ctrl + / to focus input)
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === '/') {
      e.preventDefault();
      const input = document.getElementById('userInput');
      if (input) {
        input.focus();
      }
    }
  });
});

// ==================== EXPORT FOR MODULE USE ====================
// Make functions globally available
window.sendMessage = sendMessage;
window.clearChat = clearChat;
window.askSample = askSample;
window.handleKeyPress = handleKeyPress;
