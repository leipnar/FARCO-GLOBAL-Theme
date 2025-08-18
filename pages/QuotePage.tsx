import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const QuotePage: React.FC = () => {
    return (
        <div className="bg-farco-light-blue">
             <header className="bg-farco-blue text-white py-20 relative">
                <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(https://picsum.photos/seed/quote-bg/1920/1080)` }} />
                <div className="container mx-auto px-6 text-center relative">
                    <h1 className="text-5xl font-extrabold tracking-tight">Request a Quote</h1>
                    <p className="text-xl mt-3 text-gray-300 max-w-3xl mx-auto">Provide us with a few details, and our experts will tailor a competitive quote for your logistics needs.</p>
                </div>
            </header>
            <div className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-xl">
                    <form className="space-y-10">
                        {/* Step 1: Service Selection */}
                        <fieldset>
                            <legend className="text-2xl font-bold text-farco-blue mb-5 border-b-2 border-farco-gray pb-3">1. Select a Service</legend>
                            <div className="flex flex-wrap gap-3">
                                {SERVICES.map(service => (
                                    <div key={service.id} className="flex-grow">
                                        <input type="radio" id={service.slug} name="service" value={service.slug} className="sr-only peer" />
                                        <label htmlFor={service.slug} className="flex items-center justify-center w-full cursor-pointer rounded-md border-2 border-gray-300 bg-white p-4 text-center text-sm font-semibold text-gray-600 transition-all hover:bg-farco-light-blue peer-checked:border-farco-sky-blue peer-checked:text-farco-sky-blue peer-checked:shadow-md">
                                            {service.title}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </fieldset>

                        {/* Step 2: Shipment Details */}
                        <fieldset>
                             <legend className="text-2xl font-bold text-farco-blue mb-5 border-b-2 border-farco-gray pb-3">2. Shipment Details</legend>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-1">Origin</label>
                                    <input type="text" id="origin" name="origin" placeholder="City, Country" />
                                </div>
                                 <div>
                                    <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                                    <input type="text" id="destination" name="destination" placeholder="City, Country" />
                                </div>
                                <div className="md:col-span-2">
                                     <label htmlFor="cargo_description" className="block text-sm font-medium text-gray-700 mb-1">Cargo Description</label>
                                    <textarea id="cargo_description" name="cargo_description" rows={4} placeholder="e.g., 2 x 40' HC containers with electronics, total weight 20 MT..."></textarea>
                                </div>
                             </div>
                        </fieldset>

                        {/* Step 3: Contact Information */}
                        <fieldset>
                             <legend className="text-2xl font-bold text-farco-blue mb-5 border-b-2 border-farco-gray pb-3">3. Your Information</legend>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                 <div>
                                    <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input type="text" id="full_name" name="full_name" required />
                                </div>
                                <div>
                                    <label htmlFor="company_name" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                                    <input type="text" id="company_name" name="company_name" />
                                </div>
                                 <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                 <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" />
                                </div>
                             </div>
                        </fieldset>
                        
                        <div className="pt-5 border-t border-gray-200">
                             <button type="submit" className="w-full bg-farco-sky-blue text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                Submit Quote Request
                            </button>
                            <p className="text-center text-xs text-gray-500 mt-4">By submitting this form, you agree to our <Link to="/terms" className="underline">Terms of Service</Link>.</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default QuotePage;
