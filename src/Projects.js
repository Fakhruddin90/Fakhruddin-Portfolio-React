import React from "react";
import Thumbnail from "./Thumbnail";
import { motion } from "framer-motion";

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="/twitter"
        image="https://www.flaticon.com/svg/static/icons/svg/733/733579.svg"
        title="Twitter Newsfeed"
        category="Mobile App"
      />

      <Thumbnail
        link="/airbnb"
        image="https://www.flaticon.com/svg/static/icons/svg/2111/2111320.svg"
        title="Airbnb Experiences"
        category="Website"
      />

      <Thumbnail
        link="/photoshop"
        image="https://www.flaticon.com/svg/static/icons/svg/888/888872.svg"
        title="Photoshop Redesign"
        category="Desktop App"
      />
      <motion.div
        className="container"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
      />
    </div>
  );
}

export default Projects;
