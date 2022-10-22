import React from "react";
import "./news.css";
import * as FaIcons from "react-icons/fa";

import { useUserContext } from "../../context/context";

const News = () => {
  const {
    user: { linkedinNews },
  } = useUserContext();

  return (
    <div className="news">
      <h1 className="heading">
        LinkedIn News{" "}
        <span>
          <FaIcons.FaInfoCircle />
        </span>
      </h1>

      {linkedinNews.map((item) => (
        <>
          <li className="news_title">{item.title}</li>
          <p className="news_time">
            <small>{item.time}</small>
          </p>{" "}
        </>
      ))}

    <button className="btn_showmore">Show more <FaIcons.FaArrowDown /></button>

    </div>
  );
};

export { News };
