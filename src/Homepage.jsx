import "./Homepage.css";
import Navbar from "./Navbar";
import Slider from "./slider";
import AnimatedPage from "./Animated";
import Footer from "./Footer";

function Homepage() {
  return (
    <AnimatedPage>
      <Navbar />
      <div className="wrapper">
        <h3 className="title">
          Welcome to Mulgrave, we are a specialist luxury watch dealer based in
          London.
        </h3>
        <img src="./src/assets/datejust.jpg" height={"200"} />
        <img src="./src/assets/daytona.jpg" height={"200"} />
        <img src="./src/assets/patek.jpg" height={"200"} />
        <img src="./src/assets/rolex.jpg" height={"200"} />
      </div>
      <p>
        Established in 2021, we have become one of the most recognisable grey
        market watch dealer in London
      </p>
      <Footer />
    </AnimatedPage>
  );
}
export default Homepage;
