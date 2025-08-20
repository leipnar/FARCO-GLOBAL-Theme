import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

// =================================================================================
// FORM COMPONENTS FOR EACH SERVICE
// =================================================================================

const FormSection: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
        {children}
    </div>
);

const FreightForwardingForm: React.FC = () => (
    <FormSection>
        <div className="form-field">
            <input type="text" id="ff-origin" name="origin" className="form-input" placeholder=" " required/>
            <label htmlFor="ff-origin" className="form-label">Origin (City, Port, Country)</label>
        </div>
        <div className="form-field">
            <input type="text" id="ff-destination" name="destination" className="form-input" placeholder=" " required/>
            <label htmlFor="ff-destination" className="form-label">Destination (City, Port, Country)</label>
        </div>
        <div className="form-field">
            <select id="ff-mode" name="mode" className="form-select" defaultValue="" required>
                <option value="" disabled>Select a mode</option>
                <option>Ocean Freight (FCL)</option>
                <option>Ocean Freight (LCL)</option>
                <option>Air Freight</option>
                <option>Land Transport (Truck/Rail)</option>
            </select>
            <label htmlFor="ff-mode" className="form-label">Shipment Mode</label>
        </div>
        <div className="form-field">
            <input type="text" id="ff-incoterms" name="incoterms" className="form-input" placeholder=" " />
            <label htmlFor="ff-incoterms" className="form-label">Incoterms (e.g., FOB, CIF)</label>
        </div>
        <div className="md:col-span-2 form-field">
            <textarea id="ff-cargo" name="cargo_description" rows={4} className="form-textarea" placeholder=" " required></textarea>
            <label htmlFor="ff-cargo" className="form-label">Cargo Details (e.g., 2 Pallets, 500kg, 1.2x0.8x1m each)</label>
        </div>
    </FormSection>
);

const CharterShipmentsForm: React.FC = () => (
    <FormSection>
        <div className="form-field">
            <input type="text" id="cs-load-port" name="load_port" className="form-input" placeholder=" " required/>
            <label htmlFor="cs-load-port" className="form-label">Load Port</label>
        </div>
        <div className="form-field">
            <input type="text" id="cs-discharge-port" name="discharge_port" className="form-input" placeholder=" " required/>
            <label htmlFor="cs-discharge-port" className="form-label">Discharge Port</label>
        </div>
        <div className="form-field">
            <input type="text" id="cs-cargo-type" name="cargo_type" className="form-input" placeholder=" " required/>
            <label htmlFor="cs-cargo-type" className="form-label">Cargo Type (e.g., Grain, Coal, Project Cargo)</label>
        </div>
         <div className="form-field">
            <input type="text" id="cs-quantity" name="quantity" className="form-input" placeholder=" " required/>
            <label htmlFor="cs-quantity" className="form-label">Quantity (Metric Tons / CBM)</label>
        </div>
         <div className="md:col-span-2 form-field">
            <input type="text" id="cs-laycan" name="laycan" className="form-input" placeholder=" " required/>
            <label htmlFor="cs-laycan" className="form-label">Laycan (Loading Date Window, e.g., 01-10 Nov 2023)</label>
        </div>
    </FormSection>
);

const ShipBrokerageForm: React.FC = () => (
     <FormSection>
        <div className="form-field">
            <select id="sb-inquiry-type" name="inquiry_type" className="form-select" defaultValue="" required>
                <option value="" disabled>Select Inquiry Type</option>
                <option>Vessel Purchase (S&P)</option>
                <option>Vessel Sale</option>
                <option>Newbuilding Contract</option>
                <option>Demolition</option>
            </select>
            <label htmlFor="sb-inquiry-type" className="form-label">Inquiry Type</label>
        </div>
        <div className="form-field">
            <input type="text" id="sb-vessel-type" name="vessel_type" className="form-input" placeholder=" " required/>
            <label htmlFor="sb-vessel-type" className="form-label">Vessel Type (e.g., Panamax, Aframax)</label>
        </div>
        <div className="form-field">
            <input type="text" id="sb-dwt" name="dwt_range" className="form-input" placeholder=" " />
            <label htmlFor="sb-dwt" className="form-label">DWT / Size Range</label>
        </div>
        <div className="form-field">
            <input type="text" id="sb-year" name="year_range" className="form-input" placeholder=" " />
            <label htmlFor="sb-year" className="form-label">Year Built Range</label>
        </div>
         <div className="md:col-span-2 form-field">
            <textarea id="sb-requirements" name="requirements" rows={4} className="form-textarea" placeholder=" "></textarea>
            <label htmlFor="sb-requirements" className="form-label">Additional Requirements</label>
        </div>
    </FormSection>
);

