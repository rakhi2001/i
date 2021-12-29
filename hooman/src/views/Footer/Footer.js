import './Footer.css';
import Image from '../../images/Logo.png';
import Insta from '../../images/XMLID 45.png';
import Twit from '../../images/XMLID 47.png';
import Face from '../../images/XMLID 46.png';

function Footer() {
  return (
    <div className="Footer">
        <div className="grey__part">
            <img className="logo__bottom" src={Image} alt="bootomlogo"></img>
            <p className="foot__text">At Hoomans For Change, your donation will assure that every dog gets a healthy life and a loving home. Do your bit to save the lives of those who love without any conditions.</p>
            <img className="instaa" src={Insta} alt="in"></img>
            <img  className="twitt" src={Twit}  alt="tw"></img> 
            <img  className="facee" src={Face} alt="fa"></img>
        </div>
        <div className="copyright__part">
            <p className="right">© Copyright 2021 HOOMANSFORCHANGE</p>
        </div>
    </div>
    
  );
}

export default Footer;
