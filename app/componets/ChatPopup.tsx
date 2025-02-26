'use client'
import { useState, useEffect, useRef } from "react";
import Fuse from "fuse.js";

// Define a type for the FAQ keys
type FAQKey =
    | "how do i sign up"
    | "what is your address"
    | "how can i contact you"
    | "what is e broker"
    | "how does e broker work"
    | "who can join e broker"
    | "what certifications do you offer"
    | "what is the commission rate"
    | "payment methods"
    | "refund policy"
    | "training program"
    | "support available"
    | "getting started"
    | "property types"
    | "dubai market"
    | "international clients";

// Expanded FAQs with more content
const faq: Record<string, string> = {
    "how do i sign up": "To sign up, simply click the 'Sign Up' button on our website and fill out the form. After submitting, one of our agents will contact you to guide you through the next steps and get you started.",
    "what is your address": "Our office is located at:\nOffice 21-41, Conrad Business Tower, SZR, Dubai, United Arab Emirates.",
    "how can i contact you": "You can reach us at:\nEmail: info@blac-co.com\nPhone: +971 58 520 9417",
    "what is e broker": "E Broker is an innovative real estate e-commerce platform that allows individuals worldwide to sell Dubai properties remotely and earn commissions. We provide all the tools, training, and support you need to succeed in real estate, no matter where you are.",
    "how does e broker work": "E Broker streamlines the process for real estate agents by offering quick registration, full access to an E-learning platform, interactive training, certification, instant job placement, and business management tools—all while earning 35% commission on successful sales.",
    "who can join e broker": "Anyone can become an E Broker member! Whether you're a real estate broker, student, fresh graduate, or career professional, our platform is designed to empower individuals to succeed in Dubai's real estate market remotely.",
    "what certifications do you offer": "When you join E Broker, you can earn certifications recognized by the Dubai Land Department (DLD) & Knowledge and Human Development Authority (KHDA), which can help you stand out in the real estate industry.",
    "what is the commission rate": "E Broker offers a generous 35% commission per successful sale, with fast payouts within 3-4 working days. The more deals you close, the more you earn!",
    "payment methods": "We accept various payment methods including credit/debit cards, bank transfers, and PayPal. All transactions are secure and processed promptly.",
    "refund policy": "We offer a 7-day refund policy for membership fees if you decide our platform isn't right for you. Please contact our support team for more details.",
    "training program": "Our comprehensive training program includes video tutorials, live webinars, one-on-one coaching sessions, and detailed guides on Dubai real estate markets, laws, and effective selling techniques.",
    "support available": "We provide 24/7 support via chat, email, and phone. Our dedicated team is always ready to assist you with any questions or concerns about the platform, properties, or sales processes.",
    "getting started": "After signing up, you'll receive access to our E-learning platform, training materials, and a personal dashboard. Complete the initial training modules to get certified, then start browsing and listing properties right away!",
    "property types": "Through E Broker, you can sell various property types in Dubai including luxury apartments, villas, townhouses, office spaces, and retail units in prime locations across the emirate.",
    "dubai market": "Dubai's real estate market is known for its high returns, tax benefits, and international appeal. The market has shown consistent growth and attracts investors from around the world, making it an excellent opportunity for brokers.",
    "international clients": "Yes, we work with international clients! Our platform is designed to help property professionals worldwide connect with Dubai's real estate market. We provide all the tools and support needed to sell remotely."
};

