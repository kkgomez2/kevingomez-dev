import { motion } from "motion/react";

const Hero = () => {
  return (
    <motion.div
      initial={{ x: 4, y: 4 }}
      animate={{
        x: 0,
        y: 0,
        boxShadow: "10px 10px #ff0b55",
        transition: {
          delay: 0.2,
          duration: 0.4,
        },
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
        When he’s not doing that, he’s still going outside to play Pokémon GO.
      </p>
    </motion.div>
  );
};

export default Hero;
