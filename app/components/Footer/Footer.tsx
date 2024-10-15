import React from 'react';
import styles from './Footer.module.css';
const Footer: React.FC = () => {
  return (
    <>
  


  <div className={styles['clients-logo']}>
        <div className="container">
          <div className="row">
            <div className={`col-12 ${styles['flex-container']}`}>
              <div className={styles['logo-wrap']}>
                <img
                  src="https://preview.colorlib.com/theme/ezuca/images/logo-1.png.webp"
                  alt="Logo 1"
                />
              </div>
              <div className={styles['logo-wrap']}>
                <img
                  src="https://preview.colorlib.com/theme/ezuca/images/logo-2.png.webp"
                  alt="Logo 2"
                />
              </div>
              <div className={styles['logo-wrap']}>
                <img
                  src="https://preview.colorlib.com/theme/ezuca/images/logo-3.png.webp"
                  alt="Logo 3"
                />
              </div>
              <div className={styles['logo-wrap']}>
                <img
                  src="https://preview.colorlib.com/theme/ezuca/images/logo-4.png.webp"
                  alt="Logo 4"
                />
              </div>
              <div className={styles['logo-wrap']}>
                <img
                  src="https://preview.colorlib.com/theme/ezuca/images/logo-5.png.webp"
                  alt="Logo 5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


  <footer>
        <div className={styles['footer-bar']}>
          <div className="container">
            <div className="row flex-wrap">
              <div className="col-12 col-lg-6">
                <div className={styles['download-apps']}>
                  <a href="#">
                    <img
                      src="https://preview.colorlib.com/theme/ezuca/images/app-store.png.webp"
                      alt="App Store"
                    />
                  </a>
                  <a href="#">
                    <img className={styles.img}
                      src="https://preview.colorlib.com/theme/ezuca/images/play-store.png.webp"
                      alt="Play Store"
                    />
                  </a>
                  <div className={styles.para}> All Right Reserved @2024</div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mt-4">
                <div className={styles['footer-bar-nav']}>
                  <ul>
                    <li><a href="#">DPA</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
