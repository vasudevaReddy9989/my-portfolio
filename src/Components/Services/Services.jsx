import './Services.css'
import { Services_Data } from '../../assets/Services_Data.js'
import arrow_icon from '../../assets/arrow_icon.svg'
import underline from '../../assets/nav_underline.svg'
import { useState } from 'react'
import ProjectModal from './ProjectModal'

export const Services = () => {

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id='services' className="services">
      <div className="services-title">
        <h1>Projects</h1>
        <img src={underline} alt='' />
      </div>

      <div className="service-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>

            <div
              className="services-readmore"
              onClick={() => setSelectedProject(service)}
            >
              <p>Read More</p>
              <img src={arrow_icon} alt="" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
