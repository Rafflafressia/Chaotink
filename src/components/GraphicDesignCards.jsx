const graphicDesignProjects = [
  {
    title: "Design Project 1",
    description: "This is project 1",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Design Project 2",
    description: "This is project 2",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const GraphicDesignCards = () => {
  return (
    <div className="graphic-design-cards">
      {graphicDesignProjects.map((project, index) => (
        <div
          key={index}
          className="graphic-design-card flex flex-col md:col items-center text-center w-[300px] mx-auto md:mx-[50px] my-12 bg-cyan-950 border-cyan-300 border-2"
        >
          <div className="projImg w-[150px] h-[150px] my-4">
            <img
              src={project && project.imageUrl}
              alt={project && project.title}
            />
          </div>
          <div className="projDesc py-2">
            <h3 className="text-2xl text-white font-bold my-2 md:mx-4">
              {project && project.title}
            </h3>
            <p className="text-white">{project && project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GraphicDesignCards;
