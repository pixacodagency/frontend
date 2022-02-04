import styles from "../styles/Contact.module.css";
import Meta from "../components/Meta";

const Contact = () => {
  return (
    <>
      <Meta title="Contact | Pixacod" />
      <section className={styles.HeroContact}>
        <div className={`${styles.container} ${styles.ContactContainer}`}>
          <article className={styles.large}></article>
        </div>
        <div className={styles.bannerBg}></div>
        <div className={styles.curve}></div>
      </section>
      <section className={styles.WaysToConnect}>
        <div className={styles.container}>
          <div className={styles.CompanyInfoWrapper}>
            <div className={styles.header}>
              <h1>
                <div>Let’s start a</div>
                <div>project together.</div>
              </h1>
              <article>
                <p>
                  We've found that we deliver the greatest value to our clients
                  when we establish ongoing relationships that allow us to
                  materially contribute to their long‑term success.
                </p>
              </article>
              <h2 className={styles.heading3}>Ways to connect</h2>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.CompanyInfo}>
        <div className={styles.container}>
          <div className={styles.CompanyInfoWrapper}>
            <div className={styles.header}>
              <h2 className={styles.heading3}>General info</h2>
            </div>
            <div className={styles.information}>
              <div className={styles.card}>
                <p>General</p>
                <ul className={styles.list}>
                  <li>PIXACOD</li>
                  <li>Hrvatskih branitelja 48</li>
                  <li>72250 Vitez, Bosnia and Herzegovina</li>
                </ul>
              </div>
              <div className={styles.card}>
                <p>Bank account</p>
                <ul className={styles.list}>
                  <li>NLB Banka d.d., Sarajevo</li>
                  <li>BA391320010815825590</li>
                </ul>
              </div>
              <div className={styles.card}>
                <p>VAT</p>
                <ul className={styles.list}>
                  <li>Vat ID: 4337659240008</li>
                </ul>
              </div>
              <div className={styles.card}>
                <p>Board</p>
                <ul className={styles.list}>
                  <li>Miroslav Petrović</li>
                  <li>Marko Alilović</li>
                </ul>
              </div>
              <div className={styles.card}>
                <p>Capital equity</p>
                <ul className={styles.list}>
                  <li>paid in full</li>
                </ul>
              </div>
              <div className={styles.card}>
                <p>Reg. court</p>
                <ul className={styles.list}>
                  <li>Registration: 14.5.2018.</li>
                  <li>at Commercial Court in Travnik</li>
                  <li>Registration number: 609483</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