const GasOilLogisticsForm: React.FC = () => (
    <FormSection>
        <div className="md:col-span-2 form-field">
            <select id="go-service-type" name="service_type" className="form-select" defaultValue="" required>
                <option value="" disabled>Select Service Type</option>
                <option>Upstream Logistics (Exploration & Production)</option>
                <option>Downstream Logistics (Distribution)</option>
                <option>Offshore Support</option>
            </select>
            <label htmlFor="go-service-type" className="form-label">Service Type</label>
        </div>
        <div className="form-field">
            <input type="text" id="go-product-type" name="product_type" className="form-input" placeholder=" " required/>
            <label htmlFor="go-product-type" className="form-label">Product Type (e.g., Crude Oil, LNG, Equipment)</label>
        </div>
        <div className="form-field">
            <input type="text" id="go-location" name="location" className="form-input" placeholder=" " required/>
            <label htmlFor="go-location" className="form-label">Location / Route</label>
        </div>
        <div className="md:col-span-2 form-field">
            <textarea id="go-details" name="details" rows={4} className="form-textarea" placeholder=" "></textarea>
            <label htmlFor="go-details" className="form-label">Specific Requirements (e.g., HSSE, special handling)</label>
        </div>
    </FormSection>
);

const CustomsBrokerageForm: React.FC = () => (
    <FormSection>
        <div className="form-field">
            <input type="text" id="cb-port" name="port_of_entry" className="form-input" placeholder=" " required/>
            <label htmlFor="cb-port" className="form-label">Port of Entry</label>
        </div>
        <div className="form-field">
            <input type="text" id="cb-value" name="shipment_value" className="form-input" placeholder=" " required/>
            <label htmlFor="cb-value" className="form-label">Shipment Value & Currency</label>
        </div>
        <div className="md:col-span-2 form-field">
            <textarea id="cb-commodity" name="commodity_description" rows={4} className="form-textarea" placeholder=" " required></textarea>
            <label htmlFor="cb-commodity" className="form-label">Commodity Description (include HS code if known)</label>
        </div>
    </FormSection>
);

const WarehousingForm: React.FC = () => (
    <FormSection>
        <div className="form-field">
            <input type="text" id="wh-location" name="location" className="form-input" placeholder=" " required/>
            <label htmlFor="wh-location" className="form-label">Desired Warehouse Location (City, Country)</label>
        </div>
        <div className="form-field">
            <input type="text" id="wh-duration" name="duration" className="form-input" placeholder=" " required/>
            <label htmlFor="wh-duration" className="form-label">Storage Duration (e.g., 3 months)</label>
        </div>
        <div className="form-field">
            <input type="text" id="wh-space" name="space_required" className="form-input" placeholder=" " required/>
            <label htmlFor="wh-space" className="form-label">Space Required (e.g., 10 pallets, 500 sqm)</label>
        </div>
         <div className="form-field">
            <input type="text" id="wh-vas" name="vas" className="form-input" placeholder=" " />
            <label htmlFor="wh-vas" className="form-label">Value-Added Services (e.g., Pick & Pack, Labeling)</label>
        </div>
    </FormSection>
);

