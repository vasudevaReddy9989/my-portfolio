import "./ProjectModal.css";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>&times;</span>

        <h2>{project.s_name}</h2>
        <p><strong>Client:</strong> {project.details.client}</p>
        <p><strong>Domain:</strong> {project.details.domain}</p>

        <p className="modal-desc">{project.details.description}</p>

        <h4>Key Features</h4>
        <ul>
          {project.details.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectModal;
