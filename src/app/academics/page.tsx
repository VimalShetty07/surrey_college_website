import Image from "next/image";
import Link from "next/link";

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
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
            <Link href="/" className="text-white hover:text-gray-200">
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
            <Link href="/academics/modules" className="text-white hover:text-gray-200 font-medium">
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
      <div className="container mx-auto p-6">
        {/* Main heading */}
        <h1 className="text-2xl font-bold mb-6 text-center">Welcome to Surrey Self-Service</h1>
        
        {/* First row: Welcome and Quick Links sections */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Left Section - Welcome (50% width) */}
          <div className="bg-white p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Welcome to Surrey Self-Service</h2>
            <p className="mb-4 text-gray-600">What this site is for:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>View details of your application to Surrey</li>
              <li>Register for your course</li>
              <li>Manage your personal details</li>
              <li>Select and view your modules and assessment results</li>
              <li>Download letters (e.g. council tax exemption)</li>
              <li>View personal tutor meeting records</li>
              <li>Apply for financial support</li>
              <li>Manage academic appeals</li>
            </ul>
          </div>

          {/* Right Section - Quick Links (50% width) */}
          <div className="bg-white p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { text: "Registration", icon: "👤" },
                { text: "Contact us", icon: "✉️" },
                { text: "Additional online services", icon: "☁️" },
                { text: "Personal tutoring", icon: "✏️" },
                { text: "Welcome!", icon: "👍" },
                { text: "IT Guidance", icon: "❓" },
              ].map((link, index) => (
                <div
                  key={index}
                  className="bg-blue-500 text-white p-4 text-center shadow-md cursor-pointer hover:bg-blue-600 transition"
                >
                  <p className="text-2xl">{link.icon}</p>
                  <p className="text-sm">{link.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Second row: Learning Development section (separate from Quick Links) */}
        <div className="bg-white p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">Learning Development</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-500 text-white p-4 text-center shadow-md cursor-pointer hover:bg-blue-600 transition">
              🔍 My Learning Development at Surrey
            </div>
            <div className="bg-blue-500 text-white p-4 text-center shadow-md cursor-pointer hover:bg-blue-600 transition">
              📅 Book Learning Development Workshops
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 