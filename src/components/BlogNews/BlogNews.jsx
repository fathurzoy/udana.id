import React from "react";
import "./BlogNews.css";
import icon_location from "../../assets/icon-location.png";
import icon_message from "../../assets/icon-message.png";
import icon_phone from "../../assets/icon-phone.png";

const BlogNews = () => {
  return (
    <div className="blognews">
      <div className="container">
        <div className="plans">
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-5">
                <div className="section1">
                  <label>
                    Kami siap
                    <br /> membantu Anda
                  </label>
                  <p>
                    Apabila Anda ingin mengetahui lebih lanjut mengenai Udana.
                    Silahkan menghubungi kami
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="section2">
                  <label>
                    <img src={icon_location} alt="" />
                    PT Dana Rintis Indonesia
                  </label>
                  <p>Jl. KH. Hasyim Ashari No.17, Petojo Utara,</p>
                  <p>Kecamatan Gambir, Kota Jakarta Pusat</p>
                  <p>Daerah Khusus Ibukota Jakarta, 10130</p>
                  <label className="label2">
                    <img src={icon_message} alt="" />
                    support@udana.id
                  </label>
                  <label className="label2">
                    <img src={icon_phone} alt="" />
                    087709999430
                  </label>
                </div>
              </div>
              <div className="col-md-2">
                <div className="section3"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
