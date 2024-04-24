const graphicDesignProjects = [{
    title: 'Design Project 1',
    description: 'This is project 1',
    imageUrl: 'https://via.placeholder.com/150',
},
{
    title: 'Design Project 2',
    description: 'This is project 2',
    imageUrl: 'https://via.placeholder.com/150',
}];

const GraphicDesignCards = () => {
    return (
        <div className="graphic-design-cards">
            {graphicDesignProjects.map((project, index) => (
                <div key={index} className="graphic-design-card flex my-4 mx-4 space-x-2 bg-cyan-950">
                    <div className="projImg">
                        <img src={project && project.imageUrl} alt={project && project.title} />
                    </div>
                    <div className="projDesc">
                        <h3>{project && project.title}</h3>
                        <p>{project && project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GraphicDesignCards;