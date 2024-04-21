import inkSwoosh from "../assets/blackink-swoosh.svg";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <h1 className="home__title">Welcome to Ink</h1>
        <img src={inkSwoosh} alt="Ink Swoosh" className="home__image" />
      </div>
    </div>
  );
}

export default Home;