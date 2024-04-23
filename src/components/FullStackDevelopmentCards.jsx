const fullStackProjects = [{
    title: 'Project 1',
    description: 'This is project 1',
    imageUrl: 'https://via.placeholder.com/150',
    projectUrl: 'https://www.google.com'
    },
    {
    title: 'Project 2',
    description: 'This is project 2',
    imageUrl: 'https://via.placeholder.com/150',
    projectUrl: 'https://www.google.com'
    }
];

const FullStackDevelopmentCards = () => {


  return (
    <div className="full-stack-development-cards">
        {fullStackProjects.map((project, index) => (
            <div key={index} className="full-stack-development-card flex my-4 mx-4 space-x-2">
                <div className="projImg">
                    <a href={project && project.projectUrl} target="_blank" rel="noreferrer">
                    <img src={project && project.imageUrl} alt={project && project.title} />
                    </a>
                </div>
                <div className="projDesc">
                    <h3>{project && project.title}</h3>
                    <p>{project && project.description}</p>
                </div>
            </div>
        ))}
    </div>
  );
}

export default FullStackDevelopmentCards;