import Link from 'next/link'
import headerStyles from '../styles/Header.module.css'
import footerStyles from '../styles/Footer.module.css';
import Image from 'next/image'
import bannerPic from '../public/banner-curve.svg'

const Header = () => {
  return (
       <section className={headerStyles.hero}>
        <div className={headerStyles.curve}>
            <Image  src={bannerPic} alt="Banner" height={141} width={1440} />
        </div>
        <div className={`${headerStyles.grid} ${headerStyles.heroContainer} ${headerStyles.homeBannerImg}`}>
         <div className={headerStyles.sectionContent}>
          <div className={headerStyles.contentWrapper}>
            <div className={headerStyles.animatedText}>
              <p className={headerStyles.commonLabel}>Branding + Website + eCommerce</p>
            </div>      
            <h1>We build digital experiences <i> that highlight your brand.</i> </h1>
            <p className={headerStyles.subhead}>Pixacod is a team of creatives who <span>design identities</span>, custom-built <span>WordPress</span> and <span>WooCommerce</span> websites, apps and digital experiences for our clients and their customers. </p>
            <Link href="/contact">
            <a className={`${footerStyles.link} ${footerStyles.underline} ${footerStyles.animation} ${headerStyles.heroLink}`}>
             <span>Contact us</span>
             <aside>
               <aside>
                 <span><i><svg className={footerStyles.svgIcon} viewBox="0 0 15 12"><path d="M6.82 0h2.637L15 6l-5.543 6H6.82l2.576-2.78a126.93 126.93 0 012.287-2.428H0V5.191h11.683c-.55-.562-1.312-1.365-2.287-2.41L6.82 0z"></path></svg></i></span>
                 <span><i><svg className={footerStyles.svgIcon} viewBox="0 0 15 12"><path d="M6.82 0h2.637L15 6l-5.543 6H6.82l2.576-2.78a126.93 126.93 0 012.287-2.428H0V5.191h11.683c-.55-.562-1.312-1.365-2.287-2.41L6.82 0z"></path></svg></i></span>
               </aside>
           </aside>
           </a>
           </Link>
          </div> 
         </div>
        </div>
      </section>
  )
}

export default Header