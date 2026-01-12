"use client";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaDirections,
  FaTimes,
  FaComment,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

const VisitOurOffice = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      text: "Hello! How can we help you with your study abroad journey?",
      sender: "bot",
      timestamp: "Just now",
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: Date.now(),
        text: message,
        sender: "user",
        timestamp: "Just now",
      };
      setChatMessages((prev) => [...prev, newMessage]);
      setMessage("");

      setTimeout(() => {
        const autoReply = {
          id: Date.now() + 1,
          text: "Thanks for your message! Our education counselor will respond shortly. For immediate assistance, call us at +977 9821985349",
          sender: "bot",
          timestamp: "Just now",
        };
        setChatMessages((prev) => [...prev, autoReply]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What countries do you offer?",
    "How to apply for scholarship?",
    "What are the visa requirements?",
    "Book free consultation",
  ];

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {!isChatOpen ? (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-white text-black p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
          >
            <FaComment className="text-xl" />
            <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
              💬
            </span>
          </button>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col border border-gray-200">
            <div className="bg-gradient-to-r from-[#004b7c] to-[#0077b6] text-white p-4 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <FaComment className="text-sm" />
                </div>
                <div>
                  <h3 className="font-bold">EduNext Support</h3>
                  <p className="text-xs text-white/80">
                    Online • Ready to help
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white/80 hover:text-white transition duration-200"
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-3 ${
                    msg.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block max-w-[80%] p-3 rounded-2xl ${
                      msg.sender === "user"
                        ? "bg-[#0077b6] text-white rounded-br-none"
                        : "bg-white text-gray-800 rounded-bl-none border border-gray-200"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
                </div>
              ))}
            </div>

            <div className="p-3 bg-white border-t border-gray-200">
              <div className="grid grid-cols-2 gap-2 mb-3">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setMessage(question);
                      setTimeout(() => handleSendMessage(), 100);
                    }}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition duration-200 text-left"
                  >
                    {question}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="bg-[#0077b6] text-white p-2 rounded-full hover:bg-[#005a8c] transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaPaperPlane className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <section
        id="contact-info"
        className="py-16 lg:py-24 bg-gradient-to-br from-white to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Visit Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004b7c] to-[#0077b6]">
                Office
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Come meet our team in person and get personalized guidance on your
              study abroad journey. We're here to make your dreams of studying
              overseas a reality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl h-80 lg:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56538.14688327094!2d83.42624670306626!3d27.682000681560874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399685dca0415d2f%3A0x3c1a933a5e96d73a!2sButwal%2C%20Nepal!5e0!3m2!1sen!2snp!4v1697890067442!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                ></iframe>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 border border-gray-200 max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaDirections className="text-[#0077b6] text-lg" />
                  </div>
                  <h3 className="font-bold text-gray-900">Get Directions</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Easily find your way to our office in Butwal.
                </p>
                <a
                  href="https://maps.google.com/?q=Butwal,Nepal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-[#004b7c] to-[#0077b6] text-white font-semibold py-2 px-4 rounded-lg text-sm hover:shadow-lg transition duration-300 flex items-center justify-center gap-2"
                >
                  <FaDirections className="text-sm" />
                  Open in Maps
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-[#0077b6] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Our Office Location
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Yogikuti, Butwal, Rupandehi, Nepal
                    </p>
                    <p className="text-gray-500 mt-2">
                      Near Butwal Main Market, easily accessible from all parts
                      of the city.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaPhoneAlt className="text-[#0077b6] text-lg" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Call Us Directly</p>
                      <p className="text-lg font-semibold text-gray-900">
                        +977 9821985349
                      </p>
                      <p className="text-sm text-gray-600">+977 71-123456</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-[#0077b6] text-lg" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email Address</p>
                      <p className="text-lg font-semibold text-gray-900">
                        info@edunext.com
                      </p>
                      <p className="text-sm text-gray-600">
                        support@edunext.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#004b7c] to-[#0077b6] rounded-2xl p-6 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-3">Why Visit Us?</h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Free one-on-one counseling session
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    University application assistance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Visa guidance and documentation help
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Scholarship and financial aid information
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisitOurOffice;
