import './Activities.css';
import  Image1  from "../../images/Untitled-1-03.png";
import  Image2  from "../../images/Untitled-1-02.png";
import  Image3  from "../../images/Untitled-1-01 1.png";


function Activities() {
  return (
    <div className="Activities__whole">
        <div className="activities__title">ACTIVITIES</div>
        <div className="activities__ruler"></div>
        <div className="activities__sub">We’ve started with the rehabilitation and rescue work last year only, over the period of a year we have rescued more than 20 dogs, have fostered 12 and rehabilitated more than 15.

        <br/><br/>
        Here’s a brief look at some of the heartwarming stories.</div>
        <div className="three__images">
            <img alt="im1" src={Image1} className="image__one"></img>
            <img alt="im2" src={Image2}  className="image__two"></img>
            <img alt="im3" src={Image3}  className="image__three"></img>
        </div>
        <div className="three__text">
            <div className="first__box"><div className="first__text">Maggi was adopted by us when we saw her for the first time abandoned and yearning for help near our house. It was her third pregnancy and after few days of utmost care she gave birth to four puppies. Not after much time grievously the pups died due to Canine Distemper (a contagious and serious disease caused by a virus that attacks the respiratory and nervous systems of puppies and dogs). The unfortunate death of the pups as extremely excruciating but Maggi was more than just a pet for us now, her health was deteriorating and then pregnancies had made her fragile. Eventually we decided to spay her so that she’ll never have to be pregnant and give birth outdoors evert again. Maggi is now healthy, happy and has a family.</div></div>
            <div className="second__box"><div className="second__text">My dog Bobo came into my life as a blessing in disguise after I lost my late dog Henry. I had moved to Delhi for a new job and Henry was my constant support. One day while playing, Henry got loose and got hit by a car. I was very depressed and lonely. Never had I thought  I would plan on getting another dog but Bobo found me. He did not replace Henry but has created his own special place in my heart. He has healed me in ways he’ll never understand, I am so grateful that I found him. </div></div>
            <div className="third__box"><div className="third__text">During the time I was shifting to a new place, I found a pregnant dog who was about to deliver but unfortunately met with an accident. As a result her legs got damaged but favourable people present there made a shelter where she gave birth to six puppies. As soon as they started walking two of the six puppies died, this left me devastated and dejected. At that point I decided to adopt the rest of the puppies and was the best decision so far. All’s well that ends well. Puffy and Tuffy are not healthy, grown up and too adorable.</div></div>
        </div>
    </div>
  );
}

export default Activities;
