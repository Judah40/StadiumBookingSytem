'use client'

import Navigation from "@/components/Navigation";
import React, { useState } from "react";

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleInputChange = (e:any) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formState);
    // Here you would typically handle form submission, like sending data to a server
    // For example, by calling an API route or a third-party service
  };
  return (
    <div>
      {/* Navigation */}
      <Navigation />

      {/* rest of page */}
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-6">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-3">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  onChange={handleInputChange} 
                  value={formState.name} 
                  className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" 
                  placeholder="Your name" 
                  required
                />
              </div>

              <div>
                <label className="block mb-1" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  onChange={handleInputChange} 
                  value={formState.email} 
                  className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" 
                  placeholder="your.email@example.com" 
                  required
                />
              </div>

              <div>
                <label className="block mb-1" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  onChange={handleInputChange} 
                  value={formState.message} 
                  className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" 
                  rows={4} 
                  placeholder="Write your message..." 
                  required
                />
              </div>

              <button 
                type="submit" 
                className="block w-full bg-blue-500 text-white font-bold p-4 rounded hover:bg-purple-700"
              >
                Submit
              </button>
            </form>
          </div>

          <div className=" grid grid-cols-1 place-items-center">
            <h2 className="text-2xl font-bold mb-3">More ways to connect</h2>
            <p>
              <strong>Address:</strong><br/>
              123 Football Ave<br/>
              Soccer City, 45678
            </p>
            <p>
              <strong>Email:</strong><br/>
              info@footballticketing.com
            </p>
            <p>
              <strong>Phone:</strong><br/>
              +1 (234) 567-8910
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
