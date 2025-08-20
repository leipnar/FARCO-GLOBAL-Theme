

import React, { useState } from 'react';

const ContactInfoCard: React.FC<{icon: React.ReactNode, title: string, children: React.ReactNode}> = ({ icon, title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start space-x-5">
        <div className="flex-shrink-0 bg-farco-sky-blue text-white p-4 rounded-full shadow-sm mt-1">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold text-farco-blue mb-1">{title}</h3>
            <div className="text-gray-600 leading-relaxed space-y-1">{children}</div>
        </div>
    </div>
);

const FaqItem: React.FC<{q: string, a: string}> = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 py-4">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left text-lg font-semibold text-farco-blue focus:outline-none">
                <span>{q}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-farco-sky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                <p className="text-gray-600 pr-4">{a}</p>
            </div>
        </div>
    );
};

const ContactPage: React.FC = () => {
  const faqs = [
      { q: "How do I request a quote?", a: "The fastest way is to use our dedicated quote request page. You can also fill out the contact form on this page with details about your shipment, or call our main line for immediate assistance." },
      { q: "What types of cargo do you handle?", a: "We handle a vast range of cargo, including standard containers (FCL/LCL), bulk commodities, oversized project cargo, hazardous materials, and temperature-sensitive goods. Our experts can advise on the best solution for any cargo type." },
      { q: "Which countries do you serve?", a: "Farco Global operates an extensive worldwide network. We serve all major trade lanes across North America, Europe, Asia, South America, Africa, and Oceania. If you have a destination in mind, we can almost certainly get your cargo there." },
      { q: "How can I track my shipment?", a: "Clients with active shipments are given access to our secure online tracking portal. This platform provides real-time updates, location tracking, and estimated arrival times for your cargo, accessible 24/7." },
  ];

  return (
    <div className="bg-white">
      <header className="relative h-[50vh] min-h-[400px] bg-cover bg-center flex items-center justify-center text-white text-center" style={{ backgroundImage: `url(https://picsum.photos/seed/global-communications-network/1920/1080)` }}>
          <div className="absolute inset-0 bg-farco-blue bg-opacity-60" />
          <div className="relative container mx-auto px-6">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.5)'}}>Get In Touch</h1>
              <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.5)'}}>We are here to answer your questions and power your supply chain. Reach out today.</p>
          </div>
      </header>
      
      <section className="py-24 bg-farco-light-blue">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <section>
                <h2 className="text-4xl font-extrabold text-farco-blue tracking-tight mb-4">Contact Our Global Headquarters</h2>
                <p className="text-lg text-gray-600 mb-8">Our team is available to assist with all your shipping and logistics needs. Please find the appropriate contact details below.</p>
                <div className="space-y-6">
                  <ContactInfoCard title="Our Address" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}>
                    <p>123 Maritime Plaza, Suite 500<br />Global Trade City, 90210</p>
                  </ContactInfoCard>
                  <ContactInfoCard title="Department Contacts" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}>
                     <p><strong>Marketing:</strong> marketing@farcoglobal.com</p>
                     <p><strong>Sales:</strong> sales@farcoglobal.com</p>
                     <p><strong>Operations:</strong> operations@farcoglobal.com</p>
                     <p><strong>Customer Support:</strong> support@farcoglobal.com</p>
                     <p><strong>Business Partners:</strong> partners@farcoglobal.com</p>
                  </ContactInfoCard>
                </div>
              </section>
              <section className="bg-white p-8 rounded-lg shadow-xl">
                <div className="text-center">
                    <h3 className="text-3xl font-extrabold text-farco-blue tracking-tight">Send a Message</h3>
                    <p className="text-gray-600 mt-2 mb-8">Fill out the form below and we'll get back to you promptly.</p>
                </div>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-field">
                            <input type="text" id="contact-name" name="name" required className="form-input" placeholder=" " />
                            <label htmlFor="contact-name" className="form-label">Your Name</label>
                        </div>
                        <div className="form-field">
                            <input type="email" id="contact-email" name="email" required className="form-input" placeholder=" " />
                            <label htmlFor="contact-email" className="form-label">Your Email</label>
                        </div>
                    </div>
                    <div className="form-field">
                        <input type="text" id="contact-subject" name="subject" required className="form-input" placeholder=" " />
                        <label htmlFor="contact-subject" className="form-label">Subject</label>
                    </div>
                    <div className="form-field">
                        <textarea id="contact-message" name="message" rows={5} required className="form-textarea" placeholder=" "></textarea>
                        <label htmlFor="contact-message" className="form-label">How can we help you today?</label>
                    </div>
                    <button type="submit" className="w-full bg-farco-sky-blue text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        Submit Message
                    </button>
                </form>
              </section>
            </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-16">
                 <h2 className="text-4xl md:text-5xl font-extrabold text-farco-blue tracking-tight">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-2">
                {faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
            </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;