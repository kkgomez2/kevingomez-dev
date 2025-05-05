import { motion } from "motion/react";
import InViewAppear from "../../utilities/InViewAppear";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-img-container">
          <motion.div
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img className="hero-img" src="./me.jpg" />
          </motion.div>
        </div>
        <div className="hero-text">
          <div className="hero-greeting">
            <InViewAppear color="--brand-dark">
              <h1>
                <span>Hi, I'm Kevin!</span>
              </h1>
            </InViewAppear>
          </div>
          <motion.div
            initial={{ x: 4, y: 4 }}
            animate={{
              x: 0,
              y: 0,
              boxShadow: "10px 10px var(--brand-highlight)",
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }}
            className="bio-section"
          >
            <p>
              <InViewAppear>
                <span>
                  I'm a <b>full-stack web developer</b> with 7+ years of
                  professional experience creating applications.
                </span>
              </InViewAppear>
            </p>
            <InViewAppear>
              <p>
                I've built applications with{" "}
                <b>React, Node, .NET, AWS, Azure,</b> and a whole lot more. I
                like to solve problems and make things work.
              </p>
            </InViewAppear>
            <InViewAppear>
              <p>
                When I'm not doing that, I'm still going outside to play Pokémon
                GO.
              </p>
            </InViewAppear>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
