import React from 'react';
import type { Ship, Service, NewsArticle } from './types';

// =================================================================================
// ICONS
// =================================================================================
export const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
     <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

// Redesigned Service Icons
const ShipIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10 text-farco-sky-blue" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6V5.25m0 0a1.5 1.5 0 10-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6.75v6.172c0 .53-.22 1.01-.584 1.348l-1.551 1.423a.75.75 0 01-1.06-1.06l1.55-1.423A.75.75 0 013 12.922V6.75zm12-2.25a.75.75 0 00-.75.75v3.75c0 .53.22 1.01.584 1.348l1.551 1.423a.75.75 0 001.06-1.06l-1.55-1.423A.75.75 0 0015.75 9V5.25a.75.75 0 00-.75-.75z" />
    </svg>
);
const AnchorIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10 text-farco-sky-blue" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 15.75l-3.75-3.75M8.25 15.75l3.75-3.75M3 13.5h18M6.75 7.5h10.5a2.25 2.25 0 012.25 2.25v.75a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25v-.75A2.25 2.25 0 016.75 7.5z" />
    </svg>
);
const HandshakeIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10 text-farco-sky-blue" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c.266-.17.561-.274.873-.326l.323-.053c.427-.07.863-.07 1.29.003l.359.063c.435.076.86.216 1.258.411l.398.198c.414.207.79.479 1.12.81l.33.33c.33.33.602.705.81 1.12l.197.397c.196.398.336.823.412 1.258l.063.359c.072.427.072.863.002 1.29l-.053.323c-.052.312-.156.607-.326.873l-.17.266c-.198.307-.442.578-.727.81l-.284.232c-.328.267-.68.49-1.048.663l-.367.174c-.42.198-.862.33-1.314.39l-.36.05c-.43.06-.867.06-1.3.003l-.358-.063a4.5 4.5 0 01-1.258-.411l-.398-.198c-.414-.207-.79-.479-1.12-.81l-.33-.33c-.33-.33-.602-.705-.81-1.12l-.197-.397a4.5 4.5 0 01-.412-1.258l-.063-.359c-.072-.427-.072-.863-.002-1.29l.053-.323c.052-.312.156-.607.326-.873l.17-.266c.198-.307.442-.578.727-.81l.284-.232c.328-.267.68-.49 1.048-.663l.367-.174c.42-.198.862-.33 1.314-.39l.36-.05zM12 6.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5z" />
    </svg>
);
const CustomsIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10 text-farco-sky-blue" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
    </svg>
);
const WarehouseIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10 text-farco-sky-blue" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 10.5h6M9 14.25h6" />
    </svg>
);
const BulkShipmentsIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10 text-farco-sky-blue" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
);
const ShipManagementIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10 text-farco-sky-blue" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.472-2.472a3.375 3.375 0 00-4.773-4.773L6.75 11.42m5.877 5.877l-5.877-5.877m0 0a3.375 3.375 0 00-4.773 4.773l2.472 2.472" />
    </svg>
);
const GasOilIcon: React.FC<{ className?: string }> = ({ className = "h-10 w-10 text-farco-sky-blue" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.25 8.25c0-2.485-2.099-4.5-4.688-4.5s-4.688 2.015-4.688 4.5c0 1.933.916 3.655 2.28 4.688l-2.28 2.28a.75.75 0 000 1.06l.883.884a.75.75 0 001.06 0l2.28-2.28a5.952 5.952 0 004.688-4.688z" />
    </svg>
);

export const GlobeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-farco-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3" /></svg>;
export const SupportIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-farco-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8.25 21h7.5a2.25 2.25 0 002.25-2.25V9.75a2.25 2.25 0 00-2.25-2.25h-7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25z" /></svg>;
export const ExpertiseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-farco-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M12.378 1.602a.75.75 0 00-.756 0L3 7.036V12a9.002 9.002 0 006.16 8.526.75.75 0 00.38 0A9.002 9.002 0 0021 12V7.036l-8.622-5.434zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
export const LeafIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-farco-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.13 7.52c-1.13-1.13-2.61-1.8-4.2-1.92a9.7 9.7 0 00-3.61 2.12c-1.68 1.68-2.2 4.19-1.54 6.32l9.24-9.24z" /><path strokeLinecap="round" strokeLinejoin="round" d="M14.87 16.48c1.13 1.13 2.61 1.8 4.2 1.92a9.7 9.7 0 003.61-2.12c1.68-1.68 2.2-4.19 1.54-6.32l-9.24 9.24z" /></svg>;

// Service Detail Icons
const OceanIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75c0 3.28-2.69 5.95-6 5.95s-6-2.67-6-5.95m12 0A5.95 5.95 0 005.25 6.75m12 0v9a5.95 5.95 0 01-12 0v-9" /></svg>;
const AirIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>;
const TruckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-9m17.25 9v-9m-17.25-6h15a1.125 1.125 0 001.125-1.125V6.375A1.125 1.125 0 0019.875 5.25h-15.75A1.125 1.125 0 002.25 6.375v2.25c0 .621.504 1.125 1.125 1.125z" /></svg>;
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-farco-sky-blue"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ValueIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25-2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 3a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 3V9" /></svg>;
const InventoryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3m-3.75 2.25V7.5A2.25 2.25 0 0112 5.25v0A2.25 2.25 0 0114.25 7.5v5.25" /></svg>;

// About Page Icons
export const IntegrityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-farco-sky-blue"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 01-7.8-4.22m15.6 0A9 9 0 0012 3M3.2 7.78A9 9 0 0012 21m8.8-13.22a9 9 0 01-7.8 13.44" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" /></svg>;
export const ExcellenceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-farco-sky-blue"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" /></svg>;
export const PartnershipIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-farco-sky-blue"><path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
export const InnovationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-farco-blue"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a7.5 7.5 0 01-7.5 0c-1.42 0-2.65-.5-3.62-1.332m14.74 0c-.97.832-2.2 1.332-3.62 1.332M12 3v-1.5m0 1.5a6.01 6.01 0 00-1.5.189m1.5-.189a6.01 6.01 0 011.5.189m-3.75-7.478a12.06 12.06 0 014.5 0M4.125 4.125c-.97.832-1.332 2.2-1.332 3.62s.362 2.79.97 3.62m14.74 0c.608-.83.97-1.89.97-3.62s-.362-2.79-.97-3.62" /></svg>;
export const DedicationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-farco-blue"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>;
export const SuccessIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-farco-blue"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l15.482 0m-15.482 0L12 5.25v2.25" /></svg>;

// =================================================================================
// SERVICES
// =================================================================================

export const SERVICES: Service[] = [
  {
    id: '1',
    slug: 'freight-forwarding',
    title: 'Freight Forwarding',
    icon: <ShipIcon />,
    shortDescription: 'Reliable and efficient international sea, air, and land freight solutions.',
    pageContent: {
      heroImageSeed: 'freight-container-port',
      introduction: 'Our comprehensive freight forwarding services form the backbone of global supply chains. We meticulously manage the logistics of shipping goods from origin to destination, ensuring your cargo travels safely, on schedule, and within budget via the most efficient routes.',
      features: [
        { title: 'Ocean Freight', description: 'Full Container Load (FCL) and Less than Container Load (LCL) options to all major global ports.', icon: <OceanIcon /> },
        { title: 'Air Freight', description: 'Expedited and standard air cargo services for your most time-sensitive shipments.', icon: <AirIcon /> },
        { title: 'Land Transport', description: 'Integrated trucking and rail solutions providing seamless door-to-door connectivity.', icon: <TruckIcon /> },
        { title: 'Customs Expertise', description: 'Expert handling of all customs documentation and procedures to prevent costly delays.', icon: <CustomsIcon /> }
      ],
      process: [
        { step: 1, title: 'Consultation & Planning', description: 'We analyze your needs to devise the optimal shipping strategy, balancing cost, speed, and security.' },
        { step: 2, title: 'Booking & Documentation', description: 'We secure cargo space with our trusted carriers and meticulously handle all required paperwork.' },
        { step: 3, title: 'Shipment & Tracking', description: 'Your cargo is transported while you enjoy real-time tracking and complete visibility from start to finish.' },
        { step: 4, title: 'Final Delivery', description: 'We manage customs clearance and final-mile delivery, ensuring a smooth transition to the destination.' },
      ],
      benefits: [
        { title: 'Global Reach, Local Expertise', icon: <CheckCircleIcon /> },
        { title: 'Cost-Effective & Optimized Routes', icon: <CheckCircleIcon /> },
        { title: 'Single Point of Contact', icon: <CheckCircleIcon /> },
        { title: 'Regulatory Compliance & Peace of Mind', icon: <CheckCircleIcon /> },
      ]
    }
  },
  {
    id: '2',
    slug: 'charter-shipments',
    title: 'Charter Shipments',
    icon: <AnchorIcon />,
    shortDescription: 'Flexible vessel chartering for bulk, oversized, or project cargo.',
    pageContent: {
      heroImageSeed: 'heavy-lift-cargo-ship',
      introduction: 'For cargo that falls outside standard shipping dimensions or requires dedicated capacity, our vessel chartering services provide the ultimate flexibility. We source the perfect vessel for your unique requirements, managing every detail of the voyage for a bespoke transport solution.',
      features: [
        { title: 'Voyage & Time Charters', description: 'Flexible options tailored to your specific timeframe, cargo volume, and routing needs.', icon: <AnchorIcon /> },
        { title: 'Project Cargo', description: 'Specialized management for heavy-lift, oversized, and high-value industrial equipment.', icon: <ValueIcon /> },
        { title: 'Bulk Commodities', description: 'Efficient and reliable transport of grains, minerals, coal, and other raw materials.', icon: <InventoryIcon /> },
        { title: 'Route Optimization', description: 'Advanced voyage planning to ensure the most efficient, safe, and cost-effective journey.', icon: <GlobeIcon /> }
      ],
      benefits: [
        { title: 'Unmatched Flexibility for Any Cargo', icon: <CheckCircleIcon /> },
        { title: 'Dedicated Capacity & Scheduling', icon: <CheckCircleIcon /> },
        { title: 'Expertise in Complex & Oversized Shipments', icon: <CheckCircleIcon /> },
        { title: 'End-to-End Voyage Management', icon: <CheckCircleIcon /> },
      ]
    }
  },
  {
    id: '3',
    slug: 'ship-brokerage',
    title: 'Ship Brokerage',
    icon: <HandshakeIcon />,
    shortDescription: 'Expert brokerage for the buying, selling, and chartering of commercial vessels.',
    pageContent: {
      heroImageSeed: 'maritime-business-deal',
      introduction: 'Leveraging deep market intelligence and a vast global network, our ship brokerage team acts as a vital intermediary in the maritime marketplace. We facilitate the sale, purchase, and chartering of all commercial vessel types with professionalism, discretion, and an unwavering focus on our clients\' best interests.',
      features: [
        { title: 'Sale & Purchase (S&P)', description: 'Connecting qualified buyers and sellers for all vessel types, from tankers to bulk carriers.', icon: <HandshakeIcon /> },
        { title: 'Newbuilding Contracts', description: 'Negotiating and supervising new vessel constructions at world-class shipyards.', icon: <ShipIcon /> },
        { title: 'Vessel Valuation', description: 'Providing accurate, data-driven market valuations for investment and financing purposes.', icon: <ValueIcon /> },
        { title: 'Demolition Sales', description: 'Managing the end-of-life sale of vessels for responsible and compliant recycling.', icon: <AnchorIcon /> }
      ],
      benefits: [
        { title: 'In-Depth Market Intelligence', icon: <CheckCircleIcon /> },
        { title: 'Extensive Global Network of Owners & Buyers', icon: <CheckCircleIcon /> },
        { title: 'Expert Negotiation & Contract Management', icon: <CheckCircleIcon /> },
        { title: 'Confidential and Secure Transactions', icon: <CheckCircleIcon /> },
      ]
    }
  },
   {
    id: '8',
    slug: 'gas-oil-logistics',
    title: 'Gas & Oil Logistics',
    icon: <GasOilIcon />,
    shortDescription: 'Specialized, compliant logistics for the entire energy supply chain.',
    pageContent: {
      heroImageSeed: 'offshore-oil-rig-sunset',
      introduction: 'The energy sector demands precision, safety, and unwavering compliance. Our specialized Gas & Oil logistics services cater to the entire lifecycle, from upstream exploration and production support to downstream distribution of refined products. We provide robust, secure, and efficient supply chain solutions for one of the world\'s most critical industries.',
      features: [
        { title: 'Upstream Logistics', description: 'Support for exploration and production, including rig mobilization, pipeline transport, and supply base management.', icon: <AnchorIcon /> },
        { title: 'Downstream Distribution', description: 'Safe and reliable transportation of refined products via tankers, pipelines, and multimodal solutions.', icon: <TruckIcon /> },
        { title: 'Offshore Support', description: 'Comprehensive logistics for offshore platforms and vessels, including crew changes and critical equipment delivery.', icon: <ShipIcon /> },
        { title: 'Compliance & Safety', description: 'Strict adherence to HSSE standards and international regulations governing the transport of hazardous materials.', icon: <ExpertiseIcon /> }
      ],
      benefits: [
        { title: 'Uncompromising Safety & Compliance', icon: <CheckCircleIcon /> },
        { title: 'Integrated End-to-End Solutions', icon: <CheckCircleIcon /> },
        { title: 'Global Reach in Key Energy Hubs', icon: <CheckCircleIcon /> },
        { title: 'Resilient & Responsive Supply Chains', icon: <CheckCircleIcon /> },
      ]
    }
  },
  {
    id: '4',
    slug: 'customs-brokerage',
    title: 'Customs Brokerage',
    icon: <CustomsIcon />,
    shortDescription: 'Streamlining customs clearance to avoid delays and ensure compliance.',
    pageContent: {
      heroImageSeed: 'customs-inspection-port',
      introduction: 'Navigating the labyrinth of international trade regulations is a critical component of logistics. Our licensed customs brokers are experts in compliance, ensuring your shipments cross borders smoothly, avoid costly penalties, and adhere to all import and export laws in every jurisdiction.',
      features: [
        { title: 'Import/Export Documentation', description: 'Meticulous preparation and submission of all declarations and required paperwork.', icon: <CustomsIcon /> },
        { title: 'Tariff Classification', description: 'Accurate classification of goods to ensure the correct duties and taxes are assessed.', icon: <ValueIcon /> },
        { title: 'Regulatory Compliance', description: 'Staying ahead of changing trade policies and government regulations to protect your business.', icon: <ExpertiseIcon /> },
        { title: 'Duty Drawback & Recovery', description: 'Identifying and securing opportunities for duty refunds and other cost savings.', icon: <TruckIcon /> }
      ],
      benefits: [
        { title: 'Accelerated Clearance Times', icon: <CheckCircleIcon /> },
        { title: 'Mitigation of Compliance Risks', icon: <CheckCircleIcon /> },
        { title: 'Optimized Duty & Tax Costs', icon: <CheckCircleIcon /> },
        { title: 'Seamless Integration with Freight Services', icon: <CheckCircleIcon /> },
      ]
    }
  },
  {
    id: '5',
    slug: 'warehousing-distribution',
    title: 'Warehousing & Distribution',
    icon: <WarehouseIcon />,
    shortDescription: 'Secure storage and efficient distribution to complete your supply chain.',
    pageContent: {
      heroImageSeed: 'modern-logistics-warehouse',
      introduction: 'Our global network of warehousing facilities offers more than just storage; they are strategic hubs designed to optimize your supply chain. We provide secure, flexible storage solutions and a full suite of distribution services to ensure your products are perfectly positioned and ready for market.',
      features: [
        { title: 'Secure Storage', description: 'State-of-the-art facilities with 24/7 security, advanced surveillance, and climate control options.', icon: <WarehouseIcon /> },
        { title: 'Inventory Management', description: 'Advanced Warehouse Management Systems (WMS) for real-time visibility and control.', icon: <InventoryIcon /> },
        { title: 'Value-Added Services', description: 'Offering pick-and-pack, kitting, labeling, and other order fulfillment services.', icon: <ValueIcon /> },
        { title: 'Last-Mile Delivery', description: 'A fully integrated distribution network for timely and reliable delivery to the end customer.', icon: <TruckIcon /> }
      ],
      benefits: [
        { title: 'Reduced Storage & Overhead Costs', icon: <CheckCircleIcon /> },
        { title: 'Improved Inventory Accuracy', icon: <CheckCircleIcon /> },
        { title: 'Increased Supply Chain Velocity', icon: <CheckCircleIcon /> },
        { title: 'Scalable Solutions for Business Growth', icon: <CheckCircleIcon /> },
      ]
    }
  },
  {
    id: '6',
    slug: 'bulk-shipments',
    title: 'Bulk Shipments',
    icon: <BulkShipmentsIcon />,
    shortDescription: 'Specialized handling and transport for bulk and break-bulk cargo.',
    pageContent: {
      heroImageSeed: 'bulk-carrier-loading-grain',
      introduction: 'We are experts in the global transportation of bulk commodities. Whether you are moving grains, minerals, or other raw materials, our dedicated bulk shipment services provide the scale, efficiency, and reliability required for this specialized cargo, ensuring safe and timely delivery worldwide.',
      features: [
        { title: 'Dry Bulk Cargo', description: 'Comprehensive solutions for materials like coal, iron ore, grain, and fertilizers.', icon: <InventoryIcon /> },
        { title: 'Break-Bulk Cargo', description: 'Expert handling for oversized or non-containerized goods like machinery, steel, and timber.', icon: <ValueIcon /> },
        { title: 'Port & Stowage Planning', description: 'Meticulous planning for optimal vessel loading, stability, and discharge operations.', icon: <AnchorIcon /> },
        { title: 'Global Sourcing', description: 'Leveraging our global network to find the right vessel and route for your specific bulk needs.', icon: <GlobeIcon /> }
      ],
      benefits: [
        { title: 'Economies of Scale for Large Volumes', icon: <CheckCircleIcon /> },
        { title: 'Specialized Handling Expertise', icon: <CheckCircleIcon /> },
        { title: 'Reduced Risk of Cargo Damage', icon: <CheckCircleIcon /> },
        { title: 'End-to-End Logistical Management', icon: <CheckCircleIcon /> },
      ]
    }
  },
  {
    id: '7',
    slug: 'ship-management',
    title: 'Ship Management',
    icon: <ShipManagementIcon />,
    shortDescription: 'Comprehensive technical and commercial management for vessel owners.',
    pageContent: {
      heroImageSeed: 'ship-bridge-navigation',
      introduction: 'For ship owners and investors, we offer a complete suite of ship management services designed to maximize operational efficiency and return on investment. From technical oversight to crew management and commercial operations, we act as your trusted partner, ensuring your assets are maintained and operated to the highest international standards.',
      features: [
        { title: 'Technical Management', description: 'Full oversight of vessel maintenance, repairs, dry-docking, and regulatory compliance.', icon: <ShipManagementIcon /> },
        { title: 'Crew Management', description: 'Recruitment, training, and administration for highly qualified and experienced seafarers.', icon: <ShipIcon /> },
        { title: 'Commercial Management', description: 'Chartering, operations, and financial management to maximize vessel profitability.', icon: <HandshakeIcon /> },
        { title: 'Safety & Quality Assurance', description: 'Implementation of rigorous ISM, ISPS, and MLC compliance protocols for safe and secure operations.', icon: <ExpertiseIcon /> }
      ],
      benefits: [
        { title: 'Optimized Vessel Performance & Uptime', icon: <CheckCircleIcon /> },
        { title: 'Cost-Effective Operations', icon: <CheckCircleIcon /> },
        { title: 'Peace of Mind for Asset Owners', icon: <CheckCircleIcon /> },
        { title: 'Strict Adherence to Global Standards', icon: <CheckCircleIcon /> },
      ]
    }
  }
];

// =================================================================================
// SHIPS
// =================================================================================

export const SHIPS: Ship[] = [
  {
    id: 'mv-aurora',
    name: 'MV Aurora',
    type: 'Bulk Carrier',
    status: 'For Sale',
    yearBuilt: 2018,
    dwt: 82000,
    price: 32000000,
    imageUrl: 'https://picsum.photos/seed/panamax-bulk-carrier/800/600',
    specs: { IMO: '9876543', Built: '2018', Class: 'ABS', DWT: '82,000 MT', Dimensions: '229m x 32m' },
    description: 'A modern and well-maintained Panamax bulk carrier, the MV Aurora is equipped with the latest navigation and fuel-efficiency systems. Ideal for grain, coal, and other dry bulk commodities.'
  },
  {
    id: 'mt-neptune',
    name: 'MT Neptune',
    type: 'Tanker',
    status: 'For Sale',
    yearBuilt: 2020,
    dwt: 115000,
    price: 55000000,
    imageUrl: 'https://picsum.photos/seed/aframax-oil-tanker/800/600',
    specs: { IMO: '9123456', Built: '2020', Class: 'DNV', DWT: '115,000 MT', Dimensions: '250m x 44m' },
    description: 'The MT Neptune is a state-of-the-art Aframax tanker built for crude oil and petroleum products. Features include double-hull construction and advanced cargo handling systems.'
  },
  {
    id: 'msc-voyager',
    name: 'MSC Voyager',
    type: 'Container Ship',
    status: 'Under Offer',
    yearBuilt: 2019,
    dwt: 150000,
    price: 120000000,
    imageUrl: 'https://picsum.photos/seed/large-container-ship/800/600',
    specs: { IMO: '9654321', Built: '2019', Class: 'Lloyd\'s', DWT: '150,000 MT', 'TEU Capacity': '14,000'},
    description: 'A high-capacity container vessel, the MSC Voyager is designed for major global trade routes. It offers exceptional container intake and reefer capacity, making it a valuable asset for any liner service.'
  },
  {
    id: 'ro-ro-titan',
    name: 'Ro-Ro Titan',
    type: 'Ro-Ro',
    status: 'For Sale',
    yearBuilt: 2017,
    dwt: 25000,
    price: 45000000,
    imageUrl: 'https://picsum.photos/seed/car-carrier-ship/800/600',
    specs: { IMO: '9753186', Built: '2017', Class: 'RINA', DWT: '25,000 MT', 'Lane Meters': '4,500' },
    description: 'The Ro-Ro Titan is a versatile roll-on/roll-off vessel with multiple decks for carrying cars, trucks, and high-and-heavy cargo. Features stern and side ramps for efficient loading and unloading.'
  },
  {
    id: 'lng-polaris',
    name: 'LNG Polaris',
    type: 'LNG Carrier',
    status: 'For Sale',
    yearBuilt: 2021,
    dwt: 95000,
    price: 250000000,
    imageUrl: 'https://picsum.photos/seed/lng-gas-carrier/800/600',
    specs: { IMO: '9888777', Built: '2021', Class: 'BV', DWT: '95,000 MT', 'Capacity': '174,000 cbm' },
    description: 'A new generation LNG carrier featuring highly efficient propulsion and advanced cargo containment systems. Designed for long-haul transportation of liquefied natural gas with minimal boil-off.'
  },
  {
    id: 'mv-odyssey',
    name: 'MV Odyssey',
    type: 'General Cargo',
    status: 'Sold',
    yearBuilt: 2015,
    dwt: 12500,
    price: 15000000,
    imageUrl: 'https://picsum.photos/seed/general-cargo-vessel/800/600',
    specs: { IMO: '9555444', Built: '2015', Class: 'NKK', DWT: '12,500 MT', 'Cranes': '2 x 30T' },
    description: 'A multi-purpose general cargo vessel equipped with its own cranes, allowing for flexible loading and unloading in ports with limited infrastructure. Ideal for breakbulk, project cargo, and containers.'
  },
   {
    id: 'mt-horizon',
    name: 'MT Horizon',
    type: 'Tanker',
    status: 'For Sale',
    yearBuilt: 2016,
    dwt: 50000,
    price: 28000000,
    imageUrl: 'https://picsum.photos/seed/product-tanker-ship/800/600',
    specs: { IMO: '9444333', Built: '2016', Class: 'ABS', DWT: '50,000 MT', 'Type': 'MR2 Product Tanker' },
    description: 'An eco-design MR2 product tanker with coated tanks suitable for carrying refined petroleum products and chemicals. Features advanced fuel-saving technologies.'
  },
  {
    id: 'mv-goliath',
    name: 'MV Goliath',
    type: 'Bulk Carrier',
    status: 'Under Offer',
    yearBuilt: 2012,
    dwt: 180000,
    price: 22000000,
    imageUrl: 'https://picsum.photos/seed/capesize-bulk-carrier/800/600',
    specs: { IMO: '9333222', Built: '2012', Class: 'DNV', DWT: '180,000 MT', 'Type': 'Capesize' },
    description: 'A robust Capesize bulk carrier with a strong trading history. Well-suited for iron ore and coal routes. Passed recent special survey with excellent remarks.'
  }
];


// =================================================================================
// NEWS
// =================================================================================

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: '1',
    title: 'Farco Global Expands Operations in Southeast Asia',
    excerpt: 'We are thrilled to announce the opening of our new regional headquarters in Singapore, strengthening our network and service capabilities...',
    imageUrl: 'https://picsum.photos/seed/singapore-skyline-port/600/400',
    date: 'October 26, 2023',
    category: 'Company News',
    tags: ['expansion', 'asia', 'singapore']
  },
  {
    id: '2',
    title: 'Navigating New IMO 2023 Environmental Regulations',
    excerpt: 'Our team is fully prepared to help clients navigate the complexities of the latest International Maritime Organization regulations for a greener future.',
    imageUrl: 'https://picsum.photos/seed/eco-shipping-concept/600/400',
    date: 'October 15, 2023',
    category: 'Regulations',
    tags: ['imo', 'sustainability', 'compliance']
  },
  {
    id: '3',
    title: 'Successful Brokerage of Two Supramax Vessels',
    excerpt: 'Farco Global\'s brokerage desk is pleased to confirm the successful sale and delivery of two 2015-built Supramax bulk carriers to new owners.',
    imageUrl: 'https://picsum.photos/seed/ship-handshake-deal/600/400',
    date: 'September 28, 2023',
    category: 'Market Updates',
    tags: ['brokerage', 's&p', 'bulk carrier']
  },
  {
    id: '4',
    title: 'Digital Transformation: Farco Unveils New Tracking Platform',
    excerpt: 'Our new proprietary digital platform offers clients unprecedented real-time visibility and predictive analytics for their entire supply chain.',
    imageUrl: 'https://picsum.photos/seed/logistics-dashboard-tech/600/400',
    date: 'September 05, 2023',
    category: 'Technology',
    tags: ['digitalization', 'innovation', 'supply chain']
  },
  {
    id: '5',
    title: 'Investing in Green Shipping: Our First LNG-Powered Fleet',
    excerpt: 'As part of our commitment to sustainability, we have placed an order for three new dual-fuel container ships, a major step towards decarbonization.',
    imageUrl: 'https://picsum.photos/seed/lng-powered-container-ship/600/400',
    date: 'August 21, 2023',
    category: 'Company News',
    tags: ['sustainability', 'lng', 'newbuild']
  },
  {
    id: '6',
    title: 'Farco Global Awarded "Logistics Provider of the Year"',
    excerpt: 'We are honored to be recognized by the International Shipping Review for our excellence in service, innovation, and client satisfaction.',
    imageUrl: 'https://picsum.photos/seed/shipping-award-trophy/600/400',
    date: 'July 30, 2023',
    category: 'Company News',
    tags: ['award', 'logistics']
  },
  {
    id: '7',
    title: 'Analysis: Shifting Trade Routes and Port Congestion',
    excerpt: 'A deep dive into the evolving global trade landscape and its impact on major shipping lanes and port operations worldwide.',
    imageUrl: 'https://picsum.photos/seed/port-congestion-map/600/400',
    date: 'July 12, 2023',
    category: 'Market Updates',
    tags: ['trade', 'ports', 'analysis']
  },
  {
    id: '8',
    title: 'EU ETS for Shipping: What You Need to Know',
    excerpt: 'A comprehensive guide to the upcoming European Union Emissions Trading System for the maritime sector and its implications for shipowners.',
    imageUrl: 'https://picsum.photos/seed/eu-flag-ship/600/400',
    date: 'June 25, 2023',
    category: 'Regulations',
    tags: ['eu ets', 'carbon emissions', 'compliance']
  },
  {
    id: '9',
    title: 'The Rise of AI in Voyage Optimization',
    excerpt: 'Exploring how artificial intelligence and machine learning are revolutionizing route planning, fuel efficiency, and vessel performance.',
    imageUrl: 'https://picsum.photos/seed/ai-shipping-route/600/400',
    date: 'June 08, 2023',
    category: 'Technology',
    tags: ['ai', 'optimization', 'efficiency']
  },
  {
    id: '10',
    title: 'Farco Global Partners with Green Ocean Initiative',
    excerpt: 'We are proud to announce our partnership with the Green Ocean Initiative to support marine biodiversity and ocean cleanup projects.',
    imageUrl: 'https://picsum.photos/seed/clean-ocean-turtles/600/400',
    date: 'May 22, 2023',
    category: 'Company News',
    tags: ['sustainability', 'partnership', 'csr']
  },
  {
    id: '11',
    title: 'Dry Bulk Market Outlook: Q4 2023',
    excerpt: 'Our expert analysis on the key drivers, challenges, and opportunities shaping the dry bulk shipping market for the final quarter of the year.',
    imageUrl: 'https://picsum.photos/seed/dry-bulk-market-chart/600/400',
    date: 'May 05, 2023',
    category: 'Market Updates',
    tags: ['dry bulk', 'market analysis', 'q4']
  },
  {
    id: '12',
    title: 'Implementing Advanced Cybersecurity Measures Across Our Fleet',
    excerpt: 'Farco Global completes a fleet-wide upgrade of its cybersecurity infrastructure to protect against emerging digital threats at sea.',
    imageUrl: 'https://picsum.photos/seed/ship-cybersecurity/600/400',
    date: 'April 18, 2023',
    category: 'Technology',
    tags: ['cybersecurity', 'safety', 'fleet']
  }
];


