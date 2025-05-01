import "./Experience.scss";
import resume from "../data/resume";
import InViewAppear from "./utilities/InViewAppear";
import ExperiencePositionItem from "./utilities/ExperiencePositionItem";

const Experience = () => {
  const entries = resume.entries;
  const education = resume.education;

  return (
    <div className="container-red">
      <div className="experience">
        <InViewAppear color="--white">
          <h1 className="experience-title">Experience</h1>
        </InViewAppear>

        {entries.map(({ company, location, experience }, i) => {
          return (
            <>
              <div className="experience-organization-header" key={i}>
                <InViewAppear color="--white">
                  <div>
                    <span className="experience-info experience-organization">
                      {company}
                    </span>
                  </div>
                </InViewAppear>

                <InViewAppear color="--white">
                  <div className="experience-info">{location}</div>
                </InViewAppear>
              </div>
              <div>
                {experience.map(
                  ({ title, dateRange, summary, points, technologies }, j) => {
                    return (
                      <ExperiencePositionItem
                        key={j}
                        title={title}
                        dateRange={dateRange}
                        summary={summary}
                        points={points}
                        technologies={technologies}
                      />
                    );
                  }
                )}
              </div>
            </>
          );
        })}

        <h2>Education</h2>
        <div className="experience-education-item">
          <div className="experience-organization-header">
            <div className="experience-info experience-organization">
              {education.school}
            </div>

            <div className="experience-info experience-location">{education.location}</div>
          </div>
          <div className="experience-education-item">
            <div className="experience-education-heading">
              <div className="experience-education-list">
                <span className="experience-info experience-position-title">
                  {education.major}
                </span>

                <span className="chip">{education.minor}</span>
              </div>

              <div className="experience-info">{education.dateRange}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