const ShipManagementForm: React.FC = () => (
     <FormSection>
        <div className="form-field">
            <select id="sm-management-type" name="management_type" className="form-select" defaultValue="" required>
                <option value="" disabled>Select Management Type</option>
                <option>Technical Management</option>
                <option>Crew Management</option>
                <option>Commercial Management</option>
                <option>Full Ship Management</option>
            </select>
            <label htmlFor="sm-management-type" className="form-label">Management Type</label>
        </div>
        <div className="form-field">
            <input type="text" id="sm-vessel-type" name="vessel_type" className="form-input" placeholder=" " required/>
            <label htmlFor="sm-vessel-type" className="form-label">Vessel Type</label>
        </div>
        <div className="md:col-span-2 form-field">
            <textarea id="sm-vessel-details" name="vessel_details" rows={3} className="form-textarea" placeholder=" "></textarea>
            <label htmlFor="sm-vessel-details" className="form-label">Vessel Details (Name, IMO, DWT, Year Built)</label>
        </div>
    </FormSection>
);


const QuotePage: React.FC = () => {
    const [selectedService, setSelectedService] = useState<string | null>(null);

    const renderServiceForm = () => {
        if (!selectedService) {
            return (
                <div className="text-center py-10 px-6 bg-farco-gray rounded-lg">
                    <p className="font-semibold text-farco-blue">Please select a service in Step 1 to see the required details.</p>
                </div>
            );
        }

        switch (selectedService) {
            case 'freight-forwarding': return <FreightForwardingForm />;
            case 'charter-shipments': return <CharterShipmentsForm />;
            case 'ship-brokerage': return <ShipBrokerageForm />;
            case 'gas-oil-logistics': return <GasOilLogisticsForm />;
            case 'customs-brokerage': return <CustomsBrokerageForm />;
            case 'warehousing-distribution': return <WarehousingForm />;
            case 'bulk-shipments': return <CharterShipmentsForm />; // Same as charter
            case 'ship-management': return <ShipManagementForm />;
            default: return null;
        }
    };

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
                                        <input 
                                            type="radio" 
                                            id={service.slug} 
                                            name="service" 
                                            value={service.slug} 
                                            className="sr-only peer"
                                            onChange={(e) => setSelectedService(e.target.value)}
                                        />
                                        <label htmlFor={service.slug} className="flex items-center justify-center w-full cursor-pointer rounded-md border-2 border-gray-300 bg-white p-4 text-center text-sm font-semibold text-gray-600 transition-all hover:bg-farco-light-blue peer-checked:border-farco-sky-blue peer-checked:text-farco-sky-blue peer-checked:shadow-md peer-checked:font-bold relative">
                                            {service.title}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </fieldset>

                        {/* Step 2: Shipment Details */}
                        <fieldset>
                             <legend className="text-2xl font-bold text-farco-blue mb-5 border-b-2 border-farco-gray pb-3">2. Shipment Details</legend>
                             {renderServiceForm()}
                        </fieldset>

                        {/* Step 3: Contact Information */}
                        <fieldset>
                             <legend className="text-2xl font-bold text-farco-blue mb-5 border-b-2 border-farco-gray pb-3">3. Your Information</legend>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                 <div className="form-field">
                                    <input type="text" id="full_name" name="full_name" required className="form-input" placeholder=" "/>
                                    <label htmlFor="full_name" className="form-label">Full Name</label>
                                </div>
                                <div className="form-field">
                                    <input type="text" id="company_name" name="company_name" className="form-input" placeholder=" "/>
                                    <label htmlFor="company_name" className="form-label">Company Name</label>
                                </div>
                                 <div className="form-field">
                                    <input type="email" id="email" name="email" required className="form-input" placeholder=" "/>
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                </div>
                                 <div className="form-field">
                                    <input type="tel" id="phone" name="phone" className="form-input" placeholder=" "/>
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                </div>
                             </div>
                        </fieldset>
                        
                        <div className="pt-5 border-t border-gray-200">
                             <button type="submit" className="w-full bg-farco-sky-blue text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed" disabled={!selectedService}>
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
