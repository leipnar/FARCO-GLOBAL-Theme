import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SHIPS, SearchIcon } from '../constants';
import type { Ship } from '../types';

interface ShipCardProps {
    ship: Ship;
}

const ShipCard: React.FC<ShipCardProps> = ({ ship }) => {
    const statusClasses = {
        'For Sale': 'bg-green-100 text-green-800',
        'Under Offer': 'bg-yellow-100 text-yellow-800',
        'Sold': 'bg-red-100 text-red-800',
    };
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden group flex flex-col transform hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-farco-sky-blue/30">
            <div className="relative overflow-hidden h-52">
                <img src={ship.imageUrl} alt={ship.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-sm text-gray-500">{ship.type}</p>
                    <span className={`text-xs font-bold py-1 px-2.5 rounded-full ${statusClasses[ship.status]}`}>
                        {ship.status}
                    </span>
                </div>
                <h3 className="text-lg font-bold text-farco-blue group-hover:text-farco-sky-blue transition-colors duration-300 mb-4">{ship.name}</h3>
                
                 <div className="border-t border-gray-200 pt-4 grid grid-cols-2 gap-x-4 text-sm">
                    <div>
                        <p className="text-gray-500">Built</p>
                        <p className="font-semibold text-farco-charcoal">{ship.yearBuilt}</p>
                    </div>
                    <div>
                        <p className="text-gray-500">DWT</p>
                        <p className="font-semibold text-farco-charcoal">{ship.dwt.toLocaleString()}</p>
                    </div>
                </div>
                <div className="mt-auto pt-5">
                    <Link to={`/ship-marketplace/${ship.id}`} className="inline-block w-full text-center bg-farco-sky-blue text-white font-bold py-2.5 px-5 rounded-md hover:bg-opacity-90 transition-colors duration-300 text-sm">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};


const ShipMarketplacePage: React.FC = () => {
    const shipTypes = ['All Types', ...Array.from(new Set(SHIPS.map(s => s.type)))];
    const statuses = ['All Statuses', ...Array.from(new Set(SHIPS.map(s => s.status)))];
    
    const [searchTerm, setSearchTerm] = useState('');
    const [shipType, setShipType] = useState('All Types');
    const [status, setStatus] = useState('All Statuses');
    
    const filteredShips = useMemo(() => {
        return SHIPS.filter(ship => {
            const nameMatch = ship.name.toLowerCase().includes(searchTerm.toLowerCase());
            const typeMatch = shipType === 'All Types' || ship.type === shipType;
            const statusMatch = status === 'All Statuses' || ship.status === status;
            return nameMatch && typeMatch && statusMatch;
        });
    }, [searchTerm, shipType, status]);


    return (
        <div className="bg-farco-light-blue min-h-screen">
            <header className="bg-farco-blue text-white py-20 relative">
                <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(https://picsum.photos/seed/ships-at-sea-panorama/1920/1080)` }} />
                <div className="container mx-auto px-6 text-center relative">
                    <h1 className="text-5xl font-extrabold tracking-tight">Ship Marketplace</h1>
                    <p className="text-xl mt-3 text-gray-300 max-w-3xl mx-auto">Your premier global exchange for commercial vessels.</p>
                </div>
            </header>

            <div className="container mx-auto px-6 py-16">
                {/* Filtering Bar */}
                <div className="bg-white p-4 rounded-lg shadow-md mb-8 sticky top-24 z-40">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="md:col-span-2 form-field">
                            <input
                                type="text"
                                id="vessel-search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="form-input pl-10"
                                placeholder=" "
                            />
                            <label htmlFor="vessel-search" className="form-label">Search by vessel name...</label>
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <SearchIcon className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                        <div className="form-field">
                            <select id="ship-type-filter" value={shipType} onChange={(e) => setShipType(e.target.value)} className="form-select">
                                {shipTypes.map(type => <option key={type} value={type}>{type}</option>)}
                            </select>
                            <label htmlFor="ship-type-filter" className="form-label">Vessel Type</label>
                        </div>
                        <div className="form-field">
                           <select id="status-filter" value={status} onChange={(e) => setStatus(e.target.value)} className="form-select">
                                {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                            <label htmlFor="status-filter" className="form-label">Status</label>
                        </div>
                    </div>
                </div>

                {/* Results Grid */}
                <main>
                    <div className="mb-4 text-sm text-gray-600">
                        Showing {filteredShips.length} of {SHIPS.length} vessels.
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredShips.length > 0 ? (
                            filteredShips.map(ship => <ShipCard key={ship.id} ship={ship} />)
                        ) : (
                            <div className="md:col-span-2 lg:col-span-3 xl:col-span-4 text-center py-16 px-6 bg-white rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-farco-blue">No Vessels Match Your Criteria</h3>
                                <p className="text-gray-600 mt-2">Please adjust your filters and try again.</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ShipMarketplacePage;