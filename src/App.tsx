import "./App.scss";
import Header from "./components/Header";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="body">
        <div className="bio-section">
          <div>
            Kevin Gomez is a <b>full-stack web developer</b> with 7+ years of
            professional experience creating applications.
          </div>
          <div>
            He has experience building applications with <b>React, Node, .NET, AWS,
            Azure,</b> and tons more.
          </div>
          <div>
            When he’s not doing that, he’s still going outside to play Pokémon
            GO.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
