'use client';

import {
  HomeIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import LogoutButton from './LogoutButton';

export default function Header() {
  return (
    <header className="w-full bg-white">
      {/* Top part of header (3/4 of header height) */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Left side: Home icon and logo */}
        <div className="flex items-center space-x-4">
          <HomeIcon className="h-6 w-6" />
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={100}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Right side: icons + user + logout */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <EnvelopeIcon className="h-6 w-6 text-gray-700 cursor-pointer hover:text-blue-500" />
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-gray-700 cursor-pointer hover:text-blue-500" />
            <BellIcon className="h-6 w-6 text-gray-700 cursor-pointer hover:text-blue-500" />
          </div>

          <div className="h-4 w-px bg-gray-300"></div>

          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gray-700 flex items-center justify-center rounded">
              <span className="text-white font-medium text-sm">MM</span>
            </div>
            <span className="text-sm">MELROY VERNON MENEZES</span>
          </div>

          <div className="h-4 w-px bg-gray-300"></div>

          <LogoutButton className="text-sm text-gray-700 hover:text-blue-500 hover:underline">
            Sign Out
          </LogoutButton>
        </div>
      </div>

      {/* Grey separation line */}
      <div className="h-px w-full bg-gray-300"></div>

      {/* Bottom part of header (1/4 of header height) */}
      <div className="px-6 py-2">
        <nav className="flex space-x-6">
          <a href="/timetable" className="text-sm hover:underline">
            My Timetable
          </a>

          <div className="relative group">
            <a href="#" className="text-sm flex items-center hover:underline">
              Library
              <ChevronDownIcon className="h-4 w-4 ml-1" />
            </a>
            <div className="absolute left-0 mt-1 w-48 bg-white shadow-md rounded-md hidden group-hover:block z-10">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Search Catalogue
                </a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Reading Lists
                </a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Book a Room
                </a>
              </div>
            </div>
          </div>

          <div className="relative group">
            <a href="#" className="text-sm flex items-center hover:underline">
              My Services
              <ChevronDownIcon className="h-4 w-4 ml-1" />
            </a>
            <div className="absolute left-0 mt-1 w-48 bg-white shadow-md rounded-md hidden group-hover:block z-10">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Student Records
                </a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Finance
                </a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Course Registration
                </a>
              </div>
            </div>
          </div>

          <a href="#" className="text-sm hover:underline">
            ePortfolio
          </a>

          <div className="h-4 w-px bg-gray-300"></div>

          <div className="relative group">
            <a href="#" className="text-sm flex items-center hover:underline">
              Help
              <ChevronDownIcon className="h-4 w-4 ml-1" />
            </a>
            <div className="absolute left-0 mt-1 w-48 bg-white shadow-md rounded-md hidden group-hover:block z-10">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  FAQs
                </a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Contact Support
                </a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Knowledge Base
                </a>
              </div>
            </div>
          </div>

          <a href="#" className="text-sm hover:underline">
            Privacy
          </a>
          <a href="#" className="text-sm hover:underline">
            Accessibility
          </a>
          <Link href="/academics" className="text-sm hover:underline">
            Academics
          </Link>
          <Link href="/tracking" className="text-sm hover:underline">
            Tracking
          </Link>
        </nav>
      </div>
    </header>
  );
}
