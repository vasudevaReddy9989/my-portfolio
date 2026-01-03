import React from "react";
import './About.css'
import profile from '../../assets/profile.jpg'
import underline from '../../assets/nav_underline.svg'
export const About=()=>{
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={underline} alt=""/>

            </div>
            <div className="about-sections">
                <div className="about-left">
                     <img src={profile} alt="" className="about-profile-image"/>
                </div>
                 <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced Full stack developer with over a year of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with Prestigious organizations,contributing to their success and growth.</p>
                        <p>My passion for full stack development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project</p>
                    </div> 
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr className="html-css"/></div>
                        <div className="about-skill"><p>React JS</p><hr className="react-js"/></div>
                        <div className="about-skill"><p>Javascript</p><hr className="javascript"/></div>
                        <div className="about-skill"><p>C#</p><hr className="csharp"/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                 <div className="about-achievement">
                    <h1>2</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
            </div>
        </div>
    );
}