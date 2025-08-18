import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../constants';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-farco-blue text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
                    {/* Column 1: Logo & Tagline */}
                    <div className="mb-6 md:mb-0 col-span-2 lg:col-span-2">
                         <Link to="/" className="flex items-center text-white mb-4">
                            <div className="text-3xl font-logo tracking-wide">
                                <span className="font-extrabold">FARCO</span>
                                <span className="font-semibold opacity-90">GLOBAL</span>
                            </div>
                        </Link>
                        <p className="text-gray-300 text-sm max-w-xs">Connecting your business to the world with integrated logistics solutions.</p>
                         <div className="flex space-x-5 mt-6">
                            <SocialIcon href="#">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
                            </SocialIcon>
                             <SocialIcon href="#">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </SocialIcon>
                         </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="col-span-1">
                        <h3 className="text-base font-bold mb-4 tracking-wide uppercase text-gray-400">Company</h3>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="hover:text-farco-sky-blue transition-colors text-gray-300">About Us</Link></li>
                            <li><Link to="/news" className="hover:text-farco-sky-blue transition-colors text-gray-300">News</Link></li>
                            <li><Link to="/contact" className="hover:text-farco-sky-blue transition-colors text-gray-300">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="col-span-1">
                        <h3 className="text-base font-bold mb-4 tracking-wide uppercase text-gray-400">Solutions</h3>
                        <ul className="space-y-3">
                            {SERVICES.slice(0, 5).map(s => (
                                 <li key={s.id}><Link to={`/services/${s.slug}`} className="hover:text-farco-sky-blue transition-colors text-gray-300">{s.title}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="col-span-2 md:col-span-1">
                         <h3 className="text-base font-bold mb-4 tracking-wide uppercase text-gray-400">Contact</h3>
                        <address className="not-italic text-gray-300 space-y-3 text-sm">
                            <p><strong>Phone:</strong> +1 (800) 555-0199</p>
                            <p><strong>Email:</strong> contact@farcoglobal.com</p>
                        </address>
                    </div>
                </div>
            </div>
            <div className="bg-black bg-opacity-20 py-4">
                <div className="container mx-auto px-6 text-center text-sm text-gray-400 md:flex md:justify-between">
                    <p>&copy; {new Date().getFullYear()} Farco Global. All Rights Reserved.</p>
                    <div className="mt-2 md:mt-0">
                        <Link to="/privacy" className="hover:text-white mx-2">Privacy Policy</Link> | 
                        <Link to="/terms" className="hover:text-white mx-2">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
