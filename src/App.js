import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navi from "./components/Navi";
import Banner from "./components/Banner";

import Cards from "./components/Cards";
import VideoSlider from "./components/VideoSlider";
import ExploreCards from "./components/ExploreCards";
import ServiceModule from "./components/ServiceModule";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navi />
      <Banner />
      <Cards />
      <VideoSlider />
      <ExploreCards />
      <ServiceModule />
      <Footer />
    </>
  );
}

export default App;
