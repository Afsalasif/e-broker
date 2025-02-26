'use client'
import { useState, useEffect, useRef } from "react";
import Fuse from "fuse.js";

// Define a type for the FAQ entry
type FAQEntry = {
    question: string;
    answer: string;
    category: string;
    keywords: string[];
};

// Comprehensive FAQ database combining all your questions
const faqData: FAQEntry[] = [
    // General Questions
    {
        question: "What is E Broker?",
        answer: "E Broker is a real estate membership program that allows you to learn about Dubai real estate and earn commissions by selling properties. It's an innovative real estate e-commerce platform that enables individuals worldwide to sell Dubai properties remotely.",
        category: "General",
        keywords: ["what", "about", "platform", "explain"]
    },
    {
        question: "How does E Broker work?",
        answer: "E Broker streamlines the process for real estate agents by offering quick registration, full access to an E-learning platform, interactive training, certification, instant job placement, and business management tools—all while earning 35% commission on successful sales.",
        category: "General",
        keywords: ["how", "function", "process", "steps"]
    },
    {
        question: "What is included in the E Broker membership?",
        answer: "You get lifetime access to real estate courses, a business portal, and tools to sell Dubai properties. This includes training materials, property listings, and support services to help you succeed.",
        category: "General",
        keywords: ["include", "contain", "offer", "provide", "membership", "benefits"]
    },
    {
        question: "How much does the E Broker membership cost?",
        answer: "The membership costs $499 for lifetime access.",
        category: "General",
        keywords: ["cost", "price", "fee", "payment", "membership"]
    },
    {
        question: "Is the membership a one-time payment?",
        answer: "Yes, you pay once and get lifetime access.",
        category: "General",
        keywords: ["one-time", "single", "payment", "lifetime", "recurring"]
    },
    {
        question: "Can I join E Broker from any country?",
        answer: "Yes, E Broker is available worldwide. Our platform is designed to help property professionals from anywhere connect with Dubai's real estate market.",
        category: "General",
        keywords: ["country", "international", "global", "worldwide", "location"]
    },
    {
        question: "Do I need a real estate license to sell properties?",
        answer: "No, E Broker allows you to sell properties without a license.",
        category: "General",
        keywords: ["license", "permit", "legal", "requirement", "authorized"]
    },
    {
        question: "How do I sign up for E Broker?",
        answer: "To sign up, simply click the 'Sign Up' button on our website (www.e-broker.world) and fill out the form. After submitting, one of our agents will contact you to guide you through the next steps and get you started.",
        category: "General",
        keywords: ["sign up", "register", "join", "create account", "start"]
    },
    {
        question: "Can I get a refund if I change my mind?",
        answer: "No, the membership fee is non-refundable.",
        category: "General",
        keywords: ["refund", "money back", "return", "cancel"]
    },
    {
        question: "Is there an app for E Broker?",
        answer: "We are currently working on an app for easy access. For now, our website is mobile-friendly and can be accessed from any device.",
        category: "General",
        keywords: ["app", "mobile", "application", "phone"]
    },
    {
        question: "Is E Broker a real estate agency?",
        answer: "No, E Broker is a membership platform that helps individuals sell Dubai real estate and earn commissions.",
        category: "General",
        keywords: ["agency", "company", "firm", "brokerage"]
    },
    {
        question: "Can I join E Broker for free?",
        answer: "No, the lifetime membership fee is $499, which grants you full access.",
        category: "General",
        keywords: ["free", "cost", "fee", "trial"]
    },
    {
        question: "What is your address?",
        answer: "Our office is located at: Office 21-41, Conrad Business Tower, SZR, Dubai, United Arab Emirates.",
        category: "General",
        keywords: ["address", "location", "office", "headquarters", "where"]
    },
    {
        question: "How can I contact you?",
        answer: "You can reach us at: Email: info@blac-co.com or Phone: +971 58 520 9417",
        category: "General",
        keywords: ["contact", "reach", "phone", "email", "support"]
    },
    {
        question: "Who can join E Broker?",
        answer: "Anyone can become an E Broker member! Whether you're a real estate broker, student, fresh graduate, or career professional, our platform is designed to empower individuals to succeed in Dubai's real estate market remotely.",
        category: "General",
        keywords: ["who", "eligible", "qualify", "requirements"]
    },
    
    // E-Learning & Training
    {
        question: "What topics are covered in the courses?",
        answer: "Our courses cover Dubai real estate laws, sales techniques, marketing strategies, and property investment.",
        category: "Training",
        keywords: ["topics", "courses", "subjects", "learn", "training"]
    },
    {
        question: "How many courses are available?",
        answer: "There are 20 recorded courses in the E-learning portal.",
        category: "Training",
        keywords: ["courses", "number", "many", "available", "training"]
    },
    {
        question: "Are the courses live or recorded?",
        answer: "All courses are recorded for self-paced learning.",
        category: "Training",
        keywords: ["courses", "live", "recorded", "format", "training"]
    },
    {
        question: "Can I access the courses anytime?",
        answer: "Yes, you get 24/7 lifetime access.",
        category: "Training",
        keywords: ["access", "time", "anytime", "available", "courses"]
    },
    {
        question: "Do I receive a certificate after completing the courses?",
        answer: "Yes, you get a certification upon completion. When you join E Broker, you can earn certifications recognized by the Dubai Land Department (DLD) & Knowledge and Human Development Authority (KHDA), which can help you stand out in the real estate industry.",
        category: "Training",
        keywords: ["certificate", "certification", "credential", "qualification", "complete"]
    },
    {
        question: "Is there a test after the training?",
        answer: "Yes, you need to pass a test to become a certified agent.",
        category: "Training",
        keywords: ["test", "exam", "assessment", "evaluation", "pass"]
    },
    {
        question: "What happens after I complete the training?",
        answer: "You can start selling properties using our business portal.",
        category: "Training",
        keywords: ["after", "complete", "next", "finish", "training"]
    },
    {
        question: "How do I log in to the learning portal?",
        answer: "After joining, you'll receive a login link with your username and password.",
        category: "Training",
        keywords: ["login", "access", "portal", "enter", "credentials"]
    },
    
    // Selling & Commissions
    {
        question: "What is the commission rate?",
        answer: "E Broker offers a generous 35% commission per successful sale, with fast payouts within 3-4 working days. The more deals you close, the more you earn!",
        category: "Commissions",
        keywords: ["commission", "rate", "percentage", "earn", "payment"]
    },
    {
        question: "How do I sell properties through E Broker?",
        answer: "You list properties on our platform, generate leads, and close deals.",
        category: "Selling",
        keywords: ["sell", "how", "properties", "process", "steps"]
    },
    {
        question: "How will I get paid?",
        answer: "Commissions are transferred to your bank account after a successful deal.",
        category: "Commissions",
        keywords: ["paid", "payment", "receive", "money", "commission"]
    },
    {
        question: "How long does it take to receive commissions?",
        answer: "Payments are processed within 7-14 days after deal closure.",
        category: "Commissions",
        keywords: ["time", "receive", "commission", "payment", "days"]
    },
    
    // Subscription Plans
    {
        question: "What are the subscription plans for agents?",
        answer: "We offer $19.99, $49.99, and $99.99 monthly plans with different benefits.",
        category: "Subscription",
        keywords: ["subscription", "plans", "options", "pricing", "monthly"]
    },
    {
        question: "What's included in the $19.99/month plan?",
        answer: "You get 3 buyer leads, 10 seller leads, 1000 in-system calls, and more.",
        category: "Subscription",
        keywords: ["plans", "basic", "included", "features", "19.99"]
    },
    {
        question: "What's included in the $49.99/month plan?",
        answer: "You get 5 buyer leads, 1 hot buyer lead, 25 seller leads, and more.",
        category: "Subscription",
        keywords: ["plans", "standard", "included", "features", "49.99"]
    },
    {
        question: "What's included in the $99.99/month plan?",
        answer: "You get 10 buyer leads, 2 hot buyer leads, unlimited calls, and more.",
        category: "Subscription",
        keywords: ["plans", "premium", "included", "features", "99.99"]
    },
    
    // Support
    {
        question: "What support is available?",
        answer: "We provide 24/7 support via chat, email, and phone. Our dedicated team is always ready to assist you with any questions or concerns about the platform, properties, or sales processes.",
        category: "Support",
        keywords: ["support", "help", "assistance", "contact", "available"]
    },
    {
        question: "How do I contact customer support?",
        answer: "You can email info@e-broker.world or use the chatbot on our website.",
        category: "Support",
        keywords: ["contact", "support", "help", "reach", "assistance"]
    },
    
    // Dubai Market
    {
        question: "What types of properties can I sell?",
        answer: "Through E Broker, you can sell various property types in Dubai including luxury apartments, villas, townhouses, office spaces, and retail units in prime locations across the emirate.",
        category: "Properties",
        keywords: ["properties", "types", "sell", "kind", "available"]
    },
    {
        question: "What is the Dubai real estate market like?",
        answer: "Dubai's real estate market is known for its high returns, tax benefits, and international appeal. The market has shown consistent growth and attracts investors from around the world, making it an excellent opportunity for brokers.",
        category: "Market",
        keywords: ["market", "dubai", "real estate", "investment", "trends"]
    },
    {
        question: "Do you work with international clients?",
        answer: "Yes, we work with international clients! Our platform is designed to help property professionals worldwide connect with Dubai's real estate market. We provide all the tools and support needed to sell remotely.",
        category: "Clients",
        keywords: ["international", "clients", "foreign", "overseas", "global"]
    }
];

