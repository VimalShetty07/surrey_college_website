'use client';

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Main Navigation Bar */}
      <header className="bg-[#003E74] text-white">
        <div className="container mx-auto px-4 py-3 flex items-center">
          <Link href="/" className="flex items-center mr-10">
            <img 
              src="/images/surrey-logo.svg" 
              alt="Surrey Self-Service" 
              className="h-10"
            />
          </Link>
          <nav className="flex space-x-8">
            <Link href="/" className="text-white hover:text-gray-200 font-medium">
              Welcome
            </Link>
            <Link href="#" className="text-white hover:text-gray-200">
              Applications
            </Link>
            <div className="relative group">
              <Link href="/registration" className="text-white hover:text-gray-200 flex items-center">
                Registration
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
            <Link href="#" className="text-white hover:text-gray-200">
              Extenuating Circumstances
            </Link>
            <Link href="#" className="text-white hover:text-gray-200">
              Letters
            </Link>
            <Link href="/academics/modules" className="text-white hover:text-gray-200">
              Modules
            </Link>
            <button className="text-white hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Welcome to Surrey Self-Service</h1>
        
        {/* Two column layout for main content */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* What this site is for (left column) */}
          <div className="bg-white p-6 shadow">
            <h2 className="text-lg font-medium bg-gray-100 p-2 mb-4">What this site is for</h2>
            
            <div className="py-3">
              <h3 className="font-medium mb-2">Use this site to:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>View details of your application to Surrey</li>
                <li>Register for your course</li>
                <li>Manage your personal details</li>
                <li>Select and view your modules and view your assessment results</li>
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
          
          {/* Quick links (right column) */}
          <div className="bg-white p-6 shadow">
            <h2 className="text-lg font-medium bg-gray-100 p-2 mb-4">Quick links</h2>
            
            <div className="grid grid-cols-3 gap-4">
              <Link href="/registration" className="bg-[#39c] text-white p-4 flex flex-col items-center justify-center hover:bg-[#2d9ec3] transition">
                <div className="text-4xl mb-2">👤</div>
                <span>Registration</span>
              </Link>
              
              <Link href="#" className="bg-[#39c] text-white p-4 flex flex-col items-center justify-center hover:bg-[#2d9ec3] transition">
                <div className="text-4xl mb-2">✉️</div>
                <span>Contact us</span>
              </Link>
              
              <Link href="#" className="bg-[#39c] text-white p-4 flex flex-col items-center justify-center hover:bg-[#2d9ec3] transition">
                <div className="text-4xl mb-2">☁️</div>
                <span>Additional online services</span>
              </Link>
              
              <Link href="#" className="bg-[#39c] text-white p-4 flex flex-col items-center justify-center hover:bg-[#2d9ec3] transition">
                <div className="text-4xl mb-2">✏️</div>
                <span>Personal tutoring</span>
              </Link>
              
              <Link href="#" className="bg-[#39c] text-white p-4 flex flex-col items-center justify-center hover:bg-[#2d9ec3] transition">
                <div className="text-4xl mb-2">👍</div>
                <span>Welcome!</span>
              </Link>
              
              <Link href="#" className="bg-[#39c] text-white p-4 flex flex-col items-center justify-center hover:bg-[#2d9ec3] transition">
                <div className="text-4xl mb-2">❓</div>
                <span>IT Guidance</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Learning Development section */}
        <div className="bg-white p-6 shadow">
          <h2 className="text-lg font-medium bg-gray-100 p-2 mb-4">Learning Development</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="#" className="bg-[#39c] text-white p-6 flex items-center justify-center hover:bg-[#2d9ec3] transition">
              <div className="text-4xl mr-3">🔍</div>
              <span>my Learning Development at Surrey</span>
            </Link>
            
            <Link href="#" className="bg-[#39c] text-white p-6 flex items-center justify-center hover:bg-[#2d9ec3] transition">
              <div className="text-4xl mr-3">📅</div>
              <span>Book Learning Development Workshops</span>
            </Link>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="container mx-auto px-4 py-2 flex justify-end">
          <div className="text-sm text-gray-600">
            Logged in: Melroy Menezes (6857373) <Link href="/auth/login" className="text-blue-600 hover:underline ml-2">Logout</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
