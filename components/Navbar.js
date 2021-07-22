import Link from 'next/link';
import { useState } from 'react';
import React, { useRef } from "react";
import Image from 'next/image';
import navStyles from '../styles/Nav.module.css';
import useOutsideClick from "../helpers/useOutsideClick";

const Navbar = () => {

  const [showSidebar, setShowSidebar] = useState(false);

  const sidebarRef = useRef();

  useOutsideClick(sidebarRef, () => {
    alert('You clicked outside')
  });

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
          <span className={`${navStyles.hamburgerText} ${showSidebar ? navStyles.NotOpacity : navStyles.Opacity}`}>Menu</span>
            <span className={navStyles.hamburgerButton} onClick={()=> setShowSidebar(!showSidebar)}>
            <span className={ showSidebar ? navStyles.isOpen : navStyles.isClosed}></span>
            <span className={ showSidebar ? navStyles.isOpen : navStyles.isClosed}></span>
          </span>          
        </button> 
      </div>     
        <div className={showSidebar ? navStyles.sidebarVisable : navStyles.sidebar }>
          <div className={`${navStyles.sidebarWrapper} ${showSidebar ? navStyles.sidebarWrapperRwd : navStyles.sidebarWrapper}`}>
            <div className={`${navStyles.sidebarWrapperContainer} ${showSidebar ? navStyles.sidebarWrapperRwd : navStyles.navAnimated}`}>
              <nav className={`${navStyles.sidebarNav} ${navStyles.linkEffect}`}>
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
                <Link href="/service">
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
              </nav>
              <nav className={navStyles.moreLinks}>
                <Link href="https://gum.co/bbxFSd">
                  <a className={navStyles.navLink} target="_blank">Book a Consulting Session — Pixacod</a>
                </Link>
                <Link href="https://www.masterclass.com/">
                  <a className={navStyles.navLink} target="_blank">Design Masterclass 
                  <span className={navStyles.badge}>Get early access</span>
                  </a>
                </Link>
              </nav>
            </div>
          </div>
          <div className={showSidebar ? navStyles.navBg : null}></div>
        </div>
    </header>
    );
}
 
export default Navbar;