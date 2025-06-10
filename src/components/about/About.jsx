import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
import columbia_jacket from "../../assets/columbia_jacket.png";
const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={columbia_jacket} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am mobile developer with over 2 years ....</p>
            <p>My passon for mobile development is not only...</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>SwiftUI</p>
              <hr style={{ width: "10%" }} />
            </div>
            <div className="about-skill">
              <p>Swift</p>
              <hr style={{ width: "30%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "30%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "10%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2 +</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1 +</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1 +</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
      {/* <div className="about-testimonials">
        <h1>CUSTOMER TESTIMONIALS</h1>
        <p>CUSTOMER TESTIMONINAL CAROSEL GOES HERE</p>
      </div> */}
    </div>
  );
};
export default About;

/*
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

        

        
      
          <div className="about-skills">
  





          </div>
        </div>
      </div>
      
      */
