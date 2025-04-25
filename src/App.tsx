import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="body">
        <Hero />
      </div>
    </div>
  );
}

export default App;
