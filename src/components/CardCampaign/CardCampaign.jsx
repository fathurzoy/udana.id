import React from "react";
import "./CardCampaign.css";

const CardCampaign = ({ title, image, name, link }) => {
  return (
    <div className="col-md-4 ng-scope">
      <div className="list-franchise">
        <div className="header text-center">
          <h3 className="ng-binding">{title}</h3>
        </div>
        <div className="company-thumbnail">
          <img className="img-responsive" src={image} alt="" />
        </div>
        <div className="company-name">
          <div className="col-md-12 text-center ng-binding">{name}</div>
        </div>
        <div className="footer">
          <div>
            <a href={link} className="text-center">
              <h5>LIHAT DETAIL</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCampaign;
