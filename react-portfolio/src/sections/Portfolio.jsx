import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      title: 'Pet Tendr',
      appLink: 'https://tendr-va9s.onrender.com',
      repoLink: 'https://github.com/your-username/project-one',
    //   image: 'path/to/project-one-image.jpg', // Add the path to your project image
    },
    {
      title: 'Project Two',
      appLink: 'https://example.com/project-two',
      repoLink: 'https://github.com/sjean149/PetTinder-Group-Project2',
    //   image: 'path/to/project-two-image.jpg', // Add the path to your project image
    },
   
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            appLink={project.appLink}
            repoLink={project.repoLink}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
