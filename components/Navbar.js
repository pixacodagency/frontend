import Link from 'next/link';
import { useRef, useState } from 'react';
import Image from 'next/image';
import navStyles from '../styles/Nav.module.css';
import useOutsideClick from "../helpers/useOutsideClick";


const Navbar = () => {

  const [showSidebar, setShowSidebar] = useState(false);

  const sidebarRef = useRef();

  useOutsideClick(sidebarRef, () => {
    if (showSidebar) {
      setShowSidebar(false);
    }
  });

  return (
    <div className={navStyles.menu}>
    <header className={`${navStyles.menuDesktop} ${navStyles.header} ${navStyles.grid} ${navStyles.myContainer}`}>
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
           <Link href="/services">
           <a className={navStyles.navbarLinkItem}>
             <aside>
               <span data-hover="Services">Services</span>
             </aside>
           </a>
          </Link>
           <Link href="/about">
           <a className={navStyles.navbarLinkItem}>
            <aside>
              <span data-hover="Agency">Agency</span>
            </aside>
           </a>
         </Link>
         <Link href="/posts">
          <a className={navStyles.navbarLinkItem}>
            <aside>
              <span data-hover="Articles">Articles</span>
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
          <span className={`${navStyles.hamburgerText} ${showSidebar ? navStyles.NotOpacity : navStyles.Opacity}`}>Menu</span>
            <span className={navStyles.hamburgerButton} onClick={()=> setShowSidebar(!showSidebar)}>
              <span className={ showSidebar ? navStyles.isOpen : navStyles.isClosed}></span>
              <span className={ showSidebar ? navStyles.isOpen : navStyles.isClosed}></span>
            </span>          
        </button> 
      </div>     
        <div  className={showSidebar ? navStyles.sidebarVisable : navStyles.sidebar }>
          <div ref={sidebarRef} className={`${navStyles.sidebarWrapper} ${showSidebar ? navStyles.sidebarWrapperRwd : navStyles.sidebarWrapper}`}>
            <div className={`${navStyles.sidebarWrapperContainer} ${showSidebar ? navStyles.sidebarWrapperRwd : navStyles.navAnimated}`}>
              <nav  className={`${navStyles.sidebarNav} ${navStyles.linkEffect}`}>
                <Link href="/work" >
                    <a onClick={()=> setShowSidebar(false)} className={navStyles.navbarLinkItem}>
                    <aside>
                      <span data-hover="Our Work">Our Work</span>
                    </aside>
                    </a>
                </Link>
                <Link href="/services">
                    <a onClick={()=> setShowSidebar(false)} className={navStyles.navbarLinkItem}>
                    <aside>
                      <span data-hover="Service">Service</span>
                    </aside>
                    </a>
                </Link>
                <Link href="/about">
                    <a onClick={()=> setShowSidebar(false)} className={navStyles.navbarLinkItem}>
                    <aside>
                      <span data-hover="Agency">Agency</span>
                    </aside>
                    </a>
                </Link>

                <Link href="/posts">
                    <a onClick={()=> setShowSidebar(false)} className={navStyles.navbarLinkItem}>
                    <aside>
                      <span data-hover="Blog">Blog</span>
                    </aside>
                    </a>
                </Link>
                <Link href="/contact">
                  <a onClick={()=> setShowSidebar(false)} className={navStyles.navbarLinkItem}>
                  <aside>
                    <span data-hover="Contact">Contact</span>
                  </aside>
                  </a>
               </Link>
              </nav>
              <nav className={navStyles.moreLinks}>
                <Link  href="/expertise">
                  <a onClick={()=> setShowSidebar(false)} className={navStyles.navLink}>Our expertise</a>
                </Link>
                <Link href="/talent">
                  <a onClick={()=> setShowSidebar(false)} className={navStyles.navLink}>
                  We're looking for talent 
                  <span className={navStyles.badge}>Senior UX/UI Designer</span>
                  </a>
                </Link>
              </nav>
              <nav className={navStyles.moreLinks}>
                <Link  href="/contact">
                  <a onClick={()=> setShowSidebar(false)} className={navStyles.navLink}>Headquarters</a>             
                </Link>
                <address>Hrvatskih branitelja 48 <br></br>72250 Vitez, Bosnia and Hercegovina</address>
                <a className={navStyles.telephone} href="tel:+387-(0)-63-091-535">tel:+387-063-091-535</a>
              </nav>
              <ul className={navStyles.socialNav}>
                 <li>
                  <Link href="https://www.instagram.com/pixacod/">
                    <a className={navStyles.navLink}>Instagram</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/pixacod/">
                    <a className={navStyles.navLink}>Facebook</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/pixacod/">
                    <a className={navStyles.navLink}>Dribbble</a>
                  </Link>
                </li>
              </ul>
              
            </div>
          </div>
          <div className={showSidebar ? navStyles.navBg : null}></div>
        </div>
    </header>
    </div>
    );
}
 
export default Navbar;