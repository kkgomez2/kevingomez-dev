import "./Projects.scss";
import projects from "../../data/projects";

const Projects = () => {
  const entries = projects.entries;

  return (
    <div className="projects-container">
      <div className="projects">
        <h1>Projects</h1>

        <div className="projects-carousel">
          {" "}
          {entries.map(({ title, link, image, summary, technologies }, i) => {
            if (title === "N/A") {
              return (
                <div key={i} className="projects-item-more">
                  And more to come!
                </div>
              );
            } else {
              return (
                <div key={i} className="projects-item">
                  <a
                    href={link}
                    target="_blank"
                    className="projects-item-title"
                  >
                    <img
                      style={{ maxWidth: "500px" }}
                      src={image}
                      alt={title}
                    />
                  </a>
                  <h2>{title}</h2>
                  <p className="projects-item-summary">{summary}</p>
                  <div className="technologies">
                    {technologies.map((tech, j) => {
                      return (
                        <span className="chip" key={j}>
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
