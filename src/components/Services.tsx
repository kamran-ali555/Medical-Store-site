import React from 'react';
import { Truck, Stethoscope, Clock, Pill } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Home Delivery</h3>
            <p className="text-gray-600">Fast and secure delivery to your doorstep</p>
          </div>
          <div className="text-center">
            <Stethoscope className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Online Consultation</h3>
            <p className="text-gray-600">Professional medical advice online</p>
          </div>
          <div className="text-center">
            <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock customer service</p>
          </div>
          <div className="text-center">
            <Pill className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Prescription Service</h3>
            <p className="text-gray-600">Easy prescription uploads and refills</p>
          </div>
        </div>
      </div>
    </section>
  );
}