import React from "react";
import "./Story.scss";

function Story() {
  return (
    <div className="story">
      {/* <img
        src="https://image.freepik.com/free-vector/flat-design-summer-party-flyer_23-2148526263.jpg"
        alt="story"
      /> */}
      <div className="profile-pic">
        <img
          src="https://img.freepik.com/free-photo/image-magnetic-handsome-helpless-young-man-shrugging-with-shoulders-looking-directly-raising-arms_176532-10250.jpg?size=338&ext=jpg&ga=GA1.2.94874757.1637489236"
          alt="profile pic"
        />
      </div>
      <div className="profile-info">
        <p className="current">Add Story</p>
        <p className="friends">Sam Choi</p>
      </div>
    </div>
  );
}

export default Story;
