import { Key, useState } from "react";
import { motion } from "motion/react";
import InViewAppear from "./InViewAppear";

type Props = {
  key: Key;
  title: String;
  dateRange: String;
  simplePoints: Array<String>;
  technologies: Array<String>;
};

const ExperiencePositionItem = ({
  key,
  title,
  dateRange,
  simplePoints,
  technologies,
}: Props) => {
  // const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="experience-position-item" key={key}>
      <div className="experience-position-heading">
        <div>
          <InViewAppear color="--white">
            <div
              className="experience-info experience-position-title"
            >
              {title}
            </div>
          </InViewAppear>
        </div>

        <InViewAppear color="--white">
          <div className="experience-info">{dateRange}</div>
        </InViewAppear>
      </div>
      <div>
        <div className="experience-main-text">
          {/* {!showDetail && ( */}
            <>
              {simplePoints.map((point, i) => {
                return (
                  <InViewAppear color="--brand-dark">
                    <div className="experience-point" key={i}>
                      <span style={{ marginRight: "10px" }}>●</span>
                      {point}
                    </div>
                  </InViewAppear>
                );
              })}
            </>
          {/* )} */}

          {/* {showDetail && (
            <motion.div
              initial={{ x: 4, y: 4 }}
              className="experience-detail-section"
              animate={{
                x: 0,
                y: 0,
                background: "var(--sub-main)",
                color: "var(--brand-dark)",
                padding: 30,
                boxShadow: "10px 10px var(--brand-dark)",
                transition: {
                  delay: 0.2,
                  duration: 0.4,
                },
              }}
            >
              {points.map((point, i) => {
                return (
                  <InViewAppear color="--brand-dark">
                    <div className="experience-point" key={i}>
                      <span style={{ marginRight: "10px" }}>●</span>
                      {point}
                    </div>
                  </InViewAppear>
                );
              })}
            </motion.div>
          )} */}
        </div>

        <InViewAppear color="--brand-highlight">
          <div className="technologies">
            {technologies.map((tech, j) => {
              return (
                <span className="chip" key={j}>
                  {tech}
                </span>
              );
            })}
          </div>
        </InViewAppear>
      </div>
    </div>
  );
};

export default ExperiencePositionItem;
