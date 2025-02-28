'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PersonalDetailsPage() {
  // Initial form state based on the image
  const [formData, setFormData] = useState({
    universityNumber: '6857373',
    title: 'Mr',
    forename: 'MELROY VERNON',
    preferredPronouns: 'He/Him',
    preferredName: 'MELROY VERNON',
    familyName: 'MENEZES',
    dateOfBirth: '27/May/2002',
    gender: 'Man',
    nationality: 'Indian'
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Main Header - Blue Navigation Bar */}
      <header className="bg-blue-900 text-white py-3 px-4">
        <div className="container mx-auto flex items-center">
          <Link href="/">
            <div className="flex items-center">
              <img
                src="/images/surrey-logo.svg"
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
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Registration title bar */}
        <div className="bg-gray-200 p-2 mb-6">
          <h1 className="text-lg font-medium">Registration</h1>
        </div>

        {/* Personal details section */}
        <div className="bg-gray-200 p-2 mb-6">
          <h2 className="text-lg font-medium">Personal details</h2>
        </div>

        {/* Information and warning text */}
        <div className="mb-6">
          <p className="mb-4">Please review your details carefully. You can update your title, preferred pronouns, preferred name and gender using the text box fields below. If you wish to make any other changes, please contact <a href="#" className="text-blue-600 hover:underline">MySurrey Hive</a>.</p>
          <p className="mb-4">Please note that your Forename on your student record must match the name on your passport. This name will appear on your Higher Education Achievement Record (HEAR) and your award certificate exactly as it is shown here. If you have entered a preferred name, this will be used in place of your Forename on your campus card and other University systems. An administrative charge will apply if you require a reprint of any official award documentation as a result of providing incorrect information. Please see our <a href="#" className="text-blue-600 hover:underline">Naming Policy</a> for more information and guidance.</p>
          <p className="mb-4">If you have queries about any of the steps in Online Registration, please visit our <a href="#" className="text-blue-600 hover:underline">guidance page</a>.</p>
        </div>

        {/* Form */}
        <div className="bg-white p-6 border mb-6">
          <h3 className="font-medium mb-6">Your details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="universityNumber" className="text-right font-medium">University number</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="universityNumber" 
                value={formData.universityNumber} 
                disabled
                className="w-full md:w-64 border border-gray-300 p-2 rounded bg-gray-100"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="title" className="text-right font-medium">Title</label>
            <div className="md:col-span-2">
              <select 
                id="title" 
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              >
                <option value="Mr">Mr</option>
                <option value="Ms">Ms</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="forename" className="text-right font-medium">Forename(s)</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="forename" 
                value={formData.forename} 
                disabled
                className="w-full md:w-64 border border-gray-300 p-2 rounded bg-gray-100"
              />
              <div className="text-gray-500 text-sm mt-1">The names on your passport or other legal documentation.</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="preferredPronouns" className="text-right font-medium">Preferred pronouns</label>
            <div className="md:col-span-2">
              <select 
                id="preferredPronouns" 
                value={formData.preferredPronouns}
                onChange={(e) => setFormData({...formData, preferredPronouns: e.target.value})}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              >
                <option value="He/Him">He/Him</option>
                <option value="She/Her">She/Her</option>
                <option value="They/Them">They/Them</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="preferredName" className="text-right font-medium">Preferred name</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="preferredName" 
                value={formData.preferredName}
                onChange={(e) => setFormData({...formData, preferredName: e.target.value})}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="familyName" className="text-right font-medium">Family name</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="familyName" 
                value={formData.familyName} 
                disabled
                className="w-full md:w-64 border border-gray-300 p-2 rounded bg-gray-100"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="dateOfBirth" className="text-right font-medium">Date of birth</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="dateOfBirth" 
                value={formData.dateOfBirth} 
                disabled
                className="w-full md:w-64 border border-gray-300 p-2 rounded bg-gray-100"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="gender" className="text-right font-medium">Gender</label>
            <div className="md:col-span-2">
              <select 
                id="gender" 
                value={formData.gender}
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              >
                <option value="Man">Man</option>
                <option value="Woman">Woman</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="nationality" className="text-right font-medium">Nationality</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="nationality" 
                value={formData.nationality} 
                disabled
                className="w-full md:w-64 border border-gray-300 p-2 rounded bg-gray-100"
              />
            </div>
          </div>
        </div>

        {/* Data protection notice */}
        <div className="bg-blue-100 p-4 mb-6 border border-blue-200">
          <div className="flex items-start">
            <div className="mt-1 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-blue-800 text-sm">The information detailed in the Personal Details section is collected and stored in line with the prevailing data protection legislation and the University's own <a href="#" className="underline">Data Protection Policy</a>.</p>
              <p className="text-blue-800 text-sm mt-2">It will be available to appropriate University staff, including Faculties and Departments.</p>
              <p className="text-blue-800 text-sm mt-2">It will only be shared with third parties where they are acting on behalf of the University or where there is a statutory or legal obligation for us to do so. This is outlined in the University's <a href="#" className="underline">Student</a> and <a href="#" className="underline">Student Support Services</a> Privacy Notices.</p>
              <p className="text-blue-800 text-sm mt-2">This data is processed in the public interest where we perform our core functions of teaching, learning or research. We also process data in the University's legitimate interests, to enable us to meet our legal or statutory obligations and to perform the student contract which you enter into. More information is contained within the University's <a href="#" className="underline">Privacy Notices</a>.</p>
              <p className="text-blue-800 text-sm mt-2">The data will be held for the length of time detailed in the University retention schedule.</p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex justify-end space-x-4">
          <Link href="/registration" className="px-6 py-2 border border-gray-300 rounded bg-white">
            Back
          </Link>
          <Link href="/registration" className="px-6 py-2 bg-blue-800 text-white rounded">
            Confirm
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto bg-gray-100 border-t py-2 px-4">
        <div className="container mx-auto flex justify-between text-sm text-gray-600">
          <div>Logged in: Melroy Menezes (6857373)</div>
          <Link href="/auth/login" className="text-blue-600 hover:underline">Logout</Link>
        </div>
      </div>
    </div>
  );
} 