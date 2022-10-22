import React from "react";
import "./userPost.css";
import { useUserContext } from "../../context/context";
import * as FaIcons from "react-icons/fa";

const UserPost = () => {
  const {
    user: { posts },
  } = useUserContext();

 

  return (
    <div className="user_post">
      {posts.map((user) => {
        return (
          <div className="each_post">
            <header>
              <img src={user.avatar} alt="" className="rounded" />{" "}
              <div>
                <h3>{user.name}</h3>
                <p>{user.bio}</p>
              </div>
            </header>

            <div className="description">{user.description}</div>

            <div className="post_img">
              <img src={user.image} alt="" />
            </div>

            <p className="post_likes">
              <span className="like">
                <FaIcons.FaHeart /> Kumar survesh and 40 others
              </span>

              <span>40 comments</span>
            </p>

            <div className="horizontal_line"></div>

            <div className="comment_lile">
              <img
                src="https://media-exp1.licdn.com/dms/image/D4D35AQHKpLairIAYxw/profile-framedphoto-shrink_100_100/0/1657293175415?e=1667044800&v=beta&t=NR6--3emC1icImYLM8E4Iib8m8sqhV0Ydcw6MVpmnec"
                className="rounded"
                alt=""
              />

              <span>
                {" "}
                <FaIcons.FaThumbsUp /> Like
              </span>

              <span>
                {" "}
                <FaIcons.FaComment /> Comment
              </span>

              <span>
                {" "}
                <FaIcons.FaRetweet /> Repost
              </span>

              <span>
                {" "}
                <FaIcons.FaPaperPlane /> Send
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { UserPost };
