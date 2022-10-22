import React from "react";
import "./post.css";
import * as FaIcons from "react-icons/fa";

const Post = () => {
    return (
        <div className="post_wrapper">
            <div className="post_wrapper_top">
                <img 
                    src="https://media-exp1.licdn.com/dms/image/D4D35AQHKpLairIAYxw/profile-framedphoto-shrink_100_100/0/1657293175415?e=1667019600&v=beta&t=Mmcg6fGxyjbS5tNlpnprBSBWCHd0b5vQxZN_fWW6i7c"
                    className="post_avatar rounded"
                    alt="avatar"
                />{" "}
                <input className="input post_input" placeholder="start a post" />
            </div>

            <div className="post_wrapper_bottom">
                <div>
                    <FaIcons.FaPhotoVideo className="icons photo_icon"/> <p>Photo</p>
                </div>

                <div>
                    <FaIcons.FaVideo className="icons video_icon"/> <p>Video</p>
                </div>

                <div>
                    <FaIcons.FaBox className="icons job_icon"/> <p>Job</p>
                </div>

                <div>
                    <FaIcons.FaBook className="icons article_icon"/> <p>Write article</p>
                </div>
            </div>
        </div>
    );
};

export { Post };
