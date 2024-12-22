import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../data/exampleData";

import React from "react";

const ExCard = ({item}) => <VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
date={item.date}
iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
>
<h3 className="vertical-timeline-element-title">{item.title}</h3>
  <ul>
    {item.points.map((point, index) => (
      <li key={index}>{point}</li>
    ))}
  </ul>
  <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain" />
</VerticalTimelineElement>



function Experience() {
  return (
    <div>
      <VerticalTimeline>
        {experiences.map((item, index) => (
          <ExCard key={index} item={item} />
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
