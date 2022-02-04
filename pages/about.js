import styles from "../styles/About.module.css";
import Meta from "../components/Meta";
import Image from "next/image";

const about = () => {
  return (
    <div>
      <Meta title="About | Pixacod" />
      <section className={styles.HeroAbout}>
        <div className={`${styles.container} ${styles.aboutContainer}`}>
          <article className={styles.large}>
            <h1>
              welcome to <span>Pixacod Agency</span>
            </h1>
          </article>
        </div>
        <div className={styles.bannerBg}></div>
        <div className={styles.curve}></div>
      </section>
      <section className={styles.aboutWho}>
        <div className={styles.container}>
          <h2>
            <span className={`${styles.large} ${styles.eyebrow}`}>who</span>
            The team behind Pixacod.
          </h2>
          <div className={`${styles.flexContainer} ${styles.section1}`}>
            <div className={`${styles.flexContainer} ${styles.images}`}>
              <div className={styles.hideOnMobile}>
                <Image
                  src="https://res.cloudinary.com/pixacod-agency/image/upload/v1643890897/website/pixacod-agency3_vezees.jpg"
                  alt="Pixacod about"
                  width={1700}
                  height={1133}
                />
              </div>
              <div className={styles.hideOnDesktop}>
                <Image
                  src="https://res.cloudinary.com/pixacod-agency/image/upload/v1643892153/website/pixacod-agency4_fb2hyu.jpg"
                  alt="Pixacod about"
                  width={2000}
                  height={1333}
                />
              </div>
            </div>
            <article>
              <p className={styles.heading4}>
                Pixacod is a digital agency from Bosnia, established in 2018.
                Who are we? We are a team of digital experts who specializing in
                Branding, Digital Marketing, UX/UI Design, Custom Development, &
                eCommerce. <br></br>
                <br></br>
                So what do we do, you ask? We build affordable websites from the
                ground up. That’s us in a nutshell. Everything we create is
                custom designed and developed to suit your business needs and
                goals.<br></br>
                <br></br>
                Building WordPress websites is our bread and butter, but we also
                specialise in branding (think logo design and style guide
                development), content marketing (think blogs and e-newsletters),
                and all of those added extras like SEO, UX design, and hosting
                and website maintenance comes with the package if you want it
                to!
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className={styles.aboutWhat}>
        <div className={styles.container}></div>
      </section>
      <section className={styles.banner690}></section>
    </div>
  );
};
export default about;
