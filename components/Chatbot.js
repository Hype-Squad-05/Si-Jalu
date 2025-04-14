function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
  { id: 1, text: "Halo! Saya asisten Si Jalu. Ada yang bisa saya bantu?", sender: "bot" }]
  );
  const [inputValue, setInputValue] = React.useState("");
  const messagesEndRef = React.useRef(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user"
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getChatbotResponse(inputValue),
        sender: "bot"
      };

      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 600);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Auto-scroll to bottom when messages change
  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <div
        className={`chatbot-button bounce ${isOpen ? 'active' : ''}`}
        onClick={toggleChatbot} data-id="i4jo1drfk" data-path="components/Chatbot.js">

        <i className={isOpen ? "fas fa-times" : "fas fa-comments"} data-id="dzm00htba" data-path="components/Chatbot.js"></i>
      </div>
      
      <div className={`chatbot-container ${isOpen ? '' : 'chatbot-hidden'}`} data-id="s3ee7xhq8" data-path="components/Chatbot.js">
        <div className="chatbot-header" data-id="h7krmktqv" data-path="components/Chatbot.js">
          <span data-id="7r72f0yz3" data-path="components/Chatbot.js">Customer Service</span>
          <i className="fas fa-times" onClick={toggleChatbot} data-id="v2nmvw4fz" data-path="components/Chatbot.js"></i>
        </div>
        
        <div className="chatbot-messages" data-id="i8d3wqelw" data-path="components/Chatbot.js">
          {messages.map((message) =>
          <div
            key={message.id}
            className={`chatbot-message ${message.sender}`} data-id="p8lawexi4" data-path="components/Chatbot.js">

              {message.text}
            </div>
          )}
          <div ref={messagesEndRef} data-id="m7z32whtc" data-path="components/Chatbot.js"></div>
        </div>
        
        <div className="chatbot-input" data-id="wwucvhuh0" data-path="components/Chatbot.js">
          <input
            type="text"
            placeholder="Ketik pesan..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress} data-id="i6qn1kolu" data-path="components/Chatbot.js" />

          <button onClick={handleSendMessage} data-id="l55ulz8mt" data-path="components/Chatbot.js">
            <i className="fas fa-paper-plane" data-id="7uyruf6mh" data-path="components/Chatbot.js"></i>
          </button>
        </div>
      </div>
    </>);

}