import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, NEWS_ARTICLES, WHY_CHOOSE_US_ITEMS, CLIENT_LOGOS } from '../constants';
import type { Service, NewsArticle } from '../types';

const HeroSection: React.FC = () => (
    <div className="relative h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: `url(https://picsum.photos/seed/container-ship-sunset/1920/1080)` }}>
        <div className="absolute inset-0 bg-farco-blue/60" />
        <div className="relative container mx-auto px-6 text-white z-10">
            <div className="max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-extrabold font-logo leading-tight mb-4 tracking-tight" style={{textShadow: '1px 2px 6px rgba(0,0,0,0.3)'}}>
                    Integrated Logistics for a Connected World
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.3)'}}>
                    Your trusted partner for seamless freight forwarding, chartering, and vessel brokerage.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link to="/services" className="bg-farco-sky-blue text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 text-base shadow-lg">
                        Explore Our Services
                    </Link>
                    <Link to="/quote" className="bg-white text-farco-blue font-bold py-3 px-8 rounded-md hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 text-base shadow-lg">
                        Request a Quote
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

const ClientsSection: React.FC = () => (
     <section id="clients" className="py-16 bg-white">
        <div className="container mx-auto px-6">
            <h2 className="text-center text-sm font-bold uppercase text-gray-500 tracking-widest mb-10">
                Trusted By Industry Leaders
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
                {CLIENT_LOGOS.map((logo, i) => (
                    <div key={i} className="group" title={logo.name}>{logo.component}</div>
                ))}
            </div>
        </div>
    </section>
);


const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <Link to={`/services/${service.slug}`} className="group bg-white p-6 rounded-lg border border-gray-200/80 hover:shadow-lg flex flex-col text-left">
        <div className="flex-shrink-0 text-farco-sky-blue mb-4">
            {React.cloneElement(service.icon, { className: "h-10 w-10 text-farco-sky-blue group-hover:text-farco-blue transition-colors duration-300" })}
        </div>
        <div>
            <h3 className="text-lg font-bold text-farco-blue mb-2 group-hover:text-farco-sky-blue transition-colors">{service.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{service.shortDescription}</p>
            <span className="font-semibold text-farco-sky-blue self-start text-sm">Learn More →</span>
        </div>
    </Link>
);

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group flex flex-col">
        <div className="overflow-hidden">
             <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
             <p className="text-sm text-gray-500 mb-2">{article.date}</p>
            <h3 className="text-lg font-bold text-farco-blue group-hover:text-farco-sky-blue transition-colors mb-2 leading-tight flex-grow">{article.title}</h3>
            <Link to="/news" className="font-semibold text-farco-sky-blue hover:underline mt-4 self-start text-sm">Read More →</Link>
        </div>
    </div>
);

const CTASection: React.FC = () => (
    <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `url(https://picsum.photos/seed/night-port-aerial/1920/1080)` }}>
        <div className="absolute inset-0 bg-farco-blue/80 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-6 text-center text-white">
            <h2 className="text-4xl font-extrabold mb-4">Ready to Navigate Your Next Shipment?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">Let our experts craft a tailored logistics solution for your business. Get in touch today for a competitive quote and discover the Farco Global difference.</p>
            <Link to="/quote" className="bg-farco-sky-blue text-white font-bold py-3 px-10 rounded-md hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 text-base shadow-2xl">
                Request a Free Quote
            </Link>
        </div>
    </section>
);

const StatsSection: React.FC = () => (
     <section className="py-24 bg-farco-light-blue">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-extrabold text-farco-blue tracking-tight">Proven Excellence by the Numbers</h2>
                <p className="text-lg text-gray-600 mt-4">Our track record speaks for itself. We deliver results you can count on.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <div className="text-center bg-white p-8 rounded-lg shadow-md">
                    <p className="text-5xl font-extrabold text-farco-sky-blue">35+</p>
                    <p className="mt-2 font-semibold text-farco-charcoal">Years of Experience</p>
                </div>
                 <div className="text-center bg-white p-8 rounded-lg shadow-md">
                    <p className="text-5xl font-extrabold text-farco-sky-blue">70+</p>
                    <p className="mt-2 font-semibold text-farco-charcoal">Countries Served</p>
                </div>
                 <div className="text-center bg-white p-8 rounded-lg shadow-md">
                    <p className="text-5xl font-extrabold text-farco-sky-blue">5M+</p>
                    <p className="mt-2 font-semibold text-farco-charcoal">TEUs Moved Annually</p>
                </div>
                 <div className="text-center bg-white p-8 rounded-lg shadow-md">
                    <p className="text-5xl font-extrabold text-farco-sky-blue">99%</p>
                    <p className="mt-2 font-semibold text-farco-charcoal">Client Satisfaction</p>
                </div>
            </div>
        </div>
    </section>
);


const HomePage: React.FC = () => {
    return (
        <div className="bg-white">
            <HeroSection />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                         <h2 className="text-4xl md:text-5xl font-extrabold text-farco-blue tracking-tight">Comprehensive & Integrated Logistics</h2>
                        <p className="text-lg text-gray-600 mt-4">From freight and chartering to customs and warehousing, we provide end-to-end solutions for your global supply chain.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {SERVICES.slice(0, 8).map(service => <ServiceCard key={service.id} service={service} />)}
                    </div>
                </div>
            </section>
            
            <section className="py-24 bg-farco-light-blue">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="text-center lg:text-left">
                             <h2 className="text-4xl md:text-5xl font-extrabold text-farco-blue tracking-tight mb-6">Why Partner with Farco Global?</h2>
                             <p className="text-lg text-gray-600 mb-10">We combine global reach with local expertise to deliver unparalleled service and value, ensuring your cargo is in the safest hands.</p>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                 {WHY_CHOOSE_US_ITEMS.map(item => (
                                    <div key={item.title} className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 mt-1">{item.icon}</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-farco-blue mb-1">{item.title}</h3>
                                            <p className="text-gray-600 text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-2xl">
                             <img src="https://picsum.photos/seed/logistics-team-meeting/800/1000" alt="Team discussing logistics" className="w-full h-full object-cover" />
                             <div className="absolute inset-0 bg-gradient-to-t from-farco-blue/40 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-farco-blue tracking-tight">Latest News & Insights</h2>
                        <p className="text-lg text-gray-600 mt-4">Stay informed on industry trends and company updates.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {NEWS_ARTICLES.slice(0,3).map(article => <NewsCard key={article.id} article={article} />)}
                    </div>
                </div>
            </section>

            <StatsSection />

            <ClientsSection />

            <CTASection />

        </div>
    );
};

export default HomePage;
