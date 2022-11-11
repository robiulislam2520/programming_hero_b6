import useTitles from "../../hooks/useTitles";
import Appointment from "./Appointment";
import Banner from "./Banner";
import Contact from "./Contact";
import Experimental from "./Experimental";
import Features from "./Features";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  // page title
  useTitles('Home')
  return (
    <>
      <Banner/>
      <Features/>
      <Services/>
      <Experimental/>
      <Appointment/>
      <Testimonial/>
      <Contact/>
    </>
  );
};

export default Home;
