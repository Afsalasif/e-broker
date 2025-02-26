'use client'
import { useState } from "react";

// Define a type for the FAQ keys
type FAQKey = "sign up" | "address" | "contact" | "about e broker" | "how does e broker work" | "who can join" | "certifications" | "commission";

// Define FAQs
const faq: Record<FAQKey, string> = {
  "sign up": "To sign up, simply click the 'Sign Up' button on our website and fill out the form. After submitting, one of our agents will contact you to guide you through the next steps and get you started.",
  "address": "Our office is located at:\nOffice 21-41, Conrad Business Tower, SZR, Dubai, United Arab Emirates.",
  "contact": "You can reach us at:\nEmail: info@blac-co.com\nPhone: +971 58 520 9417",
  "about e broker": "E Broker is an innovative real estate e-commerce platform that allows individuals worldwide to sell Dubai properties remotely and earn commissions. We provide all the tools, training, and support you need to succeed in real estate, no matter where you are.",
  "how does e broker work": "E Broker streamlines the process for real estate agents by offering quick registration, full access to an E-learning platform, interactive training, certification, instant job placement, and business management tools—all while earning 35% commission on successful sales.",
  "who can join": "Anyone can become an E Broker member! Whether you're a real estate broker, student, fresh graduate, or career professional, our platform is designed to empower individuals to succeed in Dubai's real estate market remotely.",
  "certifications": "When you join E Broker, you can earn certifications recognized by the Dubai Land Department (DLD) & Knowledge and Human Development Authority (KHDA), which can help you stand out in the real estate industry.",
  "commission": "E Broker offers a generous 35% commission per successful sale, with fast payouts within 3-4 working days. The more deals you close, the more you earn!"
};

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hello! How can I help?", sender: "bot" }]);
  const [input, setInput] = useState("");

  // Define a function to normalize and match user input to FAQ answers
  const findAnswer = (input: string) => {
    const normalizedInput = input.toLowerCase();

    // Check for greetings
    const greetings = ["hi", "hello", "hey", "greetings", "good morning", "good afternoon", "good evening"];
    for (let greeting of greetings) {
      if (normalizedInput.includes(greeting)) {
        return "Hello! How can I assist you today?";
      }
    }

    // Define possible keywords to match similar questions
    const keywords: Record<string, FAQKey> = {
      "sign up": "sign up",
      "join": "sign up",
      "how to sign up": "sign up",
      "how to join": "sign up",
      "address": "address",
      "contact": "contact",
      "what is e broker": "about e broker",
      "tell me about e broker": "about e broker",
      "about e broker": "about e broker",
      "how does e broker work": "how does e broker work",
      "who can join": "who can join",
      "certification": "certifications",
      "commission": "commission",
    };

    // Loop through the keywords to find the corresponding answer
    for (let key in keywords) {
      if (normalizedInput.includes(key)) {
        return faq[keywords[key]];
      }
    }
    return "I'm sorry, I didn't understand that. Can you ask something else?";
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    // Get the bot's response based on the input
    const response = findAnswer(input);

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: response, sender: "bot" }]);
    }, 1000);
  };

  return (
    <>
      {/* Contact Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-[#091650] z-20 border border-gray-300 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition duration-300"
      >
        Contact Us
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-16 z-20 right-4 w-80 bg-[#091650] text-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <div className="p-3 bg-white text-[#091650] font-bold text-center">Chat with Us</div>
          <div className="p-3 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 text-sm ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                <span className={`inline-block px-3 py-2 rounded-lg ${msg.sender === "user" ? "bg-white text-[#091650]" : "bg-gray-700 text-white"}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-gray-300 flex">
            <input
              type="text"
              className="flex-grow p-2 text-black border border-gray-300 rounded-l-lg"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSendMessage} className="bg-white text-[#091650] px-4 py-2 rounded-r-lg font-bold">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatPopup;
