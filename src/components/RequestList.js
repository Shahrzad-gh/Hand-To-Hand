import React from "react";
import "./Dashboard/Dashboard.scss";
import Request from "./Request";

function RequestList() {
  return (
    <div className="requestList">
      <div className="card-header col-md-12">
        <span>
          <b>Requests</b>
        </span>
        <spna className="badge">3</spna>
        {/* <button className="btn right">
          <i className="fas fa-ellipsis-v"></i>
        </button> */}
      </div>
      <div className="card z-depth-0 p-0">
        <Request />
        <Request />
        <Request />
      </div>
    </div>
  );
}

export default RequestList;
