import Footer from "./Footer"
import Navbar from "./Navbar"
import Meta from "./Meta"

import styles from "../styles/Layout.module.css"


const Layout = ({ children }) => {
  return (
    <>
    <Meta />
    <Navbar />
    <div className={styles.wrapper}>
        <main className={styles.content}>      
          {children}
          <Footer />
        </main>
    </div>
    </>
  );
}
 
export default Layout;