import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaPhoneAlt } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="container-footer text-center py-4 justify-content-center">
            <div className="container ">
                <div className="row">
                    <div className="col-12">
                            <a className="social-button mx-4" href="tel:+39 327 550 9899" role="button">
                               <FaPhoneAlt style={{fontSize: '25px'}}/>
                            </a>
                            <a className="social-button mx-4 w-25" href="https://www.facebook.com/profile.php?id=100088658636092" role="button" target="blank">
                                <FaFacebookF style={{fontSize: '25px'}}/>
                            </a>
                            <a className="social-button mx-4 w-25" href="https://www.instagram.com/bzero27/" role="button" target="blank">
                               <FaInstagram style={{fontSize: '25px'}}/>
                            </a>
                            <a className="social-button mx-4 w-25" href="https://www.tiktok.com/@bzero27?_t=8djwsRik9Mo&_r=1" role="button" target="blank">
                               <FaTiktok style={{fontSize: '25px'}}/>
                            </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer