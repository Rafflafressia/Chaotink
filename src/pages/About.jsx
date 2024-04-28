import ME from "../assets/ME.png";

const About = () => {
  return (
    <div className="h-[540px] md:h-[525px] lg:h-[589px] xl:h-[878px] ">
      <div className="about-box flex flex-col items-center my-6 md:h-screen">
        <h1 className="text-4xl font-bold text-white">
          This is <span className="text-cyan-300">me</span>
        </h1>
        <img
          src={ME}
          alt="My Picture"
          className=" w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] mt-3"
        />
        <p className="my-12 text-xl text-white mx-10 text-left">
          I am a budding UI/UX designer. My passion is in illustrations, graphic
          designs and application designs.
        </p>
      </div>
    </div>
  );
};

export default About;
