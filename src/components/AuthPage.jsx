// import React, { useState } from 'react';
// import { Activity } from 'lucide-react';

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     name: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your authentication logic here
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center px-4">
//       <div className="w-full max-w-md">
//         <div className="flex items-center justify-center mb-8">
//           <Activity className="h-8 w-8 text-blue-400 mr-2" />
//           <span className="text-xl font-bold text-white">VNA Health</span>
//         </div>
        
//         <div className="bg-gray-800 rounded-lg shadow-xl p-8">
//           <div className="flex mb-8">
//             <button
//               className={`flex-1 py-2 text-center ${
//                 isLogin ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'
//               }`}
//               onClick={() => setIsLogin(true)}
//             >
//               Login
//             </button>
//             <button
//               className={`flex-1 py-2 text-center ${
//                 !isLogin ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'
//               }`}
//               onClick={() => setIsLogin(false)}
//             >
//               Sign Up
//             </button>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {!isLogin && (
//               <div>
//                 <label className="block text-gray-300 mb-2">Full Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:outline-none"
//                   placeholder="Enter your full name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </div>
//             )}

//             <div>
//               <label className="block text-gray-300 mb-2">Email Address</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:outline-none"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <label className="block text-gray-300 mb-2">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:outline-none"
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </div>

//             {isLogin && (
//               <div className="text-right">
//                 <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
//                   Forgot Password?
//                 </a>
//               </div>
//             )}

//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
//             >
//               {isLogin ? 'Login' : 'Sign Up'}
//             </button>
//           </form>

//           <div className="mt-6 text-center text-gray-400">
//             {isLogin ? (
//               <p>
//                 Don't have an account?{' '}
//                 <button
//                   className="text-blue-400 hover:text-blue-300"
//                   onClick={() => setIsLogin(false)}
//                 >
//                   Sign up
//                 </button>
//               </p>
//             ) : (
//               <p>
//                 Already have an account?{' '}
//                 <button
//                   className="text-blue-400 hover:text-blue-300"
//                   onClick={() => setIsLogin(true)}
//                 >
//                   Login
//                 </button>
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;

import React, { useState } from 'react';
import { Activity } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    const { email, password, confirmPassword, name } = formData;
    if (!email || !password) {
      setError('Please fill in all required fields.');
      return false;
    }
    if (!isLogin && !name) {
      setError('Please enter your full name.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }
    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setError('');

    try {
      // Simulate an API call
      console.log('Form submitted:', formData);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
      alert(isLogin ? 'Login successful!' : 'Sign up successful!');
      navigate('/dashboard'); // Redirect to dashboard or another page
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <Activity className="h-8 w-8 text-blue-400 mr-2" />
          <span className="text-xl font-bold text-white">VNA Health</span>
        </div>
        
        <div className="bg-gray-800 rounded-lg shadow-xl p-8">
          <div className="flex mb-8">
            <button
              className={`flex-1 py-2 text-center ${
                isLogin ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`flex-1 py-2 text-center ${
                !isLogin ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'
              }`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          {error && (
            <div className="text-red-400 text-center mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:outline-none"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            )}

            <div>
              <label className="block text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:outline-none"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Password</label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:outline-none"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block text-gray-300 mb-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:outline-none"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            )}

            {isLogin && (
              <div className="text-right">
                <Link to="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
                  Forgot Password?
                </Link>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-6 text-center text-gray-400">
            {isLogin ? (
              <p>
                Don't have an account?{' '}
                <button
                  className="text-blue-400 hover:text-blue-300"
                  onClick={() => setIsLogin(false)}
                >
                  Sign up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button
                  className="text-blue-400 hover:text-blue-300"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;