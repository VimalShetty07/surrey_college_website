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
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main Header - Blue Navigation Bar */}
      <header className="bg-blue-900 text-white py-3 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center">
                <img
                  src="https://sits.surrey.ac.uk/live/sits.urd/images/sv-header.png"
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
            Melroy V Menezes - 6857373
          </div>
        </div>
      </header>

      
       {/* Page Content */}
       <div className="flex-grow p-4 max-w-7xl mx-auto w-full">
         <h2 className="text-lg font-semibold mb-4 pl-2">My Modules</h2>
         


    
        
        {/* Module and assessment marks Section */}
        <div className="bg-white border mb-4">
          <div className="bg-gray-200 px-3 py-2 text-sm font-semibold">Module and assessment marks  :               Melroy V Menezes (6857373)</div>
          <div className="p-3 flex">
            <div className="w-1/2">
              <p className="text-xs mb-1">The weighted averages of your agreed marks at each level are shown here. The level average is correct when all of your marks have been entered and agreed by the Board of Examiners at the end of each level of study.</p>
            </div>
            <div className="w-1/2 bg-gray-100 p-3">
              <div className="text-sm font-semibold mb-2">Level averages</div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="p-1 border text-left">Level</th>
                      <th className="p-1 border text-left">Credits Attempted</th>
                      <th className="p-1 border text-left">Credits Awarded</th>
                      <th className="p-1 border text-left">Compensation</th>
                      <th className="p-1 border text-left">RPL</th>
                      <th className="p-1 border text-left">Total</th>
                      <th className="p-1 border text-left">Overall Aggregate Mark</th>
                      <th className="p-1 border text-left">BoE Decision</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-1 border">HE7</td>
                      <td className="p-1 border">180</td>
                      <td className="p-1 border">60</td>
                      <td className="p-1 border"></td>
                      <td className="p-1 border"></td>
                      <td className="p-1 border">60</td>
                      <td className="p-1 border">83</td>
                      <td className="p-1 border"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="p-3">
            <p className="text-xs mb-2">Please note that this is not an official transcript and it is possible your final marks will differ from those displayed here available. Marks are provisional and subject to validation by University examination boards.</p>
          </div>
        </div>
        
        {/* Provisional marks Section */}
        
        
        {/* Ratified marks Section */}
        <div className="bg-white border mb-4">
          <div className="bg-gray-200 px-3 py-2 text-sm font-semibold">Ratified marks</div>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="w-full text-xs border">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-1 border text-left">Year</th>
                    <th className="p-1 border text-left">Module code</th>
                    <th className="p-1 border text-left">Module title</th>
                    <th className="p-1 border text-left">Credits attempted</th>
                    <th className="p-1 border text-left">Mark</th>
                    <th className="p-1 border text-left">Grade</th>
                    <th className="p-1 border text-left">Credits achieved</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-1 border" colSpan={7}>Level M (Masters)</td>
                  </tr>
                  <tr>
                    <td className="p-1 border">2024/25</td>
                    <td className="p-1 border">EEE3030</td>
                    <td className="p-1 border">Speech & Audio Processing & Recognition</td>
                    <td className="p-1 border">15</td>
                    <td className="p-1 border">81</td>
                    <td className="p-1 border">Pass</td>
                    <td className="p-1 border">15</td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">77</td>
                    <td className="p-1 border">15% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">86</td>
                    <td className="p-1 border">15% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">84</td>
                    <td className="p-1 border">70% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  
                  {/* Additional ratified marks entries */}
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">Reassessment</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">15% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">Reassessment</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">70% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  
                  <tr>
                    <td className="p-1 border">2024/25</td>
                    <td className="p-1 border">EEE3066</td>
                    <td className="p-1 border">Fundamentals Of Machine Learning</td>
                    <td className="p-1 border">15</td>
                    <td className="p-1 border">84</td>
                    <td className="p-1 border">Pass</td>
                    <td className="p-1 border">15</td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">77</td>
                    <td className="p-1 border">20% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">89</td>
                    <td className="p-1 border">80% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">Reassessment</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">20% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">Reassessment</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">80% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  
                  <tr>
                    
                    <td className="p-1 border">2024/25</td>
                    <td className="p-1 border">MAN3010</td>
                    <td className="p-1 border">Topics In Middle Eastern AI</td>
                    <td className="p-1 border">15</td>
                    <td className="p-1 border">86</td>
                    <td className="p-1 border">Pass</td>
                    <td className="p-1 border">15</td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">84</td>
                    <td className="p-1 border">40% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">87</td>
                    <td className="p-1 border">60% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  
                  <tr>
                    <td className="p-1 border">2024/25</td>
                    <td className="p-1 border">EEE3032</td>
                    <td className="p-1 border">Computer Vision And Pattern Recognition</td>
                    <td className="p-1 border">15</td>
                    <td className="p-1 border">91</td>
                    <td className="p-1 border">Pass</td>
                    <td className="p-1 border">15</td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">81</td>
                    <td className="p-1 border">20% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">93</td>
                    <td className="p-1 border">80% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">Reassessment</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">20% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">Reassessment</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">80% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Awards Section */}
        <div className="bg-white border mb-4">
          <div className="bg-gray-200 px-3 py-2 text-sm font-semibold">Awards</div>
          <div className="p-3">
            <p className="text-xs">Any conferred awards are shown here:</p>
            
            <div className="bg-gray-100 p-3 mt-2">
              <div className="text-sm font-semibold mb-2">Award and classification</div>
              <p className="text-xs">No Conferred award records to show</p>
            </div>
          </div>
        </div>
        
        {/* Back and Contact buttons */}
        <div className="flex justify-between mt-4">
          <button className="border bg-white text-gray-700 px-4 py-1 text-sm">Back</button>
          <button className="bg-blue-700 text-white px-4 py-1 text-sm" onClick={() => window.open('mailto:support@surrey.ac.uk')}>
            Contact faculty support
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-100 text-xs text-gray-600 py-2 px-4 border-t mt-auto text-right">
        Logged in as Melroy Menezes (6857373) |{" "}
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
