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
        <div className="container mx-auto flex items-center">
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
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Registration title bar */}
        <div className="bg-gray-200 p-2 mb-6">
          <h1 className="text-lg font-medium">Registration</h1>
        </div>

        {/* Emergency trusted contact section */}
        <div className="bg-gray-200 p-2 mb-6">
          <h2 className="text-lg font-medium">Emergency trusted contact</h2>
        </div>

        {/* Information and warning text */}
        <div className="mb-6">
          <p className="mb-4">Please provide details of someone we can contact in the event of an emergency. This should not be someone living with you at your term-time address.</p>
          <p className="mb-4">You can update these details at any time through the registration portal.</p>
        </div>

        {/* Form */}
        <div className="bg-white p-6 border mb-6">
          <h3 className="font-medium mb-6">Emergency contact details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="name" className="text-right font-medium">Name</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="name" 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="relationship" className="text-right font-medium">Relationship</label>
            <div className="md:col-span-2">
              <select 
                id="relationship" 
                value={formData.relationship}
                onChange={(e) => setFormData({...formData, relationship: e.target.value})}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              >
                <option value="Parent">Parent</option>
                <option value="Guardian">Guardian</option>
                <option value="Spouse">Spouse</option>
                <option value="Partner">Partner</option>
                <option value="Sibling">Sibling</option>
                <option value="Friend">Friend</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="telephone" className="text-right font-medium">Telephone</label>
            <div className="md:col-span-2">
              <input 
                type="tel" 
                id="telephone" 
                value={formData.telephone} 
                onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              />
              <div className="text-gray-500 text-sm mt-1">Include the country code</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="email" className="text-right font-medium">Email</label>
            <div className="md:col-span-2">
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="mt-8 mb-4">
            <h4 className="font-medium">Address</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="addressLine1" className="text-right font-medium">Address line 1</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="addressLine1" 
                value={formData.addressLine1}
                onChange={(e) => setFormData({...formData, addressLine1: e.target.value})}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="addressLine2" className="text-right font-medium">Address line 2</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="addressLine2" 
                value={formData.addressLine2}
                onChange={(e) => setFormData({...formData, addressLine2: e.target.value})}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="city" className="text-right font-medium">City</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="city" 
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="postalCode" className="text-right font-medium">Postal code</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="postalCode" 
                value={formData.postalCode}
                onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="country" className="text-right font-medium">Country</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="country" 
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              />
            </div>
          </div>
        </div>

        {/* Data protection notice */}
        <div className="bg-blue-100 p-4 mb-6 border border-blue-200">
          <div className="flex items-start">
            <div className="mt-1 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-blue-800 text-sm">The emergency contact details you provide will only be used in the event of an emergency. They will be held securely and will only be shared with appropriate University staff if needed.</p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex justify-end space-x-4">
          <Link href="/registration" className="px-6 py-2 border border-gray-300 rounded bg-white">
            Back
          </Link>
          <Link href="/registration" className="px-6 py-2 bg-blue-800 text-white rounded">
            Confirm
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto bg-gray-100 border-t py-2 px-4">
        <div className="container mx-auto flex justify-between text-sm text-gray-600">
          <div>Logged in: Melroy Menezes (6857373)</div>
          <Link href="/auth/login" className="text-blue-600 hover:underline">Logout</Link>
        </div>
      </div>
    </div>
  );
} 