import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
		<Head>
		{/*Primary Meta Tags*/}
		 <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"></meta>
		 <meta name='keywords' content={keywords} />
		 <meta name='description' content={description} />
		 <title>{title}</title>
		 <link rel='icon' href='/favicon.ico' />
		 {/*Google / Search Engine Tags*/}
		 <meta itemProp="name" content="Pixacod | Digital creative agency"></meta>
		 <meta itemProp="description" content="Pixacod is a creative agency specializing in Branding, Digital Marketing, UX/UI Design, Custom Development, & eCommerce."></meta>
		 <meta itemProp="image" content="https://res.cloudinary.com/pixacod-agency/image/upload/v1625495570/website/meta-image_ic13p4.jpg"></meta>
		{/*Open Graph / Facebook*/}
		<meta property="og:url" content="https://pixacod.agency/"></meta>
		<meta property="og:type" content="website"></meta>  
		<meta property="og:title" content="Pixacod | Digital creative agency"></meta>
		<meta property="og:description" content="Pixacod is a creative agency specializing in Branding, Digital Marketing, UX/UI Design, Custom Development, & eCommerce."></meta>
		<meta property="og:image" content="https://res.cloudinary.com/pixacod-agency/image/upload/v1625495570/website/meta-image_ic13p4.jpg"></meta>
		{/*Twitter Meta Tags*/}
		<meta name="twitter:card" content="summary_large_image"></meta>
		<meta name="twitter:title" content="Pixacod | Digital creative agency"></meta>
		<meta name="twitter:description" content="Pixacod is a creative agency specializing in Branding, Digital Marketing, UX/UI Design, Custom Development, & eCommerce."></meta>
		<meta name="twitter:image" content="https://res.cloudinary.com/pixacod-agency/image/upload/v1625495570/website/meta-image_ic13p4.jpg"></meta>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Pixacod | Digital creative agency',
  keywords: 'User Experience Design, UX Design, UX Design Agency, Product Design UX, Mobile UX, App UX',
  description: 'Pixacod is a creative agency specializing in Branding, Digital Marketing, UX/UI Design, Custom Development, & eCommerce.',
}
 
export default Meta;