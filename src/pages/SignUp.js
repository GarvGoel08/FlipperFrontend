import React from 'react'
import SignUpForm from '../componenets/SignUpForm';
import Footer from '../componenets/Footer';
import Navbar from '../componenets/Navbar';

export default function SignUp() {
    return (
      <div className="h-full flex flex-col">
        <Navbar/>
        <SignUpForm />
        <Footer />
      </div>
    );
}
