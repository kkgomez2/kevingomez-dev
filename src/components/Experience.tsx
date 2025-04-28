import "./Experience.scss";
import resume from "../data/resume";
import InViewAppear from "./utilities/InViewAppear";
import ExperiencePositionItem from "./utilities/ExperiencePositionItem";

const Experience = () => {
  const entries = resume.entries;

  return (
    <div className="container-red">
      <div className="experience">
        <InViewAppear color="--white">
          <h1 className="experience-title">
            Experience
          </h1>
        </InViewAppear>

        {entries.map(({ company, location, experience }, i) => {
          return (
            <>
              <div className="experience-employer-section" key={i}>
                <InViewAppear color="--white">
                  <div>
                    <span className="experience-info experience-company">{company}</span>
                  </div>
                </InViewAppear>

                <InViewAppear color="--white">
                  <div className="experience-info">{location}</div>
                </InViewAppear>
              </div>
              <div>
                {experience.map(({ title, dateRange, points }, j) => {
                  return (
                    <ExperiencePositionItem
                      key={j}
                      title={title}
                      dateRange={dateRange}
                      points={points}
                    />
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
