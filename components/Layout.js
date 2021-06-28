import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="container">
        <main className="main">
          <Navbar />
          {children}
          <Footer />
        </main>
    </div>
  );
}
 
export default Layout;