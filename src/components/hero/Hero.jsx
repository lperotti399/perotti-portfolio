import "./Hero.css";
import profile_img from "../../assets/profile_img.png";

const Hero = () => {
  return (
    <div id='home' className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Luciano Perotti</span>, <br></br>mobile developer based in
        USA.
      </h1>
      <p>
        I am a remote mobile developer from Pennsylvania with 2 years of
        experience. With a focus on hybrid and iOS platforms, 
        I am passionate about crafting experiences that are engaging, accessible
        and user-centric.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};
export default Hero;
