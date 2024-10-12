import About from "../../components/About";
import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Projects from "../../components/Projects";
import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
