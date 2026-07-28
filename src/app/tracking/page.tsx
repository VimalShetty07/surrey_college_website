'use client';

import Link from 'next/link';
import LogoutButton from '@/app/components/LogoutButton';

const shipments = [
  {
    id: 'DEG-2026-6857373',
    title: 'Degree Certificate',
    description: 'Official University of Surrey degree certificate (hard copy)',
    service: 'Standard B',
    carrier: 'DTTC',
    trackingNumber: 'DTTC GB 9482 0173 5561 IN',
    from: 'Guildford, United Kingdom',
    to: 'Ashrived House, Venur, India 574242',
    expectedDelivery: '1 August 2026',
    status: 'In transit',
    weight: '0.45 kg',
    events: [
      {
        date: '18/07/2026 09:14',
        location: 'Guildford Mail Hub, UK',
        detail: 'Collected from University Awards Office',
      },
      {
        date: '19/07/2026 16:42',
        location: 'Heathrow Export Facility, UK',
        detail: 'Processed for international dispatch',
      },
      {
        date: '21/07/2026 08:05',
        location: 'DTTC International Sort Centre, UK',
        detail: 'Departed United Kingdom',
      },
      {
        date: '23/07/2026 22:31',
        location: 'Mumbai International Gateway, IN',
        detail: 'Arrived in India — customs clearance',
      },
      {
        date: '25/07/2026 11:18',
        location: 'DTTC Mumbai Distribution Centre',
        detail: 'Cleared customs — routed to Venur (574242)',
      },
      {
        date: '27/07/2026 15:40',
        location: 'DTTC Mangaluru Regional Hub',
        detail: 'In transit for delivery to Ashrived House, Venur',
      },
    ],
  },
  {
    id: 'HEAR-2026-6857373',
    title: 'HEAR / Transcript Pack',
    description: 'Higher Education Achievement Report and certified transcript',
    service: 'Standard B',
    carrier: 'DTTC',
    trackingNumber: 'DTTC GB 7710 4429 8836 IN',
    from: 'Guildford, United Kingdom',
    to: 'Ashrived House, Venur, India 574242',
    expectedDelivery: '1 August 2026',
    status: 'In transit',
    weight: '0.32 kg',
    events: [
      {
        date: '18/07/2026 09:20',
        location: 'Guildford Mail Hub, UK',
        detail: 'Collected with degree certificate consignment',
      },
      {
        date: '20/07/2026 14:55',
        location: 'Heathrow Export Facility, UK',
        detail: 'Export scan complete',
      },
      {
        date: '22/07/2026 03:10',
        location: 'Mumbai International Gateway, IN',
        detail: 'Arrived India — awaiting customs release',
      },
      {
        date: '24/07/2026 17:40',
        location: 'DTTC Mumbai Distribution Centre',
        detail: 'Cleared for domestic delivery to Venur',
      },
      {
        date: '27/07/2026 16:05',
        location: 'DTTC Mangaluru Regional Hub',
        detail: 'Out for delivery routing to Ashrived House, Venur',
      },
    ],
  },
];

export default function TrackingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-blue-900 text-white py-3 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/images/surrey-logo.svg"
                alt="University of Surrey"
                className="h-9 mr-6"
              />
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-white hover:text-gray-200">
                Welcome
              </Link>
              <Link href="/registration" className="text-white hover:text-gray-200">
                Registration
              </Link>
              <Link href="/academics/modules" className="text-white hover:text-gray-200">
                Modules
              </Link>
              <Link href="/tracking" className="text-white hover:text-gray-200 font-bold">
                Tracking
              </Link>
            </nav>
          </div>
          <LogoutButton className="text-white hover:text-gray-200 text-sm">
            Sign Out
          </LogoutButton>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 flex-grow">
        <div className="bg-gray-200 p-2 mb-6">
          <h1 className="text-lg font-medium">Tracking</h1>
        </div>

        <h2 className="text-xl font-medium mb-4">Award document despatch</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border p-6 shadow-sm">
            <p className="mb-4">
              Use this page to view the status of award documents couriered from the
              University of Surrey (United Kingdom) to your delivery address in India.
            </p>
            <p className="mb-4">
              Documents are sent by DTTC using Standard B service. Tracking updates are
              shown below for each consignment.
            </p>
            <p>
              If you have queries about award document despatch, please contact{' '}
              <a href="mailto:awards@surrey.ac.uk" className="text-blue-600 hover:underline">
                MySurrey Hive
              </a>
              .
            </p>
          </div>

          <div className="bg-white border p-6 shadow-sm">
            <div className="bg-blue-100 border border-blue-200 p-4 mb-4">
              <p className="text-blue-800">
                Estimated delivery date: <strong>1 August 2026</strong>
              </p>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Deliver to</span>
                <span className="text-right font-medium max-w-[60%]">
                  Ashrived House, Venur, India 574242
                </span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Carrier</span>
                <span>DTTC</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Service</span>
                <span>Standard B</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Student</span>
                <span>Melroy Vernon Menezes (6857373)</span>
              </div>
            </div>
          </div>
        </div>

        {shipments.map((shipment) => (
          <div key={shipment.id} className="mb-8">
            <div className="bg-gray-200 p-2 mb-0">
              <h3 className="text-base font-medium">{shipment.title}</h3>
            </div>

            <div className="border border-t-0 p-4 mb-4">
              <p className="text-sm text-gray-600 mb-4">{shipment.description}</p>

              <table className="w-full text-sm border-collapse">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4 text-gray-600 w-1/3">Consignment ID</td>
                    <td className="py-2">{shipment.id}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 text-gray-600">Tracking number</td>
                    <td className="py-2">{shipment.trackingNumber}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 text-gray-600">From</td>
                    <td className="py-2">{shipment.from}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 text-gray-600">Deliver to</td>
                    <td className="py-2">{shipment.to}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 text-gray-600">Service</td>
                    <td className="py-2">
                      {shipment.carrier} — {shipment.service}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 text-gray-600">Weight</td>
                    <td className="py-2">{shipment.weight}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 text-gray-600">Status</td>
                    <td className="py-2">{shipment.status}</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-gray-600">Expected delivery</td>
                    <td className="py-2">{shipment.expectedDelivery}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-medium mb-2">Tracking history</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-300 border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-300 px-3 py-2 font-medium">Date / time</th>
                    <th className="border border-gray-300 px-3 py-2 font-medium">Location</th>
                    <th className="border border-gray-300 px-3 py-2 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {shipment.events.map((event) => (
                    <tr key={event.date}>
                      <td className="border border-gray-300 px-3 py-2 whitespace-nowrap">
                        {event.date}
                      </td>
                      <td className="border border-gray-300 px-3 py-2">{event.location}</td>
                      <td className="border border-gray-300 px-3 py-2">{event.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <div className="mt-6 flex justify-center">
          <button
            className="bg-blue-700 text-white px-6 py-2 rounded"
            onClick={() => window.open('mailto:awards@surrey.ac.uk')}
          >
            Contact awards support
          </button>
        </div>
      </div>

      <div className="mt-auto bg-gray-100 border-t py-2 px-4">
        <div className="container mx-auto flex justify-between text-sm text-gray-600">
          <div>Logged in: Melroy Menezes (6857373)</div>
          <LogoutButton>Logout</LogoutButton>
        </div>
      </div>
    </div>
  );
}
