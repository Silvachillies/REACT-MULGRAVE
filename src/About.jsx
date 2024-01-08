import Navbar from "./Navbar";
import AnimatedPage from "./Animated";
import "./About.css";

export default function About() {
  return (
    <AnimatedPage>
      <Navbar />
      <h1>WHO ARE MULGRAVE?</h1>
      <div className="aboutDisplay">
        <p className="aboutPara">
          Established in 2021, we are an independent watch dealer located in
          London. We specialise in dealing with Rolex, Audmars Piguet, Patek
          Phillipe, Cartier and Richard Mille timepieces.
        </p>
        <p>
          We offer a sourcing service too, so if you cant find the watch you're
          after in our stock, let us know and well use our global network to
          locate your dream watch.
        </p>

        <img src="./src/assets/oyster.jpg" height={400} />
        <img src="./src/assets/patek.jpg" height={300} />
      </div>
    </AnimatedPage>
  );
}
