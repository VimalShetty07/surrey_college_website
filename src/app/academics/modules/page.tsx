'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

export default function ModulesPage() {
  const router = useRouter();
  
  const handleLogout = () => {
    // Remove both cookie and localStorage for complete logout
    Cookies.remove('isAuthenticated');
    localStorage.removeItem('isAuthenticated');
    router.push('/auth/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">SURREY SELF-SERVICE</h1>
        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6">
            <li>Welcome</li>
            <li>Applications</li>
            <li>Registration</li>
            <li>Extenuating Circumstances</li>
            <li>Letters</li>
            <li className="font-bold">Modules</li>
          </ul>
          <button 
            onClick={handleLogout}
            className="text-white hover:text-gray-200 text-sm"
          >
            Sign Out
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-6 flex-grow">
        <h2 className="text-2xl font-semibold mb-4">Modules</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="bg-white p-6 rounded-lg shadow border">
            <p className="mb-4">
              Use the options to select and view your modules and review your module and
              assessment marks.
            </p>
            <p className="text-gray-600">
              Marks are confirmed and released following the Board of Examiners meeting.
              For more information, please review the regulations available{" "}
              <a
                href="https://www.surrey.ac.uk/quality-framework/academic-and-student-regulations-and-procedures"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                here
              </a>
              .
            </p>
          </div>

          {/* Right Section */}
          <div className="bg-white p-6 rounded-lg shadow border">
            <p className="mb-4">
              Module Selection will open once the University Registration is completed in
              person at the University. Relevant information about module selection has
              been emailed to students.
            </p>

            <div className="border-t pt-4">
              <div className="flex justify-between py-2 border-b">
                <span>Module registration</span>
                <span className="text-gray-500">Not Ready</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Module marks</span>
                <Link href="/academics/modules/marks">
                  <button className="bg-blue-500 text-white px-4 py-1 rounded">
                    View
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-blue-700 text-white px-6 py-2 rounded-lg">
            Contact faculty support
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-right text-sm text-gray-500 p-4">
        Logged in: Melroy Menezes (6857373) |{" "}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            handleLogout();
          }}
          className="text-blue-600"
        >
          Logout
        </a>
      </footer>
    </div>
  );
} 