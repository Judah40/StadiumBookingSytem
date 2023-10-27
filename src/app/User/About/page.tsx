import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <div>
      {/* Navigation */}
      <Navigation />

      <div className="bg-gray-50">
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            About Us
          </h2>
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 md:mb-0">
              <div className="h-96 rounded overflow-hidden shadow-lg">
                <img 
                  src="/elon.png" // Replace with the path to your CEO's image
                  alt="CEO" 
                  className="w-full h-full p-4"
                />
              </div>
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">Jane Doe - CEO</h3>
                <p className="text-gray-700 text-base">
                  Jane Doe has been a football enthusiast her entire life. Her passion for the game and technology led her to create this revolutionary ticket booking system. Jane's vision is to streamline the ticket booking process for football fans everywhere.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 px-4">
              <h3 className="font-bold text-xl mb-2">Our Mission</h3>
              <p className="text-gray-700 text-base">
                We're dedicated to providing football fans with the most seamless ticket booking experience possible. Our platform is not just a ticket portal but a gateway to an unforgettable match-day experience. We believe in fair access to tickets, transparent pricing, and a comprehensive service that takes care of fans from the moment they book until the referee's final whistle.
              </p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default About;
