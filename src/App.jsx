import { useState } from 'react';
import Header from "@cm/header";
import Intro from "@ui/intro";
import Main  from "@ui/main";
import ThirdSection from "@ui/third-section";
import FourthSection from "@ui/fourth-section";
import CaruselSection from "@ui/carusel-section";
import LastSection from './components/UI/last-section';

import Footer from "@cm/footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main>
        <Intro/>
        <Main/>
        <ThirdSection/>
        <FourthSection/>
        <CaruselSection/>
        <LastSection/>
      </main>
      <Footer/>
    </>
  )
}

export default App
