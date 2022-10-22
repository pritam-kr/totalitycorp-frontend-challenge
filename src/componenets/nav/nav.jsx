import React from "react";
import "./nav.css";
import * as FaIcons from "react-icons/fa";

const Nav = () => {
  return (
    <nav>
      <div className="wrapper nav_wrapper">
        <div className="nav_left_side">
          <FaIcons.FaLinkedin className="icons linkedin_icon" />
          <input
            type="text"
            className="input search_bar"
            placeholder="Search"
          />
        </div>
        <div className="nav_right_side">

            <div className="nav_links">
                <FaIcons.FaHome className="icons nav_icons"/>
                <p className="nav_link_title"><small>Home</small></p>
            </div>

            <div className="nav_links">
                <FaIcons.FaPeopleArrows className="icons nav_icons"/>
                <p className="nav_link_title"><small>My Network</small></p>
            </div>

            <div className="nav_links job">
                <FaIcons.FaBox className="icons nav_icons"/>
                <p className="nav_link_title"><small>Job</small></p>
            </div>

            <div className="nav_links">
                <FaIcons.FaFacebookMessenger className="icons nav_icons"/>
                <p className="nav_link_title"><small>Message</small></p>
            </div>

            <div className="nav_links notification">
                <FaIcons.FaBell className="icons nav_icons"/>
                <p className="nav_link_title"><small>Notification</small></p>
                <p className="notification_count">8</p>
            </div>

            <div className="nav_links">
                <FaIcons.FaUser className="icons nav_icons"/>
                <p className="nav_link_title"><small>Me</small></p>
            </div>

            <div className="nav_links work">
                <FaIcons.FaSquare className="icons nav_icons"/>
                <p className="nav_link_title"><small>Work</small></p>
            </div>

            <div className="nav_links post_a_job">
                <FaIcons.FaCalendar className="icons nav_icons"/>
                <p className="nav_link_title"><small>Post a Job</small></p>
            </div>

        </div>
      </div>
    </nav>
  );
};

export default Nav;
