import WordSpan from "./WordSpan";
import { animate, createScope, Scope } from "animejs";
import { useAnimate } from "motion/react";
import { useEffect, useRef } from "react";

const Header = () => {
  const letterScope = useRef<Scope>(null);
  const [wipeScope, framerAnimate] = useAnimate();
  const root = useRef(null);

  useEffect(() => {
    letterScope.current = createScope({ root }).add(() => {
      animate(".sentence span", {
        y: [
          { to: "-0.8rem", ease: "outExpo", duration: 600 },
          { to: 0, ease: "outBounce", duration: 400, delay: 400 },
        ],
        rotate: {
          from: "-1turn",
          delay: 900,
        },
        delay: (_, i) => i * 50 + 900,
        ease: "inOutCirc",
      });
    });
    return () => {
      letterScope!.current!.revert();
    };
  }, []);

  useEffect(() => {
    const controls = framerAnimate([
      [wipeScope.current, { x: 2000, width: 0 }, { ease: "easeInOut", duration: 0.5 }],
      [wipeScope.current, { display: "none" }],
    ]);
    return () => controls.stop();
  }, []);

  return (
    <header className="header">
      <div className="logo" ref={root}>
        <div className="name">Kevin Gomez</div>
        <div className="sentence">
          is a <WordSpan word={"software"} />
          &nbsp;developer
        </div>
      </div>
      <div ref={wipeScope} className="wipe"></div>
    </header>
  );
};

export default Header;
