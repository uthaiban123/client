import React from "react";
import { services } from "../data/exampleData";


const CardAbout = ({item}) => {
  return (

  <div className="xs:w-[250px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img className="rounded-t-lg" style={{width: '100%', height: '200px'}} src={item.image} alt="" />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more 

      </a>
    </div>
  </div>)
};

const About = () => {
  return (
    <div className="about-head">
      <div className="sectionSubText">INTRODUCTION</div>
      <h2 className="sectionHeadText">Overview.</h2>
      <div className="about-text">
        <p>
          I'm a web developer with a passion for creating beautiful and
          functional websites. I'm a quick learner and I'm always looking to
          expand my skills.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-10">
        {/*Card*/}
        {services.map((item, index) => (
          <CardAbout key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
export default About;
