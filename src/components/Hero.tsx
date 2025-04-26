import { motion } from "motion/react";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-img-container">
          <img className="hero-img" src="./me 001.jpg" />
        </div>
        <div className="hero-text">
        <div className="hero-greeting">
            <h1>
              <span>Hi, I'm Kevin.</span>
            </h1>
          </div>
          <motion.div
            initial={{ x: 4, y: 4 }}
            animate={{
              x: 0,
              y: 0,
              boxShadow: "10px 10px var(--red-main)",
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }}
            className="bio-section"
          >
            <p>
              I'm a <b>full-stack web developer</b> with 7+ years of
              professional experience creating applications.
            </p>
            <p>
              I have experience building applications with{" "}
              <b>React, Node, .NET, AWS, Azure,</b> and tons more.
            </p>
            <p>
              When I'm not doing that, I'm still going outside to play Pokémon
              GO.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
