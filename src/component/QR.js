import React from "react";
import styles from "./styles.module.css";

const Qr = () => {
  return (
    <div className={`${styles.parent_QR}`}>
      <div className={`${styles.qr_component}`}>
        <div className={`${styles.qr_image_container}`}>
          <img src="assets/images/image-qr-code.png" alt="qr" />
        </div>
        <h1 className={`${styles.qr_title}`}>
          Improve your front-end skills by building projects
        </h1>
        <p className={`${styles.qr_desc}`}>
          scan the QR code to visit frontend mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default Qr;
