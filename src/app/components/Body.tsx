'use client';

import Link from 'next/link';

export default function Body() {
  return (
    <>


      <main className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto p-6">
          {/* Banner section - full width */}
          <div className="mb-6 relative overflow-hidden rounded-lg shadow-sm h-64">
            {/* Banner image as background */}
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ 
                backgroundImage: `url('/images/banner1.png')`,
                backgroundSize: 'cover' 
              }}
            >
              {/* Semi-transparent overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              
              {/* Text positioned at bottom left */}
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">Generative AI at Surrey</h3>
                <p className="text-lg">Guidance on the appropriate use of generative artificial intelligence at Surrey</p>
              </div>
            </div>
          </div>

          {/* Tabs navigation */}
          <div className="bg-white mb-6 overflow-x-auto">
            <div className="flex border-b">
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-800">All</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-800">University Wide</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-800">Programmes</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-800 border-b-2 border-blue-800">2024/25 Semester 2</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-800">2024/25 Semester 1</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-800">2023/24 Semester 2</button>
            </div>
          </div>
          
          {/* Main content layout - 2/3 left, 1/3 right */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left column - 2/3 width with course modules in a grid */}
            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Module 1 */}
                <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
                  <div className="h-40 w-full bg-cover bg-center" style={{ backgroundImage: `url('/images/box1.jpg')` }}></div>
                  <div className="p-4">
                    <h3 className="text-md font-bold mb-1">AI AND SUSTAINABILITY</h3>
                    <p className="text-xs text-gray-600 mb-2">(EEEM073) - SEMR2 2024/5</p>
                    <p className="text-xs text-gray-600 mb-2">2024/25 Semester 2</p>
                  </div>
                </div>
                
                {/* Module 2 */}
                <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
                  <div className="h-40 w-full bg-cover bg-center" style={{ backgroundImage: `url('/images/box2.jpg')` }}></div>
                  <div className="p-4">
                    <h3 className="text-md font-bold mb-1">AI AND HEALTH</h3>
                    <p className="text-xs text-gray-600 mb-2">(EEEM069) - SEMR2 2024/5</p>
                    <p className="text-xs text-gray-600 mb-2">2024/25 Semester 2</p>
                  </div>
                </div>
                
                {/* Module 3 */}
                <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
                  <div className="h-40 w-full bg-cover bg-center" style={{ backgroundImage: `url('/images/box3.jpg')` }}></div>
                  <div className="p-4">
                    <h3 className="text-md font-bold mb-1">RESEARCH, PROFESSIONALISM AND INNOVATION</h3>
                    <p className="text-xs text-gray-600 mb-2">(EEEM072) - SEMR2 2024/5</p>
                    <p className="text-xs text-gray-600 mb-2">2024/25 Semester 2</p>
                  </div>
                </div>
                
                {/* Module 4 */}
                <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
                  <div className="h-40 w-full bg-cover bg-center" style={{ backgroundImage: `url('/images/box4.jpg')` }}></div>
                  <div className="p-4">
                    <h3 className="text-md font-bold mb-1">APPLIED MACHINE LEARNING</h3>
                    <p className="text-xs text-gray-600 mb-2">(EEEM068) - SEMR2 2024/5</p>
                    <p className="text-xs text-gray-600 mb-2">2024/25 Semester 2</p>
                  </div>
                </div>
              </div>
              
              {/* View All Courses link */}
              <a href="#" className="text-blue-600 hover:underline text-sm">View All Courses (4)</a>
            </div>
            
            {/* Right column - 1/3 width with vertically stacked boxes */}
            <div className="w-full lg:w-1/3 space-y-6">
              {/* Box 1 - Academic Integrity */}
              <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
                <div className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-md font-medium">Check your draft work</h3>
                    <button className="text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm mb-4">Check your draft work through the similarity checker before you submit.</p>
                  <button className="bg-red-600 text-white py-2 px-4 rounded flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Similarity checker
                  </button>
                  <a href="#" className="text-blue-600 hover:underline text-sm block mt-4">
                    Introduction to Academic Integrity
                  </a>
                </div>
              </div>
              
              {/* Box 2 - Panopto recordings */}
              <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-md font-medium text-blue-600">Panopto recordings</h3>
                    <button className="text-gray-500">×</button>
                  </div>
                  <p className="text-sm mb-4">
                    Unable to view a video in the SurreyLearn materials? Check out this
                    <a href="#" className="text-blue-600 hover:underline"> guide on how to view the Panopto recording</a>.
                  </p>
                  <a href="#" className="text-blue-600 hover:underline text-sm">
                    Show All
                  </a>
                </div>
              </div>
              
              {/* Box 3 - Programme Support */}
              <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-md font-medium">Programme Support</h3>
                    <button className="text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <div className="bg-gray-50 p-3 rounded mt-2">
                    <p className="text-sm">PG - Electrical and Electronic Engineering - Programme Information</p>
                  </div>
                </div>
              </div>
              
              {/* Box 4 - Contact Us */}
              <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
                <div className="p-4">
                  <h3 className="text-md font-medium mb-2">Contact Us</h3>
                  <p className="text-sm mb-2">For SurreyLearn queries please contact:</p>
                  <a href="mailto:surreylearnhelp@surrey.ac.uk" className="text-blue-600 hover:underline text-sm flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    surreylearnhelp@surrey.ac.uk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 