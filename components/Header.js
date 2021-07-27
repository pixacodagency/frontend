import headerStyles from '../styles/Header.module.css'
import Image from 'next/image'
import bannerPic from '../public/banner-curve.svg'

const Header = () => {
  return (
       <section className={headerStyles.hero}>
        <div className={headerStyles.curve}>
            <Image  src={bannerPic} alt="Banner" height={141} width={1440} />
        </div>
        <div className={`${headerStyles.grid} ${headerStyles.heroContainer}`}>
         <div className={headerStyles.sectionContent}>
          <div className={headerStyles.contentWrapper}>
            <div className={headerStyles.animatedText}>
              <p className={headerStyles.commonLabel}>Pixacod — A digital creative agency</p>
            </div>      
            <h1>Building digital products, brands, and experiences</h1>
            <p className={headerStyles.subhead}>We are a team of creatives who design identities, custom-built WordPress websites, apps and digital experiences for our clients and their customers. </p>
          </div> 
         </div>
        </div>
      </section>
  )
}

export default Header