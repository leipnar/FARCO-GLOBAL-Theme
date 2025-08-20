import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

    const TabButton: React.FC<{tab: 'login' | 'register', label: string}> = ({ tab, label }) => (
         <button
            onClick={() => setActiveTab(tab)}
            className={`w-1/2 py-3 text-base font-bold transition-all duration-300 focus:outline-none border-b-2 ${
                activeTab === tab 
                ? 'text-farco-blue border-farco-sky-blue' 
                : 'text-gray-500 hover:text-farco-blue border-transparent'
            }`}
        >
            {label}
        </button>
    );

    const LoginForm = () => (
         <form className="space-y-6">
            <div className="form-field">
                <input id="email-login" name="email" type="email" autoComplete="email" required placeholder=" " className="form-input" />
                <label htmlFor="email-login" className="form-label">Email Address</label>
            </div>
            <div className="form-field">
                 <input id="password-login" name="password" type="password" autoComplete="current-password" required placeholder=" " className="form-input" />
                 <label htmlFor="password-login" className="form-label">Password</label>
            </div>
             <div className="flex items-center justify-between">
                <div className="text-sm">
                    <a href="#" className="font-medium text-farco-sky-blue hover:underline">Forgot your password?</a>
                </div>
            </div>
            <div>
                 <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-farco-sky-blue hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-farco-sky-blue transition-all duration-300 transform hover:scale-105">
                    Sign In
                </button>
            </div>
        </form>
    );

     const RegisterForm = () => (
        <form className="space-y-6">
            <div className="form-field">
                <input id="name-register" name="name" type="text" required placeholder=" " className="form-input" />
                <label htmlFor="name-register" className="form-label">Full Name</label>
            </div>
            <div className="form-field">
                <input id="email-register" name="email" type="email" required placeholder=" " className="form-input" />
                <label htmlFor="email-register" className="form-label">Email Address</label>
            </div>
            <div className="form-field">
                 <input id="password-register" name="password" type="password" required placeholder=" " className="form-input" />
                 <label htmlFor="password-register" className="form-label">Create a Password</label>
            </div>
            <div>
                 <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-farco-blue hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-farco-blue transition-all duration-300 transform hover:scale-105">
                    Create Account
                </button>
            </div>
        </form>
    );

    return (
        <div className="min-h-screen flex">
            {/* Left side - Image */}
            <div 
                className="hidden lg:block w-1/2 bg-cover bg-center"
                style={{ backgroundImage: `url(https://picsum.photos/seed/modern-port-cranes/1200/1800)`}}
            >
                <div className="h-full bg-farco-blue/30"></div>
            </div>

            {/* Right side - Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-farco-gray p-8 relative">
                <Link to="/" className="absolute top-6 left-6 flex items-center gap-2 text-farco-charcoal font-semibold hover:text-farco-sky-blue transition-colors duration-300 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    Back to Main Page
                </Link>

                <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                        <Link to="/" className="flex items-center justify-center text-farco-charcoal">
                            <div className="text-4xl font-logo tracking-wide">
                                <span className="font-extrabold">FARCO</span>
                                <span className="font-semibold">GLOBAL</span>
                            </div>
                        </Link>
                        <h2 className="mt-3 text-center text-lg font-medium text-gray-600">
                            {activeTab === 'login' ? 'Welcome back to your account' : 'Create a new account'}
                        </h2>
                    </div>

                    <div className="bg-white py-8 px-4 shadow-xl rounded-lg sm:px-10">
                        <div className="flex border-b mb-6">
                            <TabButton tab="login" label="Sign In" />
                            <TabButton tab="register" label="Create Account" />
                        </div>
                        {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;