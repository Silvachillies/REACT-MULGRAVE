import "./Homepage.css";
import Navbar from "./Navbar";
import Slider from "./slider";
import AnimatedPage from "./Animated";

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
      <footer></footer>
    </AnimatedPage>
  );
}
export default Homepage;
