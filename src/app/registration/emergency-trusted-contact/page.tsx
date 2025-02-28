'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function EmergencyTrustedContactPage() {
  // Initial form state
  const [formData, setFormData] = useState({
    name: 'Jane Doe',
    relationship: 'Parent',
    telephone: '+91 9876543210',
    email: 'jane.doe@example.com',
    addressLine1: '123 Main Street',
    addressLine2: 'Apartment 4B',
    city: 'Mumbai',
    postalCode: '400001',
    country: 'India'
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Main Header - Blue Navigation Bar */}
      <header className="bg-blue-900 text-white py-3 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center">
                <img
                  src="/images/surrey-logo.svg"
                  alt="University of Surrey"
                  className="h-9 mr-6"
                />
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-white hover:text-gray-200">Welcome</Link>
              <Link href="#" className="text-white hover:text-gray-200">Applications</Link>
              <Link href="/registration" className="text-white hover:text-gray-200 font-bold">Registration</Link>
              <Link href="#" className="text-white hover:text-gray-200">Extenuating Circumstances</Link>
              <Link href="#" className="text-white hover:text-gray-200">Letters</Link>
              <Link href="/academics/modules" className="text-white hover:text-gray-200">Modules</Link>
              <Link href="#" className="text-white hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </Link>
            </nav>
          </div>
          <div className="text-white text-sm">
            Melroy V Menezes -6857373
          </div>
        </div>
      </header>

      {/* Rest of the component */}
      // ... existing code ...
    </div>
  );
} 