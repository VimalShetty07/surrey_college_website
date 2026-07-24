'use client';

import Link from 'next/link';
import Header from '../components/Header';
import LogoutButton from '../components/LogoutButton';

const shipments = [
  {
    id: 'DEG-2026-6857373',
    title: 'Degree Certificate',
    description: 'Official University of Surrey degree certificate (hard copy)',
    service: 'Standard B',
    carrier: 'DTTC',
    trackingNumber: 'DTTC GB 9482 0173 5561 IN',
    from: 'Guildford, United Kingdom',
    to: 'Mumbai, India',
    expectedDelivery: '29 July 2026',
    status: 'In transit — outbound to India',
    weight: '0.45 kg',
    events: [
      {
        date: '18 Jul 2026 · 09:14',
        location: 'Guildford Mail Hub, UK',
        detail: 'Shipment collected from University Awards Office',
      },
      {
        date: '19 Jul 2026 · 16:42',
        location: 'Heathrow Export Facility, UK',
        detail: 'Processed for international dispatch (Standard B)',
      },
      {
        date: '21 Jul 2026 · 08:05',
        location: 'DTTC International Sort Centre, UK',
        detail: 'Departed United Kingdom — en route to India',
      },
      {
        date: '23 Jul 2026 · 22:31',
        location: 'Mumbai International Gateway, IN',
        detail: 'Arrived in India — customs clearance in progress',
      },
      {
        date: '25 Jul 2026 · 11:18',
        location: 'DTTC Mumbai Distribution Centre',
        detail: 'Cleared customs — handed to domestic Standard B network',
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
    to: 'Mumbai, India',
    expectedDelivery: '29 July 2026',
    status: 'In transit — domestic India leg',
    weight: '0.32 kg',
    events: [
      {
        date: '18 Jul 2026 · 09:20',
        location: 'Guildford Mail Hub, UK',
        detail: 'Shipment collected with degree certificate consignment',
      },
      {
        date: '20 Jul 2026 · 14:55',
        location: 'Heathrow Export Facility, UK',
        detail: 'Export scan complete — Standard B service',
      },
      {
        date: '22 Jul 2026 · 03:10',
        location: 'Mumbai International Gateway, IN',
        detail: 'Arrived India — awaiting customs release',
      },
      {
        date: '24 Jul 2026 · 17:40',
        location: 'DTTC Mumbai Distribution Centre',
        detail: 'Out for regional Standard B delivery routing',
      },
    ],
  },
];

export default function TrackingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="max-w-[1230px] mx-auto w-full bg-white min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow px-6 py-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">
                <Link href="/" className="text-blue-700 hover:underline">
                  Home
                </Link>
                {' / '}
                Tracking
              </p>
              <h1 className="text-2xl font-semibold text-gray-900">
                Document Tracking
              </h1>
              <p className="text-sm text-gray-600 mt-1 max-w-2xl">
                Track degree certificates and related award documents couriered from
                the United Kingdom to India via DTTC Standard B.
              </p>
            </div>
            <div className="text-sm text-gray-600 text-right">
              <p>
                Student: <span className="font-medium">Melroy Vernon Menezes</span>
              </p>
              <p>
                ID: <span className="font-medium">6857373</span>
              </p>
            </div>
          </div>

          <div className="border border-blue-200 bg-blue-50 px-4 py-3 mb-8 text-sm text-blue-900">
            <strong>Estimated delivery:</strong> all Standard B consignments below are
            scheduled to reach India by <strong>29 July 2026</strong> (DTTC).
          </div>

          <div className="space-y-8">
            {shipments.map((shipment) => (
              <section
                key={shipment.id}
                className="border border-gray-300 bg-white"
              >
                <div className="bg-blue-900 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h2 className="text-lg font-semibold">{shipment.title}</h2>
                    <p className="text-sm text-blue-100">{shipment.description}</p>
                  </div>
                  <span className="bg-white/15 px-3 py-1 text-sm">
                    {shipment.service}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-0 border-b border-gray-200">
                  <dl className="p-4 space-y-2 text-sm border-b md:border-b-0 md:border-r border-gray-200">
                    <div className="flex justify-between gap-4">
                      <dt className="text-gray-500">Consignment ID</dt>
                      <dd className="font-medium text-right">{shipment.id}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-gray-500">Tracking number</dt>
                      <dd className="font-mono font-medium text-right">
                        {shipment.trackingNumber}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-gray-500">Carrier</dt>
                      <dd className="font-medium text-right">{shipment.carrier}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-gray-500">Service</dt>
                      <dd className="font-medium text-right">{shipment.service}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-gray-500">Weight</dt>
                      <dd className="font-medium text-right">{shipment.weight}</dd>
                    </div>
                  </dl>

                  <dl className="p-4 space-y-2 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-gray-500">From</dt>
                      <dd className="font-medium text-right">{shipment.from}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-gray-500">To</dt>
                      <dd className="font-medium text-right">{shipment.to}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-gray-500">Expected delivery</dt>
                      <dd className="font-semibold text-right text-green-800">
                        {shipment.expectedDelivery}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-gray-500">Current status</dt>
                      <dd className="font-medium text-right text-amber-800">
                        {shipment.status}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wide">
                    Tracking history
                  </h3>
                  <ol className="relative border-l border-gray-300 ml-3 space-y-5">
                    {shipment.events.map((event, index) => (
                      <li key={event.date} className="ml-6">
                        <span
                          className={`absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white ${
                            index === 0 ? 'bg-blue-700' : 'bg-gray-400'
                          }`}
                        />
                        <p className="text-xs text-gray-500">{event.date}</p>
                        <p className="text-sm font-medium text-gray-900">
                          {event.location}
                        </p>
                        <p className="text-sm text-gray-600">{event.detail}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>
            ))}
          </div>

          <p className="mt-8 text-xs text-gray-500">
            Tracking information is provided for demonstration purposes. Delivery
            estimates for DTTC Standard B are indicative and may change after customs
            release in India.
          </p>
        </main>

        <footer className="bg-gray-100 text-xs text-gray-600 py-2 px-6 border-t flex justify-between items-center">
          <span>Logged in as Melroy Menezes (6857373)</span>
          <LogoutButton className="text-blue-600 hover:underline">Logout</LogoutButton>
        </footer>
      </div>
    </div>
  );
}
