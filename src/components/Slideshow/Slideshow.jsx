import React from "react";
import { Link } from "react-router-dom";
import "./Slideshow.css";

const Slideshow = () => {
  return (
    <>
      <div className="sideshow">
        <div className="sideshow-content">
          <div className="container-fluid">
            <h1 className="wow fadeInUp" data-wow-delay=".1s">
              Jadilah Investor UMKM &amp; Waralaba
            </h1>
            <div
              className="sideshow-description wow fadeInUp"
              data-wow-delay=".1s"
            >
              Temukan bisnis UMKM &amp; Waralaba yang anda sukai dan mulai
              menjadi investor untuk kemajuan perekonomian bangsa tanpa perlu
              pusing dengan operasional seshari-hari
            </div>
            <div
              className="button wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <a
                href="https://udana.id/register"
                className="btn btn-primary-udana"
              >
                Investasi Sekarang &nbsp; ⟶
              </a>
              <Link to={"/table"}>
                <div className="btn btn-primary-table">Table &nbsp; ⟶</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slideshow;
