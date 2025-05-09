import "./App.scss";
import Header from "./components/sections/Header/Header";
import Hero from "./components/sections/Hero/Hero";
import Experience from "./components/sections/Experience/Experience";
import Projects from "./components/sections/Projects/Projects";
import Contact from "./components/sections/Contact/Contact";
import Nav from "./components/sections/Nav/Nav";

function App() {
  return (
    <div className="main">
      <Header />
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
