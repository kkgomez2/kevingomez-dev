import { Key, useState } from "react";
import { motion } from "motion/react";
import InViewAppear from "./InViewAppear";

type Props = {
  key: Key;
  title: String;
  dateRange: String;
  summary: String;
  points: Array<String>;
  technologies: Array<String>;
};

const ExperiencePositionItem = ({
  key,
  title,
  dateRange,
  summary,
  points,
  technologies,
}: Props) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="experience-position-item" key={key}>
      <div className="experience-position-heading">
        <div>
          <InViewAppear color="--white">
            <div
              className="experience-info experience-position-title"
              onClick={() => setShowDetail(!showDetail)}
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
          {!showDetail && (
            <InViewAppear color="--white">
              <>{summary}</>
            </InViewAppear>
          )}

          {showDetail && (
            <motion.div
            initial={{ x: 4, y: 4 }}
            className="experience-detail-section"
            animate={{
              x: 0,
              y: 0,
              background: "var(--beige-main)",
              color: "var(--red-dark)",
              padding: 30,
              boxShadow: "10px 10px var(--red-dark)",
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }}>
              {points.map((point, i) => {
                return (
                  <InViewAppear color="--red-dark">
                    <div className="experience-point" key={i}>
                      <span style={{ marginRight: "10px" }}>●</span>
                      {point}
                    </div>
                  </InViewAppear>
                );
              })}
            </motion.div>
          )}
        </div>

        <InViewAppear color="--red-highlight">
          <div className="experience-technologies">
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
