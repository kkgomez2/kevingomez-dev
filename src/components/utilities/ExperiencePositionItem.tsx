import { Key } from "react";
import InViewAppear from "./InViewAppear";

type Props = {
  key: Key,
  title: String,
  dateRange: String,
  points: Array<String>
}

const ExperiencePositionItem = ({key, title, dateRange, points}: Props) => {
  return (
    <div className="experience-position" key={key}>
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
  )
}

export default ExperiencePositionItem