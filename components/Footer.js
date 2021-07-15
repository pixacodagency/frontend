import Link from 'next/link'
import footerStyles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <p className={footerStyles.heading4}>
          <span className={`${footerStyles.large} ${footerStyles.eyebrow}`}>we are pixacod agency.</span>
          <span className={footerStyles.large2}>we’re a digital agency specializing in building brands, eCommerce & custom development</span>
          <Link href="/about">
           <a className={`${footerStyles.link} ${footerStyles.underline} ${footerStyles.animation}`}>
            <span>Learn More</span>
            <aside>
              <aside>
                <span><i><svg className={footerStyles.svgIcon} viewBox="0 0 15 12"><path d="M6.82 0h2.637L15 6l-5.543 6H6.82l2.576-2.78a126.93 126.93 0 012.287-2.428H0V5.191h11.683c-.55-.562-1.312-1.365-2.287-2.41L6.82 0z"></path></svg></i></span>
                <span><i><svg className={footerStyles.svgIcon} viewBox="0 0 15 12"><path d="M6.82 0h2.637L15 6l-5.543 6H6.82l2.576-2.78a126.93 126.93 0 012.287-2.428H0V5.191h11.683c-.55-.562-1.312-1.365-2.287-2.41L6.82 0z"></path></svg></i></span>
              </aside>
          </aside>
          </a>
          </Link>
        </p>
        <div className={`${footerStyles.grid} ${footerStyles.information}`}>
          <div className={footerStyles.column}>
            <a href="mailto:hello@pixacod.agency">hello@pixacod.agency</a>
            <address>a collaborative design and development agency, based in the heart of Bosnia</address>
          </div>
          <ul className={`${footerStyles.menuFooter} ${footerStyles.footerList}`}>
            <li className={footerStyles.menuItem}>
              <Link href="/services"><a>Our Services</a></Link>
              <ul className={footerStyles.subMenu}>
                <li className={footerStyles.menuItem}>
                  <Link href="/services"><a>UX & Product Design</a></Link>
                </li>
                 <li className={footerStyles.menuItem}>
                  <Link href="/services"><a>Branding & Visual Identity</a></Link>
                </li>
                <li className={footerStyles.menuItem}>
                  <Link href="/services"><a>Web Design</a></Link>
                </li>
                <li className={footerStyles.menuItem}>
                  <Link href="/services"><a>WordPress Development</a></Link>
                </li>
              </ul>
            </li>
            <li className={footerStyles.menuItem}></li>
            <li className={footerStyles.menuItem}></li>
          </ul>
        </div>
        <div className={`${footerStyles.flexContainer} ${footerStyles.bottomInfo}`}>
         <p>© 2021 Pixacod Agency - All Rights Reserved. Photography by <a rel="noreferrer" target="_blank" href="https://www.instagram.com/photo.marko.id/">Marko Alilovic, Photographer</a>.</p>
         <Link href="/terms-of-services"><a>Terms of Service</a></Link>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;