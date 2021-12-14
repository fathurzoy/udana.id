import React from "react";
import step1 from "../../assets/step01.png";
import step2 from "../../assets/step02.png";
import step3 from "../../assets/step03.png";
import "./HowItWork.css";

const HowItWork = () => {
  return (
    <div className="how-it-work">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h1 className="title">
              Menjadi Investor <br /> UMKM itu gampang
            </h1>
          </div>
          <div className="col-md-3">
            <div className="description">
              Berinvestasi pada UMKM bisa dilakukan oleh siapa saja dan dimana
              saja.
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item-work">
              <div className="">
                <img src={step1} alt="Box" />
              </div>
              <div className="item-content">
                <div className="one">
                  <h3 className="item-title">Pilih UMKM</h3>
                  <div className="item-desc">
                    <p>Temukan usaha yang anda minati pada galeri.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item-work">
              <div className="">
                <img src={step2} alt="Box" />
              </div>
              <div className="item-content">
                <div className="two">
                  <h3 className="item-title">Analisa Bisnis</h3>
                  <div className="item-desc">
                    <p>Lakukan analisa profil bisnis dan pengusaha.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item-work">
              <div className="">
                <img src={step3} alt="Box" />
              </div>
              <div className="item-content">
                <div className="three">
                  <h3 className="item-title">Mulai Berinvestasi</h3>
                  <div className="item-desc">
                    <p>
                      Menjadi investor startup dengan modal minimal 100.000
                      Rupiah.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
