import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <section className='navbar'>
            <div className='abstract'>
                <h3>Logo</h3>
                <p>Help Center</p>
            </div>
            <div>
                <button>Submit a request</button>
            </div>
        </section>
    )
}

export default Navbar;