import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Certifications from './components/Certifications'
import './styles.css';

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Certifications />
            <Contact />
        </div>
    );
};

export default App;
