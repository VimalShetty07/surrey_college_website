import Image from "next/image";
import Link from "next/link";

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <nav className="bg-blue-900 text-white p-4 flex items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-white h-8 w-24 mr-4 flex items-center justify-center">
            <span className="text-blue-900 font-bold">SURREY</span>
          </div>
        </div>
        
        {/* Navigation menu - moved next to logo */}
        <ul className="flex space-x-6 ml-4">
          <li>Welcome</li>
          <li>Applications</li>
          <li>Registration</li>
          <li>Letters</li>
          <li>
            <Link href="/academics/modules" className="hover:underline">Modules</Link>
          </li>
        </ul>
      </nav>

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