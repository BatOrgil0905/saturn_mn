import Header from "./components/Header";
import SectionOne from "./components/sections/SectionOne";
import Astronaut from "./components/Astronaut";
import SectionTwo from "./components/sections/SectionTwo";
import SectionThree from "./components/sections/SectionThree";
import Banner from "./components/Banner";
import SectionFour from "./components/sections/SectionFour";
import SectionFive from "./components/sections/SectionFive";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <Header />
      <SectionOne/>
      <Astronaut />
      <SectionTwo/>
      <SectionThree />
      <Banner />
      <SectionFour />
      <SectionFive />
      <Footer/>
    </>
  );
}

export default App;
