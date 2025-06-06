import "./Experience.scss";
import resume from "../../../data/resume";
import InViewAppear from "../../utilities/InViewAppear";
import ExperiencePositionItem from "../../utilities/ExperiencePositionItem";

const Experience = () => {
  const entries = resume.entries;
  const education = resume.education;

  return (
    <div className="experience-container section-container segment" id="experience">
      <section className="experience section">
        <InViewAppear color="--white">
          <h1 className="section-title">Experience</h1>
        </InViewAppear>

        <div className="experience-work-section">
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
                    (
                      { title, dateRange, simplePoints, technologies },
                      j
                    ) => {
                      return (
                        <ExperiencePositionItem
                          key={j}
                          title={title}
                          dateRange={dateRange}
                          simplePoints={simplePoints}
                          technologies={technologies}
                        />
                      );
                    }
                  )}
                </div>
              </>
            );
          })}
        </div>

        <div className="experience-eduction-section">
          <InViewAppear color="--white">
            <h2>Education</h2>
          </InViewAppear>
          <div className="experience-education-item">
            <div className="experience-organization-header">
              <InViewAppear color="--white">
                <div className="experience-info experience-organization">
                  {education.school}
                </div>
              </InViewAppear>

              <InViewAppear color="--white">
                <div className="experience-info experience-location">
                  {education.location}
                </div>
              </InViewAppear>
            </div>
            <div className="experience-education-item">
              <div className="experience-education-heading">
                <div className="experience-education-list">
                  <InViewAppear color="--white">
                    <span className="experience-info experience-position-title">
                      {education.major}
                    </span>
                  </InViewAppear>

                  <InViewAppear>
                    <span className="chip">{education.minor}</span>
                  </InViewAppear>
                </div>

                <InViewAppear color="--white">
                  <div className="experience-info">{education.dateRange}</div>
                </InViewAppear>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
