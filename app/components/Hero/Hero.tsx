



import React from 'react';
import styles from './Hero.module.css'; // Importing the module CSS

const Hero: React.FC = () => {
  return (
    <>
      <div className={styles.img}>
        <div className={styles.headerBarCart}>
          <a href="#" className={styles.cartLink}>
            <span aria-hidden="true" className="icon_bag_alt"></span>
          </a>
        </div>

        <div className={styles.heroContentOverlay}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.col12}>
                <div className={styles.heroContentWrap}>
                  <header className={styles.entryHeader}>
                    <h4 className={styles.heading4}>Get started with online courses</h4>
                    <h1 className={styles.h1}>
                      Best Online
                      <br />
                      Learning System
                    </h1>
                  </header>
                  <div className={styles.entryContent}>
                    <p className={styles.para}>
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                      laudantium.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.btn}>Read More</button>
        </div>
      </div>
    </>
  );
};

export default Hero;

