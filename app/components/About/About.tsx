import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <>
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.colLeft}>
              <header className={styles.heading}>
                <h2 className={styles.entryTitle}>About Ezuca</h2>
                <p className={styles.para}>
                  Excepteur sint occaecat cupidatat non proident, sunt <br /> in
                  culpa qui officia deserunt mollit anim id <br /> est laborum.
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium.
                </p>
              </header>
              <div className={styles.entryContent}>
                <div className={styles.statsWrap}>
                  <div className={styles.statsCount}>
                    50<span className={styles.span}>M+</span>
                    <p>STUDENTS LEARNING</p>
                  </div>
                  <div className={styles.statsCount}>
                    30<span className={styles.span}>K+</span>
                    <p>ACTIVE COURSES</p>
                  </div>
                  <div className={styles.statsCount}>
                    340<span className={styles.span}>M+</span>
                    <p>INSTRUCTORS ONLINE</p>
                  </div>
                  <div className={styles.statsCount}>
                    20<span className={styles.span}>+</span>
                    <p>Country Reached</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.colRight}>
              <div className={styles.ezucaVideo}>
                <div className={styles.videoPlayBtn}>
                  <img
                    src="https://preview.colorlib.com/theme/ezuca/images/video-icon.png.webp"
                    alt="Video Play"
                  />
                </div>
                <img
                  src="https://preview.colorlib.com/theme/ezuca/images/video-screenshot.png.webp"
                  alt="Video Screenshot"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.testimonialSection}>
        <div className={styles.swiperContainer}>
          <div className={styles.swiperWrapper}>
            <div className={styles.swiperSlide}>
              <div className={styles.container}>
                <div className={styles.row}>
                  <div className={styles.colLeft}>
                    <figure className={styles.userAvatar}>
                      <img
                        src="https://preview.colorlib.com/theme/ezuca/images/user-1.jpg.webp"
                        alt="User Avatar"
                      />
                    </figure>
                  </div>
                  <div className={styles.colRight}>
                    <div className={styles.entryContent}>
                      <p>
                        Together as teachers, students and universities we can
                        help make this education available for everyone.
                      </p>
                    </div>
                    <div className={styles.entryFooter}>
                      <h3 className={styles.testimonialUser}>
                        Russell Stephens - <span>University in UK</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.swiperSlide}>
              <div className={styles.container}>
                <div className={styles.row}>
                  <div className={styles.colLeft}>
                    <figure className={styles.userAvatar}>
                      <img
                        src="https://preview.colorlib.com/theme/ezuca/images/user-2.jpg.webp"
                        alt="User Avatar"
                      />
                    </figure>
                  </div>
                  <div className={styles.colRight}>
                    <div className={styles.entryContent}>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                    <div className={styles.entryFooter}>
                      <h3 className={styles.testimonialUser}>
                        Robert Stephens - <span>University in Oxford</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.swiperSlide}>
              <div className={styles.container}>
                <div className={styles.row}>
                  <div className={styles.colLeft}>
                    <figure className={styles.userAvatar}>
                      <img
                        src="https://preview.colorlib.com/theme/ezuca/images/user-3.jpg.webp"
                        alt="User Avatar"
                      />
                    </figure>
                  </div>
                  <div className={styles.colRight}>
                    <div className={styles.entryContent}>
                      <p>
                        Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour.
                      </p>
                    </div>
                    <div className={styles.entryFooter}>
                      <h3 className={styles.testimonialUser}>
                        James Stephens - <span>University in Cambridge</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.colLeft}>
                <div className={styles.swiperPagination}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;





