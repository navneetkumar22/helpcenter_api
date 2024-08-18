import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <section className='footer'>
            <div>
                <h4>Abstract</h4>
                <div className='links'>
                    <ul>
                        <li>Branches</li>
                    </ul>
                </div>
            </div>
            <div>
                <h4>Resources</h4>
                <div className='links'>
                    <ul>
                        <li>Blog</li>
                        <li>Help Center</li>
                        <li>Release Notes</li>
                        <li>Status</li>
                    </ul>
                </div>
            </div>
            <div>
                <h4>Community</h4>
                <div className='links'>
                    <ul>
                        <li>Twitter</li>
                        <li>Linkedin</li>
                        <li>Facebook</li>
                        <li>Dribble</li>
                        <li>Podcast</li>
                    </ul>
                </div>
            </div>
            <div>
                <h4>Company</h4>
                <div className='links'>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Legal</li>
                        <li>info@abstract.com</li>
                    </ul>
                </div>
            </div>
            <div className='copywrite'>
                <h3>Logo</h3>
                <p>&#169; Copywrite 2022 <br />Abstract Studio Design, Inc. <br />All rights reserved.</p>
            </div>
        </section>
    )
}

export default Footer;