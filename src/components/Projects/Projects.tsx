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
    <div className="section-container projects-container">
      <div className="section projects">
        <div className="projects-heading">
          <h1>Personal Projects</h1>
        </div>

        <Swiper
          navigation={true}
          pagination={{
            clickable: true,
          }}
          scrollbar={{ draggable: true }}
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
                    <div className="projects-image-container">
                      <div className="projects-image-element">
                        <a
                          href={link}
                          target="_blank"
                          className="projects-item-title"
                        >
                          <img
                            src={image}
                            alt={title}
                            className="projects-image"
                          />
                        </a>
                      </div>
                    </div>
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
