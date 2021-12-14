import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid">
      <footer id="footer" className="site-footer fixed ng-scope">
        <div className="footer-menu">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="newsletter-description">
                  <label>
                    PT DANA RINTIS INDONESIA merupakan perusahaan berbadan hukum
                    yang didirikan berdasarkan Hukum Republik Indonesia. Berdiri
                    sebagai perusahaan yang masih dalam proses pendaftaran oleh
                    Otoritas Jasa Keuangan (OJK) di Indonesia. Perusahaan
                    menyediakan layanan antar muka (interface) sebagai
                    penghubung pihak yang memberikan pendanaan dan pihak yang
                    membutuhkan pendanaan meliputi pendanaan dari individu,
                    organisasi, maupun badan hukum kepada individu atau badan
                    hukum tertentu. Perusahaan tidak menyediakan segala bentuk
                    saran atau rekomendasi pendanaan terkait pilihan-pilihan
                    dalam situs ini. Isi dan materi yang tersedia pada situs
                    Udana.id dimaksudkan untuk memberikan informasi dan tidak
                    dianggap sebagai sebuah penawaran, permohonan, undangan,
                    saran, maupun rekomendasi untuk pendanaan sekuritas, produk
                    pasar modal, atau jasa keuangan lainya. Perusahaan dalam
                    memberikan jasanya hanya terbatas pada fungsi administratif.
                    Perusahaan tidak memberikan saran, memberi kewajiban atau
                    kewajiban lainya untuk jasanya.
                  </label>
                </p>
                <p>
                  Udana adalah platform urun dana bisnis yang hadir untuk
                  membuka akses pendanaan dan investasi bagi semua kalangan
                  berbasis teknologi informasi (equity crowdfunding) dimana
                  pebisnis menawarkan saham bisnis kepada calon investor baik
                  itu individu maupun organisasi:
                </p>
                <p>
                  Penggunaan Udana diatur sesuai dengan Peraturan Otoritas Jasa
                  Keuangan No. 37 Tahun 2018 Pasal 23 tentang Layanan Urun Dana
                  melalui Penawaran Saham Berbasis Teknologi Informasi atau
                  Equity Crowdfunding (“POJK 37/2018”).
                </p>
                <p>Dengan digunakannya layanan ini, kami menyatakan bahwa :</p>
                <ol type="a">
                  <li>
                    “OTORITAS JASA KEUANGAN TIDAK MEMBERIKANPERNYATAAN
                    MENYETUJUI ATAU TIDAK MENYETUJUI EFEK INI, TIDAK JUGA
                    MENYATAKAN KEBENARAN ATAU KECUKUPAN INFORMASI DALAM LAYANAN
                    URUN DANA INI. SETIAP PERNYATAAN YANG BERTENTANGAN DENGAN
                    HAL TERSEBUT ADALAH PERBUATAN MELANGGAR HUKUM.”
                  </li>
                  <br />
                  <li>
                    “INFORMASI DALAM LAYANAN URUN DANA INI PENTING DAN PERLU
                    MENDAPAT PERHATIAN SEGERA. APABILA TERDAPAT KERAGUAN PADA
                    TINDAKAN YANG AKAN DIAMBIL, SEBAIKNYA BERKONSULTASI DENGAN
                    PENYELENGGARA.”; dan
                  </li>
                  <br />
                  <li>
                    “PENERBIT DAN PENYELENGGARA, BAIK SENDIRI-SENDIRI MAUPUN
                    BERSAMA-SAMA, BERTANGGUNG JAWAB SEPENUHNYA ATAS KEBENARAN
                    SEMUA INFORMASI YANG TERCANTUM DALAM LAYANAN URUN DANA
                    INI.”.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-footer">
          <div className="container">
            <span className="copyright">
              Copyright Udana.id © 2020 by All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
