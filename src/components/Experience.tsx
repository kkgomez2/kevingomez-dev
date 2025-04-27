import resume from "../data/resume";

const Experience = () => {
  const entries = resume.entries;

  return (
    <div className="container-red">
      <div className="experience">
        <h1><span>Experience</span></h1>

        {entries.map(({ company, location, experience }, i) => {
          return (
            <>
              <div key={i}>
                <h2>
                  {company} - {location}
                </h2>
              </div>
              <div>
                {experience.map(({ title, dateRange, summary, points }, j) => {
                  return (
                    <>
                      <div key={j}>
                        <div>
                          <h3>{title}</h3>
                        </div>
                        <div>{dateRange}</div>
                      </div>
                      <div>
                        {summary}
                        {/* {points.map((point, k) => {
                          return <div key={k}>- {point}</div>;
                        })} */}
                      </div>
                    </>
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
