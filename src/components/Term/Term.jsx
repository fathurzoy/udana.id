import React from "react";
import "./Term.css";
import logo_instagram from "../../assets/instagram.png";
import logo_linkedin from "../../assets/linkedin.png";
import logo_kominfo from "../../assets/kominfo.png";
import logo_kan from "../../assets/kan.png";
import logo_pse from "../../assets/pse.png";
import logo_aludi from "../../assets/aludi.png";
import logo_udana from "../../assets/udana.png";

const Term = () => {
  return (
    <div className="terms ng-scope">
      <div className="container responsive">
        <div className="col-md-4">
          <div className="col-md-6 section1">
            <img src={logo_udana} alt="" />
            <label>PT. Dana Rintis Indonesia</label>
          </div>
          <div className="col-md-6 section1">
            <p>
              Jl. KH. Hasyim Ashari No.17, Petojo Utara, Kecamatan Gambir, Kota
              Jakarta Pusat, Daerah Khusus Ibukota Jakarta, 10130
            </p>
            <p>
              E: <b>support@udana.id</b>
            </p>
            <p>
              W: <b>087709999430</b>
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-6 section2">
            <b>Perusahaan</b>
            <div className="vertical-menu">
              <a href="https://udana.id/about">Tentang</a>{" "}
              <a href="/">Hubungi Kami</a>
              <a href="https://udana.id/tnc">Syarat &amp; Ketentuan</a>
              <a href="https://udana.id/privacy">Kebijakan Privasi</a>
            </div>
          </div>
          <div className="col-md-6 section2">
            <b>Investor</b>
            <div className="vertical-menu">
              <a href="https://udana.id/faq">FAQ</a>{" "}
              <a href="#*">Resiko Investasi</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-6 section2">
            <b>Social Media</b>
            <div className="">
              <a
                href="https://www.instagram.com/udanainaja/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={logo_instagram}
                  style={{ width: "25px", height: "25px" }}
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/company/udana-id/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={logo_linkedin}
                  style={{ width: "25px", height: "25px" }}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-md-6 section2">
            <b>Didukung oleh</b>
            <div className="logo-supported">
              <a
                href="https://pse.kominfo.go.id/tdpse-detail/1425"
                target="_blank"
                rel="noreferrer"
              >
                <img src={logo_kominfo} alt="" />
              </a>
              <a
                href="https://pse.kominfo.go.id/tdpse-detail/1677"
                target="_blank"
                rel="noreferrer"
              >
                <img src={logo_pse} alt="" />
              </a>
              <a href="https://aludi.id" target="_blank" rel="noreferrer">
                <img src={logo_aludi} style={{ width: "200px" }} alt="" />
              </a>
            </div>
            <a
              href="https://www.cbqaglobal.com/validation/company/pt-dana-rintis-indonesia/?cred_referrer_form_id=58"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logo_kan} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Term;
