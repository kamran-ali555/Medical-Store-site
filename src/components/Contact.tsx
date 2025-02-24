import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" rows={4}></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-blue-600 mr-4" />
              <span className="text-gray-600">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-blue-600 mr-4" />
              <span className="text-gray-600">contact@medicare.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-blue-600 mr-4" />
              <span className="text-gray-600">123 Health Street, Medical District, NY 10001</span>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-blue-600 hover:text-blue-700">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}