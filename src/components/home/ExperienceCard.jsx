import React from "react";

import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <div className="d-flex justify-content-center align-items-center">
          <img
            className="bg-white mb-3"
            src={data.companylogo}
            alt=""
            style={{ width: "50px", height: "50px" }}
          />
          <p className="lead mb-0 ms-3">{data.companyname}</p>
        </div>
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>
      </div>
    </Col>
  );
};

export default ExperienceCard;
