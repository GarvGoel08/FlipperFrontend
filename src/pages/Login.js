import React from 'react'
import Footer from '../componenets/Footer';
import Navbar from '../componenets/Navbar';
import LoginForm from '../componenets/LoginForm';

export default function Login() {
    return (
      <div className="h-full flex flex-col">
        <Navbar/>
        <LoginForm/>
        <Footer />
      </div>
    );
}