// Initialize Fuse.js for fuzzy searching
const fuse = new Fuse(faqData, {
    keys: [
        { name: 'question', weight: 2 },
        { name: 'answer', weight: 1 },
        { name: 'keywords', weight: 3 },
        { name: 'category', weight: 1 }
    ],
    threshold: 0.4,
    includeScore: true,
    useExtendedSearch: true,
});

const ChatPopup = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [messages, setMessages] = useState([{ 
        text: "Hello! I'm your E Broker assistant. How can I help you today?", 
        sender: "bot" 
    }]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 1024) { // LG devices (Large devices: >= 1024px)
            setIsOpen(true);
          } else {
            setIsOpen(false); // MD and below (Medium devices: < 1024px)
          }
        };
    
        handleResize(); // Set the initial state on mount
        window.addEventListener('resize', handleResize); // Add event listener to handle window resize
    
        return () => {
          window.removeEventListener('resize', handleResize); // Cleanup the event listener on unmount
        };
      }, []);
    // Scroll to bottom when messages change
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    // Generate typing effect delay based on message length
    const getTypingDelay = (message: string): number => {
        const baseDelay = 500;
        const charsPerSecond = 20;
        return Math.min(baseDelay + (message.length / charsPerSecond) * 1000, 3000);
    };

    // Generate related questions for follow-up
    const getRelatedQuestions = (query: string, currentAnswer: string): string[] => {
        // Search for related questions
        const results = fuse.search(query);
        return results
            .slice(1, 4) // Take next 3 results after the best match
            .map(result => result.item.question);
    };

    // Enhanced answer finding algorithm
    const findAnswer = (query: string): { answer: string, relatedQuestions: string[] } => {
        const normalizedInput = query.toLowerCase().trim();
        
        // Handle empty queries
        if (!normalizedInput) {
            return {
                answer: "Is there something specific about E Broker you'd like to know? You can ask about our membership, training, commissions, or support.",
                relatedQuestions: ["What is E Broker?", "How much does membership cost?", "How do I sign up?"]
            };
        }

        // Handle greetings
        const greetings = ["hi", "hello", "hey", "greetings", "good morning", "good afternoon", "good evening"];
        if (greetings.some(greeting => normalizedInput.includes(greeting))) {
            return {
                answer: "Hello! How can I assist you with E Broker today?",
                relatedQuestions: ["What is E Broker?", "How does E Broker work?", "How do I sign up?"]
            };
        }
        
        // Handle thank you messages
        if (normalizedInput.includes("thank") || normalizedInput.includes("thanks") || normalizedInput === "ty") {
            return {
                answer: "You're welcome! Is there anything else I can help you with?",
                relatedQuestions: ["What are the subscription plans?", "How does commission work?", "What training is provided?"]
            };
        }
        
        // Handle goodbye messages
        if (normalizedInput.includes("bye") || normalizedInput.includes("goodbye") || normalizedInput.includes("see you")) {
            return {
                answer: "Thank you for chatting with us! Feel free to reach out anytime you have questions about E Broker. Have a great day!",
                relatedQuestions: []
            };
        }

        // Use Fuse.js for fuzzy matching
        const results = fuse.search(normalizedInput);
        
        if (results.length > 0 && results[0].score !== undefined && results[0].score < 0.6) {
            const bestMatch = results[0].item;
            const relatedQuestions = getRelatedQuestions(normalizedInput, bestMatch.answer);
            return {
                answer: bestMatch.answer,
                relatedQuestions: relatedQuestions
            };
        }

        // Handle specific common question types not in our database
        if (normalizedInput.includes("location") || normalizedInput.includes("where are you")) {
            return {
                answer: "Our office is located at: Office 21-41, Conrad Business Tower, SZR, Dubai, United Arab Emirates.",
                relatedQuestions: ["How can I contact you?", "Can I visit your office?", "Do I need to be in Dubai to sell properties?"]
            };
        }

        if (normalizedInput.includes("time") || normalizedInput.includes("long") || normalizedInput.includes("duration")) {
            return {
                answer: "The training program typically takes 2-4 weeks to complete, depending on your pace. Once certified, you can start selling properties immediately. Most of our members close their first deal within 1-3 months of joining.",
                relatedQuestions: ["What topics are covered in the courses?", "How do I start selling properties?", "Do I need prior experience?"]
            };
        }

        // Contextual handling based on keywords
        if (normalizedInput.includes("payment") || normalizedInput.includes("pay")) {
            return {
                answer: "We accept various payment methods including credit/debit cards, bank transfers, and PayPal. All transactions are secure and processed promptly.",
                relatedQuestions: ["How much does membership cost?", "Is there a refund policy?", "How do I receive commissions?"]
            };
        }

        // Fallback response with suggestions
        return {
            answer: "I don't have specific information about that. Would you like to know about our membership, training programs, commission structure, or available properties?",
            relatedQuestions: ["What is E Broker?", "How does E Broker work?", "What is the commission rate?", "How do I sign up?"]
        };
    };

    // Generate suggestions as user types
    useEffect(() => {
        if (input.trim().length > 2) {
            const results = fuse.search(input.toLowerCase());
            const newSuggestions = results
                .slice(0, 3)
                .map(result => result.item.question);
            setSuggestions(newSuggestions);
        } else {
            setSuggestions([]);
        }
    }, [input]);

    const handleSendMessage = () => {
        if (!input.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { text: input, sender: "user" }]);
        const userQuery = input;
        setInput("");
        setSuggestions([]);
        
        // Show typing indicator
        setIsTyping(true);
        
        // Process the query and get response
        const { answer, relatedQuestions } = findAnswer(userQuery);
        
        // Simulate typing delay based on message length
        const typingDelay = getTypingDelay(answer);
        
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, { text: answer, sender: "bot" }]);
            
            // Add follow-up suggestions if applicable
            if (relatedQuestions.length > 0 && 
                !userQuery.toLowerCase().includes("bye") && 
                !userQuery.toLowerCase().includes("thank")) {
                
                setTimeout(() => {
                    const followUpMessage = relatedQuestions.length > 0 
                        ? "You might also be interested in:\n" + relatedQuestions.map(q => `• ${q}`).join("\n")
                        : "Is there anything else you'd like to know about E Broker?";
                    
                    setMessages(prev => [...prev, { 
                        text: followUpMessage, 
                        sender: "bot"
                    }]);
                }, 1000);
            }
        }, typingDelay);
    };

    // Handle suggestion click
    const handleSuggestionClick = (suggestion: string) => {
        setInput(suggestion);
        setSuggestions([]);
        // Optional: Automatically send the message
        setMessages(prev => [...prev, { text: suggestion, sender: "user" }]);
        
        // Process the suggestion
        const { answer, relatedQuestions } = findAnswer(suggestion);
        
        // Show typing indicator
        setIsTyping(true);
        
        // Simulate typing delay
        const typingDelay = getTypingDelay(answer);
        
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, { text: answer, sender: "bot" }]);
            
            // Add follow-up suggestions
            if (relatedQuestions.length > 0) {
                setTimeout(() => {
                    const followUpMessage = "You might also be interested in:\n" + relatedQuestions.map(q => `• ${q}`).join("\n");
                    
                    setMessages(prev => [...prev, { 
                        text: followUpMessage, 
                        sender: "bot"
                    }]);
                }, 1000);
            }
        }, typingDelay);
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
                    
                    <div className="relative">
                        {suggestions.length > 0 && (
                            <div className="absolute bottom-full w-full bg-white border border-gray-300 rounded-t-lg shadow-md max-h-40 overflow-y-auto">
                                {suggestions.map((suggestion, index) => (
                                    <div
                                        key={index}
                                        className="p-2 text-sm text-[#091650] border-b border-gray-200 cursor-pointer hover:bg-gray-100"
                                        onClick={() => handleSuggestionClick(suggestion)}
                                    >
                                        {suggestion}
                                    </div>
                                ))}
                            </div>
                        )}
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