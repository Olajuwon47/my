import React from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyChGC1rMFMhIV6uOwsmQUofahkEAylmctk",
  authDomain: "login-9717d.firebaseapp.com",
  projectId: "login-9717d",
  storageBucket: "login-9717d.firebasestorage.app",
  messagingSenderId: "666398940658",
  appId: "1:666398940658:web:fcda652894764812239f6b",
  measurementId: "G-BZDVL7H985"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export default function Login() {
  const handleSocialLogin = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
    } catch (error) {
      console.error("Error during social login:", error);
    }
  };

  const toggleForm = () => {
    console.log('Toggle form logic here');
  };
  
  return (
    <>   
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign In
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email-login"
                  name="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="/Forgot-password" className="font-semibold text-lime-500 hover:text-lime-700">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password-login"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md  bg-lime-950 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            <p className="text-center text-sm text-gray-950">
            <span id="toggle-text">Don't have an account?</span>
            <a href="/Sign up"id="toggle-link"  className="text-gray-950 hover:text-stone-50 font-semibold" onClick={toggleForm} >Sign up</a></p>
          </form>

          <div className="mt-6">
            <div className="text-center text-sm/6 text-gray-500">Or sign in with</div>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                onClick={() => handleSocialLogin(new GoogleAuthProvider())}
                className="flex items-center justify-center rounded-md bg-red-500 px-3 py-2 text-white shadow-sm hover:bg-red-400"
              >
                Google
              </button>
              <button
                onClick={() => handleSocialLogin(new FacebookAuthProvider())}
                className="flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-white shadow-sm hover:bg-blue-500"
              >
                Facebook
              </button>
              <button
                onClick={() => handleSocialLogin(new TwitterAuthProvider())}
                className="flex items-center justify-center rounded-md bg-blue-400 px-3 py-2 text-white shadow-sm hover:bg-blue-300"
              >
                Twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

