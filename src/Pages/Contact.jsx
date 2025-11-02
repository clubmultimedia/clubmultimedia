import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-black p-6 md:p-12">
      <div className="text-center mb-12 mt-16">
        <h1 className="text-5xl font-bold text-white mb-3">Contact Us</h1>
        <p className="text-gray-400">Your community, your events, your team</p>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Left Side - Contact Form */}
          <div className="md:col-span-3 bg-slate-900/60 rounded-lg border border-slate-800 p-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Get in Touch
            </h1>
            <p className="text-gray-400 mb-8 text-sm">
              Fill out the form below and we'll get back to you
            </p>

            {submitted ? (
              <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
                <p className="text-green-400 font-medium">✓ Thanks! We received your message.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded text-white text-sm focus:outline-none focus:border-slate-600"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded text-white text-sm focus:outline-none focus:border-slate-600"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded text-white text-sm focus:outline-none focus:border-slate-600 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded text-sm font-medium transition"
                >
                  Send Message
                </button>
              </div>
            )}
          </div>

          {/* Right Side - Info */}
          <div className="md:col-span-2 space-y-6">
            {/* Club Info */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-1">
                CLUB <span className="text-blue-400">MULTIMEDIA</span>
              </h2>
              <p className="text-gray-400 text-sm mt-3">
                We're a student-run club focused on multimedia, design, and creative technology.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-blue-400 mt-0.5" size={20} />
                  <div>
                    <p className="text-white text-sm font-medium">Email</p>
                    <p className="text-gray-400 text-sm">club@multimedia.edu</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Phone className="text-blue-400 mt-0.5" size={20} />
                  <div>
                    <p className="text-white text-sm font-medium">Phone</p>
                    <p className="text-gray-400 text-sm">+91 12345 67890</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-400 mt-0.5" size={20} />
                  <div>
                    <p className="text-white text-sm font-medium">Location</p>
                    <p className="text-gray-400 text-sm">Student Center, 2nd Floor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}