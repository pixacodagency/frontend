import Link from 'next/link';
import Image from 'next/image';
import navStyles from '../styles/Nav.module.css';

const Navbar = () => {
  return (
    <header className={`${navStyles.menuDesktop} ${navStyles.header} ${navStyles.grid}`}>
      <Link href="/">
        <a className={navStyles.logo}>
           <span className={navStyles.accessibility}>Pixacod Agency</span>
           <Image src="https://res.cloudinary.com/pixacod-agency/image/upload/v1626707406/website/logo3_clmmvw.svg" alt="Image" width={164} height={33}/>
       </a>
      </Link>
      <nav className={`${navStyles.navbar} ${navStyles.linkEffect}`}>
        <div className={navStyles.navbarItem}>
           <Link href="/work">
             <a className={navStyles.navbarLinkItem}>
              <aside>
                <span data-hover="Work">Work</span>
              </aside>
             </a>
           </Link>
           <Link href="/about">
           <a className={navStyles.navbarLinkItem}>
            <aside>
              <span data-hover="About">About</span>
            </aside>
           </a>
         </Link>
         <Link href="/services">
          <a className={navStyles.navbarLinkItem}>
            <aside>
              <span data-hover="Service">Service</span>
            </aside>
          </a>
         </Link>
         <Link href="/contact">
         <a className={navStyles.navbarLinkItem}>
           <aside>
             <span data-hover="Contact">Contact</span>
           </aside>
         </a>
        </Link>
        </div>
      </nav>
      <div className={navStyles.hamburgerRow}>
        <button className={`${navStyles.toggleButton} ${navStyles.buttonStyle}`}>
          <span className={navStyles.hamburgerText}>Menu</span>
          <span className={navStyles.hamburgerButton}>
           <span></span>
           <span></span>
          </span>
        </button>
      </div> 
      <div className={navStyles.sidebar}>
        <div className={navStyles.sidebarWrapper}>
          <div className={`${navStyles.sidebarWrapperContainer} ${navStyles.navAnimated}`}>
            <nav className={`${navStyles.sidebarNav} ${navStyles.linkEffect}`}>
              <Link href="/work">
                <a className={navStyles.navbarLinkItem}>
                <aside>
                  <span data-hover="Work">Work</span>
                </aside>
                </a>
             </Link>
            </nav>
          </div>
        </div>
        <div className={navStyles.navBg}></div>
      </div>
    </header>
    );
}
 
export default Navbar;