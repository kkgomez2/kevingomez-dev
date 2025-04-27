import resume from "../data/resume";
import InViewAppear from "./utilities/InViewAppear";

const Experience = () => {
  const entries = resume.entries;

  return (
    <div className="container-red">
      <div className="experience">
        <InViewAppear color="--white">
          <h1>
            <span>Experience</span>
          </h1>
        </InViewAppear>

        {entries.map(({ company, location, experience }, i) => {
          return (
            <>
              <div className="experience-employer-section" key={i}>
                <InViewAppear color="--white">
                  <div>
                    <b>{company}</b>
                  </div>
                </InViewAppear>

                <InViewAppear color="--white">
                  <div>{location}</div>
                </InViewAppear>
              </div>
              <div>
                {experience.map(({ title, dateRange, summary, points }, j) => {
                  return (
                    <div className="experience-position" key={j}>
                      <div className="experience-position-title">
                        <div>
                          <InViewAppear color="--white">
                            <h3>{title}</h3>
                          </InViewAppear>
                        </div>

                        <InViewAppear color="--white">
                          <div>{dateRange}</div>
                        </InViewAppear>
                      </div>
                      <div>
                        {/* {summary} */}
                        {points.map((point, k) => {
                          return (
                            <InViewAppear color="--white">
                              <div key={k}>
                                <span style={{ marginRight: "10px" }}>●</span>
                                {point}
                              </div>
                            </InViewAppear>
                          );
                        })}
                      </div>
                    </div>
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
