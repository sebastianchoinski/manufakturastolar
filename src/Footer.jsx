import React from 'react';
import './Footer.scss'
import facebook from './facebook.webp';
import instagram from './insta.webp';
import tiktok from './tiktok.png'
import { Link } from "react-router-dom";
export default function Footer(props) {
    return (
        
<footer className="footer">
    
    <div className='footerdiv'>
        <div className='footersocialmedia'>
            <a class="footersociallink">
                <div className='singlesocial'>
                    <a class="sociallink" href='https://www.instagram.com/meble_stolarz_warszawa?igsh=aWp5MzZnbjd6dXRh'>
                        <img className='socialimage' src={instagram} alt="Instagram" />
                    </a>
                    <p className='socialtext'>Instagram</p>
                </div>
            </a>
            <a class="footersociallink">
                <div className='singlesocial'>
                    <a class="sociallink" href='https://www.facebook.com/profile.php?id=100063449186451'>
                        <img className='socialimage' src={facebook} alt="Facebook" />
                    </a>
                    <p className='socialtext'>Facebook</p>
                </div>
            </a>
            <a class="footersociallink">
                <div className='singlesocial'>
                    <a class="sociallink" href='https://www.tiktok.com/@manufaktura.stola?_t=8jzeJvGGTlh&_r=1'>
                        <img className='socialimage' src={tiktok} alt="Tiktok" />
                    </a>
                    <p className='socialtext'>Tiktok</p>
                </div>
            </a>
        </div>
        <div className='footerpages'>
        <a class="footerlink" href='/'>Strona główna</a>
        <a class="footerlink" href='/projects'>Oferta</a>
        <a class="footerlink" href='/about'>O nas</a>
        <a class="footerlink" href='/contact'>Kontakt</a>
    </div>
        <div className='footerinfo'>
            <p className='socialtext'>Warszawa</p>
            <p className="socialtext">kontakt@manufaktura-stolar.pl</p>
            <a className='socialtext' href="tel:797-953-031">+48 797 953 031</a>
        </div>
    </div>
</footer>

       
    );
}
