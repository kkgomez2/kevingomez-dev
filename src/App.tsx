import "./App.scss";
import Header from "./components/Header";

function App() {

  return (
    <div>
      <Header />
      <div className="body">
        <div className="bio-section">
          Kevin Gomez is a full-stack web developer with 7+ years of
          professional experience creating applications.
          <br />
          He has experience building applications with React, Node, .NET, AWS,
          Azure, and tons more.
          <br />
          When he’s not doing that, he’s still going outside to play Pokémon GO.
        </div>
      </div>
    </div>
  );
}

export default App;
