import React from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import { SERVICES } from '../constants';

const ServiceDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = SERVICES.find(s => s.slug === slug) || SERVICES[0];

    const { heroImageSeed, introduction, features, process, benefits } = service.pageContent;

    return (
        <div className="bg-white">
            <header className="relative h-[50vh] min-h-[400px] bg-cover bg-center flex items-center justify-center text-white text-center" style={{ backgroundImage: `url(https://picsum.photos/seed/${heroImageSeed}/1920/1080)` }}>
                <div className="absolute inset-0 bg-farco-blue bg-opacity-60" />
                <div className="relative container mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.5)'}}>{service.title}</h1>
                    <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.5)'}}>{service.shortDescription}</p>
                </div>
            </header>

            <div className="container mx-auto px-6 py-20">
                 <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="lg:w-1/4 lg:sticky lg:top-28 h-fit">
                         <div className="bg-farco-gray p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-farco-blue mb-4 border-b-2 border-gray-200 pb-3">All Services</h3>
                            <nav className="flex flex-col space-y-2">
                               {SERVICES.map(navService => (
                                   <NavLink 
                                     key={navService.id}
                                     to={`/services/${navService.slug}`} 
                                     className={({isActive}) => `p-3 rounded-md text-base transition-all duration-200 font-semibold ${isActive ? 'bg-farco-blue text-white shadow' : 'text-gray-700 hover:bg-white hover:text-farco-blue hover:shadow-sm'}`}
                                   >
                                       {navService.title}
                                   </NavLink>
                               ))}
                            </nav>
                        </div>
                    </aside>
                    
                    {/* Main Content */}
                    <main className="lg:w-3/4 space-y-20">
                       <section>
                            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">{introduction}</p>
                       </section>
                       
                       <section>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-farco-blue tracking-tight mb-12 text-center">Key Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {features.map((feature) => (
                                    <div key={feature.title} className="bg-farco-gray p-8 rounded-xl flex items-start space-x-6">
                                        <div className="flex-shrink-0 text-farco-sky-blue bg-white p-4 rounded-full shadow-md">{feature.icon}</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-farco-blue mb-2">{feature.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                       </section>

                       {process && (
                           <section>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-farco-blue tracking-tight mb-16 text-center">Our Process</h2>
                                <div className="max-w-3xl mx-auto">
                                    <div className="relative">
                                        {/* Vertical line */}
                                        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-200"></div>
                                        {process.map((step, index) => (
                                            <div key={step.step} className="relative pl-16 pb-12">
                                                {/* Dot */}
                                                <div className="absolute left-0 top-1.5 w-10 h-10 bg-farco-sky-blue rounded-full text-white flex items-center justify-center font-bold text-lg transform -translate-x-1/2 shadow-lg border-4 border-white">
                                                    {step.step}
                                                </div>
                                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                                    <h3 className="text-2xl font-bold text-farco-blue mb-3">{step.title}</h3>
                                                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                           </section>
                       )}

                       <section>
                            <div className="bg-farco-blue text-white rounded-2xl p-10">
                                 <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10 text-center">Client Benefits</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                                    {benefits.map((benefit) => (
                                        <div key={benefit.title} className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">{benefit.icon}</div>
                                            <p className="text-lg font-semibold">{benefit.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                       </section>
                    </main>
                 </div>
            </div>
            
            <section className="py-24 bg-farco-gray">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-extrabold text-farco-blue mb-4">Interested in our {service.title} service?</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                        Let our experts provide a custom quote tailored to your specific needs. Click below to get started and receive a competitive, no-obligation estimate.
                    </p>
                    <Link 
                        to="/quote" 
                        className="inline-block bg-farco-sky-blue text-white font-bold py-4 px-10 rounded-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 text-lg shadow-2xl"
                    >
                        Request a Detailed Quote
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetailPage;
