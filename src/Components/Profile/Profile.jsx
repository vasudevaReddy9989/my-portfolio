import './Profile.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile from '../../assets/profile.jpg';
import resume from '../../assets/Vasu_Deva_Reddy_Resume.pdf';

export const Profile = () => {
  return (
    <div id="home" className="hero">
      <img src={profile} className='profile-image' alt="Profile" />

      <h1>
        <span>I'm Vasu Deva Reddy,</span> full stack developer based in India.
      </h1>

      <p>
        I am a full stack developer from Bengaluru, India with 1 year of experience
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>
        </div>

        {/* Resume Button */}
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
        >
          My Resume
        </a>
      </div>
    </div>
  );
}
