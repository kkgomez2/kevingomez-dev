import "./App.scss";
import Header from "./components/Header";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="body">
        <div className="bio-section">
          <p>
            Kevin Gomez is a <b>full-stack web developer</b> with 7+ years of
            professional experience creating applications.
          </p>
          <p>
            He has experience building applications with <b>React, Node, .NET, AWS,
            Azure,</b> and tons more.
          </p>
          <p>
            When he’s not doing that, he’s still going outside to play Pokémon
            GO.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
