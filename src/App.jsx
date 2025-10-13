import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import { useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  if (loading === true) {
    return (
      <div
        className="flex flex-col justify-center items-center min-h-screen transition duration-300"
        style={{
          backgroundColor: "linear-gradient(to bottom, #12071f, #2f204e);",
        }}
      >
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute -top-2 right-0 w-10 h-10 -mt-2 -ml-2 bg-indigo-500 rounded-full shadow-lg animate-pulse duration-75"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <Portfolio />

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
