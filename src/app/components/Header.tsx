import { HomeIcon, Bars3Icon, EnvelopeIcon, ChatBubbleLeftRightIcon, BellIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white">
      {/* Top part of header (3/4 of header height) */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Left side: Home icon and logo */}
        <div className="flex items-center space-x-4">
          <HomeIcon className="h-6 w-6" />
          {/* Using Next.js Image component with SVG logo */}
          <Image 
            src="/images/logo.svg" 
            alt="Logo" 
            width={100} 
            height={80} 
            className="object-contain"
          />
        </div>
        
        {/* Right side: 3 components with 3 lines */}
        <div className="flex items-center space-x-6">
          {/* Component 1: Three icons */}
          <div className="flex items-center space-x-4">
            <EnvelopeIcon className="h-6 w-6 text-gray-700 cursor-pointer hover:text-blue-500" />
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-gray-700 cursor-pointer hover:text-blue-500" />
            <BellIcon className="h-6 w-6 text-gray-700 cursor-pointer hover:text-blue-500" />
          </div>
          
          <div className="h-4 w-px bg-gray-300"></div>
          
          {/* Component 2: Box icon with text */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gray-700 flex items-center justify-center rounded">
              <span className="text-white font-medium text-sm">MM</span>
            </div>
            <span className="text-sm">MELROY VERNON MENEZES</span>
          </div>

        </div>
      </div>
      
      {/* Grey separation line */}
      <div className="h-px w-full bg-gray-300"></div>
      
      {/* Bottom part of header (1/4 of header height) */}
      <div className="px-6 py-2">
        <nav className="flex space-x-6">
          {/* First group - Main services */}
          <a href="#" className="text-sm hover:underline">My Timetable</a>
          
          {/* Dropdown for Library */}
          <div className="relative group">
            <a href="#" className="text-sm flex items-center hover:underline">
              Library
              <ChevronDownIcon className="h-4 w-4 ml-1" />
            </a>
            <div className="absolute left-0 mt-1 w-48 bg-white shadow-md rounded-md hidden group-hover:block z-10">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Search Catalogue</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Reading Lists</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Book a Room</a>
              </div>
            </div>
          </div>
          
          {/* Dropdown for My Services */}
          <div className="relative group">
            <a href="#" className="text-sm flex items-center hover:underline">
              My Services
              <ChevronDownIcon className="h-4 w-4 ml-1" />
            </a>
            <div className="absolute left-0 mt-1 w-48 bg-white shadow-md rounded-md hidden group-hover:block z-10">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Student Records</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Finance</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Course Registration</a>
              </div>
            </div>
          </div>
          
          <a href="#" className="text-sm hover:underline">ePortfolio</a>
          
          {/* Divider */}
          <div className="h-4 w-px bg-gray-300"></div>
          
          {/* Second group - Support links */}
          {/* Dropdown for Help */}
          <div className="relative group">
            <a href="#" className="text-sm flex items-center hover:underline">
              Help
              <ChevronDownIcon className="h-4 w-4 ml-1" />
            </a>
            <div className="absolute left-0 mt-1 w-48 bg-white shadow-md rounded-md hidden group-hover:block z-10">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">FAQs</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Contact Support</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Knowledge Base</a>
              </div>
            </div>
          </div>
          
          <a href="#" className="text-sm hover:underline">Privacy</a>
          <a href="#" className="text-sm hover:underline">Accessibility</a>
          <Link href="/academics" className="text-sm hover:underline">Academics</Link>
        </nav>
      </div>
    </header>
  );
} 