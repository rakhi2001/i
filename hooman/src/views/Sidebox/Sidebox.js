import './Sidebox.css';
import Insta from "./../../images/XMLID 45.png";
import Face from "./../../images/XMLID 46.png";
import Twit from "./../../images/XMLID 47.png";


function Navbar() {
  return (
        
    <div className="Sidebox"> 
        <div className="sticky">
            
                <img className="insta" src={Insta} alt="in"></img>
            
                <img  className="twit" src={Twit}  alt="tw"></img> 
                <img  className="face" src={Face} alt="fa"></img>
            
            
        </div>
       
    </div>
  );
}

export default Navbar;
