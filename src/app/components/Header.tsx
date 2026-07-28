'use client';

import { useState } from 'react';
import {
  HomeIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import LogoutButton from './LogoutButton';

const navLinks = [
  { href: '/timetable', label: 'My Timetable' },
  { href: '#', label: 'ePortfolio' },
  { href: '#', label: 'Privacy' },
  { href: '#', label: 'Accessibility' },
  { href: '/academics', label: 'Academics' },
  { href: '/tracking', label: 'Tracking' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((current) => (current === name ? null : name));
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="w-full bg-white relative z-30">
      {/* Top bar */}
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
          <Link href="/" onClick={closeMenu} aria-label="Home">
            <HomeIcon className="h-6 w-6 shrink-0" />
          </Link>
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={100}
            height={80}
            className="object-contain h-8 sm:h-10 w-auto"
          />
        </div>

        <div className="flex items-center space-x-3 sm:space-x-6">
          {/* Icons — tablet and up */}
          <div className="hidden md:flex items-center space-x-4">
            <EnvelopeIcon className="h-6 w-6 text-gray-700 cursor-pointer hover:text-blue-500" />
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-gray-700 cursor-pointer hover:text-blue-500" />
            <BellIcon className="h-6 w-6 text-gray-700 cursor-pointer hover:text-blue-500" />
          </div>

          <div className="hidden md:block h-4 w-px bg-gray-300" />

          <div className="flex items-center space-x-2 min-w-0">
            <div className="h-8 w-8 bg-gray-700 flex items-center justify-center rounded shrink-0">
              <span className="text-white font-medium text-sm">MM</span>
            </div>
            <span className="hidden lg:inline text-sm truncate">
              MELROY VERNON MENEZES
            </span>
          </div>

          <div className="hidden sm:block h-4 w-px bg-gray-300" />

          <div className="hidden sm:block">
            <LogoutButton className="text-sm text-gray-700 hover:text-blue-500 hover:underline whitespace-nowrap">
              Sign Out
            </LogoutButton>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-1.5 text-gray-700 hover:text-blue-500"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      <div className="h-px w-full bg-gray-300" />

      {/* Desktop nav */}
      <div className="hidden lg:block px-6 py-2">
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <Link href="/timetable" className="text-sm hover:underline">
            My Timetable
          </Link>

          <div className="relative group">
            <a href="#" className="text-sm flex items-center hover:underline">
              Library
              <ChevronDownIcon className="h-4 w-4 ml-1" />
            </a>
            <div className="absolute left-0 mt-1 w-48 bg-white shadow-md rounded-md hidden group-hover:block z-10 border">
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
            <div className="absolute left-0 mt-1 w-48 bg-white shadow-md rounded-md hidden group-hover:block z-10 border">
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

          <div className="h-4 w-px bg-gray-300" />

          <div className="relative group">
            <a href="#" className="text-sm flex items-center hover:underline">
              Help
              <ChevronDownIcon className="h-4 w-4 ml-1" />
            </a>
            <div className="absolute left-0 mt-1 w-48 bg-white shadow-md rounded-md hidden group-hover:block z-10 border">
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

      {/* Mobile / tablet nav panel */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-md">
          <div className="px-4 py-3 border-b border-gray-100 sm:hidden">
            <p className="text-sm font-medium text-gray-800">MELROY VERNON MENEZES</p>
            <LogoutButton className="mt-2 text-sm text-blue-700 hover:underline">
              Sign Out
            </LogoutButton>
          </div>

          <nav className="px-2 py-2 flex flex-col">
            {navLinks.map((link) =>
              link.href.startsWith('/') ? (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="px-3 py-2.5 text-sm text-gray-800 hover:bg-gray-100 rounded"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2.5 text-sm text-gray-800 hover:bg-gray-100 rounded"
                >
                  {link.label}
                </a>
              )
            )}

            {/* Library accordion */}
            <button
              type="button"
              onClick={() => toggleDropdown('library')}
              className="px-3 py-2.5 text-sm text-gray-800 hover:bg-gray-100 rounded flex items-center justify-between w-full text-left"
            >
              Library
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${
                  openDropdown === 'library' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openDropdown === 'library' && (
              <div className="pl-4 pb-1">
                <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
                  Search Catalogue
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
                  Reading Lists
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
                  Book a Room
                </a>
              </div>
            )}

            {/* My Services accordion */}
            <button
              type="button"
              onClick={() => toggleDropdown('services')}
              className="px-3 py-2.5 text-sm text-gray-800 hover:bg-gray-100 rounded flex items-center justify-between w-full text-left"
            >
              My Services
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${
                  openDropdown === 'services' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openDropdown === 'services' && (
              <div className="pl-4 pb-1">
                <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
                  Student Records
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
                  Finance
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
                  Course Registration
                </a>
              </div>
            )}

            {/* Help accordion */}
            <button
              type="button"
              onClick={() => toggleDropdown('help')}
              className="px-3 py-2.5 text-sm text-gray-800 hover:bg-gray-100 rounded flex items-center justify-between w-full text-left"
            >
              Help
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${
                  openDropdown === 'help' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openDropdown === 'help' && (
              <div className="pl-4 pb-1">
                <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
                  FAQs
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
                  Contact Support
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
                  Knowledge Base
                </a>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
