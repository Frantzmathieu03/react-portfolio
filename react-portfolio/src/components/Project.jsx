function Project({ title, appLink, repoLink, image }) {
    return (
      <div className="project">
        <h3>{title}</h3>
        <a href={appLink} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={`${title} screenshot`} />
        </a>
        <p>
          <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </p>
      </div>
    );
  }
  
  export default Project;
  