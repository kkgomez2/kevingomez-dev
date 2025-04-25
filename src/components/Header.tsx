import WordSpan from "./WordSpan";
import { animate, createScope, Scope } from "animejs";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef } from "react";

const Header = () => {
  const scope = useRef<Scope>(null);
  const root = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      // Every anime.js instances declared here are now scopped to <div ref={root}>

      animate(".sentence span", {
        y: [
          { to: "-0.8rem", ease: "outExpo", duration: 600 },
          { to: 0, ease: "outBounce", duration: 800, delay: 600 },
        ],
        // Property specific parameters
        rotate: {
          from: "-1turn",
          delay: 500,
        },
        delay: (_, i) => i * 50 + 500, // Function based value
        ease: "inOutCirc",
      });
    });

    // Properly cleanup all anime.js instances declared inside the scope
    return () => {
      scope!.current!.revert();
    };
  }, []);

  return (
    <header className="header" ref={root}>
      <div className="logo">
        <div className="name">Kevin Gomez</div>
        <div className="sentence">
          is a <WordSpan word={"software"} />
          &nbsp;developer
        </div>
      </div>
      <AnimatePresence>
        <motion.div
          className="wipe"
          animate={{
            x: 2000
          }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        ></motion.div>
      </AnimatePresence>
    </header>
  );
};

export default Header;
