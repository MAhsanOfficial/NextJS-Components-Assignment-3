// import React from 'react';
// import "./Navbar.css"

// const Navbar = () => {
//   return (
//     <>
    

//     <div class="hero-content">
//   <header class="site-header">
//     <div class="top-header-bar">
//       <div class="container">
//         <div class="header-row">
//           <div class="header-left">
//             <div class="header-bar-email">
//               <i class="fa fa-envelope"></i>
//               <a href="idahsanali@gmail.com">idahsanali@gmail.com</a>
//             </div>
//             <div class="header-bar-phone">
//               <i class="fa fa-phone"></i>
//               <p>92-47-1777-414</p>
//             </div>
//           </div>
//           <div class="header-right">
//             <div class="header-bar-search">
//               <form>
//                 <input type="search" placeholder="What would you like to learn?" />
//                 <button type="submit">
//                   <i class="fa fa-search"></i>
//                 </button>
//               </form>
//             </div>
//             <div class="header-bar-menu">
//               <ul>
//                 <li><a href="#">Register</a></li>
//                 <li><a href="#">Login</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="nav-bar">
//       <div class="container">
//         <div class="nav-row">
//           <div class="site-branding">
//             <h1 class="site-title">
//               <a href="index.html" rel="home">Ezu<span>ca</span></a>
//             </h1>
//           </div>
//           <nav class="site-navigation">
//             <ul>
//               <li class="current-menu-item"><a href="index.html">Home</a></li>
//               <li><a href="#">About</a></li>
//               <li><a href="#">Courses</a></li>
//               <li><a href="#">Blog</a></li>
//               <li><a href="#">Contact</a></li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </div>
//   </header>
// </div>




//     </>
//   );
// }

// export default Navbar;
















import React from 'react';
import styles from './Header.module.css';

const Navbar: React.FC = () => {
  return (
    <>
      <div className={styles.heroContent}>
        <header className={styles.siteHeader}>
          <div className={styles.topHeaderBar}>
            <div className={styles.container}>
              <div className={styles.headerRow}>
                <div className={styles.headerLeft}>
                  <div className={styles.headerBarEmail}>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:idahsanali@gmail.com">idahsanali@gmail.com</a>
                  </div>
                  <div className={styles.headerBarPhone}>
                    <i className="fa fa-phone"></i>
                    <p>92-47-1777-414</p>
                  </div>
                </div>
                <div className={styles.headerRight}>
                  <div className={styles.headerBarSearch}>
                    <form>
                      <input
                        type="search"
                        placeholder="What would you like to learn?"
                        className={styles.searchInput}
                      />
                      <button type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                  <div className={styles.headerBarMenu}>
                    <ul>
                      <li><a href="#">Register</a></li>
                      <li><a href="#">Login</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.navBar}>
            <div className={styles.container}>
              <div className={styles.navRow}>
                <div className={styles.siteBranding}>
                  <h1 className={styles.siteTitle}>
                    <a href="index.html" rel="home">Ezu<span>ca</span></a>
                  </h1>
                </div>
                <nav className={styles.siteNavigation}>
                  <ul>
                    <li className={styles.currentMenuItem}>
                      <a href="index.html">Home</a>
                    </li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
