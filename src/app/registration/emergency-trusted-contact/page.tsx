'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function EmergencyTrustedContactPage() {
  // Initial form state based on the image
  const [formData, setFormData] = useState({
    relationship: 'UNCLE',
    title: 'Mr',
    surname: 'MENEZES',
    forename: 'URBAN',
    forename2: '',
    forename3: '',
    postcode: 'KT15 2PJ',
    addressLine1: '11, BURN CLOSE',
    addressLine2: 'ADDLESTONE',
    addressLine3: 'SURREY',
    addressLine4: 'UNITED KINGDOM',
    telephoneNumber: '+447403331524',
    mobileNumber: '+447403331524',
    email: ''
  });

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

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

        {/* Emergency trusted contact section */}
        <div className="bg-gray-200 p-2 mb-6">
          <h1 className="text-lg font-medium">Emergency trusted contact</h1>
        </div>

        {/* Warning box */}
        <div className="bg-amber-50 border border-amber-200 p-4 mb-6">
          <div className="flex">
            <div className="text-amber-800 mr-2">⚠️</div>
            <p className="text-amber-800">You must provide the details of someone we can contact in case of an emergency.</p>
          </div>
        </div>

        {/* Information text */}
        <div className="mb-6 space-y-4">
          <h3 className="font-medium">Why do we ask for a trusted contact?</h3>
          <p>The University of Surrey is committed to promoting a culture of care and protecting student welfare. We know that families, carers, and trusted others can play an essential part in supporting a student who is at risk or where there may be serious concerns. As such it is important for the University to know who we should consider as that where appropriate, we can work together to keep you safe.</p>
          
          <p>To achieve this, all students are asked to provide up-to-date contact details for a trusted contact throughout their enrolment at the University.</p>
          
          <h3 className="font-medium mt-4">What is a trusted contact?</h3>
          <p>A trusted contact is someone who you nominate as the person we can contact in certain, and generally rare, circumstances. This would usually be a parent or guardian, but it can be anyone who is over the age of 18, such as a family member or friend and who meets the criteria below. It is up to you to decide who this is, but we suggest that it is someone who you feel you can ask for help. They must:</p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Be aware that they have been nominated and that their contact details have been given to the University for this purpose.</li>
            <li>Be able and willing to act on your behalf in the event of a serious incident or emergency where we consider your health, wellbeing, or welfare to be at risk.</li>
            <li>Be easily and quickly contactable.</li>
            <li>If possible, be able to speak English.</li>
          </ul>
          
          <p>It is important that these details are up to date.</p>
          
          <h3 className="font-medium mt-4">When might we approach your trusted contact?</h3>
          <p>Having the details of your trusted contact allows us to contact them if we believe that you are at immediate risk of serious physical, emotional, or mental harm; to yourself or others. Being able to contact the right people quickly enables the University to take appropriate action to ensure your safety and wellbeing.</p>
          
          <p>We want to keep you at the heart of decisions about your safety and as such:</p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>We will always try and involve you in a decision to contact a trusted contact.</li>
            <li>We will always consider the impact on you of making contact and balance this against our aim to prevent or reduce the risk of harm.</li>
          </ul>
          
          <h3 className="font-medium mt-4">Examples of reasons for contact include:</h3>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>A medical emergency such as admission to hospital.</li>
            <li>A serious concern for your wellbeing.</li>
            <li>If you are missing.</li>
            <li>If you cease to engage with your studies, we have serious concerns about your safety and wellbeing, and have been unable to contact you.</li>
            <li>If you are displaying symptoms of serious physical or mental illness or concerning behaviour.</li>
          </ul>
          
          <p className="text-sm text-gray-600">All information entered by you is securely stored in accordance with our <a href="#" className="text-blue-600 hover:underline">Data Policy Agreement</a> which sets out details on University-wide measures surrounding IT security. For further information about the ways we collect and use your personal data please see the University's <a href="#" className="text-blue-600 hover:underline">Privacy Notice</a>.</p>
        </div>

        {/* Form */}
        <div className="bg-white p-6 border mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="relationship" className="text-right font-medium">Relationship*</label>
            <div className="md:col-span-2">
              <select 
                id="relationship" 
                value={formData.relationship}
                onChange={handleChange}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              >
                <option value="UNCLE">UNCLE</option>
                <option value="PARENT">PARENT</option>
                <option value="SIBLING">SIBLING</option>
                <option value="SPOUSE">SPOUSE</option>
                <option value="FRIEND">FRIEND</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="title" className="text-right font-medium">Title</label>
            <div className="md:col-span-2">
              <select 
                id="title" 
                value={formData.title}
                onChange={handleChange}
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
            <label htmlFor="surname" className="text-right font-medium">Surname*</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="surname" 
                value={formData.surname}
                onChange={handleChange}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="forename" className="text-right font-medium">Forename(s)*</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="forename" 
                value={formData.forename}
                onChange={handleChange}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="forename2" className="text-right font-medium">Forename 2</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="forename2" 
                value={formData.forename2}
                onChange={handleChange}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="forename3" className="text-right font-medium">Forename 3</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="forename3" 
                value={formData.forename3}
                onChange={handleChange}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="postcode" className="text-right font-medium">Postcode</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="postcode" 
                value={formData.postcode}
                onChange={handleChange}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="addressLine1" className="text-right font-medium">Address Line 1</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="addressLine1" 
                value={formData.addressLine1}
                onChange={handleChange}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="addressLine2" className="text-right font-medium">Address Line 2</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="addressLine2" 
                value={formData.addressLine2}
                onChange={handleChange}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="addressLine3" className="text-right font-medium">Address Line 3</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="addressLine3" 
                value={formData.addressLine3}
                onChange={handleChange}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="addressLine4" className="text-right font-medium">Address Line 4</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="addressLine4" 
                value={formData.addressLine4}
                onChange={handleChange}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="telephoneNumber" className="text-right font-medium">Telephone Number*</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="telephoneNumber" 
                value={formData.telephoneNumber}
                onChange={handleChange}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="mobileNumber" className="text-right font-medium">Mobile Number</label>
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="mobileNumber" 
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            <label htmlFor="email" className="text-right font-medium">Email</label>
            <div className="md:col-span-2">
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full md:w-64 border border-gray-300 p-2 rounded"
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
              <p className="text-blue-800 text-sm">The information detailed in the Emergency Contact section is collected and stored in line with the prevailing data protection legislation and the University's own <a href="#" className="underline">Data Protection Policy</a>.</p>
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