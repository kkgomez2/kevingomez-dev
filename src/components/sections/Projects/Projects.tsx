import "./Projects.scss";
import "../../../../node_modules/swiper/swiper.scss";
import "../../../../node_modules/swiper/modules/navigation.scss";
import "../../../../node_modules/swiper/modules/pagination.scss";
import projects from "../../../data/projects";
import InViewAppear from "../../utilities/InViewAppear";
import MotionBoxShadow from "../../utilities/MotionBoxShadow";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const Projects = () => {
  const entries = projects.entries;

  return (
    <div className="section-container projects-container">
      <div className="section projects">
        <div className="projects-heading">
          <InViewAppear color="--brand-dark">
            <h1 className="section-title">Personal Projects</h1>
          </InViewAppear>
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
                  <MotionBoxShadow
                    key={i}
                    className="projects-item projects-item-more"
                  >
                    <>
                      And there's <b>more</b> cooking!
                    </>
                  </MotionBoxShadow>
                </SwiperSlide>
              );
            } else {
              return (
                <SwiperSlide>
                  <MotionBoxShadow key={i} className="projects-item">
                    <>
                      <div className="projects-image-container">
                        <div className="projects-image-element">
                          <a
                            href={link}
                            target="_blank"
                            className="projects-item-title"
                          >
                            <InViewAppear>
                              <img
                                src={image}
                                alt={title}
                                className="projects-image"
                              />
                            </InViewAppear>
                          </a>
                        </div>
                      </div>
                      <h2>
                        <InViewAppear color="--brand-dark">
                          <>{title}</>
                        </InViewAppear>
                      </h2>
                      <p className="projects-item-summary">
                        <InViewAppear color="--brand-dark">
                          <>{summary}</>
                        </InViewAppear>
                      </p>

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
                    </>
                  </MotionBoxShadow>
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
