import './Navbar.css';
import Image from '../../images/Logo.png';

function Navbar() {
  return (
    <div className="Navbar__whole">
        <img 
                src={Image}
                alt='img'
                className='navbar__logo'    
            />
        <a href="#get_involved" className="get__involved">GET INVOLVED</a>
        <a href="#activities" className="activities">ACTIVITIES</a>
        <a href="#contact" className="contact">CONTACT</a>
        <div className="horizontal__bar"></div>
        <button className="donate__now"><b>DONATE NOW</b></button>

    </div>
  );
}

export default Navbar;
