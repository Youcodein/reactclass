import React from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Image from "./components/section/Image";
import ImgText from "./components/section/ImgText";
import Card from "./components/section/Card";
import Banner from "./components/section/Banner";
import Text from "./components/section/Text";
import Slider from "./components/section/Slider";

function App() {
  return (
    <>
      <Header fonts="nexon" />
      <Main>
        <Slider />
        <Image attr={["section", "nexon", "container"]} />
        <ImgText attr={["nexon", "section", "gray", "container"]} />
        <Card attr={["section", "nexon", "container"]} />
        <Banner attr={["nexon"]} />
        <Text attr={["section", "nexon", "container"]} />
      </Main>
      <Footer attr={["section", "nexon", "gray"]} />
    </>
  );
}

export default App;
