import { useState } from "react";
import {
  MessageCircle,
  Send,
  Bot,
  X,
  Maximize2,
  Minimize2,
  BarChart2,
} from "lucide-react";
import { Analytics } from "../components/Analytics";
import { ChatMessage } from "../components/ChatMessage";
import { cn } from "../lib/utils";

export default function Intelli() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  const getStaticResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    
    const responses = {
      hello: "Hello! How can I assist you today?",
      help: "Here are some things I can help with: \n1. Account issues \n2. Technical support \n3. General questions",
      features: "Our platform offers: \n- Real-time analytics \n- AI-powered insights \n- Custom reporting",
      goodbye: "Goodbye! Feel free to reach out again if you need more help.",
      default: "I'm here to help! Could you please clarify your question?"
    };

    switch(true) {
      case lowerInput.includes('hello'):
        return responses.hello;
      case lowerInput.includes('help'):
        return responses.help;
      case lowerInput.includes('feature'):
        return responses.features;
      case lowerInput.includes('goodbye'):
        return responses.goodbye;
      default:
        return responses.default;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };

    // Generate static response
    const botResponse = {
      id: Date.now() + 1,
      content: getStaticResponse(input),
      role: "assistant",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-8 sm:right-8">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm font-medium">Chat Support</span>
        </button>
      ) : (
        <div className="w-[95vw] max-w-3xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 p-4">
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-white" />
              <h2 className="text-lg font-semibold text-white">IntelliSupport</h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowAnalytics(!showAnalytics)}
                className="rounded-lg p-2 text-white hover:bg-black/10"
              >
                <BarChart2 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="rounded-lg p-2 text-white hover:bg-black/10"
              >
                {isExpanded ? (
                  <Minimize2 className="h-5 w-5" />
                ) : (
                  <Maximize2 className="h-5 w-5" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-2 text-white hover:bg-black/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex h-[70vh] max-h-[600px] flex-col md:flex-row">
            {/* Chat Section */}
            <div className={cn("flex flex-1 flex-col", showAnalytics && "md:w-1/2")}>
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="border-t p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 rounded-lg border border-gray-200 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>

            {/* Analytics Panel */}
            {showAnalytics && (
              <div className="w-full border-t bg-gray-50 md:w-1/2 md:border-l">
                <div className="h-full overflow-y-auto p-4">
                  <Analytics />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}