// Keywords and their related FAQs for better matching
const keywordMap: Record<string, string[]> = {
    "sign up": ["how do i sign up", "getting started"],
    "register": ["how do i sign up", "getting started"],
    "join": ["how do i sign up", "who can join e broker"],
    "location": ["what is your address"],
    "office": ["what is your address"],
    "address": ["what is your address"],
    "contact": ["how can i contact you"],
    "email": ["how can i contact you"],
    "phone": ["how can i contact you"],
    "e broker": ["what is e broker", "how does e broker work"],
    "platform": ["what is e broker", "how does e broker work"],
    "work": ["how does e broker work"],
    "function": ["how does e broker work"],
    "eligible": ["who can join e broker"],
    "who": ["who can join e broker"],
    "certification": ["what certifications do you offer"],
    "certified": ["what certifications do you offer", "training program"],
    "commission": ["what is the commission rate"],
    "percentage": ["what is the commission rate"],
    "pay": ["what is the commission rate", "payment methods"],
    "payment": ["payment methods"],
    "card": ["payment methods"],
    "refund": ["refund policy"],
    "money back": ["refund policy"],
    "training": ["training program"],
    "learn": ["training program", "getting started"],
    "support": ["support available"],
    "help": ["support available", "how can i contact you"],
    "start": ["getting started"],
    "begin": ["getting started"],
    "property": ["property types"],
    "apartment": ["property types"],
    "villa": ["property types"],
    "market": ["dubai market"],
    "investment": ["dubai market"],
    "international": ["international clients"],
    "foreign": ["international clients"],
    "overseas": ["international clients"]
};

// Initialize Fuse.js with the FAQ keys and answers
const fuse = new Fuse(Object.entries(faq).map(([key, value]) => ({
    key,
    value
})), {
    keys: ["key", "value"],
    threshold: 0.4,
    includeScore: true,
});

const ChatPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([{ 
        text: "Hello! I'm your E Broker assistant. How can I help you today?", 
        sender: "bot" 
    }]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom when messages change
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    // Enhanced answer finding algorithm
    const findAnswer = (query: string): string => {
        const normalizedInput = query.toLowerCase().trim();
        
        // Handle empty queries
        if (!normalizedInput) {
            return "Is there something specific about E Broker you'd like to know?";
        }

        // Check for direct matches in the FAQ
        for (const [key, value] of Object.entries(faq)) {
            if (normalizedInput === key || normalizedInput.includes(key)) {
                return value;
            }
        }

        // Check for keyword matches
        for (const [keyword, relatedFAQs] of Object.entries(keywordMap)) {
            if (normalizedInput.includes(keyword)) {
                // Return the answer for the first related FAQ
                if (relatedFAQs.length > 0 && faq[relatedFAQs[0]]) {
                    return faq[relatedFAQs[0]];
                }
            }
        }

        // Use Fuse.js for fuzzy matching if no direct or keyword matches
        const results = fuse.search(normalizedInput);
        if (results.length > 0 && results[0].score !== undefined && results[0].score < 0.4) {
            return results[0].item.value;
        }

        // Handle specific question types
        if (normalizedInput.includes("price") || normalizedInput.includes("cost") || normalizedInput.includes("fee")) {
            return "Our membership fees vary based on the package you choose. We offer flexible pricing options starting from $99/month with no hidden fees. For detailed pricing information, please visit our pricing page or contact our sales team.";
        }

        if (normalizedInput.includes("time") || normalizedInput.includes("long") || normalizedInput.includes("duration")) {
            return "The training program typically takes 2-4 weeks to complete, depending on your pace. Once certified, you can start selling properties immediately. Most of our members close their first deal within 1-3 months of joining.";
        }

        // Fallback response with suggestions
        return "I don't have specific information about that. Would you like to know about:\n" +
               "- How to sign up\n" +
               "- How E Broker works\n" +
               "- Commission rates\n" +
               "- Our training program\n" +
               "Or you can contact our support team at info@blac-co.com";
    };

    const handleSendMessage = () => {
        if (!input.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { text: input, sender: "user" }]);
        const userQuery = input;
        setInput("");
        
        // Show typing indicator
        setIsTyping(true);
        
        // Process different types of queries
        setTimeout(() => {
            setIsTyping(false);
            
            // Check for greetings
            const normalizedInput = userQuery.toLowerCase();
            const greetings = ["hi", "hello", "hey", "greetings", "good morning", "good afternoon", "good evening"];
            
            if (greetings.some(greeting => normalizedInput.includes(greeting))) {
                setMessages(prev => [...prev, { 
                    text: "Hello! How can I assist you with E Broker today?", 
                    sender: "bot" 
                }]);
                return;
            }
            
            // Check for thank you messages
            if (normalizedInput.includes("thank") || normalizedInput.includes("thanks") || normalizedInput === "ty") {
                setMessages(prev => [...prev, { 
                    text: "You're welcome! Is there anything else I can help you with?", 
                    sender: "bot" 
                }]);
                return;
            }
            
            // Check for goodbye messages
            if (normalizedInput.includes("bye") || normalizedInput.includes("goodbye") || normalizedInput.includes("see you")) {
                setMessages(prev => [...prev, { 
                    text: "Thank you for chatting with us! Feel free to reach out anytime you have questions about E Broker. Have a great day!", 
                    sender: "bot" 
                }]);
                return;
            }
            
            // Get the bot's response for other queries
            const response = findAnswer(userQuery);
            setMessages(prev => [...prev, { text: response, sender: "bot" }]);
            
            // Suggest a follow-up question after a brief delay for certain responses
            if (!normalizedInput.includes("bye") && !normalizedInput.includes("thank")) {
                setTimeout(() => {
                    setMessages(prev => [...prev, { 
                        text: "Is there anything else you'd like to know about E Broker?", 
                        sender: "bot" 
                    }]);
                }, 2000);
            }
        }, 1000);
    };

    // Handle Enter key press
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Contact Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 right-4 bg-[#091650] z-20 border border-gray-300 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition duration-300"
            >
                {isOpen ? "Close Chat" : "Contact Us"}
            </button>

            {/* Chat Popup */}
            {isOpen && (
                <div className="fixed bottom-16 z-20 right-4 w-96 bg-[#091650] text-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                    <div className="p-3 bg-white text-[#091650] font-bold text-center relative">
                        <div>Chat with E Broker Assistant</div>
                        <div className="text-xs font-normal mt-1">Ask me anything about E Broker!</div>
                    </div>
                    
                    <div className="p-3 h-80 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div key={index} className={`mb-2 text-sm ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                                <span className={`inline-block px-3 py-2 rounded-lg ${msg.sender === "user" ? "bg-white text-[#091650]" : "bg-gray-700 text-white"}`}>
                                    {msg.text.split('\n').map((line, i) => (
                                        <span key={i}>
                                            {line}
                                            {i < msg.text.split('\n').length - 1 && <br />}
                                        </span>
                                    ))}
                                </span>
                            </div>
                        ))}
                        
                        {isTyping && (
                            <div className="mb-2 text-sm text-left">
                                <span className="inline-block px-3 py-2 rounded-lg bg-gray-700 text-white">
                                    <span className="typing-animation">Typing<span>.</span><span>.</span><span>.</span></span>
                                </span>
                            </div>
                        )}
                        
                        <div ref={messagesEndRef} />
                    </div>
                    
                    <div className="p-3 border-t border-gray-300 flex">
                        <input
                            type="text"
                            className="flex-grow p-2 text-black border border-gray-300 rounded-l-lg"
                            placeholder="Type your question..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button 
                            onClick={handleSendMessage} 
                            className="bg-white text-[#091650] px-4 py-2 rounded-r-lg font-bold hover:bg-gray-100 transition duration-300"
                        >
                            Send
                        </button>
                    </div>
                    
                    <div className="p-2 bg-gray-800 text-xs text-center text-gray-400">
                        Need more help? Call us at +971 58 520 9417
                    </div>
                </div>
            )}
            
            <style jsx>{`
                .typing-animation span {
                    opacity: 0;
                    animation: typingDot 1.4s infinite;
                }
                .typing-animation span:nth-child(1) {
                    animation-delay: 0s;
                }
                .typing-animation span:nth-child(2) {
                    animation-delay: 0.4s;
                }
                .typing-animation span:nth-child(3) {
                    animation-delay: 0.8s;
                }
                @keyframes typingDot {
                    0% { opacity: 0; }
                    50% { opacity: 1; }
                    100% { opacity: 0; }
                }
            `}</style>
        </>
    );
};

export default ChatPopup;