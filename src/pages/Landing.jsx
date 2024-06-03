import Home from "../components/Home/Home";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Section from "../components/Section";

const Landing = () => {
  const mediaBrkPnts =
    "mx-4 flex flex-col justify-center items-center contain-content [background:#404040] shadow-[0px_20px_70.9px_15px_rgba(0,0,0,0.25)]";

  const mediaBrkPntsLg = "md:mx-8";

  const sections = [
    {
      id: "home",
      component: <Home />,
      className: `${mediaBrkPnts} ${mediaBrkPntsLg} rounded-tl-3xl rounded-tr-3xl border-b border-slate-200 lg:rounded-tl-[100px] lg:rounded-tr-[100px]`,
    },
    {
      id: "about",
      component: <About />,
      className: `${mediaBrkPnts} ${mediaBrkPntsLg} border-b border-slate-200 `,
    },
    {
      id: "portfolio",
      component: <Portfolio />,
      className: `${mediaBrkPnts} ${mediaBrkPntsLg} border-b border-slate-200 `,
    },
    {
      id: "contact",
      component: <Contact />,
      className: `${mediaBrkPnts} ${mediaBrkPntsLg} rounded-bl-3xl rounded-br-3xl lg:rounded-bl-[100px] lg:rounded-br-[100px]`,
    },
  ];

  return (
    <div className="h-full my-4">
      {sections.map(({ id, component, className }) => (
        <Section key={id} id={id} className={className}>
          {component}
        </Section>
      ))}
      <ScrollToTopButton />
    </div>
  );
};

export default Landing;
