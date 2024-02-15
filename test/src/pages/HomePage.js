// HomePage.js
import React from 'react';
import '../styles/navbar.css';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <>
    <Header />
    <div class="welcome-text">
                <h1> We Are Here To Help You</h1>
                <a href="/login">Contact Us</a>
            </div>
    </>
  );
};

export default HomePage;
