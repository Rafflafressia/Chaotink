import SitePhoto from "../assets/hero-page.png";

const Home = () => {
  return (
    <section className="home">
      <div className="home__container h-[500px] md:h-screen lg:h-screen xl:h-[883px] md:flex flex-wrap flex-row text-center md:my-auto justify-center items-center">
        <div className="relative top-[125px] md:top-[1px] mx-[20px] my-[20px] flex flex-col md:flex-row items-center space-x-12">
            <div>
              <h1 className="text-3xl font-bold text-white">Hi! I'm Arkaw <span className="text-cyan-300">Banerjee</span></h1>
              <h2 className="text-white my-4 text-xl md:w-[500px] md:mx-auto">I'm a Full Stack Web Developer, Graphic Designer, and Illustrator</h2>
              <img src="https://skillicons.dev/icons?i=js,html,css,react,tailwind,nodejs,mysql,mongodb" alt="My Skills" className='pt-5 w-96 mx-auto' />
            </div>
            <div>
            <img src={SitePhoto} alt="picture of profile" className="sitePhoto sm:h-[100px] md:h-[150px] lg:h-[500px] mx-auto invisible md:visible md:flex" />
            </div>
        </div>
      </div>
    </section>
  );
}

export default Home;