import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SHIPS } from '../constants';

const ShipDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const ship = SHIPS.find(s => s.id === id);

    if (!ship) {
        return (
            <div className="text-center py-20 bg-farco-light-blue">
                <h1 className="text-4xl font-bold text-farco-blue">Vessel Not Found</h1>
                <p className="mt-4 text-lg text-gray-600">The ship you are looking for does not exist or has been removed.</p>
                <Link to="/ship-marketplace" className="mt-8 inline-block bg-farco-sky-blue text-white font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors">
                    Back to Marketplace
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-farco-light-blue">
            <div className="container mx-auto px-6 py-16">
                {/* Header */}
                <div className="mb-8">
                    <Link to="/ship-marketplace" className="text-sm text-farco-sky-blue hover:underline mb-2 inline-block">← Back to Marketplace</Link>
                    <div className="md:flex md:items-baseline md:justify-between">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-farco-blue tracking-tight">{ship.name}</h1>
                        <p className="text-2xl text-gray-500 mt-2 md:mt-0">{ship.type}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                   <div className="lg:col-span-3">
                        {/* Photo */}
                        <div className="mb-8 shadow-2xl rounded-lg overflow-hidden">
                            <img src={ship.imageUrl} alt={ship.name} className="w-full h-auto object-cover" />
                        </div>

                         {/* Description */}
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-farco-blue mb-4 border-b border-farco-gray pb-3">Vessel Description</h2>
                            <p className="text-gray-700 leading-relaxed">{ship.description}</p>
                        </div>
                   </div>

                   <div className="lg:col-span-2 space-y-8">
                         {/* Key Specs */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                             <h2 className="text-2xl font-bold text-farco-blue mb-4">Key Specifications</h2>
                            <table className="w-full text-left">
                                <tbody>
                                    {Object.entries(ship.specs).map(([key, value]) => (
                                        <tr key={key} className="border-b border-gray-200">
                                            <td className="py-3 font-semibold text-gray-600">{key}</td>
                                            <td className="py-3 text-farco-charcoal text-right font-medium">{value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Inquiry Form */}
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-farco-blue mb-6">Inquire About This Vessel</h3>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input type="text" placeholder="Your Name" required />
                                    <input type="email" placeholder="Your Email" required />
                                </div>
                                <input type="text" placeholder="Company Name" />
                                <textarea placeholder="Your Message" rows={5}></textarea>
                                <button type="submit" className="w-full bg-farco-sky-blue text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors text-lg">
                                    Send Inquiry
                                </button>
                            </form>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ShipDetailPage;
