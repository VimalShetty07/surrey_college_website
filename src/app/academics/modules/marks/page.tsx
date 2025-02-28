'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

export default function ModuleMarksPage() {
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
        <ul className="hidden md:flex space-x-6">
          <li>Welcome</li>
          <li>Applications</li>
          <li>Registration</li>
          <li>Extenuating Circumstances</li>
          <li>Letters</li>
          <li className="font-bold">Modules</li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-6 flex-grow">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Link href="/academics/modules" className="text-blue-600 mr-2">
              &larr; Back to Modules
            </Link>
            <h2 className="text-2xl font-semibold">Module Marks</h2>
          </div>
          <button 
            onClick={handleLogout}
            className="text-blue-600 hover:text-blue-800"
          >
            Sign Out
          </button>
        </div>

        <div className="bg-white rounded-lg shadow border p-6 mb-6">
          <h3 className="text-lg font-medium mb-4">Academic Year 2023/24 - Semester 2</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left border-b">Module Code</th>
                  <th className="py-3 px-4 text-left border-b">Module Title</th>
                  <th className="py-3 px-4 text-left border-b">Credits</th>
                  <th className="py-3 px-4 text-left border-b">Assessment Type</th>
                  <th className="py-3 px-4 text-left border-b">Mark</th>
                  <th className="py-3 px-4 text-left border-b">Grade</th>
                  <th className="py-3 px-4 text-left border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4" rowSpan={2}>EEEM073</td>
                  <td className="py-3 px-4" rowSpan={2}>AI and Sustainability</td>
                  <td className="py-3 px-4" rowSpan={2}>15</td>
                  <td className="py-3 px-4">Coursework (50%)</td>
                  <td className="py-3 px-4">74</td>
                  <td className="py-3 px-4">A</td>
                  <td className="py-3 px-4" rowSpan={2}>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Passed</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">Exam (50%)</td>
                  <td className="py-3 px-4">68</td>
                  <td className="py-3 px-4">B</td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4" rowSpan={2}>EEEM074</td>
                  <td className="py-3 px-4" rowSpan={2}>Ethical AI</td>
                  <td className="py-3 px-4" rowSpan={2}>15</td>
                  <td className="py-3 px-4">Coursework (60%)</td>
                  <td className="py-3 px-4">82</td>
                  <td className="py-3 px-4">A+</td>
                  <td className="py-3 px-4" rowSpan={2}>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Passed</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">Presentation (40%)</td>
                  <td className="py-3 px-4">78</td>
                  <td className="py-3 px-4">A</td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4" rowSpan={2}>EEEM075</td>
                  <td className="py-3 px-4" rowSpan={2}>AI Policy</td>
                  <td className="py-3 px-4" rowSpan={2}>15</td>
                  <td className="py-3 px-4">Essay (30%)</td>
                  <td className="py-3 px-4">65</td>
                  <td className="py-3 px-4">B</td>
                  <td className="py-3 px-4" rowSpan={2}>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Passed</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">Report (70%)</td>
                  <td className="py-3 px-4">72</td>
                  <td className="py-3 px-4">A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-medium mb-4">Overall Results</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg">
              <p className="text-gray-600 mb-1">Semester Average</p>
              <p className="text-2xl font-bold">73.5%</p>
              <p className="text-sm text-gray-500">Grade: A</p>
            </div>
            <div className="border p-4 rounded-lg">
              <p className="text-gray-600 mb-1">Credits Achieved</p>
              <p className="text-2xl font-bold">45/45</p>
              <p className="text-sm text-gray-500">All modules passed</p>
            </div>
          </div>
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