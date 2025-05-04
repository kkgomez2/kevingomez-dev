import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

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
