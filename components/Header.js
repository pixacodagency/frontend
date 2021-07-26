import headerStyles from '../styles/Header.module.css'
import Image from 'next/image'
import bannerPic from '../public/banner-curve.svg'

const Header = () => {
  return (
       <section className={headerStyles.hero}>
        <div className={headerStyles.curve}>
            <Image  src={bannerPic} alt="Banner" height={141} width={1440} />
        </div>
        <div className={headerStyles.container}>
          <h1>We help move your business forward with design, technology & creativity.</h1>
          <p className={headerStyles.subhead}>We are a team of creatives who design identities, custom-built WordPress websites, apps and digital experiences for our clients and their customers. </p>
        </div>
      </section>
  )
}

export default Header