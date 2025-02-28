'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function TimetablePage() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main Header */}
      <header className="bg-white px-6 py-3 flex justify-between items-center border-b">
        <Link href="/">
          <div className="flex items-center">
            <img 
              src="/images/logo.svg" 
              alt="University of Surrey" 
              className="h-10"
            />
          </div>
        </Link>
        <nav className="flex items-center space-x-6 text-blue-800 font-medium">
          <span>Academic Year: 2024/5</span>
          <Link href="/timetable">Timetables</Link>
          <Link href="#">Bookings</Link>
          <Link href="#">Administration</Link>
          <Link href="#">Help</Link>
        </nav>
      </header>

      {/* Timetable Controls - Blue Bar */}
      <div className="bg-blue-800 text-white px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button className="rounded-full bg-white/20 p-1.5 h-8 w-8 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="rounded-full bg-white/20 p-1.5 h-8 w-8 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M15 10a.75.75 0 01-.75.75h-8.5a.75.75 0 010-1.5h8.5A.75.75 0 0115 10z" />
              </svg>
            </button>
            <button className="rounded-full bg-white/20 p-1.5 h-8 w-8 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <span className="font-medium ml-2">Multiple Timetables</span>
          </div>
          
          <div className="text-center font-medium">
            24 February 2025 - 28 February 2025 - Sem 2-04
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="rounded-full bg-white/20 p-1.5 h-8 w-8 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
              </svg>
            </button>
            <button className="rounded-full bg-white/20 p-1.5 h-8 w-8 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
              </svg>
            </button>
            <button className="rounded-full bg-white/20 p-1.5 h-8 w-8 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Timetable */}
      <div className="flex-grow bg-white border">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="w-20 border-r border-b p-2"></th>
              <th className="p-2 border-r border-b text-center">
                <div className="font-medium">Monday</div>
                <div className="text-sm">24 February 2025</div>
              </th>
              <th className="p-2 border-r border-b text-center">
                <div className="font-medium">Tuesday</div>
                <div className="text-sm">25 February 2025</div>
              </th>
              <th className="p-2 border-r border-b text-center">
                <div className="font-medium">Wednesday</div>
                <div className="text-sm">26 February 2025</div>
              </th>
              <th className="p-2 border-r border-b text-center">
                <div className="font-medium">Thursday</div>
                <div className="text-sm">27 February 2025</div>
              </th>
              <th className="p-2 border-b text-center">
                <div className="font-medium">Friday</div>
                <div className="text-sm">28 February 2025</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* 9 AM Row */}
            <tr>
              <td className="p-2 border-r border-b font-medium text-right">9<span className="text-xs align-top">AM</span></td>
              <td className="border-r border-b h-24 relative"></td>
              <td className="border-r border-b h-24 relative">
                <div className="absolute inset-0 m-0.5 bg-gray-500 text-white p-1 text-xs overflow-y-auto">
                  <div className="font-bold">NATURAL LANGUAGE PROCESSING COMM061; NATURAL LANGUAGE PROCESSING COM3029</div>
                  <div>Semester 2 Teaching Event</div>
                  <div>MAIN CAMPUS GENERAL, LTG LECT</div>
                </div>
              </td>
              <td className="border-r border-b h-24 relative"></td>
              <td className="border-r border-b h-24 relative"></td>
              <td className="border-b h-24 relative"></td>
            </tr>

            {/* 10 AM Row */}
            <tr>
              <td className="p-2 border-r border-b font-medium text-right">10<span className="text-xs align-top">AM</span></td>
              <td className="border-r border-b h-24 relative">
                <div className="absolute inset-0 m-0.5 bg-blue-700 text-white p-1 text-xs overflow-y-auto">
                  <div className="font-bold">ADVANCED TOPICS IN COMPUTER VISION AND DEEP LEARNING EEEM071</div>
                  <div>Semester 2 Teaching Event</div>
                  <div>MAIN CAMPUS GENERAL, LTG LECT</div>
                </div>
              </td>
              <td className="border-r border-b h-24 relative">
                <div className="text-xs p-1 text-gray-700">
                  9:00 am to 11:00 am<br/>
                  Semester 2 Teaching Event<br/>
                  MAIN CAMPUS GENERAL, LTG<br/>
                  De S (Dr)<br/>
                  LECT
                </div>
              </td>
              <td className="border-r border-b h-24 relative"></td>
              <td className="border-r border-b h-24 relative"></td>
              <td className="border-b h-24 relative">
                <div className="absolute inset-0 m-0.5 bg-gray-500 text-white p-1 text-xs overflow-y-auto">
                  <div className="font-bold">APPLIED MACHINE LEARNING EEEM068 MAIN CAMPUS GENERAL, LTF LECT</div>
                  <div>10:00 am to 12:00 pm</div>
                  <div>MAIN CAMPUS GENERAL, LTF</div>
                  <div>Dutta A (Dr); Rana MAT (Dr)</div>
                  <div>LECT</div>
                </div>
              </td>
            </tr>

            {/* 11 AM Row */}
            <tr>
              <td className="p-2 border-r border-b font-medium text-right">11<span className="text-xs align-top">AM</span></td>
              <td className="border-r border-b h-24 relative">
                <div className="absolute inset-0 m-0.5 bg-gray-500 text-white p-1 text-xs overflow-y-auto">
                  <div className="font-bold">AI AND SUSTAINABILITY EEEM073 Semester 2 Teaching Event MAIN CAMPUS GENERAL, 03 DK 02 LECT</div>
                  <div>11:00 am to 1:00 pm</div>
                  <div>Semester 2 Teaching Event</div>
                  <div>MAIN CAMPUS GENERAL, 03 DK 02</div>
                </div>
              </td>
              <td className="border-r border-b h-24 relative"></td>
              <td className="border-r border-b h-24 relative"></td>
              <td className="border-r border-b h-24 relative"></td>
              <td className="border-b h-24 relative"></td>
            </tr>

            {/* 12 PM Row */}
            <tr>
              <td className="p-2 border-r border-b font-medium text-right">12<span className="text-xs align-top">PM</span></td>
              <td className="border-r border-b h-24 relative">
                <div className="text-xs p-1 text-gray-700">
                  Sperandio Nascimento EG (Prof)<br/>
                  LECT
                </div>
              </td>
              <td className="border-r border-b h-24 relative"></td>
              <td className="border-r border-b h-24 relative"></td>
              <td className="border-r border-b h-24 relative"></td>
              <td className="border-b h-24 relative">
                <div className="absolute inset-0 m-0.5 bg-gray-500 text-white p-1 text-xs overflow-y-auto">
                  <div className="font-bold">AI AND HEALTH EEEM069 Semester 2 Teaching Event MAIN CAMPUS GENERAL, LTF LECT</div>
                  <div>12:00 pm to 1:00 pm</div>
                  <div>Semester 2 Teaching Event</div>
                </div>
              </td>
            </tr>

            {/* 1 PM Row */}
            <tr>
              <td className="p-2 border-r font-medium text-right">1<span className="text-xs align-top">PM</span></td>
              <td className="border-r h-24 relative"></td>
              <td className="border-r h-24 relative">
                <div className="absolute inset-0 m-0.5 bg-gray-500 text-white p-1 text-xs overflow-y-auto">
                  <div className="font-bold">NATURAL LANGUAGE PROCESSING COM3029; NATURAL LANGUAGE PROCESSING COMM061</div>
                  <div>Semester 2 Teaching Event</div>
                  <div>MAIN CAMPUS GENERAL, 01 IFH 02 - Ada Lovelace Lab LAB</div>
                </div>
              </td>
              <td className="border-r h-24 relative"></td>
              <td className="border-r h-24 relative"></td>
              <td className="h-24 relative">
                <div className="absolute inset-0 m-0.5 bg-gray-500 text-white p-1 text-xs overflow-y-auto">
                  <div className="font-bold">AI AND HEALTH EEEM069 Semester 2 Teaching Event MAIN CAMPUS GENERAL, 01 BB 04 LAB</div>
                  <div>1:00 pm to 2:00 pm</div>
                  <div>Semester 2 Teaching Event</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* Footer */}
      <div className="mt-2 px-4 text-xs text-gray-600 border-t pt-2">
        <p>Timetabled events last full update 1:30 am on 28 February 2025</p>
        <div className="flex justify-between mt-2 pb-2">
          <p className="text-xs">© Copyright - Advanced Computer Software Group Ltd All Rights Reserved. Advanced is a trading name of Advanced Business Software and Solutions Limited.</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:underline">Accessibility statement</a>
            <img src="/images/cmis-logo.svg" alt="CMIS" className="h-5" />
            <a href="#" className="hover:underline">About</a>
          </div>
        </div>
      </div>
    </div>
  );
} 