'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Cookies from 'js-cookie';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    // Demo credentials - in a real app, this would be a server-side check
    if (email === 'mm04177@surrey.ac.uk' && password === 'AZaz09.,()') {
      // Set a cookie for authentication (30 day expiration)
      Cookies.set('isAuthenticated', 'true', { expires: 30 });
      
      // For backward compatibility with existing code
      localStorage.setItem('isAuthenticated', 'true');
      
      // Redirect to the module marks page
      router.push('/');
    } else {
      setError('Invalid credentials. Try student@surrey.ac.uk / password');
    }
  };

  return (
    <div className="login-container">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/back.jpg" 
          alt="University of Surrey Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Login Box */}
      <div className="login-box">
        <div className="login-content">
          <div className="flex justify-center mb-4">
            <img 
              src="https://aadcdn.msauthimages.net/c1c6b6c8-dhqgjg7s9-jxc3mxgtkdrnpqe5jss2-pmud78k-emhk/logintenantbranding/0/bannerlogo?ts=636692361690074033" 
              alt="University of Surrey" 
              className="logo w-20 h-auto"
            />
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Sign in</h2>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 text-sm">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="username@surrey.ac.uk" 
              className="input-box w-full p-3 text-base border border-gray-300 mb-2" 
            />
            
            <input 
              type={showPassword ? "text" : "password"} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" 
              className="input-box w-full p-3 text-base border border-gray-300 mb-2" 
            />
            
            <a href="#" className="forgot-password block text-left text-sm text-[#0078d4] no-underline mb-4">
              Can't access your account?
            </a>
            
            <button 
              type="submit"
              className="next-button w-full bg-[#0078d4] text-white py-3 text-base border-0 cursor-pointer mb-4 hover:bg-blue-600"
            >
              Sign in
            </button>
          </form>

          <div className="login-info text-sm text-left mb-4 space-y-2">
            <p>You are signing into a service authenticated by the University of Surrey.</p>
            <p className="font-bold">Sign in with: username@surrey.ac.uk</p>
            <p>By signing into this service you are agreeing to the terms and policies at:</p>
            <a href="https://www.surrey.ac.uk/about/policies" className="text-[#0078d4]">
              Policies | University of Surrey
            </a>
          </div>

          <button className="sign-in-options w-full bg-white text-gray-700 py-2 text-sm border border-gray-300 cursor-pointer flex items-center justify-center">
            <span className="mr-2">🔑</span> Sign-in options
          </button>
          
          <div className="mt-4 pt-4 text-center text-xs text-gray-500">
            <p>Demo credentials: student@surrey.ac.uk / password</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .login-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .login-box {
          position: relative;
          z-index: 10;
          width: 420px;
          background: white;
          padding: 25px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 480px) {
          .login-box {
            width: 90%;
          }
        }
      `}</style>
    </div>
  );
} 