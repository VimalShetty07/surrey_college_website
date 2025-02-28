'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function RegistrationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
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

        {/* Main Content */}
        <div className="mb-6">
          <h2 className="text-xl font-medium mb-6">Manage your details</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column - Information */}
            <div className="bg-white border p-6 shadow-sm">
              <p className="mb-4">It is important that we hold the correct personal and programme details for you.</p>
              <p className="mb-4">You can manage your details using the options available.</p>
              <p className="mb-4">Please use the inbuilt navigation buttons and avoid using the Back button on your browser/device.</p>
            </div>

            {/* Right Column - Registration Status */}
            <div className="flex flex-col">
              <div className="bg-blue-100 border border-blue-200 p-4 mb-4">
                <p className="text-blue-800">You are registered for the 2024/25 academic year</p>
              </div>

              {/* Management Options */}
              <div className="flex-grow grid gap-2">
                <div className="flex justify-between items-center border-b pb-3">
                  <span>Personal details</span>
                  <Link href="/registration/personal-details" className="bg-blue-700 text-white px-4 py-1.5 rounded text-sm">
                    Manage
                  </Link>
                </div>

                <div className="flex justify-between items-center border-b pb-3 pt-2">
                  <span>Addresses</span>
                  <Link href="#" className="bg-blue-700 text-white px-4 py-1.5 rounded text-sm">
                    Manage
                  </Link>
                </div>

                <div className="flex justify-between items-center border-b pb-3 pt-2">
                  <span>Emergency trusted contact</span>
                  <Link href="/registration/emergency-trusted-contact" className="bg-blue-700 text-white px-4 py-1.5 rounded text-sm">
                    Manage
                  </Link>
                </div>

                <div className="flex justify-between items-center border-b pb-3 pt-2">
                  <span>Programme information</span>
                  <Link href="#" className="bg-blue-700 text-white px-4 py-1.5 rounded text-sm">
                    Manage
                  </Link>
                </div>

                <div className="flex justify-between items-center border-b pb-3 pt-2">
                  <span>Fees</span>
                  <Link href="#" className="bg-blue-700 text-white px-4 py-1.5 rounded text-sm">
                    Manage
                  </Link>
                </div>

                <div className="flex justify-between items-center border-b pb-3 pt-2">
                  <span>Council tax</span>
                  <Link href="#" className="bg-blue-700 text-white px-4 py-1.5 rounded text-sm">
                    Manage
                  </Link>
                </div>

                <div className="flex justify-between items-center border-b pb-3 pt-2">
                  <span>Passport and visa</span>
                  <Link href="#" className="bg-blue-700 text-white px-4 py-1.5 rounded text-sm">
                    Manage
                  </Link>
                </div>

                <div className="flex justify-between items-center border-b pb-3 pt-2">
                  <span>My preferences</span>
                  <Link href="#" className="bg-blue-700 text-white px-4 py-1.5 rounded text-sm">
                    Manage
                  </Link>
                </div>

                <div className="flex justify-between items-center border-b pb-3 pt-2">
                  <span>Criminal record and expulsion declaration</span>
                  <Link href="#" className="bg-blue-700 text-white px-4 py-1.5 rounded text-sm">
                    Manage
                  </Link>
                </div>

                <div className="flex justify-between items-center pb-3 pt-2">
                  <span>Electoral roll</span>
                  <Link href="#" className="bg-blue-700 text-white px-4 py-1.5 rounded text-sm">
                    Manage
                  </Link>
                </div>
              </div>
            </div>
          </div>
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