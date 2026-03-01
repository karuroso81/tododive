

import { Hero } from "./components/Hero";
import { CoursesGrid } from "./components/CoursesGrid";
import { Destinations } from "./components/Destinations";
import { Gallery } from "./components/Gallery";
import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { CartDrawer } from "./components/CartDrawer";
import { CartButton } from "./components/CartButton";
import { Header } from "./components/Header";
import { IconPreview } from "./components/IconPreview";


function App() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-[#0b1020] text-[#e9f1ff] pt-16">
        <div className="max-w-6xl mx-auto p-6">
          <Hero />
          <CoursesGrid />
          <Destinations />
          <Gallery />
          <About />
          <FAQ />
          <Contact />
          <IconPreview />


          <CartDrawer />
          <CartButton />
        </div>
      </div>
    </>
  );
}


export default App;




