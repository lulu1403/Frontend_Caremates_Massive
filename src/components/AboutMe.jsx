import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import { RiImageAddLine } from "react-icons/ri";

function AboutMe() {
  const [activeTab, setActiveTab] = useState("datalembaga");
  const [galleryImages, setGalleryImages] = useState([]);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setGalleryImages((prevImages) => [...prevImages, ...newImages]);
  };

  return (
    <div className="about-col-2">
      <h1 className="sub-title"></h1>
      <div className="tab-titles">
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link
              className={activeTab === "datalembaga" ? "active-link" : ""}
              onClick={() => handleTabChange("datalembaga")}
            >
              Data Lembaga
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={
                activeTab === "datapenanggungjawab" ? "active-link" : ""
              }
              onClick={() => handleTabChange("datapenanggungjawab")}
            >
              Data Penanggung Jawab
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={activeTab === "galeri" ? "active-link" : ""}
              onClick={() => handleTabChange("galeri")}
            >
              Galeri
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div
        className={`tab-contents ${
          activeTab === "datalembaga" ? "active-tab" : ""
        }`}
      >
        <ul>
          <li>
            <span>Nama Lembaga</span>
            <br /> <p>Yayasan Yatim Piatu Roudlotul Jannah</p>
          </li>
          <li>
            <span>Alamat Lembaga</span>
            <br />{" "}
            <p>
              HM4C+26X, Salam, Suko, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa
              Timur 61224
            </p>
          </li>
          <li>
            <span>Alamat Email Resmi Lembaga</span>
            <br /> <p>roudlotuljannah@gmail.com</p>
          </li>
          <li>
            <span>Nomor Telepon Lembaga</span>
            <br /> <p>+62 851 2345 678</p>
          </li>
          <li>
            <span>Website Lembaga</span>
            <br /> <p>www.rodlotuljannah.com</p>
          </li>
          <li>
            <span>Media Sosial Lembaga</span>
            <br /> <p>@panti.roudlotul.jannah</p>
          </li>
          <li>
            <span>Nomor Akta Lembaga</span>
            <br /> <p>123 4567 890</p>
          </li>
          <li>
            <span>Nomor Izin Operasional</span>
            <br /> <p>112 23344 556677</p>
          </li>
        </ul>
      </div>
      <div
        className={`tab-contents ${
          activeTab === "datapenanggungjawab" ? "active-tab" : ""
        }`}
      >
        <ul>
          <li>
            <span>Nama Penanggung Jawab</span>
            <br /> <p>Hartono Sulaiman</p>
          </li>
          <li>
            <span>Jabatan Penanggung Jawab </span>
            <br />
            <p>Kepala bidang keuangan</p>
          </li>
          <li>
            <span>Nomor Telepon PJ</span>
            <br />
            <p>+62 875 4321 0123</p>
          </li>
          <li>
            <span>Alamat Email PJ</span>
            <br />
            <p>Jl. Madukoro Timur, Sidoarjo</p>
          </li>
          <li>
            <span>Nomor Telepon Kontak Darurat</span>
            <br />
            <p>+62 8095 4451 0123</p>
          </li>
          <li>
            <span>Nama Kontak Darurat</span>
            <br />
            <p>Bagus Adi Turiman</p>
          </li>
        </ul>
      </div>
      <div
        className={`tab-contents ${activeTab === "galeri" ? "active-tab" : ""}`}
      >
        <div className="gallery">
          <label htmlFor="imageUpload" className="custom-file-upload">
            <RiImageAddLine style={{ color: "black" }} />
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />
          <div className="gallery-images">
            {galleryImages.map((src, index) => (
              <img key={index} src={src} alt={`Gallery ${index}`} />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .about-col-2 {
          flex-basis: 60%;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
          overflow-y: auto;
        }

        .sub-title {
          font-size: 50px;
          font-weight: 500;
          color: #ababab;
          text-align: center;
        }

        .tab-titles {
          display: flex;
          justify-content: center;
          margin: 20px;
        }

        .tab-titles .nav-link {
          margin-right: 20px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          position: relative;
          color: #ffffff;
        }

        .tab-titles .nav-link::after {
          content: ' ';
          width: 0;
          height: 3px;
          background: #ffffff;
          position: absolute;
          left: 0;
          bottom: -8px;
          transition: 0.5s;
        }

        .tab-titles .nav-link.active-link::after {
          width: 100%;
        }

        .tab-contents ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-height: 400px;
          overflow-y: auto;
          padding-right: 10px;
        }

        .tab-contents ul li {
          list-style: none;
          margin: 5px 0; /* Reduced margin */
          width: calc(50% - 10px);
        }

        .tab-contents ul li p {
          background-color: #ffffff;
          padding: 8px;
          border-radius: 25px;
          font-size: 13px;
          margin: 0; /* Removed margin */
        }

        .tab-contents ul li span {
          color: #ffffff;
          font-size: 14px;
        }

        .tab-contents {
          display: none;
          overflow-y: auto;
          max-width: 100%;
        }

        .tab-contents.active-tab {
          display: block;
        }

        .gallery input[type="file"] {
          display: none;
        }

        .custom-file-upload {
          display: inline-block;
          padding: 10px 20px;
          cursor: pointer;
          background-color: #fff;
          color: #ffffff;
          border-radius: 5px;
          margin-bottom: 20px;
          text-align: center;
        }

        .gallery-images {
          display: flex;
          flex-wrap: wrap;
          gap: 40px; /* Reduced gap */
          justify-content: center;
        }

        .gallery-images img {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 10px;
        }

        @media (max-width: 768px) {
          .tab-titles .nav-link {
            font-size: 14px;
          }

          .tab-contents ul li {
            width: 100%;
          }

          .gallery-images img {
            width: 100px;
            height: 100px;
          }

          .tab-contents ul {
            flex-direction: column;
            align-items: center;
          }

          .tab-contents ul li p {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .sub-title {
            font-size: 36px;
          }

          .tab-titles {
            flex-direction: column;
            align-items: center;
          }

          .tab-titles .nav-link {
            margin: 5px 0;
          }

          .tab-contents ul li {
            width: 100%;
          }

          .gallery-images img {
            width: 80px;
            height: 80px;
          }
        }

        ::-webkit-scrollbar {
          width: 0; /* Remove scrollbar space */
          background: transparent; /* Optional: just make scrollbar invisible */
        }
      `}</style>
    </div>
  );
}

export default AboutMe;
