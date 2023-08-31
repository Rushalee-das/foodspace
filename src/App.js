import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'
import RecipeDetails from './pages/RecpieDetails'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
    console.log('App rendering');

    return (
        <div className="bg-black">
            <Navbar />
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route index element={<Home />} />
                <Route path="recipes/:id" element={<RecipeDetails />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
