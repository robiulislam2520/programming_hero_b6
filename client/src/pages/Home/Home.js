import useTitles from "../../hooks/useTitles";
import Banner from "./Banner";

const Home = () => {
  // page title
  useTitles('Home')
  return (
    <>
      <Banner/>
    </>
  );
};

export default Home;
