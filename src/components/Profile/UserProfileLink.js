import React from "react";
import TabList from "../TabList";
import Info from "../Profile/Info";
import PostsList from "../Posts/PostsList";

export default function MyProfileLinks() {
  return (
    <div>
      <div className="container m-2">
        <strong>Name</strong>
        <p>
          username
          <i className="far fa-star ml-2"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </p>
      </div>
      <div className="tabContent container-md m-0 profile-link link-content up">
        <TabList>
          <div label="Info" className="tab-content">
            <Info />
          </div>
          <div label="Posts" className="tab-content">
            <PostsList />
          </div>
        </TabList>
      </div>
      {/* <i className="fas fa-heart"></i>Likes
      <i className="fas fa-info-circle"></i>Info
      <i className="fas fa-quote-right"></i>Mentions */}
    </div>
  );
}
