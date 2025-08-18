
import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  return (
    <div className="bg-farco-gray py-24">
      <div className="container mx-auto px-6 max-w-md">
        <div className="bg-white p-10 rounded-lg shadow-xl text-center">
          <h1 className="text-3xl font-bold text-farco-blue mb-4">Create Account</h1>
          <p className="text-gray-600 mb-8">User registration is coming soon. Stay tuned for updates!</p>
          <Link to="/" className="inline-block bg-farco-teal text-white font-semibold py-3 px-8 rounded-lg hover:bg-farco-teal-dark transition-colors duration-300">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