// =================================================================================
// WHY CHOOSE US
// =================================================================================

export const WHY_CHOOSE_US_ITEMS = [
    {
        icon: <GlobeIcon />,
        title: "Global Network",
        description: "Our extensive network of partners and offices in key global markets ensures seamless and reliable service worldwide."
    },
    {
        icon: <SupportIcon />,
        title: "24/7 Dedicated Support",
        description: "Your dedicated account manager and our operations team are available around the clock to support your business needs."
    },
    {
        icon: <ExpertiseIcon />,
        title: "Decades of Expertise",
        description: "With over 35 years in the industry, we have the deep knowledge required to navigate the complexities of global trade."
    },
    {
        icon: <LeafIcon />,
        title: "Sustainable Solutions",
        description: "We are committed to reducing the environmental impact of shipping through innovative and sustainable practices."
    }
];

// =================================================================================
// ABOUT PAGE - MILESTONES
// =================================================================================
export const MILESTONES = [
    { year: 1985, title: 'Company Founded', description: 'Farco Global is established as a small ship brokerage firm in London.' },
    { year: 1998, title: 'First International Office', description: 'Expanded operations with a new office in Singapore to serve the growing Asian market.' },
    { year: 2005, title: 'Freight Forwarding Division', description: 'Launched a comprehensive freight forwarding service, offering sea, air, and land solutions.' },
    { year: 2014, title: 'Acquisition of Charter Co.', description: 'Strengthened our chartering capabilities through a strategic acquisition.' },
    { year: 2022, title: 'Digital Platform Launch', description: 'Introduced a state-of-the-art digital platform for real-time tracking and supply chain management.' },
];

