import "./App.scss";
import Header from "./components/sections/Header/Header";
import Hero from "./components/sections/Hero/Hero";
import Experience from "./components/sections/Experience/Experience";
import Projects from "./components/sections/Projects/Projects";
import Contact from "./components/sections/Contact/Contact";

function App() {
  return (
    <div className="main">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
