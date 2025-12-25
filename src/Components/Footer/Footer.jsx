import './Footer.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linkedIn_icon from '../../assets/linkedIn_icon.svg'
import github_icon from '../../assets/github_icon.svg'
export const Footer=()=>{
    return (
        <div id='footer' className="footer">
            <hr/>
            <div className="footer-top">
                
                 <div className="footer-top-left">
                    <div className="footer-top-left-name">
                        <h3 className='footer-top-left-name'>Vasudeva Reddy</h3>
                        <span>|</span>
                        <h5>Full Stack Developer</h5>
                    </div>
       
                   <div className="footer-top-left-location">
                     <img src={location_icon} alt="" className="footer-top-linkedin" />
                     <h5>Bengaluru, India</h5>
                   </div>
                  
                </div>
                <div className="footer-top-middle">
                    <div className="footer-top-middle-email">
                         <img src={mail_icon} alt=""/>
                         <h5>vasudeva7654@gmail.com</h5>
                    </div>
                    <div className="footer-top-middle-phone">
                         <img src={call_icon} alt=""/>
                         <h5>+91 7989255331</h5>
                    </div>
                  
                </div>
                <div className="footer-top-right">
                     <div className="footer-top-right-linkedin">
                         <img src={linkedIn_icon} alt=""/>
                         <h5>vasudevareddy-g</h5>
                    </div>
                    <div className="footer-top-right-github">
                         <img src={github_icon} alt=""/>
                         <h5>vasudevaReddy9989</h5>
                    </div>
                </div>

            </div>
            <div className="footer-bottom">
                <p>@ 2025 Vasudevareddy. All rights reserved.</p>
            </div>
        </div>
    );
}