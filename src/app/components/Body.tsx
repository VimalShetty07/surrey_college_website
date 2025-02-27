export default function Body() {
  return (
    <main className="flex-grow p-6 bg-white">
      
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
            <h3 className="text-2xl font-bold mb-1">Generative AI at surrey</h3>
            <p className="text-lg">Guidance on the appropriate use of generative artificial intelligence at Surrey</p>
          </div>
        </div>
      </div>
      
      {/* Main content layout - 2/3 left, 1/3 right */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left column - 2/3 width with 3 boxes in a row */}
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Box 1 */}
            <div className="border rounded-lg shadow-sm overflow-hidden">
              <div className="h-40 w-full bg-cover bg-center" style={{ backgroundImage: `url('/images/box1.jpg')` }}></div>
              <div className="p-4 bg-gray-50">
                <h3 className="text-md font-medium mb-2">AI AND SUSTAINABILITY</h3>
                <p className="text-xs text-gray-600 mb-2">2024/25 Semester 2</p>
                <p className="text-sm line-clamp-3">This course explores AI and sustainability concepts.</p>
              </div>
            </div>
            
            {/* Box 2 */}
            <div className="border rounded-lg shadow-sm overflow-hidden">
              <div className="h-40 w-full bg-cover bg-center" style={{ backgroundImage: `url('/images/box2.jpg')` }}></div>
              <div className="p-4 bg-gray-50">
                <h3 className="text-md font-medium mb-2">ETHICAL AI</h3>
                <p className="text-xs text-gray-600 mb-2">2024/25 Semester 2</p>
                <p className="text-sm line-clamp-3">Learn about ethical considerations in AI.</p>
              </div>
            </div>
            
            {/* Box 3 */}
            <div className="border rounded-lg shadow-sm overflow-hidden">
              <div className="h-40 w-full bg-cover bg-center" style={{ backgroundImage: `url('/images/box3.jpg')` }}></div>
              <div className="p-4 bg-gray-50">
                <h3 className="text-md font-medium mb-2">AI POLICY</h3>
                <p className="text-xs text-gray-600 mb-2">2024/25 Semester 2</p>
                <p className="text-sm line-clamp-3">Policy frameworks for sustainable AI.</p>
              </div>
            </div>
            <div className="border rounded-lg shadow-sm overflow-hidden">
              <div className="h-40 w-full bg-cover bg-center" style={{ backgroundImage: `url('/images/box4.jpg')` }}></div>
              <div className="p-4 bg-gray-50">
                <h3 className="text-md font-medium mb-2">AI POLICY</h3>
                <p className="text-xs text-gray-600 mb-2">2024/25 Semester 2</p>
                <p className="text-sm line-clamp-3">Policy frameworks for sustainable AI.</p>
              </div>
            </div>
          </div>
          
          
        </div>
        
        {/* Right column - 1/3 width with vertically stacked boxes */}
        <div className="w-full lg:w-1/3 space-y-6">
          {/* Box 1 - Academic Integrity */}
          <div className="border rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-blue-50">
              <h3 className="text-md font-medium mb-3">AI AND SUSTAINABILITY (EEEM073) - SEMR2 2024/5, EEEM073_2024-5_SEMR2_2</h3>
              <div className="bg-white p-3 rounded-md border border-gray-200 mb-3">
                <p className="text-sm mb-2">Check your draft work through the similarity checker before you submit.</p>
                <button className="bg-red-600 text-white py-1 px-3 rounded text-sm hover:bg-red-700 transition">
                  Similarity check
                </button>
              </div>
              <a href="#" className="text-blue-600 hover:underline text-sm block mt-2">
                Introduction to Academic Integrity
              </a>
            </div>
          </div>
          
          {/* Box 2 - Panopto recordings */}
          <div className="border rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-blue-50">
              <a href="#" className="text-md font-medium text-blue-600 hover:underline block mb-2">
                Panopto recordings
              </a>
              <p className="text-sm mb-3">
                Unable to view a video in the SurreyLearn materials? Check out this guide on how to view the Panopto recording.
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                Show all
              </a>
            </div>
          </div>
          
          {/* Box 3 - Programme Support */}
          <div className="border rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-blue-50">
              <h3 className="text-md font-medium mb-3">Programme Support</h3>
              <div className="bg-white p-3 rounded-md border border-gray-200">
                <p className="text-sm">PG - Electrical and Electronic Engineering - Programme Information</p>
              </div>
            </div>
          </div>
          
          {/* Box 4 - Contact Us */}
          <div className="border rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-blue-50">
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
    </main>
  );
} 