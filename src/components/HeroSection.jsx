import Button from "./Button"
import './HeroSection.css';

const HeroSection = () => {
    return ( 
        <div className="hero-container">
            <video src='/src/assets/videos/video-1.mp4' autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button>
            </div>
        </div>
     );
}
 
export default HeroSection;