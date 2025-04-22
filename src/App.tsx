import "./App.scss";
import { animate, createScope } from "animejs";
import { useEffect, useRef } from "react";

function App() {
  const scope = useRef(null);
  const root = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root }).add((scope) => {
      // Every anime.js instances declared here are now scopped to <div ref={root}>

      animate(".sentence span", {
        y: [
          { to: "-1.25rem", ease: "outExpo", duration: 600 },
          { to: 0, ease: "outBounce", duration: 800, delay: 100 },
        ],
        // Property specific parameters
        rotate: {
          from: '-1turn',
          delay: 0
        },
        delay: (_, i) => i * 50, // Function based value
        ease: "inOutCirc",
        loopDelay: 2000,
        loop: true,
      });
    });

    // Properly cleanup all anime.js instances declared inside the scope
    return () => scope.current.revert();
  }, []);

  return (
    <div ref={root}>
      <div className="header">
        <div className="logo">
          <div className="name">Kevin K Gomez</div>
          <div className="sentence">
            is a <span>s</span>
            <span>o</span>
            <span>f</span>
            <span>t</span>
            <span>w</span>
            <span>a</span>
            <span>r</span>
            <span>e</span>
            <span>&nbsp;</span>
            <span>d</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span>o</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
          </div>
        </div>
      </div>
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
