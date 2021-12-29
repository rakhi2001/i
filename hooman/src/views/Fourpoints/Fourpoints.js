import './Fourpoint.css';
import Image1 from '../../images/Untitled-1-04.png';
import Image2 from '../../images/Untitled-1-05.png';
import Image3 from '../../images/Untitled-1-06.png';
import Image4 from '../../images/Untitled-1-07.png';


function Fourpoint() {
  return (
    <div className="Fourpoints__whole">
        <div className="first__point">
            <img className="first__img" src={Image3} alt="1"></img>
            <p className="tx">Even if you can’t adopt please give loving care to a needy pup or an old dog</p>
        </div>
        <div className="second__point">
            <img className="second__img" src={Image4} alt="2"></img>
            <p className="tx">Even if you can’t adopt please give loving care to a needy pup or an old dog</p>
        </div>
        <div className="third__point">
            <img className="third__img" src={Image1} alt="3"></img>
            <p className="tx">Old newspapers, rice and broken wheat, old mattresses and furniture. Every bit helps.</p>
        </div>
        <div className="four__point">
            <img className="four__img" src={Image2} alt="4"></img>
            <p className="tx">Sponsor a dog on an annual basis. Make a friend.</p>
        </div>
    </div>
  );
}

export default Fourpoint;
