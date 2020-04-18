import React from "react";
import '../App.css';
import Header from '../components/Layouts/Header.js'
import NavBar from '../components/Layouts/Navbar.js'
import Footer from '../components/Layouts/Footer.js'

function Home() {
    return (
      <div>
            <NavBar />
                <Header />
            <Footer />

      </div>

    )
}

export default Home;

