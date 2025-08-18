import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <Link to={`/services/${service.slug}`} className="group bg-white p-6 rounded-lg border border-gray-200/80 hover:border-farco-sky-blue/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-left">
        <div className="flex-shrink-0 text-farco-sky-blue mb-4">
            {service.icon}
        </div>
        <div>
            <h3 className="text-lg font-bold text-farco-blue mb-2 group-hover:text-farco-sky-blue transition-colors">{service.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{service.shortDescription}</p>
            <span className="font-semibold text-farco-sky-blue self-start text-sm">Learn More →</span>
        </div>
    </Link>
);

const AllServicesPage: React.FC = () => {
    return (
        <div className="bg-farco-light-blue min-h-screen">
             <header className="bg-farco-blue text-white py-28 relative">
                <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(https://picsum.photos/seed/services-bg/1920/1080)` }} />
                <div className="container mx-auto px-6 text-center relative">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">Our Services</h1>
                    <p className="text-xl mt-4 text-gray-300 max-w-3xl mx-auto">End-to-end logistics solutions designed for reliability, efficiency, and global reach.</p>
                </div>
            </header>
            
            <div className="container mx-auto px-6 py-20">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map(service => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllServicesPage;