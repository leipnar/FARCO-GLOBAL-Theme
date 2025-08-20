

import React from 'react';
import { Link } from 'react-router-dom';
import { TEAM_MEMBERS, MILESTONES, HandshakeIcon, AwardIcon, UsersGearIcon, LightbulbIcon, BullseyeIcon, TrophyIcon } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <header className="bg-farco-blue text-white py-28 relative">
         <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(https://picsum.photos/seed/global-shipping-routes-map/1920/1080)` }} />
        <div className="container mx-auto px-6 text-center relative">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">About Farco Global</h1>
          <p className="text-xl mt-4 text-gray-300 max-w-3xl mx-auto">Connecting continents, businesses, and people with precision and dedication since 1985.</p>
        </div>
      </header>

      <section className="py-24 bg-farco-gray">
        <div className="container mx-auto px-6">
            <div className="text-center">
                <h2 className="text-lg font-semibold text-farco-sky-blue uppercase tracking-wider">Our Mission</h2>
                <p className="mt-4 text-4xl md:text-5xl font-extrabold text-farco-blue tracking-tight max-w-4xl mx-auto">
                    To be the strategic partner in your supply chain, delivering value and reliability every step of the way.
                </p>
            </div>
            <div className="mt-20 grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                    <div className="inline-block bg-farco-light-blue p-4 rounded-full mb-4"><LightbulbIcon /></div>
                    <h3 className="text-2xl font-bold text-farco-blue mb-2">Innovation</h3>
                    <p className="text-gray-600">We leverage technology and creative solutions to drive efficiency and visibility in every shipment.</p>
                </div>
                 <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                    <div className="inline-block bg-farco-light-blue p-4 rounded-full mb-4"><BullseyeIcon /></div>
                    <h3 className="text-2xl font-bold text-farco-blue mb-2">Dedication</h3>
                    <p className="text-gray-600">Our team is committed to proactive communication and round-the-clock support for our clients.</p>
                </div>
                 <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                    <div className="inline-block bg-farco-light-blue p-4 rounded-full mb-4"><TrophyIcon /></div>
                    <h3 className="text-2xl font-bold text-farco-blue mb-2">Client Success</h3>
                    <p className="text-gray-600">Your goals are our goals. We measure our success by the success of your supply chain.</p>
                </div>
            </div>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-extrabold text-farco-blue tracking-tight">Our Journey Since 1985</h2>
                <p className="text-lg text-gray-600 mt-4">From a small brokerage firm to a global logistics powerhouse, our commitment to excellence has never wavered.</p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-300" aria-hidden="true"></div>
              {MILESTONES.map((milestone, index) => (
                <div key={milestone.year} className="relative mb-12">
                   <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                      <div className="w-1/2"></div>
                      <div className="w-1/2 px-8">
                         <div className={`bg-white p-6 rounded-xl shadow-lg border-t-4 ${index % 2 === 0 ? 'border-farco-sky-blue' : 'border-farco-blue'}`}>
                            <h3 className="text-xl font-bold text-farco-blue mb-2">{milestone.title}</h3>
                            <p className="text-gray-600">{milestone.description}</p>
                         </div>
                      </div>
                   </div>
                   <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white border-4 border-gray-300 rounded-full w-20 h-20 flex items-center justify-center font-bold text-farco-blue text-lg shadow-md">{milestone.year}</div>
                </div>
              ))}
            </div>
        </div>
      </section>

      <section className="py-24 bg-farco-blue text-white relative overflow-hidden">
         <svg className="absolute top-0 left-0 w-full h-full opacity-5" fill="none" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg"><path d="M500 300L0 0V600L500 300Z" fill="white" fillOpacity="0.1"/><path d="M500 300L1000 0V600L500 300Z"/></svg>
        <div className="container mx-auto px-6 relative">
             <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Core Values</h2>
                <p className="text-lg text-gray-300 mt-4">The principles that guide our every action and decision, ensuring we operate with the highest standards for our clients and partners.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                <div className="text-center">
                    <div className="flex justify-center mb-4"><HandshakeIcon /></div>
                    <h3 className="text-2xl font-bold text-white mb-2">Integrity</h3>
                    <p className="text-gray-400">We conduct our business with honesty and transparency, building trust through every interaction.</p>
                </div>
                 <div className="text-center">
                    <div className="flex justify-center mb-4"><AwardIcon /></div>
                    <h3 className="text-2xl font-bold text-white mb-2">Excellence</h3>
                    <p className="text-gray-400">We are relentless in our pursuit of quality, striving for superior performance in all our services.</p>
                </div>
                 <div className="text-center">
                    <div className="flex justify-center mb-4"><UsersGearIcon /></div>
                    <h3 className="text-2xl font-bold text-white mb-2">Partnership</h3>
                    <p className="text-gray-400">We collaborate closely with our clients, viewing ourselves as an extension of their team.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 bg-farco-gray">
        <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-farco-blue tracking-tight">Meet Our Leadership</h2>
                <p className="text-lg text-gray-600 mt-4">The experienced team steering Farco Global towards a brighter, more connected future.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {TEAM_MEMBERS.map(member => (
                    <div key={member.name} className="bg-white text-center rounded-lg shadow-lg overflow-hidden group">
                        <div className="relative h-64">
                             <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover object-top" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-farco-blue">{member.name}</h3>
                            <p className="text-farco-sky-blue font-semibold">{member.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold text-farco-blue mb-4">Join Our Global Network</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
               Ready to optimize your supply chain with a trusted partner? Contact us today to learn how our expertise can benefit your business.
            </p>
            <Link 
                to="/contact" 
                className="inline-block bg-farco-sky-blue text-white font-bold py-4 px-10 rounded-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 text-lg shadow-2xl"
            >
                Contact Us
            </Link>
        </div>
    </section>

    </div>
  );
};

export default AboutPage;