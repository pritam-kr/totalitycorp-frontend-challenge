import React from "react";
import "./profile.css";
import * as FaIcons from "react-icons/fa";

import { useUserContext } from "../../context/context";

const Profile = () => {
  const { user } = useUserContext();

  console.log(user);

  return (
    <div className="profile">
      <header>
        <div className="cover">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5616AQHGf29HtI54pA/profile-displaybackgroundimage-shrink_200_800/0/1614017012054?e=1671667200&v=beta&t=txSgG5yAAyk6qu7ZAHctyaWgTq6WFQo4320eK6A1IgU"
            alt="cover"
          />
          <img
            src="https://media-exp1.licdn.com/dms/image/D4D35AQHKpLairIAYxw/profile-framedphoto-shrink_100_100/0/1657293175415?e=1667034000&v=beta&t=4zUtnR6Kj9nlmuENx-tZYiR2TyvWnVAGeIf2q1pxBNw"
            alt=""
            className="rounded profile_img"
          />
        </div>

        <div className="user_info">
          <h2>Pritam Kumar</h2>
          <p>
            Front-end Developer Intern at Ringover • Talks about JavaScript,
            ReactJs, TypeScript
          </p>
        </div>

        <div className="views">
          <p>
            Who's viewed your profile <span className="count">475</span>
          </p>
          <p>
            Impressions of your posts <span className="count">582</span>
          </p>
        </div>

        <div className="insight">
          <p>Accsess exclusive tools and insights</p>
          <a herf="#"> Get Hired faster, Try Premium free. </a>
        </div>

        <div className="myItem">
          <p>
            <FaIcons.FaBookmark /> My Items
          </p>
        </div>
      </header>

      <div className="recent">
        {user.recet.map((item) => {
          return (
            <p>
              {" "}
              <FaIcons.FaPeopleArrows /> {item.title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export { Profile };
