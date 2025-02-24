import React from 'react';
import { Stethoscope } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Stethoscope className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold">MediCare</span>
          </div>
          <div className="text-center md:text-right">
            <p>&copy; 2025 MediCare. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}