// =================================================================================
// TEAM MEMBERS
// =================================================================================

export const TEAM_MEMBERS = [
    {
        name: "Eleanor Vance",
        title: "Chief Executive Officer",
        imageUrl: "https://picsum.photos/seed/female-ceo-portrait/400/400"
    },
    {
        name: "Marcus Thorne",
        title: "Head of Brokerage",
        imageUrl: "https://picsum.photos/seed/male-shipping-broker/400/400"
    },
    {
        name: "Isabella Chen",
        title: "Director of Global Freight",
        imageUrl: "https://picsum.photos/seed/female-logistics-director/400/400"
    },
    {
        name: "Javier Morales",
        title: "Chief Financial Officer",
        imageUrl: "https://picsum.photos/seed/male-cfo-portrait/400/400"
    }
];

// =================================================================================
// CLIENT LOGOS
// =================================================================================
const ClientLogo: React.FC<{ path: string }> = ({ path }) => (
    <svg className="h-8 w-auto text-gray-400 group-hover:text-gray-600 transition-colors duration-300" role="img" viewBox="0 0 120 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d={path} />
    </svg>
);

export const CLIENT_LOGOS = [
    { name: "Apex Shipping Lines", component: <ClientLogo path="M0 20 L20 0 L40 20 L20 40 Z M50 0 L120 0 L120 10 L60 10 Z M60 15 L120 15 L120 25 L50 25 Z M50 30 L120 30 L120 40 L60 40 Z" /> },
    { name: "Terra Bulk Carriers", component: <ClientLogo path="M0 40 L30 0 L60 40 Z M70 40 L120 40 L95 0 Z" /> },
    { name: "Nexus Brokers", component: <ClientLogo path="M0 0 L40 40 L80 0 L120 40 M20 20 L60 20 M60 20 L100 20" /> },
    { name: "Odyssey Shipowners", component: <ClientLogo path="M60 20 A 50 15 0 1 0 60 21 Z M10 20 A 10 5 0 1 0 11 20 Z" /> },
    { name: "Meridian Energy", component: <ClientLogo path="M0 10 L60 10 L60 0 L120 20 L60 40 L60 30 L0 30Z" /> },
];
