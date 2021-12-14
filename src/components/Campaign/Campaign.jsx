import React from "react";
import CardCampaign from "../CardCampaign/CardCampaign";
import "./Campaign.css";

const Campaign = () => {
  return (
    <div className="latest campaign">
      <div className="container">
        <h2 className="title">Siap Memulai Berbisnis?</h2>
        <p className="description">
          Tentukan bisnis waralaba pilihan Anda sekarang
        </p>
        <hr />
        <div className="campaign-content">
          <div className="row" id="franchise">
            <div className="col-md-12">
              <CardCampaign
                title="F&amp;B"
                image="https://asset-udana.oss-ap-southeast-5.aliyuncs.com//franchise/id_7/image/xArtllWioHBXu1q6geaqMOlqSWSt7lr610dPcz2p.png"
                name="Rindu Candu Milk Bar"
                link="https://udana.id/waralaba/rindu-candu-milk-bar"
              />
              <CardCampaign
                title="F&amp;B"
                image="https://asset-udana.oss-ap-southeast-5.aliyuncs.com//franchise/id_5/image/cHen9DXUpfgXI0QfQfQREYhgRXEO9QKTsnoENTYg.png"
                name=" Mr. Big"
                link="https://udana.id/waralaba/mr-big"
              />
              <CardCampaign
                title="F&amp;B"
                image="https://asset-udana.oss-ap-southeast-5.aliyuncs.com//franchise/id_4/image/SMvoPuhppCzqboDgGrYS3EhWtt8cn1yyYslTrvtW.png"
                name="Nasi Balap"
                link="https://udana.id/waralaba/nasi-balap"
              />
              <CardCampaign
                title="F&amp;B"
                image="https://asset-udana.oss-ap-southeast-5.aliyuncs.com//franchise/id_3/image/dtAVXo6WjqhM6fF04Eag5Y2aG4CLs1SKd4Qfip7Y.png"
                name="Nyoklat Teen"
                link="https://udana.id/waralaba/nyoklat-teen"
              />
              <CardCampaign
                title="F&amp;B"
                image="https://asset-udana.oss-ap-southeast-5.aliyuncs.com//franchise/id_2/image/XZfA0u7CokL0WVEH8Qz8MXZbt5JDBiM8nirMjod3.png"
                name="Haba Haus"
                link="https://udana.id/waralaba/haba-haus"
              />
              <CardCampaign
                title="F&amp;B"
                image="https://asset-udana.oss-ap-southeast-5.aliyuncs.com//franchise/id_1/image/Qo8zTo96x4IKUGBJiPTbz8ERnJQVxHmtTkRn7YNU.png"
                name="Hello Sugar "
                link="https://udana.id/waralaba/hello-sugar"
              />
            </div>
          </div>
        </div>
        <div className="latest-button">
          <a href="https://udana.id/waralaba">
            <b>Lihat Semua</b>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
