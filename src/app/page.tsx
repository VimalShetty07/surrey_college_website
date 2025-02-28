'use client';

import Link from 'next/link';

export default function Home() {
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
            <Link href="/" className="text-white hover:text-gray-200 font-bold">Welcome</Link>
            <Link href="#" className="text-white hover:text-gray-200">Applications</Link>
            <Link href="/registration" className="text-white hover:text-gray-200">Registration</Link>
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
        {/* Main heading */}
        <h1 className="text-2xl font-bold mb-6">Welcome to Surrey Self-Service</h1>
        
        {/* First row: What this site is for and Quick Links sections */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Left Section - What this site is for */}
          <div className="bg-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">What this site is for</h2>
            <div className="bg-white p-4">
              <p className="mb-4">Use this site to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>View details of your application to Surrey</li>
                <li>Register for your course</li>
                <li>Manage your personal details</li>
                <li>Select and view your modules and assessment results</li>
                <li>Download letters e.g. council tax exemption (where appropriate)</li>
                <li>View records of your personal tutor meetings</li>
                <li>Book places onto Learning Development workshops (Academic Skills and Development, and Maths and Statistics Advice)</li>
                <li>Apply for financial support</li>
                <li>Manage academic appeals</li>
                <li>Review postgraduate research information (supervisions, course information, workshops and milestones), for postgraduate research students</li>
                <li>Navigate to other online services offered by the University</li>
              </ul>
            </div>
          </div>

          {/* Right Section - Quick Links */}
          <div className="bg-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Quick links</h2>
            <div className="grid grid-cols-3 gap-4">
              <Link href="/registration" className="block">
                <div className="bg-sky-500 text-white p-4 text-center flex flex-col items-center justify-center aspect-square">
                  <svg className="h-12 w-12 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
                  </svg>
                  <span>Registration</span>
                </div>
              </Link>
              
              <Link href="#" className="block">
                <div className="bg-sky-500 text-white p-4 text-center flex flex-col items-center justify-center aspect-square">
                  <svg className="h-12 w-12 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                  </svg>
                  <span>Contact us</span>
                </div>
              </Link>
              
              <Link href="#" className="block">
                <div className="bg-sky-500 text-white p-4 text-center flex flex-col items-center justify-center aspect-square">
                  <svg className="h-12 w-12 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04Z" fill="currentColor"/>
                  </svg>
                  <span>Additional online services</span>
                </div>
              </Link>
              
              <Link href="#" className="block">
                <div className="bg-sky-500 text-white p-4 text-center flex flex-col items-center justify-center aspect-square">
                  <svg className="h-12 w-12 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="currentColor"/>
                  </svg>
                  <span>Personal tutoring</span>
                </div>
              </Link>
              
              <Link href="/" className="block">
                <div className="bg-sky-500 text-white p-4 text-center flex flex-col items-center justify-center aspect-square">
                  <svg className="h-12 w-12 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
                  </svg>
                  <span>Welcome!</span>
                </div>
              </Link>
              
              <Link href="#" className="block">
                <div className="bg-sky-500 text-white p-4 text-center flex flex-col items-center justify-center aspect-square">
                  <svg className="h-12 w-12 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.4 11.45 12.4 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9H8C8 6.79 9.79 5 12 5C14.21 5 16 6.79 16 9C16 9.88 15.64 10.68 15.07 11.25Z" fill="currentColor"/>
                  </svg>
                  <span>IT Guidance</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Second row: Learning Development section */}
        <div className="bg-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Learning Development</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link href="#" className="block">
              <div className="bg-sky-500 text-white p-6 text-center flex items-center justify-center">
                <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor"/>
                </svg>
                <span className="text-lg">My Learning Development at Surrey</span>
              </div>
            </Link>
            
            <Link href="#" className="block">
              <div className="bg-sky-500 text-white p-6 text-center flex items-center justify-center">
                <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z" fill="currentColor"/>
                </svg>
                <span className="text-lg">Book Learning Development Workshops</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto bg-gray-100 border-t py-2 px-4">
        <div className="container mx-auto flex justify-end text-sm text-gray-600">
          <div>Logged in: Melroy Menezes (6857373) <Link href="/auth/login" className="text-blue-600 hover:underline ml-2">Logout</Link></div>
        </div>
      </div>
    </div>
  );
}
