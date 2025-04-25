import "./App.scss";
import Header from "./components/Header";
import { motion } from "motion/react";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="body">
        <motion.div
          initial={{ x: 4, y: 4, boxShadow: "0px 0px #ff0b55" }}
          animate={{
            x: 0,
            y: 0,
            boxShadow: "10px 10px #ff0b55",
            transition: { duration: 0.4 },
          }}
          className="bio-section"
        >
          <p>
            Kevin Gomez is a <b>full-stack web developer</b> with 7+ years of
            professional experience creating applications.
          </p>
          <p>
            He has experience building applications with{" "}
            <b>React, Node, .NET, AWS, Azure,</b> and tons more.
          </p>
          <p>
            When he’s not doing that, he’s still going outside to play Pokémon
            GO.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
