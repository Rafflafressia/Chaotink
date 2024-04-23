import inkSwoosh from "../assets/blackink-swoosh.svg";
import homeLogo from "../assets/portfolio-logo-header-white.svg";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img src={homeLogo} alt="Code Ink Logo" className="home__logo" />
      </div>
    </div>
  );
}

export default Home;