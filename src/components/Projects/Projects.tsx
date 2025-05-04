import "./Projects.scss";
import "../../../node_modules/swiper/swiper.scss";
import "../../../node_modules/swiper/modules/navigation.scss";
import "../../../node_modules/swiper/modules/pagination.scss";
import projects from "../../data/projects";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const Projects = () => {
  const entries = projects.entries;

  return (
    <div className="projects-container">
      <div className="projects">
        <h1>Projects</h1>

        <Swiper
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="projects-carousel"
        >
          {" "}
          {entries.map(({ title, link, image, summary, technologies }, i) => {
            if (title === "N/A") {
              return (
                <SwiperSlide>
                  <div key={i} className="projects-item projects-item-more">
                    And more to come!
                  </div>
                </SwiperSlide>
              );
            } else {
              return (
                <SwiperSlide>
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
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
