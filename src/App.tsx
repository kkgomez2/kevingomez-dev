import "./App.scss";
import Header from "./components/sections/Header/Header";
import Hero from "./components/sections/Hero/Hero";
import Experience from "./components/sections/Experience/Experience";
import Projects from "./components/sections/Projects/Projects";

function App() {
  return (
    <div className="main">
      <Header />
      <Hero />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
